import { Fragment } from "react";
import { Tab } from "@headlessui/react";

const tabs = [
	{
		name: "Eazy Rezz",
		features: [
			{
				name: "Restaurant Booking Management",
				description: "Null",
				imageSrc:
					"https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg",
				imageAlt:
					"Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.",
				liveSiteLink: "",
				gitHubRepository: "",
			},
		],
	},
	{
		name: "Library Genie",
		features: [
			{
				name: "Library Management System",
				description:
					" I built this project for a CS class in-order to get a better grasp of Java + MongoDB. By building this project, I obtained a solid understanding of ________.",
				imageSrc:
					"https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-03.jpg",
				imageAlt:
					"Walnut organizer base with white polycarbonate trays in the kitchen with various kitchen utensils.",
			},
		],
	},
	{
		name: "Movie Critic",
		features: [
			{
				name: "Movie Review Application",
				description:
					"This is a very basic movie review application that features a separation of concerns between the client code and the server code. I built this project in-order to learn SpringBoot. This project was built using React, Bootstrap/React-Bootstrap, Java + Spring Boot and MongoDB.",
				imageSrc:
					"https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg",
				imageAlt:
					"Maple organizer base with slots, supporting white polycarbonate trays of various sizes.",
				liveSiteLink: "",
				gitHubRepository: "",
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
			<div className="bg-white py-24">
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
													<div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:aspect-h-2 sm:aspect-w-5">
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
