import { Comments } from "../Comments/Comments";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { TechStack } from "./TechStack";

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
