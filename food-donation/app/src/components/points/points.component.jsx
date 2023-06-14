import React from "react";
import "./points.styles.css";

function Points() {
    return (
        <div className="points">
            <div className="bulet">
                <div className="point">
                    <h1>🌍</h1>
                    <h2>Make a Difference</h2>
                    <p>
                        Your donation can provide a child with the nutrition
                        they need to lead a healthy life.
                    </p>
                </div>
            </div>
            <div className="point">
                <div className="bulet">
                    <h1>🙏</h1>
                    <h2>Support a Good Cause</h2>
                    <p>
                        Join us in our mission to provide for orphanages in need
                        and give back to the community.
                    </p>
                </div>
            </div>
            <div className="point">
                <div className="bulet">
                    <h1>☘️</h1>
                    <h2>Give Hope</h2>
                    <p>
                        By donating, you can provide hope to children and let
                        them know that they are not alone.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Points;
