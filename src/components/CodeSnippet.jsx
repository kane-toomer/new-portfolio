import React from "react";

export default function CodeSnippet() {
	return (
		<div className="px-6 pt-6 text-white whitespace-pre-line break-words">
			<pre>
				<code>
					<p>
						<span className="text-pink-400">import</span>{" "}
						<span className="text-cyan-200">React</span>{" "}
						<span className="text-pink-400">from</span>{" "}
						<span className="text-orange-300">"react"</span>
						<span>;</span>
					</p>
					<br />
					<br />
					<p>
						<span className="text-blue-500">const</span>{" "}
						<span className="text-yellow-100">GetInternship</span>{" "}
						<span className="text-yellow-100">=</span>{" "}
						<span className="text-yellow-400">{"({"}</span>{" "}
						<span>{"thats_the_goal"}</span>{" "}
						<span className="text-yellow-400">{"})"}</span>{" "}
						<span className="text-blue-500">{"=>"}</span>
						<span className="text-yellow-400">{" { "}</span>
						<br />
						<span className="ml-10 text-pink-400">const</span>{" "}
						<span className="text-cyan-200">{"isInternshipObtained"}</span>{" "}
						<span className="text-yellow-100">=</span>{" "}
						<span className="text-blue-500">true</span>
						<span>;</span>
						<br />
						<span className="ml-10 text-pink-400">{"return"}</span>{" "}
						<span className="text-cyan-200">isInternshipObtained</span> <br />
						<span className="ml-20">{"?"}</span>{" "}
						<span className="text-orange-300">"I am incredible happy!!"</span>
						<br />
						<span className="ml-20">:</span>{" "}
						<span className="text-orange-300">"I am incredible sad!!"</span>
						<span>;</span>
						<br />
						<span className="text-yellow-400">{"}"}</span>
						<span>;</span>
						<br />
						<br />
						<br />
						<span className="text-pink-400">export default</span>{" "}
						<span className="text-yellow-100">GetInternship</span>
						<span>;</span>
						<br />
						<br />
					</p>
				</code>
			</pre>
		</div>
	);
}
