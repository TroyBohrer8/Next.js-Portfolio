import React from 'react'
import Image from 'next/image'

function Skills() {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Skills</p>
        <h2>What I Know</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/../public/assets/skills/html.png" alt="" width="64px" height="64px" />
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/../public/assets/skills/css-3.png" alt="" width="64px" height="64px" />
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/../public/assets/skills/js.png" alt="" width="64px" height="64px" />
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/../public/assets/skills/nodejs.png" alt="" width="64px" height="64px" />
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/../public/assets/skills/react.png" alt="" width="64px" height="64px" />
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/../public/assets/skills/aws.png" alt="" width="64px" height="64px" />
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/../public/assets/skills/tailwind.png" alt="" width="64px" height="64px" />
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/../public/assets/skills/python.png" alt="" width="64px" height="64px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
