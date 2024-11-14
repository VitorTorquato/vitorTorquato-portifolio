import { Container } from "./components/container";
import { Header } from "./components/header";

import { FaLinkedin ,FaGithub } from "react-icons/fa";

import heroImg from './assets/heroImg-2.png'

import reactLogo from './assets/techLogos/react.svg'
import typeLogo from './assets/techLogos/TypeScript.svg'
import nodeLogo from './assets/techLogos/nodejs.svg'
import tailwindLogo from './assets/techLogos/Tailwind CSS Icon.svg'
import styledLogo from './assets/techLogos/styled-components-1.svg'
import sassLogo from './assets/techLogos/sass-logo-7702.svg'
import sqliteLogo from './assets/techLogos/sqlite.svg'
import gitLogo from './assets/techLogos/git.svg'

import {projects} from '../data.json'
import { ProjectCard } from "./components/projectCard";

export function App() {

  const techImages = [
    {id:1,name:"react Logo",img:reactLogo},
    {id:2,name:"typeScript Logo",img:typeLogo},
    {id:3,name:"tailwind Logo",img:tailwindLogo},
    {id:4,name:"node.js Logo",img:nodeLogo},
    {id:5,name:"styled-components Logo",img:styledLogo},
    {id:6,name:"sass Logo",img:sassLogo},
    {id:7,name:"sqlite Logo",img:sqliteLogo},
    {id:8,name:"git Logo",img:gitLogo},
  ]
  return(
    <div className="w-full">
        <Header/>
        <Container>
          <main className="w-full">
                <div className="w-full flex items-center justify-center mb-20"
                style={{height:'80dvh'}}
                >
                    <div className="w-full h-full max-w-5xl mx-auto flex items-center flex-col gap-36 md:gap-8 md:h-4/5 md:flex-row"
                    >
                        <div className="w-72 h-72 md:w-96 md:h-96 overflow-hidden border-2 rounded-full flex items-center justify-center mt-20">
                            <img
                            className="w-full h-full object-contain"
                            src={heroImg} alt="Photo of Vitor Torquato" />
                        </div>
                        <div className="flex flex-col items-center gap-4 justify-center">
                            <h1 className="text-3xl md:text-7xl text-slate-100">VITOR TORQUATO</h1>
                            <h2 className="text-2xl md:text-4xl text-center text-slate-500">I'm a Frontend developer</h2>
                        </div>
                    </div>
                </div>

                <section id="aboutme" className="w-full">
                    <h1 className="text-slate-100 text-4xl md:text-7xl text-center mb-8">About me</h1>

                    <div className="w-full max-w-4xl mx-auto">
                      <p className="text-slate-100 text-center mb-7 md:text-lg">Hey there! I’m Vitor Torquato de Sousa, a front-end developer with just over a year in the game. I’m all about creating clean, user-friendly interfaces that don’t just look good but also bring out the real vibe of the brand.</p>
                      <p className="text-slate-100 text-center mb-9 md:text-lg">
                      When I’m not deep in code, you’ll probably find me out on the field or pushing my limits in some sport. I bring that same energy to my work—always ready to take on new challenges and keep leveling up. Let’s connect and build something awesome!</p>
                    </div>
                </section>


                <section id="skills" className="w-full mt-8 md:mt-20">
                    <h1 className="text-slate-100 text-4xl md:text-7xl text-center mt-9 mb-8">Skills</h1>

                    <div className="w-full flex flex-col items-center gap-8 md:flex-row">
                      <div className="flex-1 w-full ">
                        <h1 className=" text-2xl text-center text-slate-500 font-bold mb-2">Languages and Tools:</h1>
                          <p className="text-slate-100 text-center mb-7 md:text-lg">I specialize in creating responsive interfaces with React.js and TypeScript, styled with Tailwind CSS and Styled Components. With backend experience in Node.js and Express and also firebase. Comfortable with Git/GitHub for collaboration, I stay current with essential tools and languages to meet market demands and keep my skills sharp.</p>
                      </div>

                        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 place-items-center mb-9">
                           {
                            techImages.map((tech) => (
                              <div key={tech.id}>
                              <img
                              className="w-20"
                              src={tech.img} alt={tech.name} />
                          </div>
                            ))
                           }
                        </div>
                    </div>
                 
                
                </section>


                <section id="projects" className="max-w-5xl mx-auto">
                    <h1 className="text-slate-100 text-4xl md:text-7xl text-center mt-16 mb-8">Projects</h1>

                    <div className="w-full flex flex-col md:flex-row flex-wrap items-center justify-evenly">

                       {
                        projects && (
                            projects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    id={project.id}
                                    title={project.title}
                                    cover={project.cover}
                                    description={project.description}
                                    tools={project.tools}
                                    urlDeploy={project.urlDeploy}
                                    urlCode={project.urlCode}
                                />
                            ))
                        )
                       }
                    </div>

                </section>

            </main>    

            <footer
                className="w-full h-16 border-t-2 border-slate-200 mt-16 flex items-center justify-evenly"
                >
                  <a href="https://www.linkedin.com/in/vitor-torquatos/" target="_blank"><FaLinkedin size={40} color="#FFF"/></a>
                  <a href="https://github.com/VitorTorquato" target="_blank"><FaGithub size={40} color="#FFF"/></a>
                </footer>
        </Container>

    </div>
  )
}


