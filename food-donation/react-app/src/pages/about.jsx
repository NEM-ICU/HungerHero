import React from "react";
import "./about.styles.css";
const About = () => {
    return (
        <section className="About__page">
            <div className="about__wrapper">
                <div className="about__text__box">
                    <p>
                        "Food connects everyone”. People need it, depend on it,
                        survive because of it and derive happiness from it.
                        Hunger in the world is a burning issue nowadays and the
                        wastage of food is increasing daily. <p />
                        The causes of food loss occur very often because of the
                        mismanagement of producing, processing, and vending of
                        the food. Food waste is expected to be a growing problem
                        in Sri Lanka, given the changes the country is
                        undergoing linked to rapid urbanization as well as
                        changes in diets and lifestyles.
                        <p /> Many restaurants tend to throw the leftover food
                        at the end of the day even though the food is perfectly
                        fine to be eaten, which means that huge amounts of food
                        are wasted. Too much of food gets tossed out from
                        weddings, canteens, pubs, social and family
                        get-togethers and events. The scheme will bring them
                        into practice instead of losing these items by donating
                        them to different organizations such as orphanages, old
                        age homes, etc.
                    </p>
                    <p>
                        Welcome to our website, dedicated to making a difference
                        in the lives of the most vulnerable members of our
                        community. Established in 2023 in Sri Lanka, our
                        organization is committed to providing nutritious meals
                        to orphans, elderly individuals in old houses, and
                        children in need.
                        <p /> Our mission is to bridge the gap between generous
                        donors and orphanages with limited access to food,
                        ensuring that every child receives the nourishment they
                        deserve. We believe that by coming together as a
                        community, we can create a brighter future for these
                        individuals, offering them not only sustenance but also
                        hope and opportunity. Join us on this compassionate
                        journey as we work tirelessly to alleviate hunger and
                        provide a better tomorrow for those who need it most.
                    </p>
                </div>
                <div className="about__img__box">
                    <img
                        src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                        alt="about section"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
