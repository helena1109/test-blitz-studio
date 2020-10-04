import React, {useState}from "react";
import './header.sass';
import logo from '../../images/logo.png'
import {Link} from "react-router-dom";
import { Drawer } from 'antd';


const Header=()=>{
    const [visible, setVisible] =useState(false)

    const showDrawer = () => {
        setVisible(true)
    };

    const onClose = () => {
        setVisible(false)
    };

    return(
        <div className='header'>
            <Link to='/'>
                <div className='header-logo'>
                    <img src={logo} alt='logo'/>
                </div>

            </Link>
            <div className='header-nav'>
                <ul>
                    <Link to='/'> <li>POKEMON CARDS</li></Link>
                    <Link to='/pokemons'> <li>POKEMON LIST</li> </Link>
                </ul>
            </div>

            <div className='header__burger' onClick={showDrawer}><i className="fa fa-bars" aria-hidden="true"/> </div>

            <Drawer
                width={300}
                placement="right"
                closable={true}
                onClose={onClose}
                visible={visible}
            >
                <ul className='drawer-nav' onClick={onClose}>
                    <Link to='/'> <li>POKEMON CARDS</li></Link>
                    <Link to='/pokemons'> <li>POKEMON LIST</li> </Link>
                </ul>
            </Drawer>
        </div>
    )
}

export default Header;