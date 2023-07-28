import React, { useContext, useState } from 'react';
import Header from './IssueHader/Header';
import Footer from './IssueFooter/Footer';
import Main from './Main/Main';
import * as Yup from 'yup';
import { Formik,Form} from 'formik';
import axios from 'axios';

// import { store } from '../App';
// export const store = createContext()



const Component = () => {

  // const {handleSubmit}=useContext(store)


  let initialValues ={
    Branch:'',
    FormBranch:'',
    Category:'',
    Warehouse:'',
    FormWarehouse:'',
    Date:'',
    RequestNo:'',
    Remarks:'',
    Instruction:"",
    File: null,
  }
  
  const validationSchema = Yup.object({
    Branch:Yup.string().required('Branch is required'),
    FormBranch:Yup.string().required('Form Branch is required'),
    Category:Yup.string().required("Category is required"),
    Warehouse:Yup.string().required('Ware house is required'),
    FormWarehouse:Yup.string().required('Form Ware house is required'),
    Date:Yup.string().required('Date is required'),
    RequestNo:Yup.string().required('Request No is required'),
    Remarks:Yup.string().required("Remarks is required"),
    Instruction:Yup.string().required("Instruction is required"),
    File:Yup.string().required("file attached is required"),
  })

  const [data,setData]=useState()

  const handleSubmit = async(values,onSubmitProps)=>{
      
      console.log(values,'new Vaiues')
      setData(values)

      alert("data is submited succesfull")
      await axios.post('http://localhost:8080/getdata',data)
      onSubmitProps.resetForm()
  }
  console.log(data,'Data')

  


  return (
    <div className='container-fluid d-flex flex-column min-vh-100'>
     
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                  {({ isSubmitting, setFieldValue }) => (
                    <Form>
                          <div className='row '>
                                    <Header/>
                          </div>
                          <div className='row'>
                                  <Main setFieldValue={setFieldValue}/>
                          </div>
                          <div className='row mt-auto'>
                                  <Footer/>
                          </div> 
                    </Form>
                  )}
          </Formik>
     
    </div>
  )
}

export default Component