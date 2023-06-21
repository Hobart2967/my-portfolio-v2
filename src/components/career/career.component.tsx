import { For } from 'solid-js';
import { stations } from './career-stations';

import careerPath from './assets/carreer-path.svg?raw';

import './career.component.scss';

export function Career() {
  return (<div class="career">
    <div class="title">I did it - my way! (CV)</div>
    <div class="card my-way">
      <div class="dp-f">
        <div class="stations">
          <For each={stations}>
            {(station, index) => (
              <div class="career__station">
                <div class="career__station__title">
                  {station.job} @ {station.companyName}
                </div>
                <div class="career__station__time-span">
                  {station.start.month} {station.start.year} until {station.end.month} {station.end.year}
                </div>
                <div class="career__station__bullet">
                  i
                </div>
              </div>
            )}
          </For>
        </div>
        <div innerHTML={careerPath}></div>
      </div>
    </div>
  </div>)
}