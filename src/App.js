import React,{ createContext, useEffect, useRef, useState }  from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Component from './components/Component';
import axios from 'axios'


export const store = createContext()

const App = () => {
  const [formdata,setFormdata] = useState([])
  const [userdata,setUserdata]=useState([])

  const [edit,setEdit]=useState({
    salesdesc:"",
    undergroup:"",
    packunit:"",
    stockpack:"",
    discone:"",
    id:""
  })

  const getData = async()=>{
    try{
      const mydata = await axios.all([
                      axios.get('http://localhost:8080/fields'),
                      axios.get('http://localhost:8080/users')
                    ])
                    setFormdata(mydata[0].data)
                    setUserdata(mydata[1].data)
      
    }catch(err){
        console.log(err.mesage)
    } 
  }

  // console.log(formdata,"app")
  // console.log(userdata,"app-1")

  // const userData = async()=>{
  //   try{
  //     const myUsers = await axios.get('http://localhost:8080/users')
  //     setUserdata(myUsers)

  //   }catch(err){
  //     console.log(err.mesage)
  //   }
  // }
  

  const shouldlog = useRef(true)
  useEffect(()=>{
    if(shouldlog.current){
      shouldlog.current = false
      getData()
      console.log("hello")
    }
      return(()=>getData())
  },[])

  const clickEdite =(Id)=>{
    console.log(Id)
    const EditedData = userdata.filter((e,i)=>(
        e.id===Id
    ))

    console.log(EditedData,"Edit")
    setEdit({
      salesdesc:EditedData[0].salesdesc,
      undergroup:EditedData[0].undergroup,
      packunit:EditedData[0].packunit,
      stockpack:EditedData[0].stockpack,
      discone:EditedData[0].discone,
      id:EditedData[0].id
    })

  }

  // console.log(edit,'EEEEEEE')

  const data ={
    formdata,
    userdata,
    getData,
    clickEdite,
    edit
  }


  return (
    <store.Provider value={data}>
      <div className='container-fluid d-flex flex-column min-vh-100 '>
        <div className='row bg-secondary p-2'><Header/></div>
        <div className='row '><Component/></div>
        <div className='row mt-auto bg-info'><Footer/></div>
      </div>
    </store.Provider>
    
  )
}

export default App