import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const[link,setLink]=useState(false)
  const linksContainerRef=useRef(null)
  const linksRef=useRef(null)
  useEffect(()=>{
    const linkHeight=linksRef.current.getBoundingClientRect().height
  
    if(link){
      linksContainerRef.current.style.height=`${linkHeight}px`}
    else{
        linksContainerRef.current.style.height = `0px`

      }

  },[link])
  return <nav>
    
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={logo} alt="logo"/>
        <button className='nav-toggle' onClick={()=>setLink(!link)}>
          <FaBars/>
        </button>
      </div>  
      <div className='links-container' ref={linksContainerRef}>
        
        <ul className='links' ref={linksRef}>
          {links.map((link)=>{
            const{id,url,text}=link
            return <li key={id} >
              <a href={url}>{text}</a>

            </li>
            
          })}
        </ul>
      </div>
      <ul className='social-icons'>
        {social.map((social)=>{
          const{id,url,icon}=social
          return <li key={id}>
            <a href={url}>{icon}</a>
          </li>

        })}
      </ul>
    </div>
  </nav>
}

export default Navbar
