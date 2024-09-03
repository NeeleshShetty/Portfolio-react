import {
  frontendtechs,
  backendtechs,
  databasetechs,
  developertools,
} from "./techstackConfig";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full bg-gradient-to-b from-gray-800 to-black h-[100%] "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white lg:-ml-20px ">
        <div className="mt-32">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2 -ml-24">
            Skills
          </p>
			<br/><br/><br/>
        </div>
        <div className="w-full flex flex-col gap-4">
          
		  <div className="flex gap-8 w-full">
            <div><h3 className="text-2xl ml-7 w-32">Frontend</h3></div>
           <div className="overflow-x-scroll p-3 flex  gap-5 scrollable">
		   {frontendtechs.map(({ id, src, style, title }) => (
              <div
                key={id}
                className={`flex flex-col gap-4 shadow-md hover:scale-105 duration-500  rounded-lg p-2 shadow-blue-500 ${style} `}
              >
                <div className="w-24 p-3"><img src={src} alt="techstack" className="w-32 mx-auto" /></div>
                <div className="">{title}</div>
              </div>
            ))}
		   </div>
          </div>
		  <div className="flex gap-8">
            <div><h3 className="text-2xl ml-7 w-32">Backend</h3></div>
            {backendtechs.map(({ id, src, style, title }) => (
              <div
                key={id}
                className={`flex flex-col gap-4 shadow-md hover:scale-105 duration-500  rounded-lg p-2 shadow-blue-500 ${style} `}
              >
                <div className="w-24 p-3"><img src={src} alt="techstack" className="w-32 mx-auto" /></div>
                <div className="">{title}</div>
              </div>
            ))}
          </div>
		  <div className="flex gap-8">
            <div><h3 className="text-2xl ml-7 w-32">Database</h3></div>
            {databasetechs.map(({ id, src, style, title }) => (
              <div
                key={id}
                className={`flex flex-col gap-4 shadow-md hover:scale-105 duration-500  rounded-lg p-2 shadow-blue-500 ${style} `}
              >
                <div className="w-24 p-3"><img src={src} alt="techstack" className="w-32 mx-auto" /></div>
                <div className="">{title}</div>
              </div>
            ))}
          </div>
		  <div className="flex gap-8">
            <div><h3 className="text-2xl ml-7 w-32">Tools</h3></div>
            {developertools.map(({ id, src, style, title }) => (
              <div
                key={id}
                className={`flex flex-col gap-4 shadow-md hover:scale-105 duration-500  rounded-lg p-2 shadow-blue-500 ${style} `}
              >
                <div className="w-24 p-3"><img src={src} alt="techstack" className="w-32 mx-auto" /></div>
                <div className="">{title}</div>
              </div>
            ))}
          </div>
        
		 
        </div>
      </div>
    </div>
  );
};

export default Experience;
