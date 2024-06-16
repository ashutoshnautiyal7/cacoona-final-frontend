// import Footer from "@/components/landing/Footer";
// import Footer from "@/components/Footer/Footer";
import Footer2 from "@/components/Footer/Footer2";
import Hero from "@/components/Home/Hero";
import Section1 from "@/components/Home/Section1";
import Section2 from "@/components/Home/Section2";
import Section3 from "@/components/Home/Section3";
import Section4 from "@/components/Home/Section4";
import Section5 from "@/components/Home/Section5";
import Navbar from "@/components/Navbar/Navbar";
// import Hero from "@/components/landing/Hero";
// import Section1 from "@/components/landing/Section1";
// import Section2 from "@/components/landing/Section2";
import Image from "next/image";
import db from '../lib/db'
import Section6 from "@/components/Home/Section6";


export const dynamic = "force-dynamic"; 

export default async function Home() {
  const products = await db.product.findMany(
    {
      include: {
        images: true,
      }
    }
  );
  return (
    <main className="">
      {/* <Hero />
      <Section1 />
      <Section2 /> */}
      <Navbar />
      <Hero />
      <Section1 productList={products}/>
      <Section2 />
      <Section3 productList={products} />
      <Section4/>
      {/* <Section5 productList={products}/>  */}
      <Section6 />
      <Footer2 />
    </main>
  );
}
