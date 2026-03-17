// @flow strict
import Link from 'next/link';

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © 2025 <Link target="_blank" href="https://www.instagram.com/zunaid_masudig/" className="text-[#16f2b3] hover:text-pink-600 font-medium focus:ring-2 focus:ring-offset-2 focus:ring-pink-600">Md Zunaid Masud</Link>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <ul className="max-sm:hidden mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100">
              <li>
                <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div></Link>
              </li>
              <li>
                <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div></Link>
              </li>
              <li>
                <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div></Link>
              </li>
              <li>
                <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div></Link>
              </li>
              <li>
                <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div></Link>
              </li>
              {/* <li>
                <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">BLOGS</div></Link>
              </li> */}
              <li>
                <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#contact"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">CONTACT</div></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;