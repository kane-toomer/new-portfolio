import { CheckCircleIcon } from "@heroicons/react/20/solid";

import headshot from "../assets/images/headshot.svg";

const comptency1 = [
	"Frontend Development",
	"Backend Development",
	"Design and Analysis of Algorithms",
	"Parallel Programming",
	"Machine Learning",
	"Artificial Intelligence",
];

export default function About() {
	return (
		<div className="bg-gray-900 py-24 sm:py-32">
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
								My name is Kane Toomer. I am a currently pursuing my Master's
								Degree in Computer Science from Grand Canyon University. Through
								my collegiate and personal pursuits, I have experience in
								variety of Computer Science competencies:
							</p>
							<ul
								role="list"
								className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2">
								{comptency1.map((competencies) => (
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
