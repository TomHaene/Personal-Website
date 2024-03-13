import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

function NavBar() {

    function closeNavDrawer() {
      document.getElementById('check').checked = false;
    }
    
    return (
      <nav>
        <input type="checkbox" id='check'/>
        <label htmlFor="check" className='checkbtn'>
          <i className='fas fa-bars'></i>
        </label>
        <label className='logo'> Thomas Haene</label>
        <ul>
          <li onClick={closeNavDrawer}><a href="#home">Home</a></li>
          <li onClick={closeNavDrawer}><a href="#about">About</a></li>
          <li onClick={closeNavDrawer}><a href="#skills">Skills</a></li>
          <li onClick={closeNavDrawer}><a href="#projects">Projects</a></li>
          {/* <li onClick={closeNavDrawer}><a href="#blog">Blog</a></li> */}
          <li onClick={closeNavDrawer}><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
  }

function Hero(){
  return(
    <div className='hero' id='home'>
      <div className='hero-text'>
        <h2>Hi, I'm Thomas Haene</h2>
        <h4>Electrical engineering student </h4>
        <p>Third year Electrical engineering student at McGill University, with interests ranging from robotics all the way to web development. Currently seeking internship opportunities for the foreseeable future </p>
        <Button variant="contained" endIcon={<SendIcon />}>
        <a href="/assets/ThomasHaeneResume.pdf" target="_blank">  See my Resume</a>

</Button>
      </div>
    <img src="/assets/Tom_haene.jpg" alt="A picture of me"/>
    
    </div>
  )
}



function About(){
  return(
    <div className="about" id='about'>

       <div className='about-title'>
            <h2>About me</h2>
            <p>A brief overview</p>
      </div>

      <div className='who-am-i'>
        <h2>Who am I?</h2>
        <p>I am a passionate and results-driven aspiring electrical engineer, with a diverse background, ranging from software to hardware. 
            My journey began with an IB diploma in Abu Dhabi, UAE, where I discovered my interest in physics. 
            This then led me to McGill university in Montreal, where I am now entering my third year in an electrical undergraduate engineering degree. 
            In my free time, I like to build on my strength at the gym, and enjoy playing basketball with friends</p>
      </div>

      <div className='clubs'>
        <h2>Clubs and design teams</h2>

        <div className='robotics'>
          <img src="/assets/robotics.png" alt="" srcSet="" />
          <div className='robotics-text'>
            <h4>McGill Robotics</h4> 
            <p><strong>Position:</strong> Member of the Mars Rover Electrical division</p>
            <p><strong>Roles and responsibilities:</strong> 
            <ul>
              <li>Design PCBs using the popular PCB design software: Altium.</li>
              <li> Have writtten the firmware for the 'Science' subsystem of our Mars Rover. This subsystem served the purpose of simulating the collection of 
                soil samples from Mars and then analyzing them. Achieving this involved writing C code in the IDE STM32CubeIDE, that controlled a series of motors to lower 
                a drill into the soil, and then spin a stepper motor to free up a storage container.
              </li>
              <li>Currently working on designing the embedded firmware for our rover's robotic arm. This involves programming the ODrive motor controllers while taking encoder feedback for precise control. </li>

              
            </ul></p>

          </div>

        </div>

        <div className='factory'>
          <img src="/assets/thefactorylogo.jpg" alt="" srcSet="" />
          <div className='factory-text'>
            <h4>The Factory</h4>
            <p><strong>Position:</strong> One of the General Managers</p>
            <p><strong>Roles and responsibilities:</strong> 
            <ul>
              <li>Web developer for The Factory website. Worked on a team of 4 to design the site using React as our front-end framework. 
                My task specifically was to design the "Office Hours" page.
              </li>
              <li>I also work in coordination with the communications team to create promotional content for The Factory. Including recently acting in, and editing our hardware hackathon promo video. 
              You can watch this video using <a href="https://www.youtube.com/watch?v=MJTxpop-V6E" className='factory-link'> this link</a>
              </li>

              <li>Recently assisted in giving an Arduino workshop to McGill students. This workshop was intended as a general introduction to the Arduino development board and I used my experience to help people get started. </li>
              <li>Currently working on organizing a 'personal project bootcamp' which I am headlining, and involves taking a group of ECSE students who signed up and assisting them in creating their very own projects by the end of the program.</li>
            </ul></p>

          </div>

        </div>

      </div>





    </div>
  )
}





function SkillListItem(props){
  return(
    <ListGroup.Item className='list-item-container' >
      
      <img src={props.imgSrc} alt="" srcSet="" />
      <h3>{props.skillName}</h3>
          
    </ListGroup.Item>
  )
}




function Skills(){
  return(
    <div className="skills" id='skills'>
       <div className='skills-title'>
            <h2>Skills</h2>
            <p>My technical skillset</p>
      </div>
      <br></br>
      <br></br>

      <div className='accordian-container'>
          <Accordion className='left-accordian'>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Hardware skills</Accordion.Header>
            <Accordion.Body>
                <ListGroup as="ol">
                    <SkillListItem
                    skillName = 'PCB Design'
                    imgSrc = '/assets/PCB.png'
                 

                    
                    ></SkillListItem>

                    <SkillListItem
                     skillName = 'Soldering'
                     imgSrc = '/assets/soldering.png'
                    ></SkillListItem>

                    <SkillListItem
                     skillName = 'Arduino'
                     imgSrc = '/assets/arduinoicon.png'
                    ></SkillListItem>

    
                  
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header> Miscellaneous</Accordion.Header>
            <Accordion.Body>
            <ListGroup as="ol">
                    <SkillListItem
                    skillName = 'Git/Github'
                    imgSrc = '/assets/github.png'

                    
                    ></SkillListItem>

              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion className='right-accordian'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Programming languages</Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ol">
                    <SkillListItem
                    skillName = 'C programming language'
                    imgSrc = '/assets/cicon.png'
                    
                    ></SkillListItem>

                    <SkillListItem
                     skillName = 'Python'
                     imgSrc = '/assets/pythonicon.png'
                    
                    ></SkillListItem>

                    <SkillListItem
                     skillName = 'JavaScript'
                     imgSrc = '/assets/JavaScripticon.png'
                    
                    ></SkillListItem>

                       <SkillListItem
                     skillName = 'HTML'
                     imgSrc = '/assets/htmlicon.png'
                    
                    ></SkillListItem>

                       <SkillListItem
                     skillName = 'CSS'
                     imgSrc = '/assets/cssicon.png'
                    
                    ></SkillListItem>

                    <SkillListItem
                     skillName = 'Java'
                     imgSrc = '/assets/javaicon.png'

                    
                    ></SkillListItem>

                    <SkillListItem
                     skillName = 'ARM assembly'
                     imgSrc = '/assets/ASMIMG.png'

                    
                    ></SkillListItem>

                    <SkillListItem
                     skillName = 'VHDL'
                     imgSrc = '/assets/VHDL.jpeg'

                    
                    ></SkillListItem>

                  
              </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Software</Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ol">

                    <SkillListItem
                    skillName = 'Altium Designer'
                    imgSrc = '/assets/altiumicon.png'
                    
                    ></SkillListItem>


                  <SkillListItem
                    skillName = 'React frontend framework'
                    imgSrc = '/assets/react.png'
                    
                    ></SkillListItem>
                    

                    <SkillListItem
                     skillName = 'EasyEDA'
                     imgSrc = '/assets/easyeda-thumbnail.png'
                    
                    ></SkillListItem>

                    <SkillListItem
                    skillName = 'Android Studio'
                    imgSrc = '/assets/androidstudioicon.png'
                    
                    ></SkillListItem>

                    <SkillListItem
                    skillName = 'STM32CubeIDE'
                    imgSrc = '/assets/stmicon.png'
                    
                    ></SkillListItem>

                    <SkillListItem
                    skillName = 'Intel Quartus Prime'
                    imgSrc = '/assets/quartusicon.png'
                    
                    ></SkillListItem>
                    
                 
              </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>

    </div>
  )
}


function SimpleCarousel() {


  return (
    <Carousel>
      <Carousel.Item>

<div className='carousel-card'>
<img src='/assets/SolderingProject.jpg' alt="" srcSet="" className='soldering-pic'/>

<div className='carousel-text'>
<h3>Stove alarm embedded device</h3>
<p>This device is centered around a temperature sensor and an Arduino UNO to sound an alarm when the temperature reading exceeds a user-set threshold for a certain ammount of time. The idea was to send a loud alert to users when their stove was left on.</p>
<Button variant="contained" endIcon={<SendIcon />} >
  <Link to='/projects'>
      Find out more
  </Link>

  
</Button>

</div>

</div>

</Carousel.Item>

      <Carousel.Item>

      <div className='carousel-card'>
      <img src='/assets/Luka.png' alt="" srcSet="" />

      <div className='carousel-text'>
        <h3>NBA data science project</h3>
        <p>Built using Django and Python. This project utilized web scraping of the nba.com/stats web page</p>
        <div className='buttons-container'>
                <Button variant="contained" endIcon={<SendIcon />}>
                <a href='http://tomhaene.pythonanywhere.com/'> Try it out </a>
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
                <a href='http://tomhaene.pythonanywhere.com/'> View GitHub Code</a>
            </Button>
        </div>
        

      </div>

    </div>

        
      </Carousel.Item>

      <Carousel.Item>
          <div className='carousel-card'>
          <img src='/assets/conceptConvos.png' alt="" srcSet="" />
  
          <div className='carousel-text'>
          <h3>Concept Convos</h3>
          <p>Concept Convos is a web application that creates a short podcast with your two favorite celebrities, using topics that you decide! There are currently over 7 different famous stars/characters to choose from, leading to 50+ combinations of voices to keep you entertained for hours! This project was built as a part of a McGill hackathon that I participated in with 3 friends.</p>
          <Button variant="contained" endIcon={<SendIcon />}>
              <a href='https://devpost.com/software/concept-convos'> Find out more</a>
          
          </Button>
  
          </div>
  
          </div>

      
      </Carousel.Item>

      

      <Carousel.Item>
          <div className='carousel-card'>
              <img src='/assets/webpic.png' alt="" srcSet="" />
      
              <div className='carousel-text'>
              <h3>Tom's website V3</h3>
              <p>This is my third iteration of my personal portfolio site. This version incorperated my newly learned React skills, which is a front-end web framework. This project also introduced me to using React component libraries, in particular, the Boostrap React library was extremely useful.</p>
              <Button variant="contained" endIcon={<SendIcon />}>
                  <a href='https://github.com/TomHaene/Tom-s-Website-V3.2'> View GitHub Code</a>
              
              </Button>
      
              </div>
      
          </div>

      </Carousel.Item>

    
  

      
    </Carousel>
  );
}


function Projects(){
  return(
    <div className='projects' id='projects'>
      
      <div className='projects-title'>
            <h2>Projects</h2>
            <p>Personal Projects I have completed, as well as some recent work that I have helped contributed towards.</p>
      </div>

      <SimpleCarousel >
        
      </SimpleCarousel>
      

    </div>
  )
  
}



function BlogItem(props){
  return(
    <div className='blog-item'>
      <img src= {props.imgSrc} alt="" srcSet="" />
      <div className='blog-item-text'>
        <h3>{props.title}</h3>
        <p>{props.summary}</p>
      </div>
      
    </div>
  )
}
function BlogList({ articles }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = articles && articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div>
      <TextField
        sx={{
          input: { color: 'white' }, // changes the text color
          label: { color: 'white' }, // changes the color of the label
          '& label.Mui-focused': {
            color: '#c75108', // changes the color of the label on focus
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white', // changes the border color
            },
            '&:hover fieldset': {
              borderColor: '#c75108', // changes the border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#c75108', // changes the border color on focus
            },
          },
        }}
        label="Search my blog posts"
        variant="outlined"
        fullWidth
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='blog-width'>
        <List>
          {filteredArticles.map((article, index) => (
            <ListItem key={index}><BlogItem
              title = {article.title}
              imgSrc = {article.imgSrc}
              summary = {article.summary}
            ></BlogItem></ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}


function Blog() {
  const articles = [
    { title: 'No blog posts yet', summary: 'I am currently working on writing up some blog posts about the books I have been reading' , imgSrc: '/assets/workinprogress.jpg'},
    { title: 'No blog posts yet', summary: 'I am currently working on writing up some blog posts about the books I have been reading' , imgSrc: '/assets/workinprogress.jpg'},
    { title: 'No blog posts yet', summary: 'I am currently working on writing up some blog posts about the books I have been reading' , imgSrc: '/assets/workinprogress.jpg'},
    // { title: 'Deep Work, by Cal Newport', summary: 'In this blog post, I reflected on my key takeaways from this very interesting book.' , imgSrc: '/assets/deepwork.jpeg'},
    

    // ... more articles
  ];

  return (
    <div className='blog' id='blog'>
      <div className='blog-title'>
        <h2>My Blog</h2>
        <p>Writing about things I am passionate about</p>
      </div>
      <BlogList articles={articles} />
    </div>
  );
}




function Contact(){
  return(
    <div className='contact' id='contact'>
      
      <div className='contact-title'>
            <h2>Contact me</h2>
            <p>Let's get in touch</p>
      </div>

      <div className='contact-container'>
        <div className='contact-item'>
          <a href="mailto:tom@haene.org"><img src='/assets/emailwhite.png' alt="" srcSet="" /></a>
          <div className='contact-item-text'>
            <h2>Email</h2>
            <p className='email'><a href="mailto:tom@haene.org">tom@haene.org</a></p>
          </div>

        </div>

        <div className='contact-item'>
          <a href="https://www.linkedin.com/in/thomas-haene-a68b44220/"> <img src='/assets/linkedin.png' alt="" srcSet="" /></a>
         
          <div className='contact-item-text'>
            <h2>LinkedIn</h2>
            <p><a href="https://www.linkedin.com/in/thomas-haene-a68b44220/"> Visit my LinkedIn </a></p>
          </div>

        </div>

        <div className='contact-item'>
          <i className='fas fa-map-marker-alt location'></i>
          <div className='contact-item-text'>
            <h2>Location</h2>
            <p>Montreal, QC</p>
          </div>

        </div>

      </div>
    
    </div>
  )
}


function Footer(){
  return(
    <div className='footer'>
        <p>Site designed by Thomas Haene © </p>
        <a href="https://github.com/TomHaene"> <img src="/assets/github.png" alt="" srcSet="" /></a> 
    </div>

  )
}

function Homepage(){
    return(
        <>
        <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
    )
   

}

export default Homepage