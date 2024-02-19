import React from 'react'

const About = () => {
  return (
		<div
			name="about"
			className="h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white"
		>
			<div className="max-w-screen-lg flex flex-col justify-center w-full h-full px-5 lg:ml-40 ">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						About
					</p>
				</div>

				<p className="text-xl mt-20 ">
					Hello! I am a dedicated and passionate front-end developer . My
					expertise lies in crafting dynamic and responsive user interfaces
					using ReactJS, JavaScript, and Redux. I have hands-on experience with
					Firebase for database management.My proficiency extends to front-end
					styling, where I am skilled in HTML5 and CSS3, and have expertise in
					popular frameworks like TailwindCSS, Material-UI, and Styled
					Components. In addition, I am adept at utilizing Postman for API
					testing, ensuring the robustness and reliability of the applications I
					develop. My passion for staying current with industry trends and
					technologies keeps me excited about delivering cutting-edge
					solutions.Looking forward to contributing my skills and creativity to
					exciting projects and pushing the boundaries of front-end development.
				</p>
			</div>
		</div>
	);
}

export default About