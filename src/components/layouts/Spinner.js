import React, {Fragment} from 'react'
import spinner from './spinner.gif';

const Spinner = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src={spinner}
                 alt="Loading..."
                 /* style={{ width: '200px', margine: 'auto', display: 'block'}} */
                 style={spinnerStyles}
                 />
        </div>
    )
}

const spinnerStyles = {
    width: '200px',
    display: 'block',
    margine: 'auto'
    

}

export default Spinner

