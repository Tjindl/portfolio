import Projects from './Projects'
import './App.css'
import img from "./img.jpeg";
import Connect from "./Connect.jsx"


function App() {


  
  return (
    <>

      <div className='main'>
        <div className='image-container'>
          <img src={img}></img>
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
        <div className='projects-container'>
          <div className='project-heading'>
            <h1>🖥️ Projects</h1>
          </div>
        </div>
        <Projects/>
        <div className="connect-container">
          <Connect />
        </div>
        <div className="message-cont">
          <h6 className='message'>Thank you for visiting. Made with ❤️ by Tushar Jindal</h6>
        </div>

      </div>
    </>
  )
}

export default App
