import { Component, createEffect, createSignal, For, Show } from 'solid-js';
import { Career } from '../../components/career/career.component';
import { Skills } from '../../components/skills/skills.component';

import { Projects } from '../../components/projects/projects.component';
import './presentation.view.scss';
import { LegalDialog } from '../../components/legal-dialog/legal-dialog';
import { Gwen } from '../../components/gwen/gwen';
import { recentlyUsedTech } from './recently-used-tech';
import { previouslyUsedTech } from './previously-used-tech';
export const [
	modal,
	setModal
] = createSignal<Component | null>(null);

export function PresentationView() {
	const [
		theme,
		setTheme
	] = createSignal('dark');

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

	function showDialog(modal: Component | null) {
		if (!modal) {
			hideModal();
		} else {
			setModal(() => modal);
			document.body.style.overflow = 'hidden';
		}
	}

	return (
		<div class="overlay-wrapper">
			<Show when={modal()}>
				<div class="overlay">
					<div class="overlay-backdrop">
						{/* FIXME: Workaround:
						Hard-Code modal for now, as Dynamic does not seem to work
						in build mode. Only works in dev server mode... */}
						<LegalDialog onClose={() => hideModal()} />
					</div>
				</div>
			</Show>

			<div class="head ">
				<div class="nav-links side card">
					<a
						class="fa-brands fa-github"
						href="https://github.com/Hobart2967"
						rel="noreferrer"
						target="_blank">
					</a>

					<a
						class="fa-brands fa-dev"
						href="https://dev.to/Hobart2967"
						rel="noreferrer"
						target="_blank">
					</a>

					<a
						class="fa-brands fa-linkedin"
						href="https://www.linkedin.com/in/klein-marco/"
						rel="noreferrer"
						target="_blank">
					</a>

					<a
						class="fa-brands fa-xing"
						href="https://www.xing.com/profile/Marco_Klein51/cv"
						rel="noreferrer"
						target="_blank">
					</a>

					<a
						class="fa-solid fa-id-card cv"
						href="/assets/cv_klein_marco_censored.pdf"
						target="_blank">
					</a>
				</div>

				<div class="theme side card">
					<i
						class="fa-solid fa-moon"
						onClick={() => switchTheme(theme() === 'light'
							? 'dark'
							: 'light')}>
					</i>
				</div>

				<div
					class="legal side card"
					onClick={() =>
						showDialog(() =>
							<LegalDialog onClose={() => hideModal()} />)}>
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
										<h1>
											Marco Klein
										</h1>

										<h2>
											Your passionate Full-Stack Software Engineer.
										</h2>
									</div>
								</div>
							</div>

							<div class="card">
								<h3>
									Me, myself and I
								</h3>

								<div class="row">
									<p>
										I am a full-stack software engineer located in Cologne. Whilst living
										a great passion for frontend development, I
										really love to implement backends filling their counterpart with data
										and business processes.
									</p>

									<p>
										Also, my ability to develop databases and the surrounding infrastructure
										make me feel like I have developed
										something complete when finishing a product.
									</p>

									<p>
										In my free time, I fulfil my passion to coding, cars, music and video
										games. But before you ask what kind of music:
										Everything I like! There's no special taste or genre I follow, so
										that description may suit best :)
									</p>

									<p>
										I would describe myself as a team-player, being in love with hand-in-hand
										work. For example, developing against
										other developers' machines is really fun to me!
									</p>
								</div>
							</div>

							<div class="card">
								<h3>
									Professional Status
								</h3>

								<div class="row">
									<p>
										Today, I am working for

										<a
											href="https://www.belonio.de"
											rel="noreferrer"
											target="_blank">
											Belonio
										</a>

										as a full stack developer, who is providing a simple,
										secure and attractive software solution for providing
										employee benefits in terms of salary extras.
									</p>
								</div>
							</div>

							<div class="card">
								<h3>
									What I have done so far
								</h3>

								<div class="row">
									<p>
										In the past years, I have been working on several things and target devices.
										This includes hybrid and native mobile
										apps, web apps, hybrid native desktop apps, rich clients, websites and many
										more things.
									</p>

									<p>
										Backend-wise I have created different systems with NodeJS, C# and a little
										Java. This all includes a bunch of
										REST-Apis, Database Backends and even Database Driven Business Logic.
									</p>

									<p>
										I have seen and intensively worked on different infrastructural
										approaches, such as on-premise, self-hosted SaaS or even AWS
										Cloudbased systems!
									</p>
								</div>
							</div>

							<div class="card">
								<h3>
									Recent technologies I am working with
								</h3>

								<div class="dp-f g-8 mt-16 fw-wrap">
									<For each={recentlyUsedTech}>
										{item =>
											<div class="tag">
												{item}
											</div>}
									</For>
								</div>
							</div>

							<div class="card">
								<h3>
									Technologies I have been working with in the past
								</h3>

								<div class="dp-f g-8 mt-16 fw-wrap">
									<For each={previouslyUsedTech}>
										{item =>
											<div class="tag">
												{item}
											</div>}
									</For>
								</div>
							</div>
						</div>

						<div class="dp-f f-col right">
							<Career />

							<Skills />

							<Projects />

							<Gwen />
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
