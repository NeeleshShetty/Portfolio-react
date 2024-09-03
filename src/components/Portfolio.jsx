import React from 'react'

const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src:"/merneats.png",
            demo:"https://foodorder-frontend-fhlh.onrender.com/",
            code:"https://github.com/NeeleshShetty/Ecommerce-MERN-stack"
        },
        {
            id:2,
            src:"/ecommerce.png",
            demo:"https://ecommerce-mern-stack-i8u9.onrender.com/",
            code:"https://github.com/NeeleshShetty/Ecommerce-MERN-stack"
        },
        // {
        //     id:3,
        //     src:"https://opengraph.githubassets.com/556a08ee4a8656b974ef62f79834480d50666e3caf7939ca2969b7c938c43521/Ayushparikh-code/Web-dev-mini-projects"
        // },
        // {
        //     id:4,
        //     src:"https://opengraph.githubassets.com/556a08ee4a8656b974ef62f79834480d50666e3caf7939ca2969b7c938c43521/Ayushparikh-code/Web-dev-mini-projects"
        // },
        // {
        //     id:5,
        //     src:"https://opengraph.githubassets.com/556a08ee4a8656b974ef62f79834480d50666e3caf7939ca2969b7c938c43521/Ayushparikh-code/Web-dev-mini-projects"
        // },
        // {
        //     id:6,
        //     src:"https://opengraph.githubassets.com/556a08ee4a8656b974ef62f79834480d50666e3caf7939ca2969b7c938c43521/Ayushparikh-code/Web-dev-mini-projects"
        // },


    ]
   
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen '> 
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full lg:ml-40 '>
            <div>
                <p className='text-4xl font-bold  inline border-b-4 border-gray-500'>Portfolio</p>
                <br/>
                <p className='py-6'>Check out my work here...</p>
            </div>
            <div className='grid sm:grid-col-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ' >
               {portfolios.map(({id,src,demo,code})=>(
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="img" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex'>
                        <a target='_blank' href={demo}><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button></a>
                        <a target='_blank' href={code}><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button></a>
                    </div>
                </div>
               ))}
                    
                
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio