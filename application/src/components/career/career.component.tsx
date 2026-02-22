import { For, Show, createSignal } from 'solid-js';
import { stations } from './career-stations';

// eslint-disable-next-line import/no-unresolved
import careerPath from './assets/carreer-path.svg?raw';

import './career.component.scss';
import { CareerStation } from './models/career-station.interface';
import { CompanyInfo } from './models/company-info.interface';
import { marked } from 'marked';

export function Career() {
	const [
		selectedStation,
		setSelectedStation
	] = createSignal<CareerStation | null>(null);
	const [
		forceActive,
		setForceActive
	] = createSignal(0);

	function parse(content: string) {
		return content.replace(/\n/g, '<br />');
	}

	requestAnimationFrame(() => updateForceActive(true));

	let lastScrollTop = -1;

	function updateForceActive(force?: boolean) {
		if (window.scrollY === lastScrollTop || force) {
			requestAnimationFrame(() => updateForceActive());

			return;
		}

		lastScrollTop = window.scrollY;

		document.querySelectorAll('.career__station')
			.forEach((station: Element, index: number) => {
			// when station is in top 60% of screen
				if (station.getBoundingClientRect().top < window.innerHeight * 0.25) {
					setForceActive(index + 1);
				}
			});

		requestAnimationFrame(() => updateForceActive());
	}

	return (
		<div class="career">
			<div class="title">
				I did it - my way! (CV)
			</div>

			<div class="card">
				<div classList={{
					['my-way']: true,
					['my-way--visible']: selectedStation() === null
				}}>
					<div class="dp-f">
						<div
							class="career-path career-path__background"
							innerHTML={careerPath}>
						</div>

						<div
							class="career-path career-path__foreground"
							innerHTML={careerPath}>
						</div>

						<div class={'stations ' + (forceActive() > 0
							? 'stations--force-active-' + forceActive()
							: '')}>
							<For each={stations}>
								{(station, index) =>
									<div
										class="career__station"
										onClick={() => setSelectedStation(station)}>

										<div class="career__station__title">
											<div class="career__station__date">
												{station.start.month.toString()
													.padStart(2, '0')}

												{' '}

												{station.start.year}
&nbsp;
												<Show when={
													station.end.month != station.start.month
												|| station.end.year !== station.start.year
												}>
													&mdash;
													{' '}

													{station.end.month.toString()
														.padStart(2, '0')}

													{' '}

													{station.end.year}
												</Show>
											</div>

											<div>
												{(index() + 1).toString()
													.padStart(stations.length.toString().length, '0')}
												.

												{' '}

												{station.job}
											</div>

											<div class="career__station__sub-title">
												@
												{' '}

												<For each={station.companies}>
													{(item, index) =>
														<>
															<span>
																{typeof item === 'string'
																	? item
																	: (item as CompanyInfo).name}
															</span>

															<Show when={index() !== station.companies.length - 1}>
																<span>
																	{' '}
																	/

																	{' '}
																</span>
															</Show>
														</>}
												</For>
											</div>
										</div>

									</div>}
							</For>
						</div>
					</div>
				</div>

				<For each={stations}>
					{station =>
						<Show when={selectedStation() !== null}>
							<div classList={{
								['station-details']: true,
								['station-details--visible']: selectedStation() === station
							}}>
								<div
									class="back-bar"
									onClick={() => setSelectedStation(null)}>
									&lt; Back to my career path
								</div>

								<div class="station-details__metadata dp-f">
									<div class="station-details__metadata__info">
										<h1>
											{station.job}
										</h1>

										<h2>
											@
											{' '}

											<For each={station.companies}>
												{(item, index) =>
													<>
														<Show when={typeof item === 'string'}>
															{item as string}
														</Show>

														<Show when={typeof item !== 'string'}>
															<a
																href={(item as CompanyInfo).url}
																rel="noreferrer"
																target="_blank">
																{(item as CompanyInfo).name}
															</a>
														</Show>

														<Show when={index() !== station.companies.length - 1}>
															<span>
																{' '}
																/

																{' '}
															</span>
														</Show>
													</>}
											</For>
										</h2>

										<div>
											<span>
												{station.start.month}
											</span>
&nbsp;
											<span>
												{station.start.year}

												{' '}
												until

												{' '}

												{station.end.month}

												{' '}

												{station.end.year}
											</span>
										</div>

										<Show when={station.tags
											? station.tags.length > 0
											: null}>
											<div class="tags mt-16">
												<For each={station.tags}>
													{tag =>
														<span class="tag">
															{tag}
														</span>}
												</For>
											</div>
										</Show>
									</div>

									<div class="station-details__metadata__logo">
										<img
											src={station.companyLogo}
											style={station.css || ''} />
									</div>
								</div>

								<div
									class="station-details__description"
									innerHTML={parse(marked(station.description ?? '', { async: false }))}>
								</div>
							</div>
						</Show>}
				</For>
			</div>
		</div>
	);
}

