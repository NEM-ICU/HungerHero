import React from "react";
import p1 from "./../../assets/p1.png";
import p2 from "./../../assets/p2.png";
import p3 from "./../../assets/p3.png";
import "./testimonials.styles.css";

function Testimonials() {
    return (
        <div className="testimonials">
            <div className="testimonial-wrapper">
                <div className="testimonial-box">
                    <img className="user-img" src={p1} alt="testimonial user" />
                    <div className="testimonial-author">
                        <h3>Jerred Bruce</h3>
                    </div>
                    <div className="testimonial-quote">
                        <p>
                            “Donating food through this website was a breeze! It
                            was so easy to select the food items I wanted to
                            donate and how much. I'm proud to support such an
                            amazing cause!”
                        </p>
                    </div>
                </div>
            </div>
            <div className="testimonial-wrapper">
                <div className="testimonial-box">
                    <img className="user-img" src={p2} alt="testimonial user" />
                    <div className="testimonial-author">
                        <h3>Rebecca White</h3>
                    </div>
                    <div className="testimonial-quote">
                        <p>
                            “Donating food through this website was incredibly
                            straightforward. I was able to quickly select the
                            types and amounts of items I wanted to donate. It
                            makes me happy to contribute to such a worthy
                            cause!”
                        </p>
                    </div>
                </div>
            </div>
            <div className="testimonial-wrapper">
                <div className="testimonial-box">
                    <img className="user-img" src={p3} alt="testimonial user" />
                    <div className="testimonial-author">
                        <h3>Abigail Marianne</h3>
                    </div>
                    <div className="testimonial-quote">
                        <p>
                            “I'm overwhelmingly pleased with my experience
                            donating food through this website. I felt like my
                            time and effort had an immediate impact and was
                            truly appreciated.”
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
