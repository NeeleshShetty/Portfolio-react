import HeroImage from "../assets/profile.jpg"
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">
        <div className="max-w-screen-lg mx-auto flex  items-center justify-center h-full px-4 pt-5 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold  mb-2">I'm a Full Stack Developer</h2>
                <p className="text-gray-500 py-4 max-w-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi reiciendis sint sequi, dolore, suscipit tempore dolorum unde odit sapiente ex dolorem quibusdam cum temporibus quod iure delectus vel. Nemo, minima.</p>

                <div>
                    <Link to="portfolio" smooth duration={500} className=" group w-fit px-6 py-3 my-2 flex items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio <span className="mx-2 group-hover:rotate-90 ease-in duration-300"><FaArrowRight size={15}/></span>
                    </Link>
                </div>
                
            </div>
            <div>
                    <img src={HeroImage} alt="profile pic" className="rounded-md mx-auto w-2/3 "  />
                </div>
        </div>
    </div>
  )
}

export default Home