import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsFillPersonLinesFill } from "react-icons/bs";


const SocialLinks = () => {
    const links = [
        {
            id:1,
            name:"LinkedIn",
            link:"https://www.linkedin.com/in/neelshetty-26n2000/",
            logo:<FaLinkedin size={30}/>
        },
        {
            id:2,
            name:"Github",
            link:"https://github.com/NeeleshShetty",
            logo:<FaGithub size={30}/>
        },
        {
            id:3,
            name:"Mail",
            link:"mailto:neeleshshetty1236@gmail.com",
            logo:<IoIosMail size={30}/>
        },
        {
            id:4,
            name:"Resume",
            link:"/Neelesh'sResume.pdf",
            logo:<BsFillPersonLinesFill size={30}/>,
            download:true
        }
    ]
  return (
    <div className="hidden lg:flex flex-col fixed top-[35%] ">
        <ul>
            {links.map(({id,link,logo,name,download})=>(
                <li key={id} className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 -ml-[100px] hover:rounded-md hover:-ml-[10px] duration-150">
                <a href={link} className="flex justify-between items-center text-white w-full " download={download}><>{name} {logo}</></a>
            </li>
            ))}
            
        </ul>
    </div>
  )
}

export default SocialLinks