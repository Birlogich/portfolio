import personal from "../../assets/img/personal.png";
import flags from "../../assets/img/flags.png";
import kanban from "../../assets/img/kanban.png";
import mistfile from "../../assets/img/mistfile.png";
import reecard from "../../assets/img/reecard.png";
import scan from "../../assets/img/scan.png";
import irvas from "../../assets/img/window-store.png";
import pictures from "../../assets/img/pictures.art.png";
import { Project } from "./Project";
import { useGetWindowWidth } from "../customHooks/useGetWindowWidth";
import { useEffect } from "react";
import { useSlider } from "../customHooks/useSlider";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useTheme } from "../../features/theme/use-theme";

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

const buttonLeft = (
  <svg
    width="46"
    height="53"
    viewBox="0 0 46 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="1" y="0.76001" width="44" height="50.88" rx="16" stroke="black" />
    <path
      d="M26 32.6507C26 32.9078 25.9026 33.1544 25.7293 33.3361C25.556 33.5179 25.3209 33.62 25.0758 33.62C24.8306 33.62 24.5956 33.5179 24.4222 33.3361L18.2714 26.8854C18.1854 26.7955 18.1171 26.6887 18.0705 26.5711C18.024 26.4535 18 26.3274 18 26.2C18 26.0727 18.024 25.9466 18.0705 25.829C18.1171 25.7114 18.1854 25.6045 18.2714 25.5146L24.4222 19.0639C24.5956 18.8822 24.8306 18.78 25.0758 18.78C25.3209 18.78 25.556 18.8822 25.7293 19.0639C25.9026 19.2457 26 19.4922 26 19.7493C26 20.0064 25.9026 20.2529 25.7293 20.4347L20.2327 26.1992L25.7293 31.9654C25.9026 32.1471 26 32.3937 26 32.6507Z"
      fill="#23232D"
    />
  </svg>
);

const buttonRight = (
  <svg
    width="46"
    height="53"
    viewBox="0 0 46 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="1" y="0.76001" width="44" height="50.88" rx="16" stroke="black" />
    <path
      d="M21.1633 33.5282C20.9872 33.7149 20.7483 33.8198 20.4992 33.8198C20.2502 33.8198 20.0113 33.7149 19.8352 33.5282C19.6591 33.3416 19.5601 33.0883 19.5601 32.8243C19.5601 32.5603 19.6591 32.3071 19.8352 32.1204L25.4219 26.2002L19.8367 20.2782C19.7495 20.1858 19.6804 20.0761 19.6332 19.9553C19.586 19.8345 19.5617 19.7051 19.5617 19.5743C19.5617 19.4436 19.586 19.3142 19.6332 19.1934C19.6804 19.0726 19.7495 18.9629 19.8367 18.8704C19.924 18.778 20.0275 18.7047 20.1414 18.6546C20.2554 18.6046 20.3775 18.5789 20.5008 18.5789C20.6241 18.5789 20.7463 18.6046 20.8602 18.6546C20.9741 18.7047 21.0777 18.778 21.1649 18.8704L27.4149 25.4954C27.5022 25.5879 27.5714 25.6976 27.6186 25.8185C27.6658 25.9393 27.69 26.0689 27.6898 26.1997C27.6897 26.3305 27.6652 26.4599 27.6177 26.5807C27.5703 26.7014 27.5008 26.811 27.4133 26.9032L21.1633 33.5282Z"
      fill="#23232D"
    />
  </svg>
);

export const Projects = () => {
  const [width] = useGetWindowWidth();
  const [theme] = useTheme();

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

  return (
    <div className="flex flex-col text-center mb-[100px] items-center sm:mb-[50px]">
      <h2 className="text-section-title-color text-section-title font-bold mb-[25px] sm:text-[35px]">
        Projects
      </h2>
      <p className="mb-[140px] text-ordinary text-section-subtitle sm:mb-[25px] sm:text-[25px]">
        Things I’ve built so far
      </p>
      <div
        className="flex w-full flex-wrap justify-center"
        style={{ margin: "0 -20px" }}
      >
        {width > 767 && (
          <>
            {projects.map((project, index) => {
              return <Project project={project} key={index} />;
            })}
          </>
        )}
        {width <= 767 && width > 410 && (
          <div className="flex">
            <FaLongArrowAltLeft
              onClick={goToNextSlide}
              className="w-[35px]"
              color={theme === "dark" ? "white" : "black"}
            />
            <div
              className="flex"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              {items?.slice(slide, slide + 1).map((project, index) => {
                return <Project project={project} key={index} />;
              })}
            </div>
            <FaLongArrowAltRight
              onClick={goToPrevSlide}
              className="w-[35px]"
              color={theme === "dark" ? "white" : "black"}
            />
          </div>
        )}
        {width <= 410 && (
          <div className="flex flex-col">
            <div className="flex w-full">
              <FaLongArrowAltLeft
                onClick={goToNextSlide}
                className="w-[35px]"
                color={theme === "dark" ? "white" : "black"}
              />
              <FaLongArrowAltRight
                onClick={goToPrevSlide}
                className="w-[35px]"
                color={theme === "dark" ? "white" : "black"}
              />
            </div>
            <div
              className="flex"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              {items?.slice(slide, slide + 1).map((project, index) => {
                return <Project project={project} key={index} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
