import personal from "../../../assets/img/personal.png";
import flags from "../../../assets/img/flags.png";
import kanban from "../../../assets/img/kanban.png";
import mistfile from "../../../assets/img/mistfile.png";
import reecard from "../../../assets/img/reecard.png";
import scan from "../../../assets/img/scan.png";
import irvas from "../../../assets/img/window-store.png";
import pictures from "../../../assets/img/pictures.art.png";
import { Project } from "./Project";
import { useGetWindowWidth } from "../../customHooks/useGetWindowWidth";
import { useEffect } from "react";
import { useSlider } from "../../customHooks/useSlider";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useTheme } from "../../../features/theme/use-theme";
import styles from "./projects.module.scss";

const projects = [
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
    img: mistfile,
    title: "Mistfile",
    describe: `This is a cloud computing application. I implemented registration, login, communication with backend,
    rendering components getting JSON data from the API. In this application we used non-password verification, so I created logics which catch from the 
    search query necessary information and check user type and subscription type, using Redux RTK and React-Router-Dom and useEffect Hook.`,
    stack:
      "HTML, TailWind CSS, Animated TailWind CSS, React.JS, STRIPE.JS, JS cookie, React-Hook-Form, -React-Router-Dom, Redux Persist, Redux RTK",
    link: "https://github.com/Birlogich/mistfile",
    github: "https://github.com/Birlogich/mistfile",
  },
  {
    img: reecard,
    title: "Reecard",
    describe: "It's the main website of Reecard Company",
    stack: "HTML, Tailwind CSS, React.JS, React-Router-Dom",
    link: "https://reecard.com/",
    github: "https://github.com/Birlogich",
  },
  {
    img: irvas,
    title: "Window Store IRVAS",
    describe: `This website I made as a freelancer. I had HTML and CSS website with no JS. 
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
    describe: `This website I made as a freelancer. I had HTML and CSS website with no JS. 
    All JavaScript code was written with OOP standard. I created logics to catch the scroll in the end of the window to show modal popup window. 
    Implemented slider on a Vanilla JS. Developed forms for sending data for backend and mask for phone number input. Implemented filter for elements. 
    Tech Stack: HTML, CSS, SCSS, GULP, JavaScript`,
    stack:
      "Html, SCSS, React.JS, React-Router-Dom, Redux-React, Material UI, REST API, Axios, GIT",
    link: "https://pictures-art-coral.vercel.app/",
    github: "https://github.com/Birlogich/pictures.art",
  },
  {
    img: scan,
    title: "SCAN",
    describe: `It is an application for business which can help people find information about company in Russia. 
    I used many React Libraries like Redux-React, React-Router-DOM and Material UI. 
    In this application I implemented logics for authorization using Axios library for requests to API. 
    For the best speed of app I used React-Router-Dom features like Layout and Outlet to avoid unnecessary re-renders of components.`,
    stack:
      "Html, SCSS, React.JS, React-Router-Dom, Redux-React, Material UI, REST API, Axios, GIT",
    link: "https://searchinnapp-birlogich.vercel.app/",
    github: "https://github.com/Birlogich/searchinnapp",
  },
];

export const Projects = () => {
  const [width] = useGetWindowWidth();
  const [theme] = useTheme();
  const switchColor = theme === "dark" ? "white" : "black";
  const mappedProjects = projects.map((project, index) => {
    return <Project project={project} key={index} />;
  });

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
      return <Project project={project} key={index} />;
    });

  return (
    <div className={styles.wrapper}>
      <h2>Projects</h2>
      <h3>Things I’ve built so far</h3>
      <div
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
};
