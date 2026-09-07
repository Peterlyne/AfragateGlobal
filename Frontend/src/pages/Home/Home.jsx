import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Stats from "../../components/Stats/Stats";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import CTA from "../../components/CTA/CTA";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

import "./Home.css";

function Home(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <Features/>
        <Stats/>
        <WhyChoose/>
        <CTA/>
        <Newsletter/>
        <Footer/>
        </>
    );
}
export default Home;