import React from "react";
import { JobSection } from "./JobSection";

const jobs = [
  {
    title: "Frontend Engineer",
    type: "Contract",
    company: "REECARD LLC",
    location: "CA, United States",
    time: "Aug 2023 - Dec 2023",
  },
  {
    title: "Frontend Web Developer",
    type: "Full-time",
    company: "Gуldiа Рrо",
    location: "Russia",
    time: "May 2022 - Nov 2022",
  },
  {
    title: "Frontend Developer",
    type: "Freelance",
    company: "Freelance",
    location: "United States",
    time: "Nov 2022 - Present",
  },
  {
    title: "Sales Manager",
    type: "Full-time",
    company: "LIDER TRANS GLOBAL FORWARDING",
    location: "Russia",
    time: "May 2017 - May 2022",
  },
];

export const About = () => {
  return (
    <div className="flex flex-col w-full flex-auto">
      <h2 className="text-section-title-color text-section-title font-bold mb-[40px] sm:mb-[20px]">
        About Me
      </h2>
      <p className="max-w-[700px] mb-[40px] text-[20px] text-link-color sm:mb-[20px]">
        Ivan is a Frontend Engineer at the Reecard LLC and has been dedicated to
        creating frontend side of web applications. Ivan worked as a Frontend
        Engineer in Russia for half a year, where he developed HTML e-mails and
        product cards using company's CMS and as a Sales Manager for 5 years. He
        holds Master's Degree in LAW and Vocational Degree in Software
        Engineering.
      </p>
      <h2 className="text-section-title-color text-section-title font-bold mb-[40px] sm:mb-[20px]">
        Work Experience
      </h2>
      <div className="w-full">
        {jobs.map((job, index) => (
          <JobSection job={job} key={index} />
        ))}
      </div>
    </div>
  );
};
