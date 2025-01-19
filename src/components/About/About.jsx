import React from "react";
import { JobSection } from "./JobSection";
import { Link } from "react-router-dom";

const jobs = [
  {
    title: "Field Investigator",
    type: "Full-time",
    company: "D.O. Richardson and Associates",
    location: "PA, United States",
    time: "08/2024 - Present",
  },
  {
    title: "Frontend Developer",
    type: "Freelance",
    company: "UpWork",
    location: "Remote, United States",
    time: "06/2024 - Present",
  },
  {
    title: "Frontend Developer",
    type: "Contract",
    company: "REECARD LLC",
    location: "CA, United States",
    time: "08/2023 - 12/2023",
  },

  {
    title: "Frontend Developer",
    type: "Full-time",
    company: "SЕОТLТ",
    location: "",
    time: "09/2020 - 09/2022",
  },

  {
    title: "Detective",
    type: "Full-time",
    company: "Police",
    location: "",
    time: "03/2012 - 09/2020",
  },
];

export const About = () => {
  return (
    <div className="flex flex-col w-full flex-auto">
      <Link
        to="/files/IvanZhigalevResumeUpdated.docx"
        target="_blank"
        download
        className="max-w-[285px] mb-[40px] text-[20px] text-link-color sm:mb-[20px] underline-offset-1 border-b-[1px] border-solid border-black"
      >
        My Resume(click to download)
      </Link>
      <h2>About Me</h2>
      <p className="max-w-[700px] mb-[40px] text-[20px] text-link-color sm:mb-[20px]">
        I'm frontend developer with experience working with HTML, CSS/SCSS,
        ES6+, React, React-Redux, RESTful API and strong design skills.
        Throughout this time I worked on commercial projects such as a cloud
        storage web application and web messenger. Have a strong combination of
        technical ability and creativity, eager to tackle complex problems and
        continue to find ways to maximize user efficiency.
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
