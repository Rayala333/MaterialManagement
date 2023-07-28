import React, { createContext,useContext,useState } from 'react';

const myContext = createContext()

export function useMycontext(){
    return useContext(myContext)
}

const Context = (props) => {
    const [formdata,setFormdata] = useState([])
  return (
    <myContext.Provider value={[formdata,setFormdata]}>
        {props.children}
    </myContext.Provider>
  )
}

export default Context