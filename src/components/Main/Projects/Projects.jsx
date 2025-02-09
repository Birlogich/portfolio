import React from "react";
import personal from "../../../assets/img/personal.png";
import flags from "../../../assets/img/flags.png";
import shortly from "../../../assets/img/shortly.png";
import kanban from "../../../assets/img/kanban.png";
import mistfile from "../../../assets/img/mistfile.png";
import starwars from "../../../assets/img/starwars.png";
import ipTracker from "../../../assets/img/ipTracker.png";
import { Project } from "./Project";
import { useGetWindowWidth } from "../../customHooks/useGetWindowWidth";
import styles from "./projects.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const projects = [
  {
    img: starwars,
    title: "STAR WARS APP",
    describe: "Fan site about Star Wars with complete info.",
    stack: "HTML, NEXT.JS, Tailwind CSS, React.JS, REST API",
    link: "https://starwars-cyan.vercel.app/",
    github: "https://github.com/Birlogich/starwars",
  },
  {
    img: kanban,
    title: "STRUKD",
    describe:
      "Web application dedicaded a platform which leverages machine learning.",
    stack: "HTML, NEXT.JS, Tailwind CSS, React.JS",
    link: "https://strukd.com/",
    github: "https://strukd.com/",
  },
  {
    img: mistfile,
    title: "Clomd",
    describe: `A cloud computing application.`,
    stack:
      " React.JS, TailWind CSS, STRIPE.JS, React-Hook-Form, React-Router-Dom, Redux Persist, Redux RTK",
    link: "https://clomd.com/",
    github: "https://github.com/Birlogich/mistfile",
  },
  {
    img: ipTracker,
    title: "IP Tracker",
    describe: `An IP tracker web application, allows users to track and visualize IP addresses on a map.`,
    stack:
      "React.JS, SCSS, React-Redux, React-Router-Dom, Redux-Persist, React-Hook-Form, React-Leaflet, React-Text-Mask",
    link: "https://ip-tracker-ten-alpha.vercel.app/",
    github: "https://github.com/Birlogich/ipTracker",
  },
  {
    img: shortly,
    title: "URL Shortener",
    describe: `A URL shortener web application.`,
    stack:
      "React.JS, SCSS, React-Copy-To-Clipboard, React-Redux, React-Router-Dom, Redux-Persist, React-Icons, React-Hook-Form",
    link: "https://urlshortener-kohl.vercel.app/",
    github: "https://github.com/Birlogich/urlshortener",
  },
  {
    img: personal,
    title: "Personal Website",
    describe: `My first website from 2021.`,
    stack: "HTML, CSS, GULP, SCSS, REST API, JS",
    link: "https://ivanzhigalev-birlogich.vercel.app/",
    github: "https://github.com/Birlogich/Cutaway",
  },
  {
    img: flags,
    title: "Country Flag APP",
    describe: "The application to check neighbors of every country.",
    stack: "Styled.Components, React.JS, RTK, HTML",
    link: "https://countries-flags-app-one.vercel.app/",
    github: "https://github.com/Birlogich/countries-flags",
  },
];

export const Projects = () => {
  const [width] = useGetWindowWidth();

  return (
    <div className={styles.wrapper}>
      <h2>Projects</h2>
      <h3>Things I’ve built so far</h3>
      {width > 850 && (
        <div
          className="flex w-full flex-wrap justify-center"
          style={{ margin: "0 -20px" }}
        >
          {projects.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </div>
      )}
      {width <= 850 && (
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className={styles.swiper}
        >
          {projects.map((project) => (
            <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
              <Project project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};
