import { TopBar } from '../../partials/top-bar/top-bar'

import './presentation.view.scss';

export function PresentationView() {
  return (
    <div class="content">
      <TopBar />
      <div class="body">
        <div class="dp-f f-row">
          <div class="dp-f f-col">
            <div class="card">
              <div class="dp-f">
                <div>
                  <div class="me" ></div>
                </div>
                <div>
                  <h1>Marco Klein</h1>
                  <h2>Your Full-Stack Software Engineer.</h2>
                </div>
              </div>
            </div>
            <div class="card">
              <h3>Me, myself and I</h3>
              <div class="row">
                <p>I am a full-stack software engineer located in Cologne. Whilst living a great passion for frontend development, I
                  really love to implement backends filling their counterpart with data and business processes.</p>
                <p>Also, my ability to develop databases and the surrounding infrastructure make me feel like I have developed
                  something complete when finishing a product.</p>
                <p>In my free time, I fulfil my passion to coding, cars, music and video games. But before you ask what kind of music:
                  Everything I like! There's no special taste or genre I follow, so that description may suit best :)</p>
                <p>I would describe myself as a team-player, being in love with hand-in-hand work. For example, developing against
                  other developers' machines is really fun to me!</p>
              </div>
            </div>
            <div class="card">
              <h3>Professional Status</h3>
              <div class="row">
                <p>Currently, I am working for <a href="https://www.trustedshops.com">Trusted Shops</a>, europes leading trust brand -
                  A company creating review systems for all kinds of markets, including its origin market, e-commerce.</p>
                <p>I officially started there as a pure frontend developer. I joined their Consumer UX Team, being responsible for the
                  consumer web frontend. After working on a consumer portal application, I continued to work on a website relaunch,
                  based on Wordpress and Angular Universal. Since I also wanted to use my infrastructure and backend skills, I
                  implemented a modular and pluggable test environment created with docker.</p>
                <p>Today, I am working as a full-stack developer, responsible for building a pluggable micro-frontend platform and
                  reusable libraries together with my current team.</p>
              </div>
            </div>
            <div class="card">
              <h3>What I have done so far</h3>
              <div class="row">
                <p>In the past years, I have been working on several things and target devices. This includes hybrid and native mobile
                  apps, web apps, hybrid native desktop apps, rich clients, websites and many more things.</p>
                <p>Backend-wise I have created different systems with NodeJS, C# and a little Java. This all includes a bunch of
                  REST-Apis, Database Backends and even Database Driven Business Logic.</p>
                <p>I have seen and worked on different infrastructural approaches, such as on-premise, self-hosted SaaS or even AWS
                  Cloudbased systems!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}