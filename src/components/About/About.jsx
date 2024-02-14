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
    title: "Sales Manager",
    type: "Full-time",
    company: "LIDER TRANS GLOBAL FORWARDING",
    location: "Russia",
    time: "Nov 2021 - May 2022",
  },
  {
    title: "Detective",
    type: "Full-time",
    company: "Police of Russia",
    location: "Russia",
    time: "Jun 2016 - Sep 2021",
  },
  {
    title: "Detective",
    type: "Full-time",
    company: "Federal Drug Control Service of Russia",
    location: "Russia",
    time: "Mar 2012 - Jun 2016",
  },
];

export const About = () => {
  return (
    <div className="flex flex-col w-full flex-auto">
      <h2>About Me</h2>
      <p className="max-w-[700px] mb-[40px] text-[20px] text-link-color sm:mb-[20px]">
        I'm frontend developer with three years of experience working with HTML,
        CSS/SCSS, ES6+, React, React-Redux, RESTful API and strong design
        skills. Throughout these three years I worked on commercial projects
        such as a cloud storage web application and web messenger. Have a strong
        combination of technical ability and creativity, eager to tackle complex
        problems and continue to find ways to maximize user efficiency.
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
