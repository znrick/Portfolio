import React from "react";
export default function About() {
    return(
    <section id= "about">
      <div className="  container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-large text-green textAlign: ">
            Hi, I'm Zenrick G. Parcon.
        
            </h1>
            <p className="mb-8 leading-relaxed">
               I Like to Build Software related projects. And i'm really interested in programming languages and I have knowledge in software and hardware systems.
            </p>
            <div className="flex-justify-center border-radius: 20px">
                
                <button class= "middle none center mr-3 rounded-lg border border-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-dark="true">
                        Contact Me!
                </button>
                
                <a
                  href="https://www.linkedin.com/in/zenrick-parcon-05832025b/"
                  className="middle none center mr-3 rounded-lg border border-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  Linkedin
                </a>
                <a
                  href="https://github.com/znrick"
                  className="middle none center mr-3 rounded-lg border border-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  Github
                </a>
            
          
            </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            
               
            </div>
       </div>
    </section>
    );
}