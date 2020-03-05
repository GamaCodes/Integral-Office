import React, { useEffect, useContext } from 'react'
import {
  Flex,
  FormControl,
  InputGroup,
  Input,
  useToast,
  Button,
  Select
} from '@chakra-ui/core'
import { MyContext } from '../../../context'
import Form from '../../../components/Form'
export default function Supplies({ history }) {
  const context = useContext(MyContext)
  useEffect(() => {
    if (!context.state.isLogged) return history.push('/login')
  })
  const toast = useToast()
  const go = path => history.push(path);

  const submit = e => {
    context
      .handleSupplieSubmit(e)
      .then(response => {
        toast({
          title: 'Insumo Creado.',
          description: "Tu insumo ha sido creada satisfactoriamente",
          status: 'success',
          duration: 9000,
          isClosable: true
        })
        history.push('/services/inventory')
      })
      .catch(err => {
        toast({
          title: 'Algo salio muy mal',
          description: 'No se pudo crear tu insumo verifica e intenta nuevamente',
          status: 'error',
          duration: 9000,
          isClosable: true
        })
      })
  }
  return (
    <MyContext.Consumer>
      {context => {
        return (
          <Flex
            backgroundColor="c1.100"
            w="100vw"

            align="center"
            justify="center"
          >
            <Form submit={submit} bgColor="white" title="Agregar Insumo">
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    placeholder="Codigo de Materia prima"
                    name="codigo"
                    type="text"
                    value={context.state.formSupplie.codigo}
                    onChange={context.handleSupplieInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <Select 
                  onChange={context.handleSupplieInput}
                  placeholder="Selecciona el tipo de insumo"
                  name="tipo">
                  <option value="Cable">Cable</option>
                  <option value="Terminal">Terminal</option>
                  <option value="Conector">Conector</option>
                  <option value="Clavija">Clavija</option>
                  <option value="Tomacorriente">Tomacorriente</option>
                  <option value="Cinta">Cinta</option>
                  <option value=""></option>
                  <option value="Etiqueta">Etiqueta</option>
                  <option value="Plastico">Plastico</option>
                  <option value="Protector">Protector</option>
                  <option value="Cintillo">Cintillo</option>
                  <option value="Bolsa">Bolsa</option>
                  <option value="Sensor">Sensor</option>
                  <option value="Funda">Funda</option>
                  <option value="Arrancador">Arrancador</option>
                  <option value="Fusible">Fusible</option>
                  <option value="Sello">Sello</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    placeholder="Descripcion"
                    name="descripcion"
                    type="text"
                    value={context.state.formSupplie.descripcion}
                    onChange={context.handleSupplieInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    placeholder="Proveedor"
                    name="proveedor"
                    type="text"
                    value={context.state.formSupplie.proveedor}
                    onChange={context.handleSupplieInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <Input
                    placeholder="Codigo de Proveedor"
                    name="codProv"
                    type="text"
                    value={context.state.formSupplie.codProv}
                    onChange={context.handleSupplieInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <Select 
                  onChange={context.handleSupplieInput}
                  placeholder="Unidad de Medida"
                  name="unidadMed">
                  <option value="Gramos">Gramos</option>
                  <option value="Kilos">Kilos</option>
                  <option value="Litros">Litros</option>
                  <option value="Metros">Metros</option>
                  <option value="Pieza">Pieza</option>
                  <option value="Piezas">Piezas</option>
                  <option value="Otro">Otro</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    placeholder="Precio Unitario"
                    name="precioUnit"
                    type="number"
                    value={context.state.formSupplie.precioUnit}
                    onChange={context.handleSupplieInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <Select 
                  onChange={context.handleSupplieInput}
                  placeholder="Actividad comercial"
                  name="actComer">
                  <option value="Nacional">Nacional</option>
                  <option value="Importado">Importado</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <Select 
                  onChange={context.handleSupplieInput}
                  placeholder="Tipo de moneda"
                  name="moneda">
                  <option value="MXN">MXN</option>
                  <option value="DLLS">DLLS</option>
                </Select>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <Input
                    placeholder="Gastos de importacion"
                    name="gastosImp"
                    type="text"
                    value={context.state.formSupplie.gastosImp}
                    onChange={context.handleSupplieInput}
                  />
                </InputGroup>

                <Select 
                  onChange={context.handleSupplieInput}
                  placeholder="Gastos de importacion"
                  name="gastosImp">
                  <option value="SI">Si</option>
                  <option value="NO">No</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    placeholder="Cantidad en Almacen"
                    name="cantAlmacen"
                    type="text"
                    value={context.state.formSupplie.cantAlmacen}
                    onChange={context.handleSupplieInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    placeholder="Piezas por empaque"
                    name="modEmpaque"
                    type="text"
                    value={context.state.formSupplie.modEmpaque}
                    onChange={context.handleSupplieInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <Input
                    placeholder="codigo de materia prima (proveedor)"
                    name="codMppProv"
                    type="text"
                    value={context.state.formSupplie.codMppProv}
                    onChange={context.handleSupplieInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    placeholder="Cantidad minima en stock"
                    name="cantMinima"
                    type="text"
                    value={context.state.formSupplie.cantMinima}
                    onChange={context.handleSupplieInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <Input
                    placeholder="Tiempo de entrega de materia prima"
                    name="tiempoEntrega"
                    type="text"
                    value={context.state.formSupplie.tiempoEntrega}
                    onChange={context.handleSupplieInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <Input
                    placeholder="Periodo a ordenar"
                    name="periodoOrdenar"
                    type="text"
                    value={context.state.formSupplie.periodoOrdenar}
                    onChange={context.handleSupplieInput}
                  />
                </InputGroup>
              </FormControl>
              <Button
              backgroundColor="c2.100"
              color="white"
              type="submit"
              w={["30vw", '20vw', '10vw']}
              justify="center"
              onClick={() => go("/services/inventory")}
            >
              Salir
            </Button>
            </Form>
          </Flex>
        )
      }}
      
    </MyContext.Consumer>
  )
}
