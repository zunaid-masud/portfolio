// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, } from 'react-icons/fa';
import { Bfiverr, BsInstagram  } from "react-icons/bs";
import { SiFiverr } from "react-icons/si";
import AnimationLottie from "../../helper/animation-lottie";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';
import lottieFile from "../../../assets/lottie/contact.json";

function ContactSection() {
  return (
		<div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
			<div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
				<span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md border-[2px] border-[#16f2b3]">
					CONTACT
				</span>
				<span className="h-36 w-[2px] bg-[#16f2b3]"></span>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
				<ContactForm />
				<div className="lg:w-3/4 ">
					<div className="w-2/4 h-2/4 lg:ml-10">
						<AnimationLottie animationPath={lottieFile} />
					</div>
					<div className="flex flex-col gap-5 lg:gap-9">
						<p className="text-sm md:text-xl flex items-center gap-3">
							<MdAlternateEmail
								className="bg-[#16f2b3] p-2 rounded-full hover:bg-pink-500 hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
								size={36}
							/>
							<span>{personalData.email}</span>
						</p>
						<p className="text-sm md:text-xl flex items-center gap-3">
							<IoMdCall
								className="bg-[#16f2b3] p-2 rounded-full hover:bg-pink-500 hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
								size={36}
							/>
							<span>{personalData.phone}</span>
						</p>
						<p className="text-sm md:text-xl flex items-center gap-3">
							<CiLocationOn
								className="bg-[#16f2b3] p-2 rounded-full hover:bg-pink-500 hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
								size={36}
							/>
							<span>{personalData.address}</span>
						</p>
					</div>
					<div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
						<Link target="_blank" href={personalData.github} aria-label="Github">
							<IoLogoGithub
								className="bg-gradient-to-r from-pink-500 to-violet-600 p-3 rounded-full hover:scale-110 transition-all duration-300 text-white cursor-pointer"
								size={48}
							/>
						</Link>
						<Link target="_blank" href={personalData.linkedIn} aria-label="LinkedIn">
							<BiLogoLinkedin
								className="bg-gradient-to-r from-pink-500 to-violet-600 p-3 rounded-full hover:scale-110 transition-all duration-300 text-white cursor-pointer"
								size={48}
							/>
						</Link>
						<Link target="_blank" href={personalData.instagram} aria-label="LinkedIn">
							<BsInstagram
								className="bg-gradient-to-r from-pink-500 to-violet-600 p-3 rounded-full hover:scale-110 transition-all duration-300 text-white cursor-pointer"
								size={48}
							/>
						</Link>
						<Link target="_blank" href={personalData.fiverr} aria-label="LinkedIn">
							<SiFiverr
								className="bg-gradient-to-r from-pink-500 to-violet-600 p-3 rounded-full hover:scale-110 transition-all duration-300 text-white cursor-pointer"
								size={48}
							/>
						</Link>
						{/* <Link target="_blank" href={personalData.facebook} aria-label="Facebook">
							<FaFacebook
								className="bg-gradient-to-r from-pink-500 to-violet-600 p-3 rounded-full hover:scale-110 transition-all duration-300 text-white cursor-pointer"
								size={48}
							/>
						</Link> */}
					</div>
				</div>
			</div>
		</div>
  );
};

export default ContactSection;