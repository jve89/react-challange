import React from 'react';
import css from './css/Sidebar.module.css'

const Sidebar = (props) => {
    console.log(props);
    return <div className = {css.sidebar}>
        <a>My Photos</a>
        <a>My Illustrations</a>
        <a>My Paintings</a>
        </div>;
}
export default Sidebar;