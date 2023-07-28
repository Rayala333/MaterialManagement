import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faTrashAlt, faCopy, faTimes, faUndo, faCalculator, faQuestion, faCog } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className='Head'>
                <div  className='navicons'>

                        <div style={{ display: 'flex', alignItems: 'center', marginLeft:'50px', justifyContent:'space-between' }} className='sidenave'>

                            <FontAwesomeIcon icon={faFolderOpen} style={{ marginRight: '10px' }} />

                            <span style={{ marginRight: '10px' }}>Open</span>

                            <FontAwesomeIcon icon={faTrashAlt} style={{ marginRight: '10px' }} />

                            <span style={{ marginRight: '10px' }}>Delete</span>

                            <FontAwesomeIcon icon={faCopy} style={{ marginRight: '10px' }} />

                            <span style={{ marginRight: '10px' }}>Copy</span>

                            <FontAwesomeIcon icon={faTimes} style={{ marginRight: '10px' }} />

                            <span style={{ marginRight: '10px' }}>Cancel</span>

                            <FontAwesomeIcon icon={faUndo} style={{ marginRight: '10px' }} />

                            <span style={{ marginRight: '10px' }}>Restore</span>

                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' ,}}>

                            <FontAwesomeIcon icon={faCalculator} style={{ marginRight: '10px' }} />

                            <span style={{ marginRight: '10px' }}>Calculator</span>

                            <FontAwesomeIcon icon={faQuestion} style={{ marginRight: '10px' }} />

                            <span style={{ marginRight: '10px' }}>Help</span>

                            <FontAwesomeIcon icon={faCog} style={{ marginRight: '10px' }} />

                            <span>Configuration</span>

                        </div>
                </div>
            </div> 
  )
}

export default Header