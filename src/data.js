//  icons
import {
  FiLayout,
  FiSettings,
  FiServer,
  FiDatabase,
  FiMail,
  FiMapPin,
  FiPhone,
  FiFacebook,
  FiLinkedin,
  FiTwitter, 
} from 'react-icons/fi';

// projects images
import Project1 from './assets/img/projects/gym.png';
import Project2 from './assets/img/projects/nutrition.png';
import Project3 from './assets/img/projects/restaurant.png';
import Project4 from './assets/img/projects/e-commerce.png';
import Project5 from './assets/img/projects/library.png';
import Project6 from './assets/img/projects/library.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';
import SkillImg9 from './assets/img/skills/material-ui.png';
import SkillImg10 from './assets/img/skills/tailwind.png';

// testimonial images
import Person1 from './assets/img/testimonials/person.jpg';
import Person2 from './assets/img/testimonials/person.jpg';
import Person3 from './assets/img/testimonials/person.jpg';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];


// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: "Oscar's Gym",
    link:'https://oscarintween.github.io/Project-1/',
    category: 'HTML & CSS',
    description:'Simple gym web application with store section made with pure HTML, CSS, and Javascript.',
  },
  {
    id: '2',
    image: Project2,
    name: 'Nutrition dashboard',
    link: 'https://alejandrohdz2021.github.io/Proyecto-3-Dashboard/',
    category: 'REACT',
    description:'Dashboard application that connects with a nutrition API to give user nutrition data for any food item and charts data with chart.js.',
  },
  {
    id: '3',
    image: Project3,
    name: 'Restaurant App',
    link: 'https://jazzy-pastelito-211a09.netlify.app',
    category: 'REACT',
    description:'Restaurant website that includes menu options and allows user to add reservation using Firebase as a database.',
  },
  {
    id: '4',
    image: Project4,
    name: 'Motoshop e-commerce',
    category: 'MERN STACK',
    link: 'https://motoshop-frontend.herokuapp.com/',
    description:'E-commerce website where you can view a catalog of all motorcycles and a detailed page for each product. Paypal integration as well.',
  },
  {
    id: '5',
    image: Project5,
    name: 'Library of Alexandria',
    category: 'MERN STACK',
    description:'Library website where you can visualize books as well as add books and edit them using MongoDB as a database.',
  },
  {
    id: '6',
    image: Project6,
    name: 'Marvel',
    category: 'REACT',
    description:'Library website where you can visualize books as well as add books and edit them using MongoDB as a database.',
  },
 
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'HTML & CSS',
  },
  {
    name: 'REACT',
  },
  {
    name: 'MERN STACK',
  },
 
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
  {
    image: SkillImg9,
  },
  {
    image: SkillImg10,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'With tools like Figma I can plan and design a webpage from scratch according to the clients wants and needs',
  },
  {
    icon: <FiSettings />,
    name: 'Front End',
    description:
      "I create web applications using the most recent technologies such as React, Bootstrap, Material UI, etc.",
  },
  {
    icon: <FiServer />,
    name: 'Back End',
    description:
      'I have worked with backend technologies with Javascript such as Node.js, Express.js, Mongoose and many others.',
  },
  {
    icon: <FiDatabase />,
    name: 'Database',
    description:
      'I have worked with several noSQL databases such as Firebase and MongoDb and continue to learn.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: Person1,
    authorText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam labore nisium illum cupiditate reiciendis a numquam',
    authorName: 'Person1',
    authorPosition: 'Full Stack developer',
  },
  {
    authorImg: Person2,
    authorText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam labore nisium illum cupiditate reiciendis a numquam',
    authorName: 'Person2',
    authorPosition: 'Full Stack developer',
  },
  {
    authorImg: Person3,
    authorText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam labore nisium illum cupiditate reiciendis a numquam',
    authorName: 'Person3',
    authorPosition: 'Full Stack developer',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at oscarintween@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'San Luis Potosi, Mexico',
    description: 'Serving clients worldwide',
  },
  {
    icon: <FiPhone />,
    title: 'Call Me',
    subtitle: 'call or Whatsapp at',
    description: '487-126-6266',
  },
];
export const socialMedia = [
  {
    icon:<FiFacebook />,
    link:'https://www.facebook.com/profile.php?id=100009316959648'
  },
  {
    icon:<FiLinkedin />,
    link:'https://www.linkedin.com/in/oscar-ramos-ortiz-013607206'
  },
  {
    icon:<FiTwitter />,
    link:'https://twitter.com/OscarRamos11888'
  },

]
