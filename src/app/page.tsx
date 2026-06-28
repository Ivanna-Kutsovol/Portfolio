'use client';

import About from "./about/about";
import Contact from "./contact/contact";
import stl from "./styles/_page.module.scss";
import FrontendContent from "./FrontendContent";
import CreativeContent from "./CreativeContent";
import { useTheme } from "@/components/theme/ThemeProvider";

export default function Home() {
  const { isCreative } = useTheme();

  return (
    <div className={stl.container}>
      
      <About isCreative={isCreative} />

      <main>
        {isCreative ? <CreativeContent/> : <FrontendContent/>}
      </main>
      
        <Contact/>
    </div>
  );
}