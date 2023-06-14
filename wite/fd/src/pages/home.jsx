import React from "react";
import Hero from "../components/hero/hero.component";
import About from "../components/about/about.component";
import Heading from "../components/heading/heading.component";
import Quote from "../components/quote/quote.component";
import Points from "../components/points/points.component";
import Testimonials from "../components/testimonials/testimonials.component";
import Footer from "../components/footer/footer.component";

const Home = () => {
    return (
        <>
            <Hero />
            <Heading text={"Unveiling What We Do: Our Mission and Goal"} />
            <About />
            <Quote />
            <Points />
            <Heading text={"Testimonials"} />
            <Testimonials />
            <Footer />
        </>
    );
};

export default Home;
