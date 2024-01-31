// Images
import LogoImg from '@/assets/logo.webp';
import MyImg from '@/assets/me.webp';
import CssLogo from '@/assets/tech/css.webp';
import DockerLogo from '@/assets/tech/docker.webp';
import FigmaLogo from '@/assets/tech/figma.webp';
import GitLogo from '@/assets/tech/git.webp';
import HtmlLogo from '@/assets/tech/html.webp';
import JavascriptLogo from '@/assets/tech/javascript.webp';
import MongodbLogo from '@/assets/tech/mongodb.webp';
import NodejsLogo from '@/assets/tech/nodejs.webp';
import ReactjsLogo from '@/assets/tech/reactjs.webp';
import ReduxLogo from '@/assets/tech/redux.webp';
import TailwindLogo from '@/assets/tech/tailwind.webp';
import TypescriptLogo from '@/assets/tech/typescript.webp';
import NextjsLogo from '@/assets/tech/nextjs.webp';
import { Poppins } from 'next/font/google';
import Backend from '@/assets/about/backend.png';
import Frontend from '@/assets/about/frontend.png';
import Blockchain from '@/assets/about/creator.png';
import Native from '@/assets/about/native.png';
import pixy from '@/assets/company/pixy.webp';
import avada from '@/assets/company/avada.png';
import duckcart from '@/assets/company/duckcart.png';
import qwings from '@/assets/company/qwings.png';
import skillvertex from '@/assets/company/skillvertex.png';
import hcode from '@/assets/company/hcode.png';

const logos = [
  {
    id: 4,
    src: HtmlLogo,
  },
  {
    id: 3,
    src: CssLogo,
  },
  {
    id: 6,
    src: JavascriptLogo,
  },
  {
    id: 11,
    src: TypescriptLogo,
  },
  {
    id: 8,
    src: ReactjsLogo,
  },
  {
    id: 7,
    src: MongodbLogo,
  },
  {
    id: 9,
    src: ReduxLogo,
  },
  {
    id: 10,
    src: TailwindLogo,
  },
  {
    id: 12,
    src: NextjsLogo,
  },
  {
    id: 5,
    src: GitLogo,
  },
  {
    id: 1,
    src: FigmaLogo,
  },
  {
    id: 2,
    src: DockerLogo,
  },
];

export const domains = [
  {
    name: 'Frontend development',
    image: Frontend,
  },
  {
    name: 'Backend development',
    image: Backend,
  },
  {
    name: 'React Native development',
    image: Native,
  },
  {
    name: 'Blockchain development',
    image: Blockchain,
  },
];

export const experiences = [
  {
    title: 'Associate Software Developer',
    company_name: 'Hcode Technologies',
    icon: hcode,
    iconBg: '#E6DEDD',
    date: 'Dec 2023 - Present',
    points: [
      'Currently maintaining a native mobile application with over 200,000 users',
      'Majorly working on bug fixes and code optimisations',
      "Resolving user's query in minimal time",
    ],
  },
  {
    title: 'Fullstack Developer',
    company_name: 'Pixy Square',
    icon: pixy,
    iconBg: '#E6DEDD',
    date: 'May 2023 - Nov 2023',
    points: [
      'Fulfilling the demands of clients of new Startup applications',
      'Developing figma designs into responsive web applications',
      'Ensuring cross-browser compatibility.',
      'Using various optimization and SEO enhancing techniques',
    ],
  },
  {
    title: 'NodeJs Developer',
    company_name: 'Duckcart',
    icon: duckcart,
    iconBg: '#E6DEDD',
    date: 'November 2022 - May 2023',
    points: [
      'Managing the backend of a new Startup application, creating new apis, adding new features etc.',
      'Managing a team of Interns.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Keeping a track of changes and new features added by other interns',
    ],
  },

  {
    title: 'Frontend Developer Intern',
    company_name: 'Qwings',
    icon: qwings,
    iconBg: '#E6DEDD',
    date: 'March 2022 - July 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Developer Intern',
    company_name: 'Avada',
    icon: avada,
    iconBg: '#E6DEDD',
    date: 'March 2021 - August 2021',
    points: [
      'Worked as a senior web developer, lead a team of 8 people, maintained the main website of the company',
      'Taught colleagues good code practices and optimization techniques.',
    ],
  },
  {
    title: 'MERN Stack Developer Intern',
    company_name: 'Skill Vertex',
    icon: skillvertex,
    iconBg: '#32FFD4',
    date: 'October 2020 - December 2020',
    points: [
      'Developing and maintaining web applications using MERN stack.',
      'Implemented previous learning, created and maintained several apps i.e E - commerce and Food delivery.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
];

export const poppinsBold = Poppins({
  subsets: ['latin'],
  weight: '800',
});

export const projectsList = [
  {
    topic: 'MERN stack',
    projects: [
      {
        name: 'Shop Buddy',
        description:
          'Shop Buddy is an attempt to serve the people of India with unique designs on apparels. E-commerce is revolutionising the way we all shop in India.',
        tags: [
          {
            name: 'react',
            color: 'blue-text-gradient',
          },
          {
            name: 'mongodb',
            color: 'green-text-gradient',
          },
          {
            name: 'nodejs',
            color: 'pink-text-gradient',
          },
        ],
        image:
          'https://res.cloudinary.com/rajat0512/video/upload/v1706545900/portfolio/videos/y8lypwd4ti8fod414uav.mp4',
        source_code_link:
          'https://github.com/Rajat-Raghuvanshi-0512/MERN-Ecommerce',
        live_url: 'https://shop-buddy.onrender.com',
      },
      {
        name: 'Voyage Tours and Travels',
        description:
          "With Voyage, businesses may save money and offer convenience to their clients. Also, 'community chat' has been added for the user to find a travel companion.",
        tags: [
          {
            name: 'reactjs',
            color: 'blue-text-gradient',
          },
          {
            name: 'heroku',
            color: 'green-text-gradient',
          },
          {
            name: 'nodejs',
            color: 'pink-text-gradient',
          },
        ],
        image:
          'https://res.cloudinary.com/rajat0512/video/upload/v1706545887/portfolio/videos/frelfl7bowmpf7jvseli.mp4',
        source_code_link:
          'https://github.com/Rajat-Raghuvanshi-0512/voyage-tours-and-travels',
        live_url: 'https://voyage-tours.netlify.app/',
      },
    ],
  },

  {
    topic: 'Nextjs',
    projects: [
      {
        name: "Timmy's mowing",
        description:
          'Web 3.0 has the potential to change the internet as we know it, forever. This is my first blockchain cryptocurrency app.',
        tags: [
          {
            name: 'nextjs',
            color: 'blue-text-gradient',
          },
          {
            name: 'tailwind-css',
            color: 'green-text-gradient',
          },
        ],
        image:
          'https://res.cloudinary.com/rajat0512/video/upload/v1706549733/portfolio/videos/eg8zd8aylgo6opcwrsmu.mp4',
        source_code_link:
          'https://github.com/Rajat-Raghuvanshi-0512/web3.0-blockchain-app',
        live_url: 'https://timmysmowing.au/',
      },
      {
        name: 'Pare India',
        description:
          'Web 3.0 has the potential to change the internet as we know it, forever. This is my first blockchain cryptocurrency app.',
        tags: [
          {
            name: 'next js',
            color: 'blue-text-gradient',
          },
          {
            name: 'tailwind css',
            color: 'green-text-gradient',
          },
          {
            name: 'hostinger',
            color: 'pink-text-gradient',
          },
        ],
        image:
          'https://res.cloudinary.com/rajat0512/video/upload/v1706549818/portfolio/videos/asvvbgux8c5fd1kyvvfa.mp4',
        source_code_link:
          'https://github.com/Rajat-Raghuvanshi-0512/web3.0-blockchain-app',
        live_url: 'https://pareindia.com/',
      },
    ],
  },
  {
    topic: 'Reactjs',
    projects: [
      {
        name: "Mother's Kitchen",
        description:
          'Web 3.0 has the potential to change the internet as we know it, forever. This is my first blockchain cryptocurrency app.',
        tags: [
          {
            name: 'react',
            color: 'blue-text-gradient',
          },
          {
            name: 'tailwind-css',
            color: 'pink-text-gradient',
          },
        ],
        image:
          'https://res.cloudinary.com/rajat0512/video/upload/v1706549833/portfolio/videos/dorv7lixzo3rwgtxe1fu.mp4',
        source_code_link:
          'https://github.com/Rajat-Raghuvanshi-0512/web3.0-blockchain-app',
        live_url: 'https://motherskitchen.co.in/',
      },
      {
        name: 'Chat App',
        description:
          'Web 3.0 has the potential to change the internet as we know it, forever. This is my first blockchain cryptocurrency app.',
        tags: [
          {
            name: 'react',
            color: 'blue-text-gradient',
          },
          {
            name: 'firebase',
            color: 'green-text-gradient',
          },
          {
            name: 'AWS lambda',
            color: 'pink-text-gradient',
          },
        ],
        image:
          'https://res.cloudinary.com/rajat0512/video/upload/v1706545886/portfolio/videos/pnntywpae2dkef0xbo5e.mp4',
        source_code_link:
          'https://github.com/Rajat-Raghuvanshi-0512/web3.0-blockchain-app',
        live_url: 'https://chat-app-c8964.web.app/',
      },
    ],
  },
  {
    topic: 'Web 3.0',
    projects: [
      {
        name: 'Krypt',
        description:
          'Web 3.0 has the potential to change the internet as we know it, forever. This is my first blockchain cryptocurrency app.',
        tags: [
          {
            name: 'react',
            color: 'blue-text-gradient',
          },
          {
            name: 'solidity',
            color: 'green-text-gradient',
          },
          {
            name: 'hardhat',
            color: 'pink-text-gradient',
          },
        ],
        image:
          'https://res.cloudinary.com/rajat0512/video/upload/v1706545884/portfolio/videos/cmtxwcqqeenyzpjct9al.mp4',
        source_code_link:
          'https://github.com/Rajat-Raghuvanshi-0512/web3.0-blockchain-app',
        live_url: 'https://krypt-georli.netlify.app/',
      },
    ],
  },
];

// lc - https://res.cloudinary.com/rajat0512/video/upload/v1706549744/portfolio/videos/c7dfpxuemsbalizocbf6.mp4

export const testimonials = [
  {
    summary:
      "After Rajat optimized our website, our traffic increased by 30%. We can't thank you enough!",
    name: 'Kamal Pratap',
    designation: 'Project Manager',
    company: 'Duckcart',
    image:
      'https://res.cloudinary.com/rajat0512/image/upload/v1642447946/E-commerce/avatar_gehm7u.jpg',
  },
  {
    summary:
      'I thought it was impossible to make a website as beautiful as our product, but Rajat proved me wrong.',
    name: 'Ankit',
    designation: 'Team Leader',
    company: 'Qwings',
    image:
      'https://res.cloudinary.com/rajat0512/image/upload/v1642447946/E-commerce/avatar_gehm7u.jpg',
  },
  {
    summary:
      "I've never met a web developer who truly cares about their clients' success like Rajat does.",
    name: 'Abhijit',
    designation: 'HR',
    company: 'Skill Vertex',
    image:
      'https://res.cloudinary.com/rajat0512/image/upload/v1642447946/E-commerce/avatar_gehm7u.jpg',
  },
];

export {
  LogoImg,
  MyImg,
  CssLogo,
  DockerLogo,
  FigmaLogo,
  GitLogo,
  HtmlLogo,
  JavascriptLogo,
  MongodbLogo,
  NodejsLogo,
  ReactjsLogo,
  ReduxLogo,
  TailwindLogo,
  TypescriptLogo,
  NextjsLogo,
  logos,
};
