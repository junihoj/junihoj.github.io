import { useState } from 'react'
import "./Home.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../Components/Navbar/Navbar'
import AbtPic from '/Images/onyekachukwu-pic-resize.jpg'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faPenRuler, faMicrochip, faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import useHandleContactForm from '../../hooks/form/use-handle-contact-form';

function Home() {
  const { formik } = useHandleContactForm();
  // About section functionality

  const [activeTab, setActiveTab] = useState('skills');

  const openTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  const handleDownloadResume = async () => {
    try {
      // Fetch the resume file from the public folder
      const response = await fetch('/EZE ONYEKACHUKWU Resume 01.pdf');
      const blob = await response.blob();

      // Create a URL for the blob object
      const url = window.URL.createObjectURL(new Blob([blob]));

      // Create an anchor element with the URL and trigger download
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Andres-Choque-Resume.pdf');
      document.body.appendChild(link);
      link.click();

      // Cleanup
      link?.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
      toast.error('Error downloading resume')
    }
  };

  // View more functionality

  // const [showMore, setShowMore] = useState(false);

  // const handleViewMore = () => {
  //   setShowMore(true);
  // };

  // const handleHide = () => {
  //   setShowMore(false);
  // };

  // Contact form functionality

  // Icon library
  if (formik.errors) {
    console.log("FORMIK ERROR ", formik.errors)
  }
  library.add(faCode, faPenRuler, faMicrochip, faLink, faEnvelope, faInstagram, faLinkedin, faGithub)


  return (
    <div>
      <div className='header-section' id='header'>
        <div className='container'>
          <Navbar />
          <div className='header-text'>
            <p>Hi, I'm</p>
            <h1>Onyekachukwu Eze</h1>
            <h2>Let's build solutions together.</h2>
            <div className='get-in-touch'>
              <a href="#contact" className="header-btn" aria-label='Get-started-button'>Get In Touch</a>
            </div>
          </div>
        </div>
      </div>

      <div className='about-section' id='about'>
        <div className='container'>
          <div className='row'>
            <div className='abt-col-1'>
              <img src={AbtPic} alt="Andres-Choque-Professional" />
            </div>
            <div className="abt-col-2">
              <h1 className="sub-header">Who am I</h1>
              <p>

                I'm Eze Onyekachukwu, a versatile full-stack developer adept in React Native, Flutter, Python, PHP, Laravel, and Django. Driven by a passion for problem-solving and continuous improvement, I excel in crafting seamless mobile and web solutions. With a keen eye for adaptation, I thrive in dynamic environments, leveraging technologies like React, Angular, and Node.js to deliver excellence. Backed by certifications in Machine Learning and Data Science, I bring a unique blend of analytical insights and technical expertise to every project.
              </p>

              <div className="tabs">
                <p className={`tab-links ${activeTab === 'skills' ? 'act-link' : ''}`} onClick={() => openTab('skills')}><strong>Skills</strong></p>
                <p className={`tab-links ${activeTab === 'experience' ? 'act-link' : ''}`} onClick={() => openTab('experience')}><strong>Experience</strong></p>
                <p className={`tab-links ${activeTab === 'education' ? 'act-link' : ''}`} onClick={() => openTab('education')}><strong>Education</strong></p>
              </div>

              <div className={`tab-conts ${activeTab === 'skills' ? 'act-tab' : ''}`} id="skills">
                <ul>
                  <li><span>Languages</span><br />English and Spanish</li>
                  <li><span>Front-End</span><br />React, Angular, Vue,  HTML, CSS, Bootstrap, JavaScript, TypeScript, tailwindcss, material ui</li>
                  <li><span>Back-End</span><br />Node, Express, Python, Django, PHP, Laravel</li>
                  <li><span>Database</span><br />MongoDB, MySQL, PostgreSQL</li>
                  <li><span>Tools</span><br />Git, GitHub, BitBucket, Azure DevOps, Jira, Postman, Selenium, Docker, Jenkins</li>
                  <li><span>Operating Systems</span><br />Windows, Ubuntu, MacOS</li>
                </ul>
              </div>

              <div className={`tab-conts ${activeTab === 'experience' ? 'act-tab' : ''}`} id="experience">
                <div>
                  <div className='experience-header-text'>
                    <div>
                      <p>Full-stack Devloper(MERN-STACK)</p>
                      <p>Punch Group (Remote) <span><a href='https://punch.cool'></a></span></p>
                    </div>
                    <p>APRIL 2022 - MARCH 2024</p>
                  </div>

                  <ul>
                    <li className="experience-bullet">•	Spearheaded the development of frontend solutions using React, Material UI, and Typescript, resulting in a 20% improvement in user experience and system efficiency.</li>
                    <li className="experience-bullet">•	Designed and implemented scalable database structures using MongoDB, optimizing data retrieval and storage processes.</li>
                    <li className="experience-bullet">•	Developed and maintained robust RESTful APIs using Node.js and Express.js, ensuring efficient data flow and system integration.</li>
                    <li className="experience-bullet">•	Ensured high-quality code by conducting thorough testing before submitting builds to QA, minimizing post-production issues.</li>
                    <li className="experience-bullet">•	Although I was employed as MERN but also helped out in building python project using Django and I also did web scrapping with selenium for lead-generation because I also an experienced python developer.</li>
                  </ul>


                </div>
              </div>

              <div className={`tab-conts ${activeTab === 'education' ? 'act-tab' : ''}`} id="education">
                <ul>
                  <li><span>Sept 2014 - Jul 2018</span><br />BS in Statistics | University of Nigeria Nsukka</li>
                </ul>
              </div>
            </div>
            <div className="resume">
              <button onClick={handleDownloadResume} className="btn" aria-label='Download-resume-button'>Download Resume</button>
            </div>
          </div>
        </div>

      </div>

      <div className='services-section' id='services'>
        <div className='container'>
          <h1 className="sub-header">Services</h1>

          <div className="services-list">
            <div>
              <FontAwesomeIcon icon={faCode} />
              <h2><strong>Web & App Development</strong></h2>
              <p>Web Applications are key for a quality product. I enjoy writing in multiple languages helping the client to reach their goals.</p>
            </div>

            <div>
              <FontAwesomeIcon icon={faPenRuler} />
              <h2><strong>Web Design</strong></h2>
              <p>User Experience (UX) is the most important aspect of a quality product. I love designing products using multiple design tools.</p>
            </div>

            <div>
              <FontAwesomeIcon icon={faMicrochip} />
              <h2><strong>AI Development</strong></h2>
              <p>With the growth of Artificial Intelligence it's a priority to build software and integrate AI solutions to keep up with innovation.</p>
            </div>
          </div>

        </div>
      </div>

      <div className='portfolio-section' id='portfolio'>
        <div className='container'>
          <h1 className='sub-header'>Portfolio</h1>
          <div>
            <p> COMING SOON...</p>
          </div>
          {/*       
          <div className='work-list'>
            <div className="work">
              <img src={workpic1} alt='Tactica-ministries' />
              <div className="layer">
                <h3><strong>TACTICA Ministries</strong></h3>
                <p>TACTICA Ministries trains and helps the public safety community internationally.</p>
                <a href="https://tacticaministries.org/" target="_blank" rel="noreferrer noopener" aria-label='Tactica-ministries-website-link'> <FontAwesomeIcon icon={faLink} /></a>
              </div>
            </div>

            <div className="work">
              <img src={workpic2} alt='Drontec' />
              <div className="layer">
                <h3><strong>Drontec</strong></h3>
                <p>Drontec allows customers to purchase highly specialized drones for any task.</p>
                <a href="https://drontec.org/" target="_blank" rel="noreferrer noopener" aria-label='Drontec-website-link'> <FontAwesomeIcon icon={faLink} /></a>
              </div>
            </div>

            <div className="work">
              <img src={workpic3} alt='Creotec' />
              <div className="layer">
                <h3><strong>CREOTEC</strong></h3>
                <p>CREOTEC allows customers to purchase prosthetics for the people in need.</p>
                <a href="https://creo-tec.com/" target="_blank" rel="noreferrer noopener" aria-label='Creotec-website-link'> <FontAwesomeIcon icon={faLink} /></a>
              </div>
            </div>
          </div> */}



          {/* <div className="button-container">
            {!showMore && <button className="btn" id="view-more" aria-label='View-more-button' onClick={handleViewMore}>View more</button>}
            {showMore && <button className="btn" id="hide" aria-label='Hide-button' onClick={handleHide}>Hide</button>}
          </div> */}

        </div>
      </div>

      <div className='contact-section' id='contact'>
        <div className='container'>
          <div className='row'>
            <div className="contact-l">
              <h1 className="sub-header">Let's Connect</h1>
              <p><FontAwesomeIcon icon={faEnvelope} /> ezeonyekachukwu98@gmail.com</p>
              <div className="social">
                <a href="https://www.instagram.com/evaristus_j/" target="_blank" rel="noreferrer noopener" aria-label='Andres-choque-instagram-account'><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://www.linkedin.com/in/onyekachukwu-eze-5107541a2/" target="_blank" rel="noreferrer noopener" aria-label='Andres-choque-linkedin-account'><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/junihoj" target="_blank" rel="noreferrer noopener" aria-label='Andres-choque-github-account'><FontAwesomeIcon icon={faGithub} /></a>
              </div>
            </div>

            <div className="contact-r">
              <div className="form">
                <input type="text" name="name" placeholder="Name" onChange={formik.handleChange} value={formik.values.name} />
                <span className="error-text">{formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : ''}</span>
                <input type="email" name="email" placeholder="Email" onChange={formik.handleChange} value={formik.values.email} />
                <span className="error-text">
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : ''}
                </span>
                <textarea name="message" id="" rows={6} placeholder="Message" onChange={formik.handleChange} value={formik.values.message}></textarea>
                <span className="error-text text-area-error">
                  {formik.touched.message && formik.errors.message
                    ? formik.errors.message
                    : ''}
                </span>
                <button type="submit" className="btn btncv" onClick={(e:any)=>formik.handleSubmit()}>{formik.isSubmitting ? "sending..." : "Submit"}</button>
              </div>
              <span id="submit-msg"></span>
            </div>

          </div>
        </div>

        <div className="copyright">
          <p>©️ 2024 Onyekachukwu Eze. All rights reserved.</p>
        </div>
      </div>

    </div>
  )
}

export default Home