import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./TogetherSection.css";

import airportImage from "../assets/Airport Rental_Webp.webp";
import familyImage from "../assets/family_trips.webp";
import groupImage from "../assets/Group Tour_Webp.webp";

gsap.registerPlugin(ScrollTrigger);

const TogetherSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      const heading = section.querySelector(".together-heading");
      const cards = gsap.utils.toArray(".together-card");

      gsap.set(heading, {
        opacity: 0,
        y: 100,
      });

      gsap.set(cards, {
        opacity: 0,
        y: 100,
      });


      ScrollTrigger.create({
        trigger: section,

        start: "top 75%",
        end: "bottom 25%",
        onEnter: () => {
          const tl = gsap.timeline();

          /* Heading first */

          tl.to(heading, {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
          });


          /* Cards after heading */

          tl.to(
            cards,
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              stagger: 0.16,
            },
            "-=0.45"
          );
        },

        onEnterBack: () => {
          const tl = gsap.timeline();

          /* Heading first */

          tl.to(heading, {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
          });


          /* Cards after heading */

          tl.to(
            cards,
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              stagger: 0.16,
            },
            "-=0.45"
          );
        },


        onLeave: () => {
          gsap.set(heading, {
            opacity: 0,
            y: 100,
          });

          gsap.set(cards, {
            opacity: 0,
            y: 100,
          });
        },

        onLeaveBack: () => {
          gsap.set(heading, {
            opacity: 0,
            y: 100,
          });

          gsap.set(cards, {
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
      className="together-section"
      ref={sectionRef}
    >
      <div className="together-container">

        <h2 className="together-heading">
          More Than Miles —
          <br />
          We Bring People Together
        </h2>

        <div className="together-cards">

          <article className="together-card">

            <div className="together-image-wrapper">

              <img
                src={airportImage}
                alt="Airport Rentals"
                className="together-image"
              />

              <div className="together-image-overlay" />

              <div className="together-card-content">
                <h3>Airport Rentals</h3>
              </div>

            </div>

          </article>

          <article className="together-card">

            <div className="together-image-wrapper">

              <img
                src={familyImage}
                alt="Family Trips"
                className="together-image"
              />

              <div className="together-image-overlay" />

              <div className="together-card-content">
                <h3>Family Trips</h3>
              </div>

            </div>

          </article>

          <article className="together-card">

            <div className="together-image-wrapper">

              <img
                src={groupImage}
                alt="Long Tours"
                className="together-image"
              />

              <div className="together-image-overlay" />

              <div className="together-card-content">
                <h3>Long Tours</h3>
              </div>

            </div>

          </article>

        </div>

      </div>
    </section>
  );
};

export default TogetherSection;