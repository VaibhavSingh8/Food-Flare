import { useState } from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemId) => {
    if (activeItem === itemId) {
      setActiveItem(null); // Collapse the clicked item if it's already active
    } else {
      setActiveItem(itemId); // Expand the clicked item
    }
  };


  const email = 'vaibhavsinghr.08@gmail.com';
  const subject = 'Regarding [Subject]';
  const body = 'Hello,';

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="main w-full flex flex-col justify-center items-center ">
      <div className="mainBodyRestaurantMenu w-full flex flex-col items-center lg:w-[60%] max-[800px]:px-3 ">
        <div className="firstresNameDetails flex justify-between w-full px-2 my-4 lg:mx-10 ">
          <div className="left flex flex-col justify-center gap-2  rounded-xl">
            <h1 className="name text-lg font-bold font-open  max-[800px]:w-full md:text-2xl">VAIBHAV SINGH</h1>
            <p className=" text-sm font-semibold text-gray-500">FRONTEND DEVELOPER</p>

          </div>
          <div className="right flex flex-col justify-around  bg-white items-center pr-2">
            <img className="w-20 rounded-full" src="https://pbs.twimg.com/profile_images/1747613622610927616/LArm0BXv_400x400.jpg" alt="" />
          </div>
        </div>


      </div>


      <div className="ACCORDIANS w-[90%] mb-5 flex flex-col justify-center items-center gap-1 lg:mb-10">

        <div
          className="flex justify-between items-center px-2 bg-black/20 rounded-xl mb-2 w-full py-1 max-[800px]:px-2 lg:w-[70%]"
          onClick={() => handleItemClick("aboutme")}
        >
          <span className="summary text-base pl-4 font-open font-bold py-1 lg:text-xl lg:p-3 ">ABOUT ME</span>
          {/* <span className="pr-4">{activeItem === "me" ? <BsUnlockFill /> : <BsLockFill />}</span> */}
        </div>
        {activeItem === "aboutme" && (
          <div className="flex mb-3 justify-center items-center font-sans bg-black/5 rounded-xl lg:w-[70%]">
            <div className="content px-4 text-sm font-medium py-4 p-2">
              Detail-oriented individual with a B.Tech in Computer Science & Engineering, looking for a Frontend Developer position in a fast-growing
              company to utilize my technical skills and working knowledge of software applications, development and design. I want to work in a
              competitive environment where I can enhance my skills along with facing the new Situations, learning new things.
            </div>
          </div>
        )}
        <div
          className="flex justify-between items-center px-2 bg-black/20 rounded-xl mb-2 w-full py-1 max-[800px]:px-2 lg:w-[70%]"
          onClick={() => handleItemClick("skills")}
        >
          <span className="summary text-base pl-4 font-open font-bold py-1 lg:text-xl lg:p-3 ">SKILLS</span>
          {/* <span className="pr-4">{activeItem === "skills" ? <BsUnlockFill /> : <BsLockFill />}</span> */}
        </div>
        {activeItem === "skills" && (
          <div className="flex mb-3 justify-around items-center font-sans bg-black/5 rounded-xl lg:w-[70%]">
            <div className="content px-4 text-sm  p-2 flex justify-around flex-wrap gap-3 py-4 ">
              <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">REACT JS</span>
              <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">REDUX</span>
              <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">JAVASCRIPT</span>
              <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">TAILWIND</span>
              <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">CSS3</span>
              <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">HTML5</span>
              <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">C & C++</span>
              <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">DATA STRUCTURES & ALGORITHMS</span>
              <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">GIT</span>
              <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">GITHUB</span>
              <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">PROBLEM SOLVING</span>
            </div>
          </div>
        )}
        <div
          className="flex justify-between items-center px-2 bg-black/20 rounded-xl mb-2 w-full py-1 max-[800px]:px-2 lg:w-[70%]"
          onClick={() => handleItemClick("socials")}
        >
          <span className="summary text-base pl-4 font-open font-bold py-1 lg:text-xl lg:p-3 ">SOCIALS</span>
          {/* <span className="pr-4">{activeItem === "socials" ? <BsUnlockFill /> : <BsLockFill />}</span> */}
        </div>
        {activeItem === "socials" && (
          <div className="flex w-full mb-3 justify-center items-center font-sans bg-black/5 rounded-xl py-3 lg:w-[70%]">
            <div className="content px-4 text-sm  p-2 flex justify-around w-full">
              <a href="https://www.linkedin.com/in/vaibhavsingh8/" target="_blank"><img className="w-10" src="https://i.postimg.cc/ydvzTRdG/2504923.png" alt="linkedin-link" /></a>
              <a href="https://github.com/vaibhavsingh8" target="_blank"><img className="w-10" src="https://i.postimg.cc/DZbMSbGs/2504911.png" alt="github-redirect" /></a>
              <a href="https://twitter.com/xVaibhavSingh" target="_blank"><img className="w-10" src="https://i.postimg.cc/zvbPRHRK/1409946.png" alt="twitter-redirect" /></a>
              <a href={mailtoLink} target="_blank"><img className="w-10" src="https://i.postimg.cc/bNv1Lf6V/10829119.png" alt="" /></a>

            </div>
          </div>
        )}
        <div
          className="flex justify-between items-center px-2 bg-black/20 rounded-xl mb-2 w-full py-1 max-[800px]:px-2 lg:w-[70%]"
          onClick={() => handleItemClick("aboutThisProject")}
        >
          <span className="summary text-base pl-4 font-open font-bold py-1 lg:text-xl lg:p-3 ">ABOUT THIS PROJECT</span>
          {/* <span className="pr-4">{activeItem === "aboutThisProject" ? <BsUnlockFill /> : <BsLockFill />}</span> */}
        </div>
        {activeItem === "aboutThisProject" && (
          <div className="flex mb-3 justify-center items-center font-sans bg-black/5 lg:w-[70%]">
            <div className="content px-4 text-sm  p-2 flex flex-col justify-start gap-2">


              <ul className="flex flex-col justify-between gap-2 lg:items-start">
                <li>- Payment Integration with Razorpay.</li>
                <li>- Added LAZY LOADING in AboutUs page.</li>
                <li>- 🟢|🔴 User active status based on internet using custom hook</li>
                <li>- Hosted on Vercel</li>
              </ul>
              <div className="HEAD">
                Tech stack used :
              </div>
              <ul className="flex flex-col justify-between items-start">
                <li> - ✅ React</li>
                <li> - ✅ Redux</li>
                <li> - ✅ React Router v6</li>
                <li> - ✅ Tailwind CSS</li>
                <li> - ✅ GitHub</li>
                <li> - ✅ Vercel for Deployment</li>
                <li> - ✅ Custom Hooks</li>
                <li> - ✅ Lazy Loading</li>
              </ul>

              <div className="flex flex-col justify-between lg:items-start gap-2">
                <div>DO CHECK IT ❤️</div>
                <a href="https://food-flare.vercel.app/" target="_blank"><button className=" bg-green-500 rounded-lg p-2 lg:text-xl font-semibold px-4">Live link</button></a>
                <a href="https://github.com/VaibhavSingh8/Food-Flare" target="_blank"><button className="bg-green-500 rounded-lg p-2 lg:text-xl font-semibold px-4" >Github link</button></a>


              </div>
            </div>
          </div>
        )}
        <div
          className="flex justify-between items-center px-2 bg-black/20 rounded-xl mb-2 w-full py-1 max-[800px]:px-2 lg:w-[70%]"
          onClick={() => handleItemClick("resume")}
        >
          <span className="summary text-base pl-4 font-open font-bold py-1 lg:text-xl lg:p-3 ">RESUME</span>
          {/* <span className="pr-4">{activeItem === "resume" ? <BsUnlockFill /> : <BsLockFill />}</span> */}
        </div>
        {activeItem === "resume" && (
          <div className="flex w-full mb-3 justify-center items-center font-sans bg-black/5 px-2 rounded-xl  lg:w-[70%]">
            <div className="content px-4 text-sm p-2 w-full rounded-xl">
              <a className="flex justify-center items-center" href="https://drive.google.com/file/d/1g_H7k3eESwGtnfXtRG_Hw-sBtTeIY8x5/view?usp=sharing" download="resume.pdf" target="_blank">
                <button className="flex justify-center gap-2 items-center"><img className="w-6" src="https://i.postimg.cc/PqDG0cq1/1092004.png" alt="resume" /> <span className="font-semibold text-xl">Resume</span></button>
              </a>
            </div>
          </div>
        )}





      </div>









      <div className="items w-full flex flex-col gap-5">

        {/* <ResMenu /> */}


      </div>


    </div>
  )
}

export default AboutUs;
