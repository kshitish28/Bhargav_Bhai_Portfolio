import Link from "next/link";
import { motion } from "framer-motion";

import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import EmailIcon from "./../public/assets/icons/email.svg";

function About() {
  return (
    <section
      className="md:my-36 md:w-2/3 w-full h-full xl:ml-36 lg:ml-12 p-8 md:mt-[40svh] xl:mt-[150px]"
      id="about"
    >
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={"sectionSubText text-gray-300"}>Introduction</p>
        <h2 className={"sectionHeadText text-white"}>Overview.</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-gray-300 text-[17px] w-full leading-[30px] flex flex-col justify-between gap-6"
      >
        <div>
          Hello! I&apos;m Jami Bhargav, a cybersecurity specialist and IT auditor
          with a passion for securing enterprise environments. Currently, I&apos;m
          working as a Senior IT Auditor at ASA & Associates LLP, where I conduct
          IT General Controls (ITGC) audits, assess security risks, and ensure
          compliance with industry frameworks such as ISO 27001, SOC, and SOX.

          Previously, I worked as an Associate Security Consultant at SecurEyes,
          specializing in penetration testing, vulnerability assessments, and web
          application security. I have hands-on experience with security tools like
          Burp Suite, SQL Map, and Directory Buster, and I am skilled in assessing
          applications against OWASP Top 10 and SANS 25 security risks.

          My expertise spans network security, IAM (Identity and Access Management),
          risk management, and compliance auditing. I hold certifications such as
          API Security Architect, CSCP, and multiple Fortinet certifications.

          <br className="sm:block hidden" />
          Let&apos;s connect and collaborate to strengthen cybersecurity!
        </div>

        <div className="w-fit break-words">
          <Link
            href="mailto:bhargavjami01@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary w-full transition-all duration-100 ease-in flex md:items-center gap-2 md:flex-row flex-wrap word-break hover:-translate-y-2"
          >
            <EmailIcon className="w-[30px] h-[30px]" />
            bhargavjami01@gmail.com
          </Link>
        </div>
        <div className="flex gap-5 items-center">
          {socials.map((social) => (
            <Link
              href={social.link}
              target="_blank"
              key={social.id}
              className="w-8 h-8 hover:-translate-y-2 ease-in transition-all duration-100 cursor-pointer"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        <Link
          href="document/Jami_Bhargav_CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="w-fit"
        >
          <div className="btn w-fit bg-tertiary text-white px-7 py-2 rounded-md overflow-hidden relative cursor-pointer">
            <div className="original bg-primary text-white px-7 py-2">
              Resume
            </div>
            <div className="letters">
              <span>R</span>
              <span>e</span>
              <span>s</span>
              <span>u</span>
              <span>m</span>
              <span>e</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}

export default About;
