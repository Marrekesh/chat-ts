import React from 'react'
import c from '../../navigationMenu/navigationMenu.module.css'

const Profile = () => {
  return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={c.navIcon} 
        viewBox="0 0 20 20" 
        fill="currentColor"
    >
        <path 
            fillRule="evenodd" 
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
            clipRule="evenodd" 
        />
    </svg>
  )
}

export default Profile