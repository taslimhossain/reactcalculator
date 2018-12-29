import React from 'react';
import logo from '../images/logo.svg';



class HeaderArea extends React.Component {
    render() {
        return( 
            <div className="header-area"> 
                <div className="logo"><img src={logo} className="logo" alt="logo" /></div>  
            </div>
            );
    }
  }

  export default HeaderArea; 