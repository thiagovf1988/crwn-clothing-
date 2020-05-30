import React from 'react'
import './menu-item.styles.scss'
import { withRouter } from 'react-router-dom';//HOC- function transform a component


const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (//function that takes props title... and export the MenuItem to be rendered as the enhacedcomponent MenuItem
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)} >
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className='content'>
            <div className='title'>
                {title.toUpperCase()}
            </div>
            <span className='subtitle'> SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);//enhanced menuItem with access to location, history, match