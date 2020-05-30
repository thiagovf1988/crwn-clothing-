import React from 'react'

import './form-input.styles.scss'


const FormInput = ({ handleChange, label, ...otherProps }) => (//FUNCTIONAL COMPONENT WITH NO STATE
    <div className="group">
        <input className='form-input' onChange={handleChange}{...otherProps} />
        {
            label ?//if the developer wants to render a label it will otherwise it will not and will return null
                (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {/* this label will always have the class 'form-input-label' AND will add the 'shrink' property WHEN the USER has typed anything */}
                    {label}

                </label>)
                : null
        }


    </div>

);

export default FormInput

//tHERE are components that are used around the app that need to be reused ...like the buttons