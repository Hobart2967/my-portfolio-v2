import { createEffect, createSignal, Show } from 'solid-js';
import { Career } from '../../components/career/career.component';
import { Skills } from '../../components/skills/skills.component';

import { Projects } from '../../components/projects/projects.component';
import './presentation.view.scss';
import { LegalDialog } from '../../components/legal-dialog/legal-dialog';
export const [modal, setModal] = createSignal(null);


export function PresentationView() {
  const [theme, setTheme] = createSignal('dark');


  createEffect(() => {
    if (document.body.classList.contains(theme())) {
      return;
    }

    document.body.classList.remove('dark');
    document.body.classList.remove('light');
    document.body.classList.add(theme());
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

  function showDialog(modal) {
    if (!modal) {
      hideModal();
    } else {
      setModal(modal);
      document.body.style.overflow = 'hidden';
    }
  }

  return (

    <div class="overlay-wrapper">
      <Show when={modal()}>
        <div class="overlay">
          <div class="overlay-backdrop">
            {/* FIXME: Workaround: Hard-Code modal for now, as Dynamic does not seem to work in build mode. Only works in dev server mode... */}
            <LegalDialog onClose={() => hideModal()} />
          </div>
        </div>
      </Show>
      <div class="head ">
        <div class="nav-links side card">
          <a target="_blank" class="fa-brands fa-github" href="https://github.com/Hobart2967"></a>
          <a target="_blank" class="fa-brands fa-dev" href="https://dev.to/Hobart2967"></a>
          <a target="_blank" class="fa-brands fa-linkedin" href="https://www.linkedin.com/in/klein-marco/"></a>
          <a target="_blank" class="fa-brands fa-xing" href="https://www.xing.com/profile/Marco_Klein51/cv"></a>
          <a target="_blank" class="fa-solid fa-id-card cv" href="/assets/cv_klein_marco_censored.pdf"></a>
        </div>

        <div class="theme side card">
          <i class="fa-solid fa-moon" onClick={() => switchTheme(theme() === 'light' ? 'dark' : 'light')}></i>
        </div>

        <div class="legal side card" onClick={() => showDialog(() => <LegalDialog onClose={() => hideModal()} />)}>
          <i class="fa-solid fa-scale-unbalanced-flip"></i>
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
                    <h2>Your passionate Full-Stack Software Engineer.</h2>
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
              <div class="card">
                <h3>Recent technologies I am working with</h3>
                <div class="dp-f g-8 mt-16 fw-wrap">
                  <div class="tag">Amazon Web Services</div>
                  <div class="tag">Java</div>
                  <div class="tag">C#</div>
                  <div class="tag">TypeScript / JavaScript</div>
                  <div class="tag">Docker / Docker Compose</div>
                  <div class="tag">Angular</div>
                  <div class="tag">Node.js</div>
                  <div class="tag">.NET (Core)</div>
                  <div class="tag">Vite</div>
                  <div class="tag">HTML & CSS (incl. Sass, Scss, Less)</div>
                  <div class="tag">Sentry</div>
                  <div class="tag">nginx</div>
                  <div class="tag">MySQL / MariaDB</div>
                  <div class="tag">PostgreSQL</div>
                  <div class="tag">Ubuntu</div>
                  <div class="tag">Windows</div>
                  <div class="tag">Hyper-V</div>
                  <div class="tag">UTM</div>
                  <div class="tag">macOS</div>
                  <div class="tag">Windows Subsystem for Linux</div>
                  <div class="tag">Cordova / Capacitor</div>
                  <div class="tag">Electron</div>
                  <div class="tag">Android SDK</div>
                  <div class="tag">iOS</div>
                  <div class="tag">express.js</div>
                  <div class="tag">Spring Boot</div>
                  <div class="tag">Swagger / OpenAPI</div>
                  <div class="tag">GitHub</div>
                  <div class="tag">GitHub Actions</div>
                  <div class="tag">GitHub Packages</div>
                  <div class="tag">GitLab</div>
                  <div class="tag">Yarn / NPM</div>
                  <div class="tag">NuGet</div>
                  <div class="tag">Ansible</div>
                  <div class="tag">Yeoman</div>
                  <div class="tag">Godot</div>
                  <div class="tag">Blender</div>
                  <div class="tag">Terraform</div>
                  <div class="tag">Visual Studio Code</div>
                </div>
              </div>
              <div class="card">
                <h3>Technologies I have been working with in the past</h3>
                <div class="dp-f g-8 mt-16 fw-wrap">
                  <div class="tag">BitBucket</div>
                  <div class="tag">Circle CI</div>
                  <div class="tag">Azure DevOps</div>
                  <div class="tag">Microsoft SQL Server</div>
                  <div class="tag">Microsoft Internet Information Services (IIS)</div>
                  <div class="tag">PHP</div>
                  <div class="tag">Delphi</div>
                  <div class="tag">C++</div>
                  <div class="tag">Python</div>
                  <div class="tag">React</div>
                  <div class="tag">angularjs (Version 1)</div>
                  <div class="tag">Vue.js</div>
                  <div class="tag">pagerduty</div>
                  <div class="tag">logz.io</div>
                  <div class="tag">jQuery</div>
                  <div class="tag">ASP.NET</div>
                  <div class="tag">Webpack</div>
                  <div class="tag">Grunt</div>
                  <div class="tag">Virtual Box</div>
                  <div class="tag">VMWare</div>
                  <div class="tag">Jira / Confluence</div>
                  <div class="tag">Visual Studio Online / Azure / Team Foundation Server</div>
                  <div class="tag">Protractor</div>
                  <div class="tag">Cypress</div>
                  <div class="tag">Apache HTTP Server</div>
                  <div class="tag">IntelliJ</div>
                  <div class="tag">Visual Studio</div>
                  <div class="tag">Microsoft Test Manager</div>
                  <div class="tag">Microsoft Virtual Machine Manager</div>
                  <div class="tag">Crystal Reports</div>
                  <div class="tag">Oracle Databases</div>
                </div>
              </div>
            </div>
            <div class="dp-f f-col right">
              <Career />
              <Skills />
              <Projects />

              <div>
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
    </div>
  );

  function hideModal() {
    document.body.style.overflow = 'auto';
    setModal(null);
  }
}