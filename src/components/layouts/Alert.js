import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const Alert = ({alert, delAlert} ) => {
    return (
      alert !== null && (
          <div className={`alert alert-${alert.type}`}>
            <FontAwesomeIcon icon={faInfoCircle}
                             style={{display: 'inlineBlock', marginRight: '5px'}} />
            <FontAwesomeIcon icon={faTrashAlt}
                             style={{display: 'inlineBlock', float: 'right', marginTop: '5px'}}
                             onClick={delAlert}/>  
            {alert.message}
          </div>
      )
    )
}

export default Alert
