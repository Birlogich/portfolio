import { JobSection } from "./JobSection";
import { Link } from "react-router-dom";

const jobs = [
  {
    title: "Computer Techinican",
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
    type: "Full-time",
    company: "REECARD LLC",
    location: "CA, US",
    time: "04/23 - 08/24",
  },
  {
    title: "Frontend Developer",
    type: "Full-time",
    company: "Guldia PRO",
    location: "Russia",
    time: "05/22 - 10/2022",
  },
  {
    title: "English Teacher",
    type: "Full-time",
    company: "Windsor English Language Private School",
    location: "Russia",
    time: "09/17 - 05/22",
  },
];

const education = [
  {
    title: "B.S. in Software Engineering",
    company: "Samara State University",
    location: "Remote",
    time: "12/2023 – 12/2028",
    type: "University",
  },
  {
    title: "CompTIA A+ Core 2",
    company: "CompTIA",
    location: "Remote, US",
    time: "2025",
    type: "Course",
  },
  {
    title: "CompTIA A+ Core 1",
    company: "CompTIA",
    location: "Remote, US",
    time: "2025",
    type: "Course",
  },
  {
    title: "CompTIA ITF+",
    company: "CompTIA",
    location: "Remote, US",
    time: "2025",
    type: "Course",
  },
  {
    title: "Software Development Degree",
    company: "Skillfactory",
    location: "Remote, Russia",
    time: "2023",
    type: "Vocational Degree",
  },
  {
    title: "Software Development Course",
    company: "Direct Line Academy",
    location: "Tolyatti, Russia",
    time: "2022",
    type: "Course",
  },
];

export const About = () => {
  return (
    <div className="flex flex-col w-full flex-auto">
      <h2>About Me</h2>
      <p className="max-w-[700px] mb-[40px] text-[20px] text-link-color sm:mb-[20px]">
        I am an IT Support Engineer with hands-on experience supporting Windows
        and ChromeOS environments in enterprise settings. I specialize in
        troubleshooting hardware, operating systems, and network connectivity
        issues. My experience includes managing devices in Google Workspace
        environments, resolving technical issues through ticketing systems such
        as ServiceNow, and supporting end users in production environments. In
        addition to my professional experience, I maintain a personal home lab
        where I practice system administration, networking, and infrastructure
        concepts using Windows Server, Linux, and virtualization technologies. I
        am currently pursuing a Bachelor's degree in Software Engineering while
        preparing for the CompTIA Network+ certification to further develop my
        networking and infrastructure expertise.
      </p>

      {/* Education Section */}
      <h2 className="text-section-title-color text-section-title font-bold mb-[40px] sm:mb-[20px]">
        Education
      </h2>
      <div className="w-full mb-[40px]">
        {education.map((edu, index) => (
          <JobSection job={edu} key={index} />
        ))}
      </div>

      {/* Work Experience Section */}
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
