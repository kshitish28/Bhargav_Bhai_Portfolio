import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const certifications = [
	{
	  title: "API Security Architect",
	  description: "Recognized for expertise in API security and secure software development.",
	  year: "2024",
	  certificateLink: "https://drive.google.com/drive/folders/1ccl6rEk7URI75CzOuWOctoeEEUxjIAZ1"
	},
	{
	  title: "CSCP (Cyber Security Certification Program) - SecurEyes",
	  description: "Completed advanced training in risk assessment, threat intelligence, and compliance.",
	  year: "2024",
	  certificateLink: "https://drive.google.com/drive/folders/1ccl6rEk7URI75CzOuWOctoeEEUxjIAZ1"
	},
	{
	  title: "Fortinet (NSE1, NSE2, NSE3)",
	  description: "Certified in network security, firewall configurations, and threat detection.",
	  year: "2023",
	  certificateLink: "https://drive.google.com/drive/folders/1ccl6rEk7URI75CzOuWOctoeEEUxjIAZ1"
	},
	{
	  title: "ISC2 Certified in Cybersecurity (CC)",
	  description: "Certified in security operations, risk management, and network security.",
	  year: "2025",
	  certificateLink: "https://drive.google.com/drive/folders/1ccl6rEk7URI75CzOuWOctoeEEUxjIAZ1"
	},
	{
	  title: "Certified Ethical Hacker (CEH)",
	  description: "Certified in penetration testing, ethical hacking, and cybersecurity defense.",
	  year: "2025",
	  certificateLink: "https://drive.google.com/drive/folders/1ccl6rEk7URI75CzOuWOctoeEEUxjIAZ1"
	}
  ];
  


function Achievements() {
	return (
		<section className="xl:my-36 md:mx-36 p-8" id="certifications">
			<motion.div
				variants={textVariant()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
			>
				<h3 className="sectionHeadText">Certifications</h3>
			</motion.div>

			<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
				{certifications.map((certification, index) => (
					<motion.div
						key={index}
						variants={fadeIn("up", "spring", index * 0.5, 0.75)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.25 }}
						className="flex flex-col justify-center items-center dark:bg-bgSecondaryDark bg-bgSecondaryLight p-8 rounded-lg shadow-lg w-full max-w-[370px]" // Adjusted width
					>
						<h3 className="text-xl font-bold text-center">{certification.title}</h3>
						<p className="text-sm mt-2 text-center">{certification.description}</p>
						<p className="mt-2 text-center text-gray-500">{certification.year}</p>
						<a
							href={certification.certificateLink}
							target="_blank"
							rel="noopener noreferrer"
							className="mt-4 text-blue-500 hover:underline flex items-center"
						>
							<span>Certificate</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="ml-2 w-4 h-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 10l4.293-4.293a1 1 0 011.414 1.414L17 12M15 10l-6 6M15 10h6M5 12h7"
								/>
							</svg>
						</a>
					</motion.div>
				))}
			</div>
		</section>
	);
}

export default Achievements;
