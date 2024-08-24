'use client';
import {  
  RiLinkedinFill, 
  RiFacebookFill,
  RiMailFill,
  RiWhatsappLine 

} from 'react-icons/ri';
import Link from 'next/link';
import React from 'react'


const icons =[
  {
    path: 'https://www.linkedin.com/in/emmanuel-penda-920992275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    name: <RiLinkedinFill />
  },
  {
    path: 'mailto:emmanuelpenda12@gmail.com',
    name: <RiMailFill />
  },
  {
    path: 'https://www.facebook.com/emmanuel.penda.5?mibextid=ZbWKwL',
    name: <RiFacebookFill />
  },
  {
    path: '/',
    name: <RiWhatsappLine />
  }




]
const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) =>{
        return(
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials