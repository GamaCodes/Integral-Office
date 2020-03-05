import React, { createContext, Component } from 'react'
import { withRouter } from 'react-router-dom'
import INTEGRAL_SERVICE from './services/index'
// import axios from 'axios'
export const MyContext = createContext()

class MyProvider extends Component {
  state = {
    create: false,
    update: false,
    formSignup: {
      name: '',
      email: '',
      address: '',
      phone: '', 
      purpose: '',  
      password: ''
    },
    formUpdate: {
      name: '',
      email: '',
      adress: '',
      phone: '', 
      purpose: '',  
      password: ''
    },
    formLogin: {
      email: '',
      password: ''
    },
    formSat: {
      user: '',
      password: ''
    },
    formSupplie:{
      codigo: '',
      tipo: '',
      descripcion: '',
      proveedor:'',
      codProv: '',
      unidadMed: '',
      precioUnit: '',
      actComer: '',
      moneda: '',
      gastosImp: '',
      cantAlmacen: '',
      modEmpaque: '',
      codMppProv: '', 
      cantMinima: '', 
      tiempoEntrega: '',
      periodoOrdenar: ''
    },
    formUpdateSupplie:{
      codigo: '',
      tipo: '',
      descripcion: '',
      proveedor:'',
      codProv: '',
      unidadMed: '',
      precioUnit: '',
      actComer: '',
      moneda: '',
      gastosImp: '',
      cantAlmacen: '',
      modEmpaque: '',
      codMppProv: '', 
      cantMinima: '', 
      tiempoEntrega: '',
      periodoOrdenar: ''
    },
    formProduct:{
      name:'',
      supplies:[],
      descripcion:'',
      price:'',
      blueprint:''
    },
    formUpdateProduct:{
      name:'',
      supplies:[],
      descripcion:'',
      price:'',
      blueprint:''
    },
    allSupplies: null,
    feed: false,
    allProducts: null,
    supplies:[],
    loggedUser: null,
    isLogged: false
  }

  handleLogout = async () => {
    await INTEGRAL_SERVICE.LOGOUT()
    this.props.history.push('/')
    this.setState({ loggedUser: null, isLogged: false })
  }
  
  //Handle Input
  handleSignupInput = e => {
    const { formSignup } = this.state
    const { name, value } = e.target
    formSignup[name] = value
    this.setState({ formSignup })
  }

  handleLoginInput = e => {
    const { formLogin } = this.state
    const { name, value } = e.target
    formLogin[name] = value
    this.setState({ formLogin })
  }

  handleUpdateUser = e=> {
    const {name, value} = e.target
      this.setState(prev => ({
        ...prev,
        loggedUser: {
            ...prev.loggedUser,
            [name]:value
        }
      }))
  }

  handleSatInput = e => {
    const { formSat } = this.state
    const { name, value } = e.target
    formSat[name] = value
    this.setState({ formSat })
  }
  

  //Handle Submit
  handleSignupSubmit = async e => {
    e.preventDefault()
    const form = this.state.formSignup
    this.setState({ formSignup: { name: '', email: '', adress: '', phone: '', purpose:'', password: '' } })
    return await INTEGRAL_SERVICE.SIGNUP(form)
  }

  handleLoginSubmit = e => {
    e.preventDefault()
    const form = this.state.formLogin
    return INTEGRAL_SERVICE.LOGIN(form)
      .then(({ user }) => {
        this.setState({
          loggedUser: user,
          isLogged: true
        })
        return { user, msg: 'logged' }
      })
      .catch(err => {
        this.setState({
          loggedUser: null,
          isLogged: false,
          formLogin: { email: '', password: '' }
        })
        return { user: null, msg: ' Usuario o contraseña incorrecta.' }
      })
      .finally(() => this.setState({ formLogin: { email: '', password: '' } }))
  }

  handleUpdateUserSubmit = async ()=> {
    console.log(this.state.loggedUser)
    await INTEGRAL_SERVICE.UPDATE(this.state.loggedUser)
    alert('Usuario Editado')
  }
  
  handleUploadPhoto = e => {
      const formPhoto = new FormData()
      formPhoto.append('imgURL', e.target.files[0])
      INTEGRAL_SERVICE.UPLOADPHOTO(formPhoto)
      .then(({ data}) => {
        this.setState({ loggedUser: data.user})
      })
      .catch(err => {
        console.log('entro en el catch')
        return err
      })
    }

    handleSatSubmit = e => {
      e.preventDefault()
      const form = this.state.formSat
      return INTEGRAL_SERVICE.LOGIN(form)
        .then(({ user }) => {
          this.setState({
            loggedUser: user,
            isLogged: true
          })
          return { user, msg: 'logged' }
        })
        .catch(err => {
          this.setState({
            loggedUser: null,
            isLogged: false,
            formLogin: { email: '', password: '' }
          })
          return { user: null, msg: ' Usuario o contraseña incorrecta.' }
        })
        .finally(() => this.setState({ formLogin: { email: '', password: '' } }))
    }

    //Supplie Input
    handleSupplieInput = e => {
      const { formSupplie } = this.state
      const { name, value } = e.target
      formSupplie[name] = value
      this.setState({ formSupplie })
    }

    handleUpdateSupplieInput = e => {
      const { formUpdateSupplie } = this.state
      const { name, value } = e.target
      formUpdateSupplie[name] = value
      this.setState({ formUpdateSupplie })
    }

    //Supplie Submit
    handleSupplieSubmit=async e =>{
      e.preventDefault()
      const form=this.state.formSupplie
      this.setState({
        formSupplie:{
          codigo: '',
          tipo: '',
          descripcion: '',
          proveedor: '',
          codProv: '',
          unidadMed: '',
          precioUnit: '',
          actComer: '',
          moneda: '',
          gastosImp: '',
          cantAlmacen: '',
          modEmpaque: '',
          codMppProv: '', 
          cantMinima: '', 
          tiempoEntrega: '',
          periodoOrdenar: ''
        },
        nuevo:false
      })
      return await INTEGRAL_SERVICE.CREATESUPPLIE(form)
        .then(async (data)=>{
          const {supplies}=await INTEGRAL_SERVICE.FEEDSUPPLIES()
          this.setState({allSupplies: supplies})
          console.log(this.state.allSupplies)
          return {
            supplie: data.supplie,
            msg: "Se ha creado el Insumo."
          }
        })
        .catch(({
          err
        }) => {
          return {
            supplie: null,
            msg: "No se pudo crear el Insumo."
          }
        })
      }
    
    handleUpdateSupplieSubmit = async (e, id) => {
      e.preventDefault()
      await INTEGRAL_SERVICE.UPDATESUPPLIE(id,this.state.formSupplie)
      const data = await INTEGRAL_SERVICE.FEEDSUPPLIES()
      const form= {
          codigo: '',
          tipo: '',
          descripcion: '',
          proveedor:'',
          codProv: '',
          unidadMed: '',
          precioUnit: '',
          actComer: '',
          moneda: '',
          gastosImp: '',
          cantAlmacen: '',
          modEmpaque: '',
          codMppProv: '', 
          cantMinima: '', 
          tiempoEntrega: '',
          periodoOrdenar: ''
      }
      this.setState({
        formSupplie:form,
        edita: false,
        allSupplies: data.supplies
      })
    }

    handleDeleteSupplieSubmit = async (e, id) => {
      await INTEGRAL_SERVICE.DELETESUPPLIE(id)
      const data = await INTEGRAL_SERVICE.FEEDSUPPLIES()
      this.setState({
        allSupplies: data.supplies
      })
    }
  

     //Product Input
     handleProductInput = e => {
      const { formProduct } = this.state
      const { name, value } = e.target
      formProduct[name] = value
      this.setState({ formProduct })
    }

    handleUpdateProductInput = e => {
      const { formUpdateProduct } = this.state
      const { name, value } = e.target
      formUpdateProduct[name] = value
      this.setState({ formUpdateProduct })
    }

    //Products Submit
    handleProductSubmit = async e=>{
      e.preventDefault()
      const form=this.state.formProduct
      this.setState({
        formProduct: {
          name:'',
          supplies:[],
          descripcion:'',
          price:'',
          blueprint:''
        },
        nuevo:false
      })
      return await INTEGRAL_SERVICE.CREATEPRODUCTS(form)
        .then(async (
          data
        ) => {
          const {
            products
          } = await INTEGRAL_SERVICE.FEEDPRODUCTS()
          this.setState({
            allProducts: products
          })
          const product=data.product.data.product
          return {
            product: product,
            msg: "Se ha creado el Producto."
          }
        })
        .catch(({
          err
        }) => {
          return {
            product: null,
            msg: "No se pudo crear el Producto."
          }
        })
    }

    handleUpdateProductSubmit = async (e, id) => {
      e.preventDefault()
      await INTEGRAL_SERVICE.UPDATEPRODUCT(id,this.state.formProduct)
      const data = await INTEGRAL_SERVICE.FEEDPRODUCTS()
      const form= {
        name:'',
        supplies:[],
        descripcion:'',
        price:'',
        blueprint:''
      }
      this.setState({
        formProduct:form,
        edita: false,
        allProducts: data.products
      })
    }

    handleDeleteProductSubmit = async (e, id) => {
      await INTEGRAL_SERVICE.DELETEPRODUCT(id)
      const data = await INTEGRAL_SERVICE.FEEDPRODUCTS()
      this.setState({
        allProducts: data.products
      })
    }

    getSupplies = async () => {
      let {supplies} = await INTEGRAL_SERVICE.GETALLSUPPLIES()
      this.setState(prevstate => ({
        ...prevstate,
        supplies: supplies
      }))
    }
    
    componentDidMount = async () => {
      let { supplies } = await INTEGRAL_SERVICE.GETALLSUPPLIES()
      this.setState(prevstate => ({
        ...prevstate,
        supplies: supplies
      }))
    }
      
  render() {
    const {
      state,
      handleSignupInput,
      handleSignupSubmit,
      handleLoginInput,
      handleLoginSubmit,
      handleLogout,
      handleUpdateUser,
      handleUpdateUserSubmit,
      handleUploadPhoto,
      handleSupplieInput,
      handleSupplieSubmit,
      handleUpdateSupplieInput,
      handleUpdateSupplieSubmit,
      handleDeleteSupplieSubmit,
      handleProductInput,
      handleProductSubmit,
      handleUpdateProductInput,
      handleUpdateProductSubmit,
      handleDeleteProductSubmit,
      getSupplies
    } = this
    return (
      <MyContext.Provider
        value={{
          state,
          handleSignupInput,
          handleSignupSubmit,
          handleLoginInput,
          handleLoginSubmit,
          handleLogout,
          handleUpdateUser,
          handleUpdateUserSubmit,
          handleUploadPhoto,
          handleSupplieInput,
          handleSupplieSubmit,
          handleUpdateSupplieInput,
          handleUpdateSupplieSubmit,
          handleDeleteSupplieSubmit,
          handleProductInput,
          handleProductSubmit,
          handleUpdateProductInput,
          handleUpdateProductSubmit,
          handleDeleteProductSubmit,
          getSupplies
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
export default withRouter(MyProvider)