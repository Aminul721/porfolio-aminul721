import React from "react";

const Skill = () => {
  return (
    <section id="skills" className="section section-skills mb-16 lg:mb-36 px-4">
      <div className="container mx-auto">
        <h2 className='text-4xl text-center uppercase font-semibold mb-7 lg:mb-10'>💼 Skills & Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2 lg:mb-3">
              Front-End Development
            </h3>
            <ul className="list-disc list-inside flex flex-col gap-1.5">
              <li>HTML5, CSS3, JavaScript (ES6+)</li>
              <li>Responsive Web Design</li>
              <li>Accessibility, Semantic HTML</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 lg:mb-3">
              Frameworks & Libraries
            </h3>
            <ul className="list-disc list-inside flex flex-col gap-1.5">
              <li>React.js, Next.js</li>
              <li>Tailwind CSS, Sass, Bootstrap</li>
              <li>Redux Toolkit, Framer Motion</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 lg:mb-3">Build & Tooling</h3>
            <ul className="list-disc list-inside flex flex-col gap-1.5">
              <li>Vite, Webpack</li>
              <li>Git, GitHub, NPM, Yarn</li>
              <li>ESLint, Prettier, Husky</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 lg:mb-3">UI & Performance</h3>
            <ul className="list-disc list-inside flex flex-col gap-1.5">
              <li>Figma to Code</li>
              <li>Cross-browser Compatibility</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
