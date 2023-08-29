import { For, Show, createSignal } from 'solid-js';
import { stations } from './career-stations';

import careerPath from './assets/carreer-path.svg?raw';


import './career.component.scss';
import { CareerStation } from './career-station.interface';

export function Career() {
  const [selectedStation, setSelectedStation] = createSignal<CareerStation>(null);

  function parse(content: string) {
    return content.replace(/\n/g, '<br />');
  }

  return (<div class="career">
    <div class="title">I did it - my way! (CV)</div>
    <div class="card">
      <div classList={{
        ['my-way']: true,
        ['my-way--visible']: selectedStation() === null
      }}>
        <div class="dp-f">
          <div class="career-path career-path__background" innerHTML={careerPath}></div>
          <div class="career-path career-path__foreground" innerHTML={careerPath}></div>
          <div class="stations">
            <For each={stations}>
              {(station, index) => (
                <div class="career__station" onClick={() => setSelectedStation(station)}>

                  <div class="career__station__title">
                    <div class="career__station__date">
                      {station.start.month.toString().padStart(2, '0')} {station.start.year}&nbsp;
                      <Show when={station.end.month != station.start.month || station.end.year !== station.start.year}>
                        &mdash; {station.end.month.toString().padStart(2, '0')} {station.end.year}
                      </Show>
                    </div>
                    <div>{(index() + 1).toString().padStart(stations.length.toString().length, '0')}. {station.job}</div>
                    <div class="career__station__sub-title">
                      @ {station.companyName}
                    </div>
                  </div>

                </div>
              )}
            </For>
          </div>
        </div>
      </div>
      <For each={stations}>
        {(station) => (
          <Show when={selectedStation() !== null}>
            <div classList={{
              ['station-details']: true,
              ['station-details--visible']: selectedStation() === station
            }}>
              <div class="back-bar" onClick={() => setSelectedStation(null)}>
                &lt; Back to my career path
              </div>
              <div class="station-details__metadata dp-f">
                <div class="station-details__metadata__info">
                  <h1>{station.job}</h1>
                  <h2>@ {station.companyName}</h2>
                  <div>{station.start.month} {station.start.year} until {station.end.month} {station.end.year}</div>
                </div>
                <div class="station-details__metadata__logo">
                  <img src={station.companyLogo} style={station.css || ''}/>
                </div>
              </div>
              <div innerHTML={parse(station.description)}></div>
            </div>
          </Show>
        )}
      </For>
    </div>
  </div>)
}