import React, { memo } from "react";
import personal from "../../../assets/img/personal.png";
import flags from "../../../assets/img/flags.png";
import shortly from "../../../assets/img/shortly.png";
import kanban from "../../../assets/img/kanban.png";
import mistfile from "../../../assets/img/mistfile.png";
import reecard from "../../../assets/img/reecard.png";
import scan from "../../../assets/img/scan.png";
import ipTracker from "../../../assets/img/ipTracker.png";
import irvas from "../../../assets/img/window-store.png";
import pictures from "../../../assets/img/pictures.art.png";
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
    img: mistfile,
    title: "Clomd",
    describe: `This is a cloud computing application. I implemented registration, login, communication with backend,
    rendering components getting JSON data from the API. In this application we used non-password verification, so I created logics which catch from the 
    search query necessary information and check user type and subscription type, using Redux RTK and React-Router-Dom and useEffect Hook.`,
    stack:
      "HTML, TailWind CSS, Animated TailWind CSS, React.JS, STRIPE.JS, JS cookie, React-Hook-Form, -React-Router-Dom, Redux Persist, Redux RTK",
    link: "https://clomd.com/",
    github: "https://github.com/Birlogich/mistfile",
  },
  {
    img: ipTracker,
    title: "IP Tracker",
    describe: `This project is an IP tracker web application developed as a solution to the IP Address Tracker Challenge from Frontend Mentor. The app allows users to track and visualize IP addresses on an interactive map, providing details about the location, ISP, and other relevant information.`,
    stack:
      "HTML5, CSS3, SCSS, Framer-Motion Library For CSS, JavaScript (ES6+), React.JS, React-Copy-To-Clipboard, React-Redux, React-Router-Dom, Redux-Persist, React-Icons, React-Hook-Form, React-Leaflet, React-Text-Mask",
    link: "https://ip-tracker-ten-alpha.vercel.app/",
    github: "https://github.com/Birlogich/ipTracker",
  },
  {
    img: shortly,
    title: "URL Shortener",
    describe: `This project is a URL shortener web application. The app allows users to shorten long URLs into more manageable, easy-to-share links.`,
    stack:
      "HTML5, CSS3, SCSS, Framer-Motion Library For CSS, JavaScript (ES6+), React.JS, React-Copy-To-Clipboard, React-Redux, React-Router-Dom, Redux-Persist, React-Icons, React-Hook-Form",
    link: "https://urlshortener-kohl.vercel.app/",
    github: "https://github.com/Birlogich/urlshortener",
  },
  {
    img: personal,
    title: "Personal Website",
    describe: `My first website which I wrote in 2021. It was the first time when I used HTML, CSS, Vanilla JS together. 
    Authorization and registration I implemented using Fetch Requests. Information about user I collected and saved in 
    local.storage. The logics of search requests I used browser API via search queries. `,
    stack: "HTML, CSS, GULP, SCSS, REST API, JS",
    link: "https://ivanzhigalev-birlogich.vercel.app/",
    github: "https://github.com/Birlogich/Cutaway",
  },
  {
    img: flags,
    title: "Country Flag APP",
    describe:
      "The application dedicated country flags and can check neighbors of every country. My PET Project to hone my skills in Redux-React. Information about application's state I saved in the store using Redux RTK.  ",
    stack: "Styled.Components, React.JS, RTK, HTML",
    link: "https://countries-flags-app-one.vercel.app/",
    github: "https://github.com/Birlogich/countries-flags",
  },
  {
    img: kanban,
    title: "Kanban App",
    describe:
      "This is Kanban Application. Pet project for hone skills React.JS. I didn't use there React-Redux. The application save all the information about state in the local.storage. ",
    stack: "HTML, Tailwind CSS, React.JS",
    link: "https://kanban-app-birlogich.vercel.app/",
    github: "https://github.com/Birlogich/kanban-app",
  },
  {
    img: irvas,
    title: "Window Store IRVAS",
    describe: `The pet project. I had HTML and CSS website with no JS. 
    I added modal(popup) windows, created forms to send information to backend, 
    implemented input form-calculator to count the amount of work, manipulated DOM tree using JS.
    Tech Stack: HTML, CSS, SCSS, GULP, JavaScript.`,
    stack:
      "Html, SCSS, React.JS, React-Router-Dom, Redux-React, Material UI, REST API, Axios, GIT",
    link: "https://window-shop-one.vercel.app/",
    github: "https://github.com/Birlogich/Window_Shop",
  },
  {
    img: pictures,
    title: "Pictures.art",
    describe: `The pet project. I had HTML and CSS website with no JS. 
    All JavaScript code was written with OOP standard. I created logics to catch the scroll in the end of the window to show modal popup window. 
    Implemented slider on a Vanilla JS. Developed forms for sending data for backend and mask for phone number input. Implemented filter for elements. 
    Tech Stack: HTML, CSS, SCSS, GULP, JavaScript`,
    stack:
      "Html, SCSS, React.JS, React-Router-Dom, Redux-React, Material UI, REST API, Axios, GIT",
    link: "https://pictures-art-coral.vercel.app/",
    github: "https://github.com/Birlogich/pictures.art",
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
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
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
