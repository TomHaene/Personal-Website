function openResume(){
  window.open('MasterResume.pdf', '_blank');

  return;
}





function french(){
  

}



function languagesMenu(){


  const languageButton = document.querySelector('[data-language]')
  const softwareButton = document.querySelector('[data-software]')
  const hardwareButton = document.querySelector('[data-hardware]')
  
  languageButton.style.backgroundColor='#e44e58';
  hardwareButton.style.backgroundColor='#4EE4DA';
  softwareButton.style.backgroundColor='#4EE4DA';

  

  document.querySelector('.skill1 h3').textContent = "HTML 5";
  document.querySelector('.skill1 img').src = "htmlicon.png";
  document.querySelector('.skill1 p').textContent="Used in creating this site, and also for my NBA web application project.";
  //------------------------------------------------------------//
  document.querySelector('.skill2 h3').textContent = "CSS";
  document.querySelector('.skill2 img').src = "cssicon.png";
  document.querySelector('.skill2 p').textContent="Whenever I use HTML I also use CSS. These two skills are very useful whenever I need a project to have a simple and clean UI.";
  //------------------------------------------------------------//
  document.querySelector('.skill3 h3').textContent = "Assembly Language";
  document.querySelector('.skill3 img').src = "Assembly.png";
  document.querySelector('.skill3 p').textContent="Studied ARMv7-A specifically in class, but the concepts learned allow me to program in any low level assembly language, regardless of the specific ISA.";
  //------------------------------------------------------------//
  document.querySelector('.skill4 h3').textContent = "Java";
  document.querySelector('.skill4 img').src = "javaicon.png";
  document.querySelector('.skill4 img').style.width = "50px";
  document.querySelector('.skill4 p').textContent="Skilled in the (OOP) architecture, and have applied this through android mobile app development, where it's used as a back-end langauge.";
  //------------------------------------------------------------//
  document.querySelector('.skill5 h3').textContent = "Python";
  document.querySelector('.skill5 img').src = "pythonicon.png";
  document.querySelector('.skill5 p').textContent="Use this language for Machine Learning, and also for web application development through Django.";
  //------------------------------------------------------------//
  document.querySelector('.skill6 h3').textContent = "C";
  document.querySelector('.skill6 img').src = "cicon.png";
  document.querySelector('.skill6 p').textContent="Use this lanauge for my microcontroller projects and also on the McGill Robotics team, in particuar in the Arduino IDE and the STM32Cube IDE.";

  return;

}


function softwareMenu(){


  const languageButton = document.querySelector('[data-language]')
  const softwareButton = document.querySelector('[data-software]')
  const hardwareButton = document.querySelector('[data-hardware]')
  
  languageButton.style.backgroundColor='#4EE4DA';
  hardwareButton.style.backgroundColor='#4EE4DA';
  softwareButton.style.backgroundColor='#e44e58';

  document.querySelector('.skill1 h3').textContent = "VSCode";
  document.querySelector('.skill1 img').src = "vscodeicon.png";
  document.querySelector('.skill1 p').textContent= "I use this for almost all of my software projects. I particularly appreciate the github integration and the various shortcuts which both make my life easier.";
  //------------------------------------------------------------//
  document.querySelector('.skill2 h3').textContent = "Android Studio";
  document.querySelector('.skill2 img').src = "androidstudioicon.png";
  document.querySelector('.skill2 p').textContent="I took a McGill course in Android Mobile App Development where we used this. I still use it regularly to create my own Android Apps";
  //------------------------------------------------------------//
  document.querySelector('.skill3 h3').textContent = "EasyEDA";
  document.querySelector('.skill3 img').src = "easyeda-thumbnail.png";
  document.querySelector('.skill3 p').textContent="This is a simple software for PCB design. I find that Altium and Eagle are often overkill for simple projects, which is where I most often use this.";
  //------------------------------------------------------------//
  document.querySelector('.skill4 h3').textContent = "Jupyter Notebooks";
  document.querySelector('.skill4 img').src = "Jupyter_logo.svg.png";
  document.querySelector('.skill4 img').style.width = "50px";
  document.querySelector('.skill4 p').textContent="Really clean and useful VSCode add-on that I use for all my machine learning class assignements. ";
  //------------------------------------------------------------//
  document.querySelector('.skill5 h3').textContent = "Logisim";
  document.querySelector('.skill5 img').src = "logisim-icon-256.png";
  document.querySelector('.skill5 p').textContent="This is a software that allows you to create logic circuits. I used this to create a 16 bit, byte-addressable processor, which really helped gain a deeper understanding into how computers work.  ";
  //------------------------------------------------------------//
  document.querySelector('.skill6 h3').textContent = "Django";
  document.querySelector('.skill6 img').src = "django.jpg";
  document.querySelector('.skill6 p').textContent="Independently learned through a UDEMY course, and applied it to my NBA data science project. Learning this properly taught me how web pages work, (the URL routing process).";

  return;

}


function hardwareMenu(){


  const languageButton = document.querySelector('[data-language]')
  const softwareButton = document.querySelector('[data-software]')
  const hardwareButton = document.querySelector('[data-hardware]')
  
  languageButton.style.backgroundColor='#4EE4DA';
  hardwareButton.style.backgroundColor='#e44e58';
  softwareButton.style.backgroundColor='#4EE4DA';


  document.querySelector('.skill1 h3').textContent = "Arduino";
  document.querySelector('.skill1 img').src = "arduinoicon.png";
  document.querySelector('.skill1 p').textContent="Use this for current ongoing personal projects. I firmly believe that this is the most useful skill I have acquired, as my Arduino experience has helped me understand CPU's and more complicaed microcontrollers so much easier.";
  //------------------------------------------------------------//
  document.querySelector('.skill2 h3').textContent = "Soldering";
  document.querySelector('.skill2 img').src = "soldering.png";
  document.querySelector('.skill2 p').textContent="Use in the Factory, which is McGill's student-run hardware lab at McGill where I am a general manager. We have a soldering station and teach people how to do this, for their own personal projects.";
  //------------------------------------------------------------//
  document.querySelector('.skill3 h3').textContent ="STM32CubeIDE";
  document.querySelector('.skill3 img').src ="stm.png";
  document.querySelector('.skill3 p').textContent="Used in the robotics team, to program the firmware for the STM32 microcontrollers."
  //------------------------------------------------------------//
  document.querySelector('.skill4 h3').textContent= "FPGA's";
  document.querySelector('.skill4 img').src="fpga.png";
  document.querySelector('.skill4 img').style.width = "73px";
  document.querySelector('.skill4 p').textContent="Learnt during a digital logic class in my degree. Used the De1-Soc board which uses the Armv7-A ISA, and we used this to create pattern counting circuits and ripple carry adders.";
  //------------------------------------------------------------//
  document.querySelector('.skill5 h3').textContent ="Rasberry Pi";
  document.querySelector('.skill5 img').src="raspi.png";
  document.querySelector('.skill5 p').textContent="Used this in a group project for my design principles class, where we programmed a BrickPi devkit in order to create a musical instrument";
  //------------------------------------------------------------//
  document.querySelector('.skill6 h3').textContent= "";
  document.querySelector('.skill6 img').src="";
  document.querySelector('.skill6 p').textContent="";

  return;

}













