import React from 'react'
import './custom-button.styles.scss'


const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button
        className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}>
        {children}

        {/* BOTH BUTTON COMPONENT AND INPUT COMPONENT can use the TYPE SUBMIT */}

    </button>

);

export default CustomButton