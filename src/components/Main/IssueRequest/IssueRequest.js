import React, { useState,useContext } from 'react';
import './IssueRequest.css'
import { Field,ErrorMessage } from 'formik';

import { store } from '../../../App';


const IssueRequest = () => {

    const {formdata}=useContext(store)

        // console.log(formdata.map((e)=>e.Branch))    
    const[state,setState]=useState({
        Branch:false,
        FromBranch:false
    })

    const myclick = (name)=>{
        // if(name==="Branch"){
        // setState({
        //     Branch:true,  
        // })
        // }
        if(name==='FromBranch'){
            setState({
                FromBranch:true
            })
        }
    }
 
  return (
    <div class="container IssueRequest" >
            
        <div class="row g-3">
            <div class="col allfields">
                <div className='field'>
                {/* <label>Branch <i className={`bi bi-star-fill  ${<ErrorMessage/>? 'labelstar ' : 'labelstarsuccess'}`}></i></label> */}
                    <label >Branch<i className="bi bi-star-fill labelstar "></i></label>
                    {/* <Field type='text' className="form-control " name='Branch' placeholder='Select...'  / >   */}
                    <Field as='select' name="Branch" className="form-control " onClick={()=>myclick("Branch")}>
                        <option value=''>--Select Branch--</option>
                        {
                            formdata.map((e,i)=>(
                                <option value={e.Branch} key={e.id}>{e.Branch}</option>
                            ))
                        }
                    </Field>
                    <i className={`bi bi-caret-right-fill ${state.Branch===true? 'arrowrotate':'arrow'}`} ></i>
                    <i className="bi bi-pencil   text-white icone"></i>   
                </div>
                <div>
                        <ErrorMessage name="Branch" component="div" className="text-danger Error" />
                </div>
                <div className='field'>
                    <label >Form Branch<i class="bi bi-star-fill labelstar"></i></label>
                    {/* <Field type="text" className="form-control" name='FormBranch' placeholder='Select...'  ></Field> */}
                    <Field as='select' name="FormBranch" className="form-control " onClick={()=>myclick("FormBranch")}>
                        <option value=''>--From Branch--</option>
                        {
                            formdata.map((e,i)=>(
                                <option value={e.Frombranch} key={e.id}>{e.Frombranch}</option>
                            ))
                        }
                    </Field>
                    <i class={`bi bi-caret-right-fill ${state.FromBranch===true?'arrowrotate':'arrow'}`}></i>
                    <i class="bi bi-pencil   text-white icone"></i>
                </div>
                <div>
                        <ErrorMessage name="FormBranch" component="div" className="text-danger Error" />
                </div>
                <div className='field'>
                    <label >Category<i class="bi bi-star-fill labelstar"></i></label>
                    {/* <Field type="text" className="form-control" name='Category' placeholder='Select...' ></Field> */}
                    <Field as='select' name="Category" className="form-control ">
                        <option value=''>--Category--</option>
                        {
                            formdata.map((e,i)=>(
                                <option value={e.Category} key={e.id}>{e.Category}</option>
                            ))
                        }
                    </Field>
                    <i class="bi bi-caret-right-fill arrow"></i>
                    <i class="bi bi-pencil   text-white icone"></i>
                </div>
                <div>
                        <ErrorMessage name="Category" component="div" className="text-danger Error" />
                </div>
                <div className='field'>
                    <label >Warehouse<i class="bi bi-star-fill labelstar"></i></label>
                    {/* <Field type="text" className="form-control" name='Warehouse' placeholder='Select...' ></Field> */}
                    <Field as='select' name="Warehouse" className="form-control ">
                        <option value=''>--Warehouse--</option>
                        {
                            formdata.map((e,i)=>(
                                <option value={e.Warehouse} key={e.id}>{e.Warehouse}</option>
                            ))
                        }
                    </Field>
                    <i class="bi bi-caret-right-fill arrow"></i>
                    <i class="bi bi-pencil   text-white icone"></i>
                </div>
                <div>
                        <ErrorMessage name="Warehouse" component="div" className="text-danger Error" />
                </div>
                <div className='field'>
                    <label >Form Warehouse<i class="bi bi-star-fill labelstar"></i></label>
                    {/* <Field type="text" className="form-control" name='FormWarehouse' placeholder='Select...' ></Field> */}
                    <Field as='select' name="FormWarehouse" className="form-control ">
                        <option value=''>--Warehouse--</option>
                        {
                            formdata.map((e,i)=>(
                                <option value={e.FromWarehouse} key={e.id}>{e.FromWarehouse}</option>
                            ))
                        }
                    </Field>
                    <i class="bi bi-caret-right-fill arrow"></i>
                    <i class="bi bi-pencil   text-white icone"></i>
                </div>
                <div>
                        <ErrorMessage name="FormWarehouse" component="div" className="text-danger Error" />
                </div>
                
            </div>
            <div class="col allfields">
                <div className='field'>
                    <label >Request Date<i class="bi bi-star-fill labelstar"></i></label>
                    <Field type="date" className="form-control" name='Date'  ></Field>
                </div>
                <div>
                        <ErrorMessage name="Date" component="div" className="text-danger Error" />
                </div>
                <div className='field'>
                    <label >Request No</label>
                    {/* <Field type="text" className="form-control" name='RequestNo' ></Field> */}
                    <Field as='select' name="RequestNo" className="dropdown mydroupdown ">
                        <option value=''>--Warehouse--</option>
                        {
                            formdata.map((e,i)=>(
                                <option value={e.RequestNumber} key={e.id}>{e.RequestNumber}</option>
                            ))
                        }
                    </Field>
                </div>
                <div>
                        <ErrorMessage name="RequestNo" component="div" className="text-danger Error" />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default IssueRequest