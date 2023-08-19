import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillBrightnessLowFill } from "react-icons/bs"
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import Image from "next/image";
import peeps from "../public/peep-avatar.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import Html from "../public/Html.png";
import anvil from "../public/anvil.png";
import tesla from "../public/tesla.png";
import Ai from "../public/Ai.png"
import SignUp from "../public/SignUp.png";
import Zoo from "../public/Zoo.png";
import { useState } from "react";
import NextLink from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Om Javia Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white p-5 md:px-20 lg:px-40 dark:bg-black">
        <section id="footer" className=" min-h-screen">
          <nav className="p-10 flex justify-between rounded-md">
            <h1 className="text-2xl  font-bold dark:text-white">Om Javia</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-red-600 to-blue-600 text-white font-bolder px-4 py-2 rounded-md ml-8 font-semibold"
                  href="https://drive.google.com/uc?export=download&id=1wYiWHJ5R-BzxiQ6_rswHCFuAe_wGhQfu"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center mt-10 npmp-10">
            <h2 className="text-6xl py-2 text-blue-500 font-medium md:text-6xl">
              Om Javia
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Full Stack Developer and a Students
            </h3>
            <p className="text-md py-8 leading-7 text-gray-500 md:text-xl max-w-lg mx-auto">
              I am a Full Stack Developer who has a keen knowledge of HTML, CSS
              and Javascript. Also hands-on experience of SCSS/SASS and
              TailwindCSS as I have projects based on that domain. Currently
              learning ReactJs, Also this portfolio is the part on the same with
              Nextjs which is a react based fullstack framework.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-10 text-gray-500">
            <a href="https://twitter.com/OmJavia1">
              <AiFillTwitterCircle className="hover:text-blue-700 cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/om-javia/">
              <AiFillLinkedin className="hover:text-blue-700" />
            </a>
            <a href="https://github.com/omjavia">
              <AiFillGithub className="hover:text-black dark:hover:text-green-600" />
            </a>
            {/* <AiFillInstagram className= 'hover:text-pink-600'/> */}
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-blue-400 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={peeps} layout="fill" alt=""/>
          </div>
        </section>
        <section className="mt-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Skills I offer </h3>
            <p className="text-md py-2 leading-7 text-gray-400">
              Since the beginning of my college I had started as a
              Full Stack Developer and I have been making clone of{" "}
              <span className="text-red-400">certain websites.</span>
              <br />I offer a wide range of services, including design and
              programming.
            </p>
          </div>
          <div className="lg:flex gap-10 text-center">
            <div className="shadow-lg p-5 rounded-xl my-10 dark:bg-white">
              <Image src={design} width={100} height={100} alt="" className="relative left-1/3"/>
              <h3 className="text-lg font-medium pt-5 pb-2 ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Elegant designs suited for your needs and design theory.
              </p>
              <h4 className="py-4 text-teal-400">Design tools </h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Wordpress</p>
              <p className="text-gray-800 py-1">VS Code</p>
              <p className="text-gray-800 py-1">Adobe XD</p>
              <p className="text-gray-800 py-1">Webflow</p>
            </div>
            <div className="shadow-lg p-5 rounded-xl my-10 dark:bg-white">
              <Image src={code} width={100} height={100} alt="" className="relative left-1/3"/>
              <h3 className="text-lg font-medium pt-5 pb-2 ">
                Programming
              </h3>
              <p className="py-2">
                Programming basics as an undergrad.
              </p>
              <h4 className="py-4 text-teal-400">Programming Languages</h4>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">C++</p>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">Java</p>
              {/* <p className="text-gray-800 py-1">C++</p> */}
            </div>
            <div className="shadow-lg p-5 rounded-xl my-10 dark:bg-white">
              <Image src={consulting} width={100} height={100} alt="" className="relative left-1/3"/>
              <h3 className="text-lg font-medium pt-5 pb-2 ">
                Coding of Design
              </h3>
              <p className="py-2">
                The Design being implemented as proper website.
              </p>
              <h4 className="py-4 text-teal-400">Lirbraries and Frameworks</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Next.js</p>
              <p className="text-gray-800 py-1">TailwindCSS</p>
              <p className="text-gray-800 py-1">Anvil</p>
              <p className="text-gray-800 py-1">Three.js</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Projects</h3>
            <div>
              <p className="text-md py-2 leading-7 text-gray-400">
                Since the beginning of my college studies I had started as a
                Full Stack Developer and i have been making clone of{" "}
                <span className="text-red-500">certain websites.</span>
                <br />I offer a wide range of services, including design and
                programming.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-12 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <a href="https://omjavia.github.io/portfolio/">
              <Image
                src={Html}
                className="rounded-lg object-cover border"
                width={"100px"}
                height={"100px"}
                layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://tesla-552544.webflow.io/">
              <Image
                src={tesla}
                className="rounded-lg object-cover border"
                width={"100px"}
                height={"100px"}
                layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={Zoo}
                className="rounded-lg object-cover border"
                width={"100px"}
                height={"100px"}
                layout="responsive" alt="" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={SignUp}
                className="rounded-lg object-cover border"
                width={"100px"}
                height={"100px"}
                layout="responsive" alt=""/>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://physicon-360.anvil.app/">
              <Image
                src={anvil}
                className="rounded-lg object-cover border"
                width={"100px"}
                height={"100px"}
                layout="responsive" alt="" />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={Ai}
                className="rounded-lg object-cover border"
                width={"100px"}
                height={"100px"}
                layout="responsive" alt=""/>
            </div>
          </div>
        </section>
        <section>
          <div className="p-5 rounded-md">
            <p className="text-center dark:text-white font-bold">
              <span>
                <a href="#footer">Om Javia</a>
              </span>
              ©2023
            </p>
            <p className="mt-2 text-center dark:text-white">Created with NextJS and Tailwind 🚀</p>
          </div>
        </section>
      </main>
    </div>
  );
}
