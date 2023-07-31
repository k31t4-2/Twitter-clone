import React from 'react'
import "../css/SidebarMenu.css";

function SidebarMenu(props) {

  const {
    Icon,
    text,
   } = props;
  return (
    <>
      <div className='sidebarMenu'>
        <Icon />
        <h2>{text}</h2>
      </div>
    </>
  )
}

export default SidebarMenu
