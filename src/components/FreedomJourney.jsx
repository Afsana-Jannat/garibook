import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./FreedomJourney.css";

import freedomImage from "../assets/garibook_freedom.webp";
import carIcon from "../assets/car.svg";
import driverIcon from "../assets/drive.svg";
import priceIcon from "../assets/price.svg";

gsap.registerPlugin(ScrollTrigger);

const FreedomJourney = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      const animatedItems = gsap.utils.toArray(
        ".freedom-animate"
      );
      gsap.set(animatedItems, {
        opacity: 0,
        y: 100,
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top 75%",
        end: "bottom 25%",


        onEnter: () => {
          gsap.to(animatedItems, {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            stagger: 0.14,
            overwrite: true,
          });
        },


        onEnterBack: () => {
          gsap.to(animatedItems, {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            stagger: 0.14,
            overwrite: true,
          });
        },


        onLeave: () => {
          gsap.set(animatedItems, {
            opacity: 0,
            y: 100,
          });
        },

        onLeaveBack: () => {
          gsap.set(animatedItems, {
            opacity: 0,
            y: 100,
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="freedom-journey"
      ref={sectionRef}
    >
      <div className="freedom-container">

        <h2 className="freedom-title freedom-animate">
          Freedom in Every Journey
        </h2>

        <div className="freedom-image-wrapper freedom-animate">
          <img
            src={freedomImage}
            alt="Freedom in Every Journey"
            className="freedom-image"
          />
        </div>
        <div className="freedom-features">

          <div className="freedom-feature freedom-animate">

            <div className="freedom-feature-icon">
              <img
                src={carIcon}
                alt="Choose the Car"
              />
            </div>

            <div className="freedom-feature-content">
              <h3>Choose the Car</h3>

              <p>
                Pick what suits your comfort.
              </p>
            </div>

          </div>

          <div className="freedom-feature freedom-animate">

            <div className="freedom-feature-icon">
              <img
                src={driverIcon}
                alt="Choose the Driver"
              />
            </div>

            <div className="freedom-feature-content">
              <h3>Choose the Driver</h3>

              <p>
                Based on ratings and reviews.
              </p>
            </div>

          </div>
          <div className="freedom-feature freedom-animate">

            <div className="freedom-feature-icon">
              <img
                src={priceIcon}
                alt="Choose the Fare"
              />
            </div>

            <div className="freedom-feature-content">
              <h3>Choose the Fare</h3>

              <p>
                Select the bid that fits your budget.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FreedomJourney;