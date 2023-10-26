import { createEffect, createSignal } from 'solid-js';
import { Career } from '../../components/career/career.component';
import { Skills } from '../../components/skills/skills.component';

import './presentation.view.scss';
import { Projects } from '../../components/projects/projects.component';

export function PresentationView() {
  const [theme, setTheme] = createSignal('dark');

  createEffect(() => {
    if (document.body.classList.contains(theme())) {
      return;
    }

    document.body.classList.remove('dark');
    document.body.classList.remove('light');
    document.body.classList.add(theme())
  });

  async function switchTheme(toValue: 'light' | 'dark') {
    if (document.body.classList.contains(toValue)) {
      return;
    }
    document.body.classList.add('theme-switching');
    await new Promise(resolve => setTimeout(resolve, 500));
    setTheme(toValue);
    document.body.classList.remove('theme-switching');
  }

  return (
    <div>
      <div class="head ">
        <div class="nav-links side card">
          <a target="_blank" class="fa-brands fa-github" href="https://github.com/Hobart2967"></a>
          <a target="_blank" class="fa-brands fa-dev" href="https://dev.to/Hobart2967"></a>
          <a target="_blank" class="fa-brands fa-linkedin" href="https://www.linkedin.com/in/klein-marco/"></a>
          <a target="_blank" class="fa-brands fa-xing" href="https://www.xing.com/profile/Marco_Klein51/cv"></a>
        </div>

        <div class="theme side card">
          <i class="fa-solid fa-moon" onClick={() => switchTheme(theme() === 'light' ? 'dark' : 'light')}></i>
        </div>
      </div>
      <div class="content">
        <div class="body">
          <div class="dp-f f-row row-wrapper">
            <div class="dp-f f-col left">
              <div class="card">
                <div class="dp-f title-box">
                  <div>
                    <div class="me"></div>
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
                  <p>
                    Today, I am working for <a href="https://www.belonio.de" target='_blank'>Belonio</a> as a full stack developer, who is providing a simple,
                    secure and attractive software solution for providing employee benefits in terms of salary extras.
                  </p>
                </div>
              </div>
              <div class="card">
                <h3>What I have done so far</h3>
                <div class="row">
                  <p>In the past years, I have been working on several things and target devices. This includes hybrid and native mobile
                    apps, web apps, hybrid native desktop apps, rich clients, websites and many more things.</p>
                  <p>Backend-wise I have created different systems with NodeJS, C# and a little Java. This all includes a bunch of
                    REST-Apis, Database Backends and even Database Driven Business Logic.</p>
                  <p>I have seen and intensively worked on different infrastructural approaches, such as on-premise, self-hosted SaaS or even AWS
                    Cloudbased systems!</p>
                </div>
              </div>
            </div>
            <div class="dp-f f-col right">
              <Career />

              <div class="title">Skills</div>
              <div class="card skills">
                <Skills />
              </div>

              <div class="title">Projects and references</div>
              <div class="projects">
                <Projects></Projects>
              </div>

              <div class="title">Hobby Project - Game Engineering</div>
              <div class="card hobby-project gwen">
                <p>
                  My passion for software development was basically originating from the will to create games. Because I discarded the thought of starting a career as a game developer before my studies, I decided to make it a hobby
                </p>
                <p>
                  This is why and how my first game engineering project started. Currently, it's called GWEN (Game without extra-ordinary name). It is developed using the awesome Godot Game Engine, and shall become an MMORPG, based on inspiration by games like World of Warcraft, Lord of the Rings Online, ARK, Minecraft and some others that I used to play in my spare time.

                  The project itself is work in progress, screenshots and material may follow.
                </p>
                <p>
                  In parallel, I try to build a Godot-dedicated library based on common software design patterns that have become established over the last years.
                </p>
                <div class="screenshots">
                  <img src="/assets/images/gwen/gwen1.png" />
                  <img src="/assets/images/gwen/gwen2.png" />
                  <img src="/assets/images/gwen/gwen3.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}