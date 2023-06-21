import './top-bar.scss';
import home from './assets/home.svg?raw';
import about from './assets/about-me.svg?raw';
import skills from './assets/skills.svg?raw';
import portfolio from './assets/portfolio.svg?raw';

export function TopBar() {
  return <div class="top-bar">
    <div class="top-bar__area">
      <div innerHTML={home}></div>
      <div innerHTML={about}></div>
      <div innerHTML={skills}></div>
      <div innerHTML={portfolio}></div>
    </div>
  </div>
}