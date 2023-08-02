export default function Contact() {
	return (
		<div className="bg-gray-200 py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900">
						Contact Me!
					</h1>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Please feel free to contact me with any internship or job
						opportunities via email or LinkedIn
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
					<div>
						<h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
							Email Me
						</h3>
						<address className="border-l border-gray-200 pl-6 pt-2 not-italic text-blue-600 underline">
							<a href="mailto:kanetoomer@yahoo.com">kanetoomer@yahoo.com</a>
						</address>
					</div>
					<div>
						<h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
							Connect on LinkedIn
						</h3>
						<address className="border-l border-gray-200 pl-6 pt-2 not-italic text-blue-600 underline">
							<a href="https://www.linkedin.com/in/kanetoomer">
								www.linkedin.com/in/kanetoomer
							</a>
						</address>
					</div>
				</div>
			</div>
		</div>
	);
}
