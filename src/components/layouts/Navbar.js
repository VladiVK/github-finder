import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = ({title}) => {
/*  */
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <FontAwesomeIcon icon={faGithub} 
                         style={{display: 'inlineBlock', marginRight: '5px'}}/>
        {title}
      </h1>
     <ul>
       <li>
         <Link to='/'>Home</Link>
       </li>
       <li>
         <Link to='/about'>About</Link>
       </li>
     </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  title: 'GitHub Finder',
};
Navbar.propTypes = {
  title: propTypes.string.isRequired,
};

export default Navbar;
