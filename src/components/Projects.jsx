import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import watchy from "../assets/images/watchy.jpg";
import algo from "../assets/images/algo.jpg";

const tabs = [
	{
		name: "Watchy",
		features: [
			{
				name: "E-Commerce Marketplace for Luxury Watches",
				description:
					"Developed a full-stack e-commerce platform enabling users to purchase luxury watches online, with seamless payment processing and product management.",
				techStack:
					"HTML, JavaScript, Java, React.js, Tailwind CSS, Stripe API, MongoDB, GitHub",
				imageSrc: watchy,
				imageAlt:
					"Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.",
				liveSiteLink: "",
				gitHubRepository: "https://github.com/kane-toomer/watchy",
			},
		],
	},
	{
		name: "Algo-Sorter",
		features: [
			{
				name: "Java Algorithm Sorter",
				description:
					" I built this project for a CS class in-order to get a better grasp of algorithms and data structures using Java. By building this project, I obtained a solid understanding of the Bubble, Merge, Selection and Insertion Sort algorithms .",
				techStack: "",
				imageSrc: algo,
				imageAlt: "Image of my algorithm sorter application.",
				liveSiteLink:
					"https://www.loom.com/share/2dc08a43b9694961b5cf52c9d7c762f4?sid=ebb70af2-8f97-46fd-bbb1-1370c0fd410e",
				gitHubRepository: "https://github.com/kane-toomer/algo-sorter",
			},
		],
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Project() {
	return (
		<>
			<div className="bg-white py-24" id="projects">
				<section
					aria-labelledby="features-heading"
					className="mx-auto max-w-7xl py-16 sm:px-2 lg:px-8">
					<div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
						<div className="max-w-3xl">
							<h1
								id="features-heading"
								className="font-bold tracking-tight text-gray-900 text-4xl">
								Featured Projects
							</h1>
							<p className="mt-4 text-gray-500">
								Welcome to my portfolio's "Projects" section! Here, I showcase a
								collection of applications that reflect my skills and passion.
								From full-stack web applications and mobile apps to data
								analysis and creative designs, each project represents my
								commitment to problem-solving and continuous learning. Let's
								explore my creations!
							</p>
						</div>

						<Tab.Group as="div" className="mt-4">
							<div className="-mx-4 flex overflow-x-auto sm:mx-0">
								<div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
									<Tab.List className="-mb-px flex space-x-10">
										{tabs.map((tab) => (
											<Tab
												key={tab.name}
												className={({ selected }) =>
													classNames(
														selected
															? "border-indigo-500 text-indigo-600"
															: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
														"whitespace-nowrap border-b-2 py-6 text-sm font-medium"
													)
												}>
												{tab.name}
											</Tab>
										))}
									</Tab.List>
								</div>
							</div>

							<Tab.Panels as={Fragment}>
								{tabs.map((tab) => (
									<Tab.Panel
										key={tab.name}
										className="space-y-16 pt-10 lg:pt-16">
										{tab.features.map((feature) => (
											<div
												key={feature.name}
												className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
												<div className="mt-6 lg:col-span-5 lg:mt-0">
													<h3 className="text-lg font-medium text-gray-900">
														{feature.name}
													</h3>
													<p className="mt-2 text-sm text-gray-500">
														{feature.description}
													</p>
													<p className="mt-2 text-sm text-gray-500">
														<span className="font-medium text-black">
															Tech Stack:{" "}
														</span>
														{feature.techStack}
													</p>
													<div className="mt-10 flex items-center gap-x-6">
														<a
															href={feature.liveSiteLink}
															className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
															View Live Site
														</a>
														<a
															href={feature.gitHubRepository}
															className="text-sm font-semibold leading-6 text-gray-900">
															View GitHub Repository{" "}
															<span aria-hidden="true">→</span>
														</a>
													</div>
												</div>
												<div className="lg:col-span-7">
													<div className=" overflow-hidden rounded-lg bg-gray-100 ">
														<img
															src={feature.imageSrc}
															alt={feature.imageAlt}
															className="object-cover object-center"
														/>
													</div>
												</div>
											</div>
										))}
									</Tab.Panel>
								))}
							</Tab.Panels>
						</Tab.Group>
					</div>
				</section>
			</div>
		</>
	);
}
