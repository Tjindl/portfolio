import Projects from './Projects'
import './App.css'
import img from "./img.jpeg";



function App() {


  
  return (
    <>
    <div className='main'>
      <div className='image-container'>
        <img src={img}></img>
        <h3>BSc Mathematics student at UBC Vancouver with a robust foundation in data mathematics, computer science, and data science, actively seeking opportunities to apply my analytical skills in a practical setting. Passionate about solving complex problems, I excel at leveraging mathematical principles to develop innovative solutions for real-world challenges. Proficient in data analysis, algorithms, and programming, I aim to contribute to impactful projects while further enhancing my technical expertise. Recognized for my adaptability and strong collaborative mindset, I am eager to tackle challenges and deliver meaningful results in fast-paced, data-driven environments....</h3>
      </div>
      <div className='links-container'>
      <div className='move-protection'>
        <div className='name'> <h1>Tushar Jindal 😀   </h1> </div>
      </div>
      <div className='button-container'>
        <img src="data:image/png;base64,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"></img>
        <a className="linkButton" href="https://www.linkedin.com/in/tushar-jindal-97602420b/"> LinkedIn</a>
      </div>
      <div className='button-container'>
        <img src="data:image/png;base64,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"></img>
        <a className="linkButton" href="https://github.com/Tjindl">GitHub</a>
      </div>
      <div className='button-container'>
        <img src="https://static.vecteezy.com/system/resources/previews/022/484/516/non_2x/google-mail-gmail-icon-logo-symbol-free-png.png"></img>
        <a className="linkButton" href="mailto:tushar.bzp05@gmail.com">Email</a>
      </div>
      </div>
      <div className='projects-container'>
        <div className='project-heading'>
          <h1>Projects 🖥️</h1>
        </div>
      </div>
      <Projects />
      <div className="message-cont">
        <h6 className='message'>Thank you for visiting. Made with ❤️ by Tushar Jindal</h6>
      </div>

    </div>
    </>
  )
}

export default App
