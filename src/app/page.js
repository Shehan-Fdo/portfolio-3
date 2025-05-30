import React from 'react';

export default function Home() {
  return (
    <main className="text-white overflow-auto scrollbar-hide">
      {/* RESPONSIVE CONTAINER - Desktop: less side padding, Mobile: more top padding */}
      <div className="max-w-5xl mx-auto px-2 md:px-8 py-18 md:py-12">
        {/* ABOUT ME SECTION - Main intro paragraph */}
        <div className="mb-12">
          {/* Section title with orange underline */}
          <h1 className="text-3xl md:text-4xl font-bold relative w-fit mb-8">
            About me
            <span className="absolute right-0 -bottom-1.5 h-1 w-1/3 bg-[#F97A00] rounded-full"></span>
          </h1>

          {/* Main description paragraph */}

          <p className="text-[#afafaf] text-lg leading-relaxed max-w-3xl">
            I'm <span className="font-semibold text-white">Kavindu Shehan</span>, an{' '}
            <span className="font-semibold text-white">18-year-old</span> beginner web developer from{' '}
            <span className="font-semibold text-white">Sri Lanka</span>. I'm passionate about learning new 
            technologies and improving my coding skills. I enjoy experimenting with projects, solving challenges, 
            and slowly building up my knowledge in web development. Every day, I'm committed to{' '}
            <span className="font-semibold text-[#F97A00]">growing</span> and becoming better at creating websites.
          </p>
        </div>

        {/* WHAT I DO SECTION - Current focus and learning */}
        <div className="mb-12">
          {/* Section title */}
          <h2 className="text-3xl md:text-4xl font-bold relative w-fit mb-8">
            What I Do
            <span className="absolute right-0 -bottom-1.5 h-1 w-1/3 bg-[#F97A00] rounded-full"></span>
          </h2>
          
          {/* Two column layout: description + focus box */}
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            {/* Left: Main description */}
            <div>
              <p className="text-[#afafaf] text-lg leading-relaxed">
                I'm currently learning <span className="font-semibold text-white">Next.js</span> and{' '}
                <span className="font-semibold text-white">React</span> to build modern, fast, and user-friendly 
                websites. I focus on understanding the basics like components, routing, and styling, applying them 
                to small projects.
              </p>
            </div>
            {/* Right: Current focus highlight box */}
            <div className="bg-[#2b2b2b] rounded-lg p-6 border border-[#4d4d4d]">
              <h3 className="text-xl font-semibold text-[#F97A00] mb-3">Current Focus</h3>
              <ul className="text-[#afafaf] space-y-2">
                <li>• Building responsive web applications</li>
                <li>• Learning modern JavaScript frameworks</li>
                <li>• Creating clean, maintainable code</li>
                <li>• Improving user experience design</li>
              </ul>
            </div>
          </div>
        </div>

        {/* WHAT I'M GOOD AT SECTION - Skills cards in 3 columns */}
        <div className="mb-12">
          {/* Section title */}
          <h2 className="text-3xl md:text-4xl font-bold relative w-fit mb-8">
            What I'm Good At
            <span className="absolute right-0 -bottom-1.5 h-1 w-1/3 bg-[#F97A00] rounded-full"></span>
          </h2>
          
          {/* 3 skill cards grid - responsive: 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {/* Card 1: Problem Solving */}
            <div className="bg-[#2b2b2b] rounded-lg p-6 border border-[#4d4d4d] hover:border-[#F97A00]/50 transition-all duration-300 ease-in-out hover:rotate-1 hover:scale-102">
              <div className="w-12 h-12 bg-[#F97A00]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#F97A00] text-xl">🧩</span>
              </div>
              <h3 className="font-semibold text-white text-lg mb-2">Problem Solving</h3>
              <p className="text-[#afafaf] text-sm">Breaking down complex ideas and finding creative solutions</p>
            </div>
            
            {/* Card 2: Learning Technologies */}
            <div className="bg-[#2b2b2b] rounded-lg p-6 border border-[#4d4d4d] hover:border-[#F97A00]/50 transition-all duration-300 ease-in-out hover:rotate-1 hover:scale-102">
              <div className="w-12 h-12 bg-[#F97A00]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#F97A00] text-xl">📚</span>
              </div>
              <h3 className="font-semibold text-white text-lg mb-2">Learning New Technologies</h3>
              <p className="text-[#afafaf] text-sm">Quickly adapting to new frameworks and tools</p>
            </div>
            
            {/* Card 3: Clean Websites */}
            <div className="bg-[#2b2b2b] rounded-lg p-6 border border-[#4d4d4d] hover:border-[#F97A00]/50 transition-all duration-300 ease-in-out hover:rotate-1 hover:scale-102">
              <div className="w-12 h-12 bg-[#F97A00]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#F97A00] text-xl">💻</span>
              </div>
              <h3 className="font-semibold text-white text-lg mb-2">Clean Websites</h3>
              <p className="text-[#afafaf] text-sm">Building simple, clean, and user-friendly interfaces</p>
            </div>
          </div>
        </div>

        {/* MY SKILLS SECTION - Development skills + Design tools in 2 columns */}
        <div className="mb-12">
          {/* Section title */}
          <h2 className="text-3xl md:text-4xl font-bold relative w-fit mb-8">
            My Skills
            <span className="absolute right-0 -bottom-1.5 h-1 w-1/3 bg-[#F97A00] rounded-full"></span>
          </h2>
          
          {/* Two column layout: Development skills + Design tools */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Development Skills Box */}
            <div className="bg-[#2b2b2b] rounded-lg p-6 border border-[#4d4d4d]">
              <h3 className="text-xl font-semibold text-[#F97A00] mb-6">Development Skills</h3>
              {/* Skills list with descriptions */}
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <span className="font-semibold text-white">JavaScript</span>
                  <span className="text-[#afafaf] text-sm">(basics and ES6+)</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="font-semibold text-white">React.js</span>
                  <span className="text-[#afafaf] text-sm">(components, hooks)</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="font-semibold text-white">Next.js</span>
                  <span className="text-[#afafaf] text-sm">(routing, SSR)</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="font-semibold text-white">HTML & CSS</span>
                  <span className="text-[#afafaf] text-sm">(responsive design, flexbox)</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="font-semibold text-white">Git & GitHub</span>
                  <span className="text-[#afafaf] text-sm">(version control basics)</span>
                </li>
              </ul>
            </div>

            {/* Right: Design & Creative Tools Box */}
            <div className="bg-[#2b2b2b] rounded-lg p-6 border border-[#4d4d4d]">
              <h3 className="text-xl font-semibold text-[#F97A00] mb-6">Design & Creative Tools</h3>
              {/* Design tools grid - 2 columns, hover effects */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#222222] rounded-lg p-3 text-center hover:bg-[#F97A00]/10 transition-all ease-in-out duration-100 hover:scale-103">
                  <span className="font-semibold text-white text-sm">Photoshop</span>
                </div>
                <div className="bg-[#222222] rounded-lg p-3 text-center hover:bg-[#F97A00]/10 transition-all ease-in-out duration-100 hover:scale-103">
                  <span className="font-semibold text-white text-sm">Illustrator</span>
                </div>
                <div className="bg-[#222222] rounded-lg p-3 text-center hover:bg-[#F97A00]/10 transition-all ease-in-out duration-100 hover:scale-103">
                  <span className="font-semibold text-white text-sm">InDesign</span>
                </div>
                <div className="bg-[#222222] rounded-lg p-3 text-center hover:bg-[#F97A00]/10 transition-all ease-in-out duration-100 hover:scale-103">
                  <span className="font-semibold text-white text-sm">Lightroom</span>
                </div>
                <div className="bg-[#222222] rounded-lg p-3 text-center hover:bg-[#F97A00]/10 transition-all ease-in-out duration-100 hover:scale-103">
                  <span className="font-semibold text-white text-sm">Blender</span>
                </div>
                <div className="bg-[#222222] rounded-lg p-3 text-center hover:bg-[#F97A00]/10 transition-all ease-in-out duration-100 hover:scale-103">
                  <span className="font-semibold text-white text-sm">Figma</span>
                </div>
                <div className="bg-[#222222] rounded-lg p-3 text-center hover:bg-[#F97A00]/10 transition-all ease-in-out duration-100 col-span-2 hover:scale-103">
                  <span className="font-semibold text-white text-sm">Premiere Pro</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MY JOURNEY SECTION - Timeline of learning progress */}
        <div className="mb-12">
          {/* Section title */}
          <h2 className="text-3xl md:text-4xl font-bold relative w-fit mb-8">
            My Journey
            <span className="absolute right-0 -bottom-1.5 h-1 w-1/3 bg-[#F97A00] rounded-full"></span>
          </h2>
          
          {/* Timeline items */}
          <div className="space-y-6">
            {/* Timeline item 1 */}
            <div className="flex gap-4 items-start">
              {/* Orange dot */}
              <div className="w-4 h-4 bg-[#F97A00] rounded-full mt-2 flex-shrink-0"></div>
              {/* Content box */}
              <div className="bg-[#2b2b2b] rounded-lg p-6 border border-[#4d4d4d] flex-1">
                <h3 className="font-semibold text-white text-lg mb-2">Started Web Development</h3>
                <p className="text-[#afafaf] mb-2">Began learning HTML, CSS, and JavaScript fundamentals</p>
                <span className="text-[#F97A00] text-sm font-medium">2024</span>
              </div>
            </div>
            
            {/* Timeline item 2 */}
            <div className="flex gap-4 items-start">
              {/* Orange dot */}
              <div className="w-4 h-4 bg-[#F97A00] rounded-full mt-2 flex-shrink-0"></div>
              {/* Content box */}
              <div className="bg-[#2b2b2b] rounded-lg p-6 border border-[#4d4d4d] flex-1">
                <h3 className="font-semibold text-white text-lg mb-2">Diving into React & Next.js</h3>
                <p className="text-[#afafaf] mb-2">Currently mastering modern JavaScript frameworks and building projects</p>
                <span className="text-[#F97A00] text-sm font-medium">2025 - Present</span>
              </div>
            </div>
          </div>
        </div>

        {/* FUTURE GOALS SECTION - Short term & Long term goals */}
        <div className="mb-12">
          {/* Section title */}
          <h2 className="text-3xl md:text-4xl font-bold relative w-fit mb-8">
            Future Goals
            <span className="absolute right-0 -bottom-1.5 h-1 w-1/3 bg-[#F97A00] rounded-full"></span>
          </h2>
          
          {/* Goals container with gradient background */}
          <div className="bg-gradient-to-r from-[#333] to-[#222] rounded-lg p-8 border border-[#4d4d4d]">
            {/* Two column layout: Short term + Long term */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Short term goals */}
              <div>
                <h3 className="text-xl font-semibold text-[#F97A00] mb-4">Short Term</h3>
                <ul className="text-[#afafaf] space-y-2">
                  <li>• Master React and Next.js frameworks</li>
                  <li>• Build 5+ portfolio projects</li>
                  <li>• Learn TypeScript</li>
                  <li>• Contribute to open source projects</li>
                </ul>
              </div>
              {/* Right: Long term goals */}
              <div>
                <h3 className="text-xl font-semibold text-[#F97A00] mb-4">Long Term</h3>
                <ul className="text-[#afafaf] space-y-2">
                  <li>• Become a full-stack developer</li>
                  <li>• Work with international clients</li>
                  <li>• Start my own web agency</li>
                  <li>• Mentor other developers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}