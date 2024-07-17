
import Footer2 from "@/components/Footer/Footer2";
import Hero from '../app/home/Hero'
import Section1 from '../app/home/Section1'
import Section2 from '../app/home/Section2'
import Section3 from '../app/home/Section3'
import Section4 from '../app/home/Section4'
import Navbar from "@/components/Navbar/Navbar";

import db from '../lib/db'
import Section6 from "@/components/Home/Section6";
import Section7 from "@/components/Home/Section7";


export const dynamic = "force-dynamic"; 

export default async function Home() {

  return (
    <main >
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer2 />
    </main>
  );
}
