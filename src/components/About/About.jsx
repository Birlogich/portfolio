import React from "react";
import { JobSection } from "./JobSection";

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
    time: "01/24 - 08/24",
  },
  {
    title: "Frontend Developer",
    type: "Contract",
    company: "REECARD LLC",
    location: "CA, United States",
    time: "08/23 - 12/23",
  },

  {
    title: "Frontend Developer",
    type: "Full-time",
    company: "Guldia PRO",
    location: "",
    time: "04/22 - 10/2022",
  },

  {
    title: "Detective",
    type: "Full-time",
    company: "Police",
    location: "",
    time: "03/12 - 09/21",
  },
];

export const About = () => {
  return (
    <div className="flex flex-col w-full flex-auto">
      {/*       <Link
        to="/files/IvanZhigalevResumeUpdated.docx"
        target="_blank"
        download
        className="max-w-[285px] mb-[40px] text-[20px] text-link-color sm:mb-[20px] underline-offset-1 border-b-[1px] border-solid border-black"
      >
        My Resume(click to download)
      </Link> */}
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
