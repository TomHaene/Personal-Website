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
          <li onClick={closeNavDrawer}> <Link to='/'>
                Return to Home Page
            </Link></li>
        </ul>
      </nav>
    );
  }





function ProjectTemplate(){
    return(
        <div className="project-template">
          <h3 className='project-title'> Stove alarm embedded device</h3>
        <div className="purpose">
            <h4>Purpose of project</h4>
            <ul>
                <li>The primary goal of this project was to move beyond the digital realm and create a physical device with practical application. Specifically, the device is designed to mitigate the risk of leaving a stove unattended by employing a temperature-based alert system. It operates on a simple yet effective principle: if the sensor detects a temperature above a predefined threshold for an extended period, it suggests that the stove may have been inadvertently left on. To avoid false alarms during normal cooking, the device incorporates a customizable delay. For example, setting this delay to double your average cooking time—say 20 minutes to 40 minutes—ensures that only genuinely forgotten stoves trigger the alarm, accompanied by a conspicuous red LED for added visibility. This thoughtful integration of adjustable settings makes the device adaptable to individual cooking routines, providing a tailored approach to kitchen safety.
                </li>
            </ul>
         
        </div>
        <div className="description">
            <h4>What is the project?</h4>
            <ul>
                <li>The device features three user interfaces located on the right side, as illustrated in Figure 2. These interfaces consist of two potentiometers and a reset button. The upper potentiometer allows users to define the critical temperature level, while the lower one adjusts the duration before the alarm is activated. The LCD screen displays these set parameters on its bottom row, labeled as T_lim for temperature and t_lim for time. The reset button serves a crucial function; it enables users to restart the timer in instances where the pre-set time threshold, such as a brief 10-minute interval, proves insufficient due to ongoing cooking activities. A demonstration of how these controls operate is provided in the video depicted in Figure 1.</li>
            </ul>
        </div>
        <div className="demo">
            <h4>Final project demonstration</h4>
            <div className='demo-container'>
            <div className="demo-container-top">
            <figure>
                    <video src="/assets/StoveProjectVideo.mp4" controls></video>
                    <figcaption>Figure 1 - Video showcasing the device's alert functionallity</figcaption>
                </figure>
               
                <figure>
                    <img src="/assets/frontpic.jpg" alt="" srcset="" />
                    <figcaption>Figure 2 - Front-on view of the device</figcaption>
                </figure>
                
            </div>
            <div className='demo-container-bottom'>
                <figure>
                    <img src="/assets/sidepic.jpg" alt="" srcset="" />
                    <figcaption>Figure 3 - Side view of the device</figcaption>
                </figure>
                <figure>
                    <img src="/assets/backpic.jpg" alt="" srcset="" />
                    <figcaption>Figure 4 - Backside view of the device</figcaption>
                </figure>
                
                
                
              
            </div>

            </div>
         

          
        </div>



        <div className="Approach">
            <h4>Project timeline</h4>
            <ol>
                <li>I started by designing my project on a breadboad, and by writing the Arduino code using the Arduino IDE</li>
                <li>I then designed a PCB for the project using EasyEDA, this was my first PCB I've ever designed 
                    for a project. However after I soldered the parts onto the PCB I discovered some flaws with my design, these were: </li>
                    <ul>
                        <li>I had not connected a pull-up or pull-down resistor to my reset button. The Arduino board does have a built in
                            pull-up resistor, but due to the way that I routed my button pins, I'd need a pull-down resistor, which is not built-in to the board already. 
                            This meant I'd need to cut traces and externally attatch a resistor, which would be doable but not ideal.
                        </li>
                        <li>
                            Secondly, the PCB I designed was not very space-efficient, and took up a significant ammount of space. It was also planar in nature, and therefore would require some leg supports to elevate it off the ground which would need to be installed. 
                        </li>
                        <li> Finally, I initially planned on just soldering a female header onto the PCB so that I could re-use the LCD display, however since 
                            the male pins of the LCD display are all on one side, this meant that the LCD display jutted out quite significantly from the PCB and was sagging towards one side. This led to the display sometimes 
                            flickering when you moved the device. This can be seen in Figure 5 if you look carefully.  </li>
                        
                    </ul>
                    <br/>
                With these in mind, I thought it might be best to move away from the PCB approach, and instead use a new approach that I had actually been wanting to learn for quite some time: the use of Perfboards/Prototype boards. This was a way better choice for this project,
                as a PCB was not really necessary due to the small number of relatively large components. In addition, it allowed me to further improve my newly acquired soldering skill.
                <li>I used a arduino UNO perfboard shield and connected that to an even larger perfboard to give me more space. I then soldered the components onto this board, along with jumper wires. This turned out perfectly. </li>
            </ol>
        </div>

        <div className="Things learned">
            <h4>What I learned</h4>
            <ul>
                <li>Soldering through hole components</li>
                <li>Pull-up and pull-down resistors, and painfully, why they are so important (I didn't include one for my PCB). </li>
                <li>The use of a perfboard/prototype board</li>
                <li>More about PCB design, and how to use the software easyEDA</li>
                <li>Experience into knowing when a PCB is needed for a project, or when just a perfboard will suffice. </li>
                <li>Improved my skills in programming using the Arduino IDE. This included the use of things like the UNO onboard timer, and the Interface functions that arduino provides for interacting with it.</li>
            </ul>
        </div>
        <div className="project-appendix">
            <h4>Project Appendix</h4>
        </div>
        <div className='appendix-img-container'>
            <div className='appendix-img-top'>  
                <figure>
                    <img src="/assets/PCB_sidepic.jpg" alt="" srcset="" />
                    <figcaption>Figure 5 - Side view of the PCB</figcaption>
                </figure>
                <figure>
                    <img src="/assets/PCB_toppic.jpg" alt="" srcset="" />
                    <figcaption>Figure 6 - Front-on view of the PCB</figcaption>
                </figure>

            </div>

            <div className='appendix-img-bottom'>
                <figure>
                    <img src="/assets/pcb_schematic.png" alt="" srcset="" />
                    <figcaption>Figure 7 - Schematic view of the PCB</figcaption>
                </figure>
                <figure>
                    <img src="/assets/pcb_routes.png" alt="" srcset="" />
                    <figcaption>Figure 8 - Routing view of the PCB</figcaption>
                </figure>



            </div>

              





        </div>
            

        </div>
      

    )
}



function Projects(){
    return(
        <>
            <NavBar></NavBar>
           <ProjectTemplate></ProjectTemplate>
    </>
    )

}

export default Projects