
function HeroSection() {

  return (
    <div>
      <section className="snap-start h-screen w-full flex items-center justify-center px-8 pt-24">
        <div className="w-full h-full flex flex-col items-center justify-center text-white ">
          
          <div className="flex space-x-6 items-center">
            <img src="../../public/logos/profile.jpg" alt="" className="w-20 h-20 rounded-full object-cover border-2 border-white mb-6  shadow-md object-center "/>
            <div className=" ">
              <h1 className="">A.RAFAY KHAN</h1>
              <p>I am just a guy who is a vlogger, developer, designer, and DevOps engineer for fun.</p>

              <p>I am currently working as a DevOps Engineer at a well-known MCN, where I primarily focus on cloud infrastructure, automation, and various DevOps technologies across platforms like Azure and AWS.

              In addition to my DevOps expertise, I have a strong command of the MERN stack and have developed multiple small-scale projects and websites using React and related technologies.

              I’m also proficient in Java, especially for competitive programming and data structures & algorithms (DSA).

              Beyond the tech world, I’m passionate about traveling. I enjoy capturing moments through photography and videography, and in my free time, I love editing both photos and videos as a creative outlet.</p>
            </div>

            
          </div>
          

          

          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200 transition">Lets Connect</button>


        </div>
      </section>
    </div>
  )
}

export default HeroSection
