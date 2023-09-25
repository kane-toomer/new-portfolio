import { CheckCircleIcon } from "@heroicons/react/20/solid";

import headshot from "../assets/images/headshot.svg";

const comptency = [
	"Java",
	"Javascript",
	"Node.js",
	"HTML + CSS",
	"React",
	"React Native",
	"MongoDB",
	"Heroku",
	"GitHub",
	"Vite",
];

export default function About() {
	return (
		<div className="bg-gray-900 py-24 sm:py-32" id="aboutMe">
			<div className="relative isolate">
				<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
						<img
							className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
							src={headshot}
							alt=""
						/>
						<div className="w-full flex-auto">
							<h1 className="text-4xl font-bold tracking-tight text-white">
								About me
							</h1>
							<p className="mt-6 text-lg leading-8 text-gray-300">
								Hello! My name is Kane Toomer, I'm from Las Vegas and I enjoy
								designing and building things that live on the internet. My
								passion for computer science started back in 2016 during my
								senior year of undergrad. I spent most of my time focusing on
								designing apps and learning to code, often putting more effort
								into it than my Public Administration degree.
								{" (: "}
							</p>
							<br />
							<p className="text-lg leading-8 text-gray-300">
								Post-grad, I attended a coding bootcamp in my hometown, did some
								freelance work and worked on a startup with a friend. I loved
								every second of it (but unfortunately, the world shut down).
								This prompted me to go back to school for computer science. Fast
								forward to today, I am a few weeks away from completing the
								computer science bridge program at Grand Canyon University and
								will be starting the Master of Science in Computer Science
								program in January 2024.
							</p>
							<br />
							<p className="mt-2 text-lg leading-8 text-gray-300 font-medium">
								Here are a few languages, technologies and tools I’ve been
								working with recently:
							</p>
							<ul
								role="list"
								className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2">
								{comptency.map((competencies) => (
									<li key={competencies} className="flex gap-x-3">
										<CheckCircleIcon
											className="h-7 w-5 flex-none"
											aria-hidden="true"
										/>
										{competencies}
									</li>
								))}
							</ul>
							<div className="mt-10 flex">
								<a
									href="#"
									className="text-sm font-semibold leading-6 text-indigo-400">
									Download Resume <span aria-hidden="true">&rarr;</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div
					className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
					aria-hidden="true">
					<div
						className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
						style={{
							clipPath:
								"polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
						}}
					/>
				</div>
			</div>
		</div>
	);
}
