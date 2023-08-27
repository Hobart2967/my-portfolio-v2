import { CareerStation } from './career-station.interface';
import brightFuture from './assets/bright_future.png';
import serviceware from './assets/serviceware.png';
import mauser from './assets/mauser.jpeg';
import greyComputer from './assets/grey-computer.jpeg';
import trustedshops from './assets/trustedshops.png';
import eufh from './assets/eufh.png';
import belonio from './assets/belonio.png';

export const stations: CareerStation[] = [{
  companyName: 'EA Games/Bright Future GmbH',
  job: 'Trainee Developer/Quality Assurance',
  description: 'During my time in school we were advised to do a training on a specific profession we prefer to learn in the future. My deepest desire was to become a professional game developer. Due to the possibilities and connections I had during the year 2006, I was given the chance to do a training inside the offices of a development studio of EA Games. Bright Future was the company developing the `Fußball Manager` title of each year.\n\nWhile pro-actively extending my trainee-period of two weeks to four in total, I got to know certain tasks of software development in general, but also insights into how video games are created. This was including the regular testing, preparing press media, developing the game itself and seeing how graphical elements evolve.',
  companyLogo: brightFuture,
  start: {
    month: 6,
    year: 2006,
  },
  end: {
    month: 6,
    year: 2006
  }
}, {
  companyName: 'Mauser Group',
  job: 'Trainee IT-Administrator',
  description: 'During my time in school we were advised to do a second training on a profession we prefer to learn in the future. I decided to join the Mauser Group IT department.\n\nHere, I learned how software development could be useful when planning resources, adjusting infrastructures and many more. In addition, I was experiencing how colleagues problems are solved and what a fire-protection in a server rack looks like.\n\nFurthermore, I learned alot of things about what different roles there are in such a department and why they are important.',
  companyLogo: mauser,
  start: {
    month: 9,
    year: 2007,
  },
  end: {
    month: 10,
    year: 2007
  }
}, {
  companyName: 'Grey Computer Cologne',
  job: 'PC Manufacturing',
  description: 'In my private spare time after school, I was working on my PC very often. Exchanging parts, upgrading the system and modifying it was much fun to me. To also earn some money and increasing my pocket money while still going to school, I applied to Grey Computer Cologne.\n\nThis company was one of the biggest computer stores close to my living town. It also had a manufacturing garage attached, where they still needed some help. This is where I came into play: I was working there, building PCs of different configurations. Water Coolings, super silent office PCs or extreme gaming machines - These are all builds that I have worked on there.',
  companyLogo: greyComputer,
  start: {
    month: 1,
    year: 2010,
  },
  end: {
    month: 6,
    year: 2011
  }
}, {
  companyName: 'Serviceware SE',
  job: 'Apprenticeship: Computer Science Expert',
  companyLogo: serviceware,
  description: `After finishing my graduation at a german Gymnasium, I applied for studying in an integrated degree program.
  That means, I was doing the studies and my apprenticeship at the same time. This is why it is also called \`Dual Degree\` (literally translated) in German.

  I joined the Serviceware SE, formerly called \`PMCS.helpLine Software Group\` in the location in Hürth.
  Starting off from the quality assurance department, I got tought how testing works from A-Z. Because of a missing automation in reportings, the QA team was also responsible for the daily reports of bugs and fixes - There I had my first projects creating an automation for it.
  Furthermore, I picked up topics like improving continuous integration pipelines with Microsoft Team Foundation Server.
  For the QA Team, I also created Test Plans and learned how tests are organized professionally.

  After that, I was planning my first IT-System for Software-Development: It was a test lab, a multi-server environment connected to Microsoft Test Manager.

  Then I switched over to the development department: Here I was a part of the development of applications like Rich-Clients, WebApps, and Server-Side environments. Since it was company relying on Microsoft products, we 90% used C# as Coding language.`,
  start: {
    month: 7,
    year: 2011,
  },
  end: {
    month: 1,
    year: 2014
  }
}, {
  companyName: 'Serviceware SE',
  job: 'Work Student: Software Engineer',
  companyLogo: serviceware,
  description: `My apprenticeship was shortened by 6 months and sucessfully finished, so I continued to work in the company as a working student.
  There, I continued to work as a software engineer in the Research and Development division.

  In that time I was responsible for developing a communication interface between two of our systems developed in-house.
  In the product developed in Hürth, I managed the contracts and APIs for migrating data from/to the systems together with the team that was working on the second product.`,
  start: {
    month: 2,
    year: 2011,
  },
  end: {
    month: 9,
    year: 2014
  }
}, {
  companyName: 'EUFH Bruehl',
  job: 'Bachelor Degree: Business Information Systems',
  companyLogo: eufh,
  description: `In 2014, I finally got my bachelor degree in information systems and completed my studies of three years. In that time, I learned topics from the following areas:

    - Business economics
    - Information Systems (Software development, IT Infrastructure, etc.)
    - Soft Skills
    - Languages (English & Dutch)`,
  school: true,
  start: {
    month: 10,
    year: 2011,
  },
  end: {
    month: 9,
    year: 2014
  }
}, {
  companyName: 'Serviceware SE',
  job: 'Full-Stack Software Engineer',
  companyLogo: serviceware,
  description: `At the end of my integrated degree program I signed a contract to continue working for Serviceware SE.
  My first business project was exciting: I was set up to travel back and forth to the dutch site of the company, starting as a full stack developer in the dutch team. There, I was developing web frontends with angular.js and REST APIs written in ASP.NET.
  Furthermore I brought in my expertise on how to set up modern continuous integration pipelines with Microsoft Team Foundation Server.

  After 1.5 years, I turned back to the site in Hürth, I joined the UX Team, which was mainly responsible for developing the client products of the system. There I was a part developing

    - a WPF Rich Client Application
    - a migration of a consumer portal to angular.js and a modern architecture
    - a brand-new mobile app, written in angular.js and ported with Apache Cordova`,
  start: {
    month: 10,
    year: 2014,
  },
  end: {
    month: 1,
    year: 2018
  }
}, {
  companyName: 'Trusted Shops GmbH',
  job: 'Senior Full-Stack Software Engineer',
  companyLogo: trustedshops,
  description: `At Trusted Shops, I officially started as a frontend developer only. I started as a part of their Consumer UX Team, being responsible for the consumer web frontend. During the time in this team, I deep-dived into Angular 2 and all further versions released - learning and expanding my knowledge about the framework.

  After working on the consumer platform, I continued to work on a website relaunch, based on Wordpress and Angular.
  As this was finished, I was part of rebuilding a new satellite of the Website with Angular - but this time, in combination with Angular Universal and SEO optimizations.

  Since I also wanted to bring in my infrastructure and backend skills, I implemented a modular and pluggable test environment created with docker.

  Today, I am working as a full-stack developer responsible for building a pluggable micro-frontend platform and reusable libraries together with my current team.`,
  start: {
    month: 2,
    year: 2018,
  },
  end: {
    month: 6,
    year: 2023
  }
}, {
  companyName: 'Belonio GmbH',
  job: 'Senior Full-Stack Software Engineer',
  companyLogo: belonio,
  css: `
    filter: drop-shadow(0px 0px 10px #fff);
  `,
  description: `At Belonio, I am responsible for the technical implementation of a variety of different processes dealing with employee salary benefits.
  In Germany, we have a lot of laws and regulations dealing with different kinds of possibilities to improve your salary value.

  It's a system fully built using AWS, while utilizing alot of services offered by them. Mostly, the aim is to go for a serverless implementation.`,
  start: {
    month: 7,
    year: 2023,
  },
  end: {
    month: new Date(Date.now()).getMonth() + 1,
    year: new Date(Date.now()).getFullYear()
  }
}];