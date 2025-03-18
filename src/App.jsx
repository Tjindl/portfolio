import Projects from './Projects'
import './App.css'
import img from "./img.jpeg";
import Connect from "./Connect.jsx"
import Navigation from "./Navigation.jsx"
import Skills from "./Skills.jsx"
import AnimatedSection from './components/AnimatedSection'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <div className='main'>
        <AnimatedSection className="fade-up">
          <section id="about">
            <div className='image-container'>
              <img src={img} alt="Tushar Jindal" loading="lazy"></img>
            </div>
            <div className='links-container'>
              <div className='move-protection'>
                <div className='name'><h2>Tushar Jindal</h2></div>
              </div>
            </div>
            <div className="title-1">
              BSc Mathematics @ The University of British Columbia
             <b></b>📍 Vancouver, BC
            </div>
            <div className="about">
              <h3>BSc Mathematics student at UBC Vancouver with a robust foundation in data mathematics, computer science, and data science, actively seeking opportunities to apply my analytical skills in a practical setting. Passionate about solving complex problems, I excel at leveraging mathematical principles to develop innovative solutions for real-world challenges. Proficient in data analysis, algorithms, and programming, I aim to contribute to impactful projects while further enhancing my technical expertise. Recognized for my adaptability and strong collaborative mindset, I am eager to tackle challenges and deliver meaningful results in fast-paced, data-driven environments....</h3>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection className="fade-left">
          <section id="skills">
            <Skills />
          </section>
        </AnimatedSection>

        <AnimatedSection className="fade-right">
          <section id="projects">
            <div className='projects-container'>
              <div className='project-heading'>
                <h1>🖥️ Projects</h1>
              </div>
            </div>
            <Projects/>
          </section>
        </AnimatedSection>

        <AnimatedSection className="fade-up">
          <section id="connect">
            <div className="connect-container">
              <Connect />
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection className="scale">
          <div className="message-cont">
            <h6 className='message'>Thank you for visiting. Made with ❤️ by Tushar Jindal</h6>
          </div>
        </AnimatedSection>
      </div>
    </>
  )
}

export default App
