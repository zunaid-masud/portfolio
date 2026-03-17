// @flow strict
"use client";

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

function Skills() {
	// Split the skillsData into two halves for the two rows
	const firstRowSkills = skillsData.slice(
		0,
		Math.ceil(skillsData.length / 2)
	);
	const secondRowSkills = skillsData.slice(Math.ceil(skillsData.length / 2));

	// State to handle pauseOnHover and pauseOnClick
	const [pauseOptions, setPauseOptions] = useState({
		pauseOnHover: true,
		pauseOnClick: true,
	});

	useEffect(() => {
		const updatePauseOptions = () => {
			if (window.innerWidth < 768) {
				// For mobile devices
				setPauseOptions({ pauseOnHover: false, pauseOnClick: false });
			} else {
				// For larger screens
				setPauseOptions({ pauseOnHover: true, pauseOnClick: true });
			}
		};

		// Set initial values
		updatePauseOptions();

		// Update on window resize
		window.addEventListener("resize", updatePauseOptions);

		// Cleanup event listener
		return () => {
			window.removeEventListener("resize", updatePauseOptions);
		};
	}, []);

	return (
		<div
			id="skills"
			className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
		>
			<div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

			<div className="flex justify-center -translate-y-[1px]">
				<div className="w-3/4">
					<div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
				</div>
			</div>

			<div className="flex justify-center my-5 lg:py-8">
				<div className="flex items-center">
					<span className="w-24 h-[2px] bg-[#16f2b3]"></span>
					<span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md border-[2px] border-[#16f2b3]">
						Skills
					</span>
					<span className="w-24 h-[2px] bg-[#16f2b3]"></span>
				</div>
			</div>

			<div className="w-full my-12 flex flex-col gap-8">
				{/* First Row Slider */}
				<Marquee
					gradient={false}
					speed={80}
					pauseOnHover={pauseOptions.pauseOnHover}
					pauseOnClick={pauseOptions.pauseOnClick}
					delay={0}
					play={true}
					direction="left"
				>
					{firstRowSkills.map((skill, id) => (
						<div
							className="w-24 sm:w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1] sm:hover:scale-[1.15] cursor-pointer"
							key={id}
						>
							<div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
								<div className="flex -translate-y-[1px] justify-center">
									<div className="w-3/4">
										<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
									</div>
								</div>
								<div className="flex flex-col items-center justify-center gap-2 sm:gap-3 p-4 sm:p-6">
									<div className="h-7 sm:h-10">
										<Image
											src={skillsImage(skill)?.src}
											alt={skill}
											width={40}
											height={40}
											className="h-full rounded-lg"
										/>
									</div>
									<p className="text-white text-sm sm:text-lg">
										{skill}
									</p>
								</div>
							</div>
						</div>
					))}
				</Marquee>

				{/* Second Row Slider */}
				<Marquee
					gradient={false}
					speed={50}
					pauseOnHover={pauseOptions.pauseOnHover}
					pauseOnClick={pauseOptions.pauseOnClick}
					delay={0}
					play={true}
					direction="right" // Opposite direction for a dynamic effect
				>
					{secondRowSkills.map((skill, id) => (
						<div
							className="w-24 sm:w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1] sm:hover:scale-[1.15] cursor-pointer"
							key={id}
						>
							<div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
								<div className="flex -translate-y-[1px] justify-center">
									<div className="w-3/4">
										<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
									</div>
								</div>
								<div className="flex flex-col items-center justify-center gap-2 sm:gap-3 p-4 sm:p-6">
									<div className="h-7 sm:h-10">
										<Image
											src={skillsImage(skill)?.src}
											alt={skill}
											width={40}
											height={40}
											className="h-full rounded-lg"
										/>
									</div>
									<p className="text-white text-sm sm:text-lg">
										{skill}
									</p>
								</div>
							</div>
						</div>
					))}
				</Marquee>
			</div>
		</div>
	);
}

export default Skills;
