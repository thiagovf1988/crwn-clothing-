import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg' // syntax to import SVG in React
import { auth } from '../../firebase/firebase.utils'
import './header.styles.scss'

const Header = ({ currentUser }) => (// current user  de-structure
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />

        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {/* //ternary operator to conditionally render either a div (true) or a link (if its false)*/}
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
                // auth.signout is provided by firebase..on clicl calls an annonimous call back function same style as the link but with a padering option..so the button is clickbol and bigger o a div
            ) : (
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>)


            }
        </div>


    </div>
);
export default Header