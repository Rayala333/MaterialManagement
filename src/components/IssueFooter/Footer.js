import React, { useContext } from 'react';
import './footermain.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFloppyDisk, faPrint, faTimes, faEnvelope, faClock, faCircleInfo,faDownload } from '@fortawesome/free-solid-svg-icons';


// import { store } from '../../App';

const Footer = () => {

  // const {Data,handleSubmit}=useContext(store)

 
  return (
    <div style={{ backgroundColor: 'navy', color: 'white', padding: '5px' }}>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        <div style={{ display: 'flex', alignItems: 'center', marginLeft:'50px' }}>

          
            <button type='submit' style={{border:'1px solid white', borderRadius:'5px',padding:'3px',marginRight:'5px',background:'navy',color:'#fff'}}>
            <FontAwesomeIcon icon={faFloppyDisk} style={{ marginRight: '10px' }}  />

<span style={{ marginRight: '15px' }}>Save</span>

            </button>

            {/* <input type='submit' value='submit' onClick={handleClick} /> */}
            
            <div style={{border:'1px solid white', borderRadius:'5px',padding:'3px',marginRight:'5px'}}>

                <FontAwesomeIcon icon={faPrint} style={{ marginRight: '10px' }} />

                <span style={{ marginRight: '15px' }}>Print</span>

            </div>

            <div style={{border:'1px solid white', borderRadius:'5px',padding:'3px',marginRight:'5px'}}>

                <FontAwesomeIcon icon={faTimes} style={{ marginRight: '10px' }} />

                <span style={{ marginRight: '15px' }}>Close</span>

            </div>

        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>

            <div style={{border:'1px solid white', borderRadius:'5px',padding:'3px',marginRight:'5px'}}>

                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} />

                <span style={{ marginRight: '15px' }}>Mail</span>

            </div>

          <div style={{border:'1px solid white', borderRadius:'5px',padding:'3px',marginRight:'5px'}}>

            <FontAwesomeIcon icon={faClock} style={{ marginRight: '10px' }} />

            <span style={{ marginRight: '15px' }}>Schedule</span>

          </div>

          <div style={{border:'1px solid white', borderRadius:'5px',padding:'3px',marginRight:'5px'}}>

            <FontAwesomeIcon icon={faCircleInfo} style={{ marginRight: '10px' }} />

          </div>

          <div style={{border:'1px solid white', borderRadius:'5px',padding:'3px',marginRight:'5px'}}>

            <FontAwesomeIcon icon={faDownload} style={{ marginRight: '10px' }} />

            <span>Import</span>

          </div>

        </div>

      </div>

    </div>
    
      // <input type='submit' value='submit' />
      
  )
}

export default Footer;