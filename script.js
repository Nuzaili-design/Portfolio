/* ----- NAVIGATION BAR FUNCTION ----- */ 
function myMenuFunction(){
    let menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu"; 
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }




/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 1500,
        reset: false    
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box', {
  origin: 'right',
  distance: '40px', // optional: reduce for subtler effect
  duration: 800,    // faster animation
  interval: 200     // keeps staggered appearance
});


/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: false
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: false
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navMenu = document.getElementById("myNavMenu");
    navMenu.className = "nav-menu"; // Remove 'responsive'
  });
});
// Toggle theme on click
const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  
  // Optional: store preference
  const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});
// Load stored theme and language on page load
window.addEventListener("DOMContentLoaded", () => {
  // Load dark mode preference
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  // Load language preference
  const savedLang = localStorage.getItem("lang") || "en"; // Default to English
  setLanguage(savedLang);
});

 // Arabic And English 

 const translations = {
  en: {
    name: "Abdulaziz Alnuzaili",
    title: "Software Engineer and Data Analyst with a passion for building intelligent, user-focused applications and extracting insights from data.",
    about: "About Me",
    aboutContent: "I am a Software Engineer with a background in both web development and data analysis. I develop responsive websites using HTML, CSS, JavaScript, PHP, and MySQL. In addition, I analyze and visualize data using tools like Excel, Power BI, and SQL to uncover insights and support data-driven decisions.",
    frontend: "Frontend",
    backend: "Backend",
    dataAnalysis: "Data Analysis",
    projects: "Projects",
    project1Title: "Smart Quiz Website",
    project1Desc: "Admin can create quizzes, and students can take them and view results in real-time.",
    project2Title: "Personal Blog website",
    project2Desc: "Bloggers can create, publish, and manage their personal blogs easily.",
    project3Title: "Car Parking System",
    project3Desc: "Users can log in, view available slots, and book parking in real-time.",
    contact: "Get in touch",
    contactSub: "Do you have a project in your mind, contact me here",
    findMe: "Find Me",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Message",
    sendBtn: "Send",
    scrollDown: "Scroll Down",
     navHome: "Home",
  navAbout: "About",
  navProjects: "Projects",
  navContact: "Contact",
  typing: ["Software Engineer", "Data Analyst"]
  },
  ar: {
    name: "عبدالعزيز النزلي",
    title: "مهندس برمجيات ومحلل بيانات شغوف ببناء تطبيقات ذكية تركز على المستخدم واستخلاص الرؤى من البيانات.",
    about: "نبذة عني",
    aboutContent: " مهندس برمجيات مهتم في تطوير الويب وتحليل البيانات. أقوم بتطوير مواقع باستخدام HTML,CSS,JavaScript,PHP, وMySQL. بالإضافة إلى ذلك، أحلل وأعرض البيانات باستخدام Excel وPower BI وSQL لاستخلاص رؤى ودعم اتخاذ قرارات تعتمد على البيانات.",
    frontend: "الواجهة الأمامية",
    backend: "الواجهة الخلفية",
    dataAnalysis: "تحليل البيانات",
    projects: "المشاريع",
    project1Title: "موقع اختبار ذكي",
    project1Desc: "يمكن للمشرف إنشاء اختبارات، ويمكن للطلاب تأديتها ورؤية النتائج في الوقت الفعلي.",
    project2Title: "مدونة شخصية",
    project2Desc: "يمكن للمدونين إنشاء ونشر وإدارة مدوناتهم بسهولة.",
    project3Title: "نظام مواقف السيارات",
    project3Desc: "يمكن للمستخدمين تسجيل الدخول، ورؤية المواقف المتاحة، وحجز مواقف في الوقت الفعلي.",
    contact: "تواصل معي",
    contactSub: "هل لديك مشروع في ذهنك؟ تواصل معي من هنا",
    findMe: "تجدني على",
    namePlaceholder: "الاسم",
    emailPlaceholder: "البريد الإلكتروني",
    messagePlaceholder: "رسالتك",
    sendBtn: "إرسال",
    scrollDown: "مرر للأسفل",
      navHome: "الرئيسية",
  navAbout: "عني",
  navProjects: "المشاريع",
  navContact: "للتواصل",
  typing: ["مهندس برمجيات", "محلل بيانات"]

  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang); // Save selected language

  document.querySelector(".featured-text-card span").innerText = translations[lang].name;
  document.querySelector(".featured-text-info p").innerText = translations[lang].title;
  document.querySelector("#about .top-header h1").innerText = translations[lang].about;
  document.querySelector(".about-info p").innerText = translations[lang].aboutContent;
  document.querySelectorAll(".skills-box")[0].querySelector(".skills-header h3").innerText = translations[lang].frontend;
  document.querySelectorAll(".skills-box")[1].querySelector(".skills-header h3").innerText = translations[lang].backend;
  document.querySelectorAll(".skills-box")[2].querySelector(".skills-header h3").innerText = translations[lang].dataAnalysis;
  document.querySelector("#projects .top-header h1").innerText = translations[lang].projects;
  document.getElementById("nav-home").innerText = translations[lang].navHome;
document.getElementById("nav-about").innerText = translations[lang].navAbout;
document.getElementById("nav-projects").innerText = translations[lang].navProjects;
document.getElementById("nav-contact").innerText = translations[lang].navContact;


  const projectBoxes = document.querySelectorAll(".project-box");
  projectBoxes[0].querySelector("h3").innerText = translations[lang].project1Title;
  projectBoxes[0].querySelector("label").innerText = translations[lang].project1Desc;
  projectBoxes[1].querySelector("h3").innerText = translations[lang].project2Title;
  projectBoxes[1].querySelector("label").innerText = translations[lang].project2Desc;
  projectBoxes[2].querySelector("h3").innerText = translations[lang].project3Title;
  projectBoxes[2].querySelector("label").innerText = translations[lang].project3Desc;

  document.querySelector("#contact .top-header h1").innerText = translations[lang].contact;
  document.querySelector("#contact .top-header span").innerText = translations[lang].contactSub;
  document.querySelector(".contact-info h2").innerHTML = translations[lang].findMe + '<i class="uil uil-corner-right-down"></i>';

  document.querySelector("input[name='Name']").placeholder = translations[lang].namePlaceholder;
  document.querySelector("input[name='Email']").placeholder = translations[lang].emailPlaceholder;
  document.querySelector("textarea[name='Message']").placeholder = translations[lang].messagePlaceholder;
  document.querySelector(".form-button button").innerHTML = translations[lang].sendBtn + ' <i class="uil uil-message"></i>';

  document.querySelector(".scroll-btn p").innerText = translations[lang].scrollDown;

  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  if (window.typingEffect) {
  window.typingEffect.destroy(); // Remove previous instance
}

window.typingEffect = new Typed(".typedText", {
  strings: translations[lang].typing,
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
});

}

