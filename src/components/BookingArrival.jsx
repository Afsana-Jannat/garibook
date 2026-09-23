import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./BookingArrival.css";

import exploreImage from "../assets/explore.jpeg";
import freedomImage from "../assets/freedom.jpg";
import smoothImage from "../assets/smooth.jpg";
import preferredCarImage from "../assets/prefarred_car.jpg";
import safeTravelImage from "../assets/safe_travel.svg";

gsap.registerPlugin(ScrollTrigger);

const BookingArrival = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      const heading = section.querySelector(
        ".booking-arrival-heading"
      );

      const cards = gsap.utils.toArray(
        ".booking-arrival-card"
      );


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
        end: "bottom 20%",


        onEnter: () => {
          const timeline = gsap.timeline();

          /* Heading first */

          timeline.to(heading, {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
          });


          /* Cards after heading */

          timeline.to(
            cards,
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              stagger: 0.15,
            },
            "-=0.45"
          );
        },


        onEnterBack: () => {
          const timeline = gsap.timeline();

          /* Heading first */

          timeline.to(heading, {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
          });


          /* Cards */

          timeline.to(
            cards,
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              stagger: 0.15,
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
      className="booking-arrival-section"
      ref={sectionRef}
    >
      <div className="booking-arrival-container">


        <div className="booking-arrival-header">

          <h2 className="booking-arrival-heading">
            From Booking to Arrival
            <br />
            It’s All in Your Hands
          </h2>

        </div>


        <div className="booking-arrival-grid">


          <article className="booking-arrival-card booking-arrival-explore">

            <div className="booking-arrival-image-wrapper">

              <img
                src={exploreImage}
                alt="Explore Various Ride Services"
                className="booking-arrival-image"
              />

            </div>

          </article>


          <article className="booking-arrival-card booking-arrival-freedom">

            <div className="booking-arrival-image-wrapper">

              <img
                src={freedomImage}
                alt="Freedom"
                className="booking-arrival-image"
              />

            </div>

          </article>

          <article className="booking-arrival-card booking-arrival-smooth">

            <div className="booking-arrival-image-wrapper">

              <img
                src={smoothImage}
                alt="Smooth Experience"
                className="booking-arrival-image"
              />

            </div>

          </article>


          <article className="booking-arrival-card booking-arrival-preferred">

            <div className="booking-arrival-image-wrapper">

              <img
                src={preferredCarImage}
                alt="Preferred Car"
                className="booking-arrival-image"
              />

            </div>

          </article>


          <article className="booking-arrival-card booking-arrival-safe">

            <div className="booking-arrival-image-wrapper booking-arrival-safe-wrapper">

              <img
                src={safeTravelImage}
                alt="Safe Travel"
                className="booking-arrival-safe-image"
              />

            </div>

          </article>

        </div>

      </div>
    </section>
  );
};

export default BookingArrival;