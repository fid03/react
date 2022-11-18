import React,{Component} from 'react';
import './header.css'
import Logo from './Logo';
import Profile from './Profile';

class Header extends Component{
    render(){
        return(
            <div className='header-text'>
                <h1 className='h-text'>Header text rendered</h1>
                <Logo/>
                <Profile/>
            </div>
        )
    }
}
export default Header;