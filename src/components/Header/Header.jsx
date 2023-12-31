import { Link } from "react-router-dom";
import { useTheme } from "../../features/theme/use-theme";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { useEffect, useState } from "react";
import { useGetWindowWidth } from "../customHooks/useGetWindowWidth";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export const Header = () => {
  const [width] = useGetWindowWidth();
  const [theme, toggleTheme] = useTheme();
  const [showMenu, setShowMenu] = useState(false);
  const [checked, setChecked] = useState(false);
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));
  const signWrapper =
    "w-full h-full overflow-hidden flex items-center justify-center fixed top-0 left-0 backdrop-blur-[6px] z-10 px-[20px]";

  useEffect(() => {
    if (theme === "dark") {
      setChecked(true);
    }
  }, [theme]);

  return (
    <header className="flex w-full mt-[45px] justify-center mb-[220px] items-center justify-between sm:mb-[50px]">
      {width > 767 && (
        <div className="flex w-full max-w-[609px] justify-between text-ordinary">
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="stack">Tech Stack</Link>
          <Link to="projects">Projects</Link>
          <Link to="contact">Contact</Link>
        </div>
      )}
      {width <= 767 && (
        <>
          <GiHamburgerMenu
            color={theme === "dark" ? "white" : "black"}
            className="w-[35px]"
            onClick={() => setShowMenu(true)}
          />
          {showMenu && (
            <div className={signWrapper}>
              <div
                className={`${
                  theme === "dark" ? "bg-white" : "bg-black"
                } flex flex-col w-full max-w-[609px] justify-between text-ordinary items-center w-1/2 h-1/2 py-[60px] rounded-lg relative`}
              >
                <IoMdClose
                  className="absolute top-[10px] right-[10px] w-[35px]"
                  onClick={() => setShowMenu(false)}
                />
                <Link to="/" onClick={() => setShowMenu(false)}>
                  Home
                </Link>
                <Link to="about" onClick={() => setShowMenu(false)}>
                  About
                </Link>
                <Link to="stack" onClick={() => setShowMenu(false)}>
                  Tech Stack
                </Link>
                <Link to="projects" onClick={() => setShowMenu(false)}>
                  Projects
                </Link>
                <Link to="contact" onClick={() => setShowMenu(false)}>
                  Contact
                </Link>
              </div>
            </div>
          )}
        </>
      )}
      <MaterialUISwitch
        onChange={(e) => {
          setChecked(e.target.checked);
          toggleTheme(!checked);
        }}
        checked={checked}
      />
    </header>
  );
};
