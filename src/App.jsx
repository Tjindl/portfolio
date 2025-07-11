import Projects from './Projects'
import './App.css'
import img from "./img.jpeg";
import Connect from "./Connect.jsx"
import Navigation from "./Navigation.jsx"
import Skills from "./Skills.jsx"
import AnimatedSection from './components/AnimatedSection'
import ScrollToTop from './components/ScrollToTop'
import ProgressBar from './components/ProgressBar'

function App() {
  return (
    <>
      <ProgressBar />
      <Navigation />
      <div className='main'>
        <AnimatedSection className="fade-up section-spacing">
          <section id="about">
            <div className='image-container'>
              <img src={img} alt="Tushar Jindal"></img>
            </div>
            <div className='name'>
              Tushar Jindal
            </div>
            <div className="title-1">
              BSc Mathematics @ The University of British Columbia
              <br />
              📍 Vancouver, BC
            </div>
            <div className="about">
              <h3>
                Hi! I'm Tushar, a Mathematics student at UBC with a passion for software development and data science. 
                I love solving complex problems and creating elegant solutions using code. 
                My journey combines mathematical precision with creative programming to build meaningful applications.
              </h3>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection className="fade-left section-spacing">
          <section id="skills">
            <Skills />
          </section>
        </AnimatedSection>

        <AnimatedSection className="fade-right section-spacing">
          <section id="projects">
            <div className='projects-container'>
              <div className='project-heading'>
                <h1>🖥️ Projects</h1>
              </div>
            </div>
            <Projects/>
          </section>
        </AnimatedSection>

        <AnimatedSection className="fade-up section-spacing">
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
      <ScrollToTop />
    </>
  )
}

export default App
