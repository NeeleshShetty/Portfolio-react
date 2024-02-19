import React from 'react'

const About = () => {
  return (
    <div name="about" className="h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white">
        <div className='max-w-screen-lg flex flex-col justify-center w-full h-full px-5 lg:ml-40 '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
           
                <p className='text-xl mt-20 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nam rem aliquam beatae porro ducimus magnam, et eius eligendi eveniet culpa debitis veritatis rerum, accusamus atque pariatur enim! Blanditiis expedita doloremque impedit, ipsam voluptatem laudantium mollitia maiores animi, cumque distinctio qui, voluptate suscipit magnam veniam natus! Laudantium alias similique repudiandae!</p>
            
            <br />
           
                <p className='text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam incidunt tempore consequuntur quibusdam magni hic atque qui voluptate quod libero.

                </p>
            
        </div>
    </div>
  )
}

export default About