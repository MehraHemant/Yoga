"use client";

import { useRef } from "react";
import VideoFacade from "@/components/VideoFacade";
import { ttc, welcome } from "@/lib/content";

const KEY_POINTS = [
	"Yoga Alliance (USA) registered: RYS 200, 300 & 500",
	"Traditional teachings of the Himalayan masters",
	"Welcoming for beginners and experienced yogis",
	"Peaceful campus by the sacred River Ganga",
];

/** Eyebrow, heading, subheading, paragraph, key points and CTA beside the intro video. */
export default function Welcome() {
	const dialog = useRef<HTMLDialogElement>(null);

	return (
		<section id="welcome" className="bg-white py-14 text-ink lg:py-20">
			<div className="mx-auto w-full max-w-360 lg:px-12 px-5 sm:px-8">
				<div className="flex flex-col mb-2">
					<p className="mb-5 w-fit rounded-full bg-forest/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest">
						Namaste
					</p>
					<h1 className="text-4xl font-bold leading-tight tracking-normal sm:text-5xl xl:text-6xl">
						Welcome to Yoga Vidya Mandiram
					</h1>
				</div>
				<div className="grid lg:grid-cols-12 items-center gap-12 lg:gap-16 ">
					<div className="lg:col-span-7">
						<p className="mt-4 text-xl leading-normal text-ink xl:text-2xl">
							The best yoga school in Rishikesh, India, in the peaceful
							Himalayan valley along the sacred River Ganga.
						</p>
						<p className="mt-5 text-base leading-relaxed text-ink lg:text-lg">
							{welcome.paragraphs[1]}
						</p>

						<ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
							{KEY_POINTS.map((k) => (
								<li
									key={k}
									className="flex items-start gap-3 text-base font-medium leading-snug"
								>
									<span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest text-white">
										<svg
											viewBox="0 0 24 24"
											className="h-3.5 w-3.5"
											fill="none"
											stroke="currentColor"
											strokeWidth="3"
											aria-hidden="true"
										>
											<path
												d="M5 12.5l4.5 4.5L19 7.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</span>
									{k}
								</li>
							))}
						</ul>

						<div className="mt-8 flex flex-wrap items-center gap-4">
							<a
								className="rounded-full bg-forest px-7 py-3.5 text-base font-medium tracking-wide text-white transition hover:bg-forest-dark"
								href={ttc.all}
							>
								Explore Yoga Teacher Training
							</a>
							<button
								type="button"
								onClick={() => dialog.current?.showModal()}
								className="cursor-pointer rounded-full border-2 border-forest px-7 py-3 text-base font-medium tracking-wide transition hover:bg-forest hover:text-white"
							>
								Read our story
							</button>
						</div>
					</div>
					{/* Video */}
					<div className="lg:col-span-5">
						<div className="relative">
							<span
								aria-hidden="true"
								className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-forest/10"
							/>
							<div className="relative overflow-hidden rounded-2xl shadow-xl">
								<VideoFacade
									id={welcome.videoId}
									poster={welcome.videoPoster}
									title="Yoga Vidya Mandiram – Intro Video"
								/>
							</div>
						</div>
						<p className="mt-7 text-center text-base font-medium text-ink">
							Watch our introduction video
						</p>
					</div>
				</div>
			</div>

			{/* The full text opens here, so it never changes the section's layout. */}
			<dialog
				ref={dialog}
				onClick={(e) => e.target === dialog.current && dialog.current.close()}
				aria-labelledby="welcome-story-title"
				className="m-auto max-h-5/6 w-11/12 max-w-190 flex-col open:flex overflow-hidden rounded-2xl bg-white p-0 text-ink shadow-2xl backdrop:bg-ink/75 backdrop:backdrop-blur-sm"
			>
				<header className="flex items-center justify-between gap-6 border-b border-line bg-white px-6 py-5 sm:px-9">
					<h2 id="welcome-story-title" className="text-2xl sm:text-3xl">
						{welcome.kicker}
					</h2>
					<button
						type="button"
						onClick={() => dialog.current?.close()}
						aria-label="Close"
						className="-mr-2 flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-2xl leading-none text-muted transition hover:bg-white hover:text-ink"
					>
						×
					</button>
				</header>
				<div className="space-y-5 overflow-y-auto px-6 py-7 text-lg leading-relaxed text-ink sm:px-9 sm:py-9">
					{welcome.paragraphs.map((p, i) => (
						<p key={i}>{p}</p>
					))}
				</div>
			</dialog>
		</section>
	);
}
