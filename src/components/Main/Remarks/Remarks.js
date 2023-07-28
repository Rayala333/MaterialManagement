import React, { useState } from 'react';
import './Remarks.css';
import { Field,ErrorMessage } from 'formik';

const Remarks = ({setFieldValue}) => {
    // const [newfile,setNewfile]=useState('')

    // console.log(newfile)

    const changefile= (event)=>{
    //   console.log(event.currentTarget.files[0])
    // setNewfile(event.currentTarget.files[0])
    
    setFieldValue('File', event.currentTarget.files[0].name)

    // console.log(event.currentTarget.files[0])

// setFieldValue({"File": {

//     lastModifiedDate : event.target.files[0].lastModifiedDate,

//     name : event.target.files[0].name,

//     type : event.target.files[0].type,

//     webkitRelativePath : event.target.files[0].webkitRelativePath

// }

// })


    // setFieldValue({...File,newfile:{
    //     lastModified: event.target.files[0].lastModified,
    //     name : event.target.files[0].name,
    //     type : event.target.files[0].type,
    //     webkitRelativePath: event.target.files[0].webkitRelativePath

    // }})

    }
  return (
    <div className='container-fluid bellow'>
        <div className='row'>
            <div className='col-6 Remarks'>
                <span>Remarks</span>
                {/* <input type="text" className="form-control "  /> */}
                <div className='Remarkblock'>
                    <Field type='text' className="form-control " name='Remarks' placeholder='write hear form any remarks...'  / > 
                    <div >
                        <ErrorMessage name="Remarks" component="div" className="text-danger " />
                    </div>       
                </div>
            </div>
   
            <div className='col-6 instruction'>
                <span>Instruction</span>
                {/* <input type="text" className="form-control "  /> */}
                <div className='Remarkblock'>
                    <Field type='text' className="form-control " name='Instruction' placeholder='write hear feedback instructions...'  / >
                    <div >
                        <ErrorMessage name="Instruction" component="div" className="text-danger " />
                    </div>
                </div>
            </div>

        </div>
        <div className='row attchement'>
            <p>Attachement</p>
            <div className='combanebox col-7'>
                <div className='filebox col-4'>
                    <p>Attachement</p>
                    {/* <label className='custom-file' htmlFor='file-input' id='file'>Select file</label> */}
                    {/* <input type='file' id='file-input' style={{display:'none'}} /> */}
                    <label htmlFor="file">Select File</label>
                    <input
                        type="file"
                        id="file"
                        name="File"
                        // onChange={(event) => {
                        //     setFieldValue('File', event.currentTarget.files[0]); 
                        // }}
                        onChange={changefile}
                        />
                    <div >
                        <ErrorMessage name="File" component="div" className="text-danger " />
                    </div>
                </div>
                <div className='filedata col-12 ' >
                    <table>
                        <tr  style={{background:'navy'}}>
                            <th style={{width:'50px'}} className='th'>&nbsp;</th>
                            <th style={{width:'50px'}} className='th'>&nbsp;</th>
                            <th style={{color:'#fff',width:'385px'}} className='th' >FileName</th>
                        </tr>
                        <tr className='text-center'>
                            <td >Nodata</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Remarks