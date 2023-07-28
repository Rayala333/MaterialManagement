import React,{useContext} from 'react';
import './Table.css'
import { store } from '../../../App';
import axios from 'axios';


const Table = () => {
    const {userdata,edit}=useContext(store)
    console.log(userdata,"TABLE")

    const {getData,clickEdite}=useContext(store)

    const clickDelete =async(id)=>{
        console.log(id,"Id")
        await axios.delete(`http://localhost:8080/users/${id}`)
        getData()
    }
   
  return (
    <div className='container'>
        <div className='row Tabel'>
            <div className='col-7 barcode'>
                <span ><i class="bi bi-upc barcode fs-1"></i></span>
                <input type="text" className="form-control" placeholder='Scan...' />
                <span><i class="bi bi-dash-square-fill dote"></i></span>
            </div>

        </div>
        <div className='row mt-4'>
            <table class="table table-hover">
                <thead style={{background:'navy',color:'#fff'}}>
                    <tr>
                        <th>S.No</th>
                        <th>...</th>
                        <th>...</th>
                        <th>Group</th>
                        <th>Select</th>
                        <th>Description</th>
                        <th>Sub item</th>
                        <th>At..</th>
                        <th>Button</th>
                        <th>Pack Unit</th>
                        <th>pack Qty</th>
                        <th>Unit</th>
                        <th>Quantity</th>
                        <th>...</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       userdata.map((e,i)=>(
                            <tr key={i}>
                                <td>{i+1}</td>
                               {
                                    edit.id===e.id?(
                                        <>
                                        <td ><i class="bi bi-plus"></i></td>
                                        <td ><i class="bi bi-x"></i></td>
                                        <td ><input type='text' name='name' value={edit.undergroup} style={{width:"30px" ,textAlign:"center" ,marginLeft:"-10px"}} /></td>
                                        <td>..</td>
                                        <td><input type='text' name='name' value={edit.salesdesc} style={{width:"200px"}}/></td>
                                        <td>..</td>
                                        <td><i class="bi bi-file-earmark-text"></i></td>
                                        <td><i class="bi bi-caret-right-fill"></i></td>
                                        <td><input type='text' name='name' value={edit.packunit} style={{width:"30px",textAlign:"center" ,marginLeft:"-10px"}} /></td>
                                        <td><input type='text' name='name' value={edit.stockpack} style={{width:"100px"}} /></td>
                                        <td>..</td>
                                        <td><input type='text' name='name' value={edit.discone} style={{width:"40px",textAlign:"center",marginLeft:"-10px" }} /></td>
                                        <td>..</td>
                                        </>
                                    ):(<>
                                        <td onClick={()=>{clickEdite(e.id)}}><i class="bi bi-plus"></i></td>
                                        <td onClick={()=>{clickDelete(e.id)}}><i class="bi bi-x"></i></td>
                                        <td >{e.undergroup}</td>
                                        <td>..</td>
                                        <td>{e.salesdesc}</td>
                                        <td>..</td>
                                        <td><i class="bi bi-file-earmark-text"></i></td>
                                        <td><i class="bi bi-caret-right-fill"></i></td>
                                        <td>{e.packunit}</td>
                                        <td>{e.stockpack}</td>
                                        <td>..</td>
                                        <td>{e.discone}</td>
                                        <td>..</td>
                                    </>)
                               }
                               
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
        <div className='row'>
                <div className='Addbutton col-2'>
                        <button>Add Blank Row</button>
                        <span><i class="bi bi-zoom-in search"></i></span>
                </div>
        </div>
    </div>
  )
}

export default Table