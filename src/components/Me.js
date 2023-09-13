
import React from "react";
import { me } from "../data";

export default function Me() { 
    return (
    <section id="projects" className="text-gray-400 bg-black body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            About Me!
          </h1>
          
        </div>
        <div class="flex lg:flex-row flex-col gap-8 justifyContent:center w-full">
          <div class="flex flex-col justifyContent:center w-full lg:w-1/2 space-y-4 lg:space-y-6 bg-[#28272F] bg-opacity-25 p-8 lg:p-14 rounded-[30px] border border-accent-3 ">
            <img src="zenrick.jpg" alt="Ako" class="w-full"></img>
            <h2 class="font-bold text -xl lg:text-3x1">Zenrick G. Parcon</h2>
            <p>Hello! I'm Zenrick Parcon, graduated from West Visayas State University Major in Software Technologies. I am willing to gain new knowledge about technologies and really interested in programming. My hobbies are watching animes, korean dramas and  tv series. I like to play games especially mobile games </p>
          </div>
          <div class="w-full lg:w-1/2 space-y-10">
       <div class="space-y-5">
       <h3 class="text-xl lg:text-2xl font-semibold">
        Experience and Education
       </h3>
       <div class="text-xs lg:text-sm text-[#9F9FA0]">
       <p class="font-semibold text-white">Bachelor's Degree in Information Technology</p>
       <p>Major in Software Technologies</p>
        <p>Cum Laude, June 2023</p>
         <p>West Visayas State University, Iloilo City, Philippines</p>
       </div>
       <div class="text-xs lg:text-sm text-[#9F9FA0]">
       <p class="font-semibold text-white">Mobile Application Developer</p>
       <p>February-May 2023</p>
       <p>DOST Region VI, Iloilo City, Philippines</p>
       
       </div>
       <h3 class="text-xl lg:text-2xl font-semibold">
        Contact Me!
       </h3>
       <p class="font-semibold text-white">Contact Number</p>
       <p>099934478146</p>
       <p class="font-semibold text-white">Email</p>
       <p>znrick22@gmail.com</p>
       
       </div>
          </div>
        </div>
        
      </div>
    </section>
    
  );
}