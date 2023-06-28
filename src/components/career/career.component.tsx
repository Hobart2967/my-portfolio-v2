import { For, Show, createSignal } from 'solid-js';
import { stations } from './career-stations';

import careerPath from './assets/carreer-path.svg?raw';

import './career.component.scss';
import { CareerStation } from './career-station.interface';

export function Career() {
  const [detailsVisible, setDetailsVisible] = createSignal(false);
  const [selectedStation, setSelectedStation] = createSignal<CareerStation>(null);

  function showDetails(station: CareerStation) {
    setSelectedStation(station);
    setDetailsVisible(true);
  }

  return (<div class="career">
    <div class="title">I did it - my way! (CV)</div>
    <div class="card">
      <div classList={{
        ['my-way']: true,
        ['my-way--visible']: !detailsVisible()
      }}>
        <div class="dp-f">
          <div class="career-path career-path__background" innerHTML={careerPath}></div>
          <div class="career-path career-path__foreground" innerHTML={careerPath}></div>
          <div class="stations">
            <For each={stations}>
              {(station, index) => (
                <div class="career__station" onClick={() => showDetails(station)}>
                  <div class="career__station__title">
                    {station.job} @ {station.companyName}
                  </div>
                  <div class="career__station__time-span">
                    {station.start.month} {station.start.year} until {station.end.month} {station.end.year}
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
      <Show when={selectedStation() !== null}>
        <div classList={{
          ['station-details']: true,
          ['station-details--visible']: detailsVisible()
        }}>
          <div class="back-bar" onClick={() => setDetailsVisible(false)}>
            &lt; Back to my career path
          </div>
          <h1>{selectedStation().job}</h1>
          <h2>@ {selectedStation().companyName}</h2>
          <div>{selectedStation().start.month} {selectedStation().start.year} until {selectedStation().end.month} {selectedStation().end.year}</div>
          <div>{selectedStation().description}</div>
        </div>
      </Show>
    </div>
  </div>)
}