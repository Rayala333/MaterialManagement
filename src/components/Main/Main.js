import React from 'react'
import IssueRequest from './IssueRequest/IssueRequest';
import Table from './Table/Table';
import Remarks from './Remarks/Remarks';


const Main = ({setFieldValue}) => {
  return (
    <div className='container-fluid'>
            <div className='row'>
                    <IssueRequest/>
            </div><hr></hr>
            <div className='row'>
                    <Table/>
            </div><hr></hr>
            <div className='row'>
                    <Remarks setFieldValue={setFieldValue}/>
            </div>
    </div>
  )
}

export default Main