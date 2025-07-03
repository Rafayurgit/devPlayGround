
function HeroSection() {

  return (
    <div>
      <section id="hero" className="  snap-start min-h-screen w-full flex flex-col md:flex-row items-start justify-start px-4 md:px-60 pt-10 md:pt-30  gap-6">
        <div className="text-white  max-w-5xl p-5 ">
          
          <div className="flex space-x-6 items-start ">
            <img src="../../public/logos/profile2.png"  loading="lazy" alt="profileImg" className="w-20 h-20 sm:w-24 sm:h-24  rounded-full object-cover border-2 border-white  shadow-md  "/>
            
            <div className=" ">
              <h1 className="font-merri ">A.RAFAY KHAN</h1>
              <p className="font-mont">I am just a guy who is a vlogger, developer, designer, and DevOps engineer for fun.</p>
            </div>

          
          </div>
          
          <p className="mt-6 text-sm text-gray-300 leading-relaxed">
            I am currently working as a DevOps Engineer at a well-known MCN, where I primarily focus on cloud infrastructure, automation, and various DevOps technologies across platforms like Azure and AWS.
              In addition to my DevOps expertise, I have a strong command of the MERN stack and have developed multiple small-scale projects and websites using React and related technologies.
              I’m also proficient in Java, especially for competitive programming and data structures & algorithms (DSA).
              <br /><br />
              Beyond the tech world, I’m passionate about traveling. I enjoy capturing moments through photography and videography, and in my free time, I love editing both photos and videos as a creative outlet.
          </p>

          <div className="flex mt-8">
            <a href="#contact" className="ml-auto">
              {/* <button className="font-merri bg-white text-black px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200 transition cursor-pointer">Lets Connect</button> */}
              <button 
                className="relative font-merri  border text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200 transition cursor-pointer">
                  {/* Spark Border Effect */}
                  
                  <span className="absolute inset-0 rounded-full overflow-hidden mask-gradient animate-flip z-0">
                    <span className="spark-inner"></span>
                  </span>

                  {/* Backdrop */}
                  <span className="absolute inset-[1px] rounded-full bg-black transition-colors duration-200 group-hover:bg-zinc-900 z-10" />
                <span className="relative z-20">Let's Connect</span>
              </button>
            </a>
          </div>


        </div>
      </section>
    </div>
  )
}

export default HeroSection
