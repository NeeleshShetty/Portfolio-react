import HeroImage from "../assets/profile.jpg"
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
		<div
			name="home"
			className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
		>
			<div className="max-w-screen-lg mx-auto flex  items-center justify-center h-full px-4 pt-5 md:flex-row">
				<div className="flex flex-col justify-center h-full">
					<h2 className="text-4xl sm:text-7xl font-bold  mb-2">
						I'm a Full Stack Developer
					</h2>
					<p className="text-gray-500 py-4 max-w-md">
						I’m a dedicated developer passionate about creating awesome user
						interfaces. Proficient in HTML, CSS, JavaScript, and React.JS and
						its libraries and frameworks.Committed to writing clean,
						maintainable code.Now, I’m excited to take on new challenges, learn
						more, and bring my skills to a team that values creativity and
						innovation in Front End React development.
					</p>

					<div>
						<Link
							to="portfolio"
							smooth
							duration={500}
							className=" group w-fit px-6 py-3 my-2 flex items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
						>
							Portfolio{' '}
							<span className="mx-2 group-hover:rotate-90 ease-in duration-300">
								<FaArrowRight size={15} />
							</span>
						</Link>
					</div>
				</div>
				<div>
					<img
						src={HeroImage}
						alt="profile pic"
						className="rounded-md mx-auto w-2/3 "
					/>
				</div>
			</div>
		</div>
	);
}

export default Home