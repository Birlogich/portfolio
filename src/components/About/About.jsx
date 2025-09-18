import { JobSection } from "./JobSection";
import { Link } from "react-router-dom";

const jobs = [
    {
    title: "Chromebook Repair Technician",
    type: "Full-time",
    company: "Inspiroz",
    location: "PA, US",
    time: "08/2025 - Present",
  },
  {
    title: "Field Investigator",
    type: "Full-time",
    company: "D.O. Richardson and Associates",
    location: "PA, US",
    time: "08/2024 - 08/2025",
  },
  {
    title: "Frontend Developer",
    type: "Freelance",
    company: "UpWork",
    location: "Remote, US",
    time: "01/24 - 08/24",
  },
  {
    title: "Frontend Developer",
    type: "Contract",
    company: "REECARD LLC",
    location: "CA, US",
    time: "08/23 - 12/23",
  },

  {
    title: "Frontend Developer",
    type: "Full-time",
    company: "Guldia PRO",
    location: "Russia",
    time: "04/22 - 10/2022",
  },

  {
    title: "Detective",
    type: "Full-time",
    company: "Police",
    location: "Russia",
    time: "03/12 - 09/21",
  },
];

export const About = () => {
  return (
    <div className="flex flex-col w-full flex-auto">
      <Link 
        to="/files/IvanZhigalevResume.docx"
        target="_blank"
        download
        className="max-w-[285px] mb-[40px] text-[20px] text-link-color sm:mb-[20px] underline-offset-1 border-b-[1px] border-solid border-black"
      >
        My Resume(click to download)
      </Link>
      <h2>About Me</h2>
      <p className="max-w-[700px] mb-[40px] text-[20px] text-link-color sm:mb-[20px]">
        Dedicated IT Support Specialist with strong troubleshooting skills and passion 
        for solving technical challenges. Experienced in system administration, 
        hardware/software support, and backend development. Currently pursuing a 
        Computer Science degree and CompTIA certifications to strengthen technical 
        expertise and career growth.
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
