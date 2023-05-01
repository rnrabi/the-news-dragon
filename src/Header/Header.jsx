import React from 'react';
import Navber from './Navber';
import logo from '../../src/assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div>

            <div className='text-center'>
                <img src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <h4>{moment().format("dddd, MMMM D YYYY hh:mm:ss")}</h4>
                
            </div>
            <Navber></Navber>
        </div>
    );
};

export default Header;