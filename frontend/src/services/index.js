import axios from 'axios';
let baseURL;
process.env.NODE_ENV === 'production'
  ? (baseURL = 'https://integral-office.herokuapp.com')
  : (baseURL = 'http://localhost:3000');

//REVISAR MENSAJE

const service = axios.create({ withCredentials: true, baseURL });

const INTEGRAL_SERVICE = {
  SIGNUP: async form => {
    const { data } = await service.post('/signup', form)
    return data
  },
  LOGIN: async form => {
    const { data } = await service.post('/login', form)
    return data
  },
  LOGOUT: async () => {
    const { data } = await service.get('/logout')
    return data
  },
  UPDATE: async form => {
    const { data } = await service.post('/update', form)
    return data
  },
  UPLOADPHOTO: async photo => {
    return await service.post('/upload', photo)
  },
  FEEDALL: async()=>{
    const supplies = await service.get('/supplie')
    const products = await service.get('/product')
    return {products:products.data.products, supplies:supplies.data.supplies}
  },
  FEEDSUPPLIE: async()=>{
    const supplies = await service.get('/supplie')
    return {supplies:supplies.data.supplies}
  },
  FEEDPRODUCTS: async()=>{
    const products = await service.get('/product')
    return {products:products.data.products}
  },
  CREATEPRODUCTS: async (form)=>{
    const product = await service.post('/product/create',form)
    return{product}
  },
  UPDATEPRODUCT: async (id,form) => {
    const product = await service.patch(`/product/edit/${id}`,form)
    return {product}
  },
  DELETEPRODUCT: async (id)=>{
    const msg = await service.delete(`/product/delete/${id}`)
    return {msg}
  },
  CREATESUPPLIE: async (form)=>{
    const supplie = await service.post('/supplie/create',form)
    return{supplie:supplie.data.supplie}
  },
  UPDATESUPPLIE: async (id,form) => {
    const supplie = await service.patch(`/supplie/edit/${id}`,form)
    return {supplie}
  },
  DELETESUPPLIE: async (id)=>{
    const msg = await service.delete(`/supplie/delete/${id}`)
    return {msg}
  },
  GETALLSUPPLIES: async () => {
    const {data} = await service.get('/supplie')
    return data
  }
}
export default INTEGRAL_SERVICE
