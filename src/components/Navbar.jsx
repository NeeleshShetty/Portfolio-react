import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'
const Navbar = () => {
    const [showlist , setShowList] = useState(false)
    const links = [
        {
            id:1,
            link:"home"
        },
        {
            id:2,
            link:"about"
        },
        {
            id:3,
            link:"portfolio"
        },
        {
            id:4,
            link:"experience"
        },
        {
            id:5,
            link:"contact"
        },

    ]
    
  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>Neelesh</h1>
        </div>

        <ul className='hidden md:flex'>
            {links.map(({id,link})=>{
                return (<li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                    <Link to={link} smooth duration={500}>{link}</Link>
                </li>)
            })}
        </ul>

        <div className="md:hidden cursor-pointer pr-4 z-10 text-gray-500" onClick={()=> setShowList(!showlist)}>
           {showlist ? <FaTimes size={30} /> : <FaBars size={30} />} 
        </div>

          {showlist && <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
        {links.map(({id,link})=>{
                return (<li key={id} className="cursor-pointer px-4 py-6 text-4xl hover:scale-150 duration-200 capitalize
                ">
                    <Link onClick={()=>setShowList(!showlist)} to={link} smooth duration={500}> {link}</Link>
                </li>)
            })}
            
        </ul> }  
        
    </div>
  )
}

export default Navbar