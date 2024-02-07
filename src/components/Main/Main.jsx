import { Comments } from "../Comments/Comments";
import { Hero } from "./Hero/Hero";
import { Projects } from "./Projects/Projects";
import { TechStack } from "./TechStack/TechStack";

export const Main = () => {
  return (
    <main className="flex flex-col flex-auto w-full items-center">
      <Hero />
      <TechStack />
      <Projects />
      <Comments />
    </main>
  );
};
