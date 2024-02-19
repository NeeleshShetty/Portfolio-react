import html from "../assets/html.png"
import css from "../assets/css.png"
import github from "../assets/github.png"
import javascript from "../assets/javascript.png"
import nextjs from "../assets/nextjs.png"
import nodejs from "../assets/node.png"
import reactimg from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
const Experience = () => {
    const techs = [
        {
            id:1,
            src:html,
            style:"shadow-orange-500",
            title:"HTML"
        },
        {
            id:2,
            src:css,
            style:"shadow-blue-500",
            title:"CSS"
        },
        {
            id:3,
            src:javascript,
            style:"shadow-yellow-500",
            title:"Javascript"
        },
        {
            id:4,
            src:reactimg,
            style:"shadow-blue-500",
            title:"ReactJs"
        },
        {
            id:5,
            src:nextjs,
            style:"shadow-white-500",
            title:"NextJs"
        },
        {
            id:6,
            src:tailwind,
            style:"shadow-blue-500",
            title:"TailwindCSS"
        },

    ]
  return (
    <div name="experience" className='w-full bg-gradient-to-b from-gray-800 to-black h-screen '>
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white lg:-ml-20px ">
            <div>
                <p  className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">Experience</p>
                <p className="py-6">Tech Stacks</p>
            </div>
            <div className="w-full grid grid-cols-2 gap-8 lg:grid-col-3 px-12 sm:px-0 py-8">

                {techs.map(({id,src,style,title})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500  rounded-lg py-2 shadow-blue-500 ${style}`}>
                    <img src={src} alt="techstack" className="w-20 mx-auto"/>
                    <p className="mt-4 ml-2">{title}</p>
                    </div>
                ))}
           
                
            </div>
        </div>
    </div>
  )
}

export default Experience