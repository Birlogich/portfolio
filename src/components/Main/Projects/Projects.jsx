import React, { memo } from "react";
import personal from "../../../assets/img/personal.png";
import flags from "../../../assets/img/flags.png";
import shortly from "../../../assets/img/shortly.png";
import kanban from "../../../assets/img/kanban.png";
import mistfile from "../../../assets/img/mistfile.png";
import ipTracker from "../../../assets/img/ipTracker.png";
import { useInView } from "react-intersection-observer";
import { Project } from "./Project";
import { useGetWindowWidth } from "../../customHooks/useGetWindowWidth";
import { useCallback, useEffect, useRef } from "react";
import { useSlider } from "../../customHooks/useSlider";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useTheme } from "../../../features/theme/use-theme";
import styles from "./projects.module.scss";

const projects = [
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
      "HTML, TailWind CSS, Animated TailWind CSS, React.JS, STRIPE.JS, JS cookie, React-Hook-Form, -React-Router-Dom, Redux Persist, Redux RTK",
    link: "https://clomd.com/",
    github: "https://github.com/Birlogich/mistfile",
  },
  {
    img: ipTracker,
    title: "IP Tracker",
    describe: `An IP tracker web application, allows users to track and visualize IP addresses on a map.`,
    stack:
      "HTML5, CSS3, SCSS, Framer-Motion Library For CSS, JavaScript (ES6+), React.JS, React-Copy-To-Clipboard, React-Redux, React-Router-Dom, Redux-Persist, React-Icons, React-Hook-Form, React-Leaflet, React-Text-Mask",
    link: "https://ip-tracker-ten-alpha.vercel.app/",
    github: "https://github.com/Birlogich/ipTracker",
  },
  {
    img: shortly,
    title: "URL Shortener",
    describe: `A URL shortener web application.`,
    stack:
      "HTML5, CSS3, SCSS, Framer-Motion Library For CSS, JavaScript (ES6+), React.JS, React-Copy-To-Clipboard, React-Redux, React-Router-Dom, Redux-Persist, React-Icons, React-Hook-Form",
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
    describe:
      "The application to check neighbors of every country.",
    stack: "Styled.Components, React.JS, RTK, HTML",
    link: "https://countries-flags-app-one.vercel.app/",
    github: "https://github.com/Birlogich/countries-flags",
  },
];

export const Projects = memo(() => {
  const ref = useRef();
  const { ref: inViewRef, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  const setRefs = useCallback(
    (node) => {
      ref.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );

  const [width] = useGetWindowWidth();
  const [theme] = useTheme();
  const switchColor = theme === "dark" ? "white" : "black";
  const mappedProjects = projects.map((project, index) => {
    return <Project project={project} key={index} inView={inView} />;
  });

  console.log(mappedProjects);

  const [
    goToPrevSlide,
    goToNextSlide,
    handleTouchStart,
    handleTouchMove,
    slide,
    setItems,
    items,
  ] = useSlider();
  useEffect(() => {
    setItems(projects);
  }, []);

  const slicedMappedProjects = items
    ?.slice(slide, slide + 1)
    .map((project, index) => {
      return <Project project={project} key={index} inView={inView} />;
    });

  return (
    <div className={styles.wrapper}>
      <h2>Projects</h2>
      <h3>Things I’ve built so far</h3>
      <div
        ref={setRefs}
        className="flex w-full flex-wrap justify-center"
        style={{ margin: "0 -20px" }}
      >
        {width > 767 && mappedProjects}
        {width <= 767 && width > 410 && (
          <div className="flex">
            <FaLongArrowAltLeft
              onClick={goToNextSlide}
              className="w-[35px]"
              color={switchColor}
            />
            <div
              className="flex"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              {slicedMappedProjects}
            </div>
            <FaLongArrowAltRight
              onClick={goToPrevSlide}
              className="w-[35px]"
              color={switchColor}
            />
          </div>
        )}
        {width <= 410 && (
          <div className="flex flex-col">
            <div className="flex w-full">
              <FaLongArrowAltLeft
                onClick={goToNextSlide}
                className="w-[35px]"
                color={switchColor}
              />
              <FaLongArrowAltRight
                onClick={goToPrevSlide}
                className="w-[35px]"
                color={switchColor}
              />
            </div>
            <div
              className="flex"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              {slicedMappedProjects}
            </div>
          </div>
        )}
      </div>
    </div>
  );
});
