import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./SmartDriver.css";

import smartDriverImage from "../assets/no_commission_app_screen.png";

gsap.registerPlugin(ScrollTrigger);

const SmartDriver = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      const heading = section.querySelector(
        ".smart-driver-heading"
      );

      const card = section.querySelector(
        ".smart-driver-card"
      );

      const textItems = section.querySelectorAll(
        ".smart-driver-card-animate"
      );

      const image = section.querySelector(
        ".smart-driver-image"
      );

      gsap.set(heading, {
        opacity: 0,
        y: 100,
      });

      gsap.set(card, {
        opacity: 0,
        y: 100,
      });

      gsap.set(textItems, {
        opacity: 0,
        y: 70,
      });

      gsap.set(image, {
        opacity: 0,
        y: 100,
      });


      const playAnimation = () => {
        const timeline = gsap.timeline();

        /* Heading */
        timeline.to(heading, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        });


        /* Main yellow card */
        timeline.to(
          card,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.55"
        );


        /* Card text */
        timeline.to(
          textItems,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.12,
          },
          "-=0.55"
        );


        /* Driver image */
        timeline.to(
          image,
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.75"
        );
      };


      ScrollTrigger.create({
        trigger: section,

        start: "top 75%",
        end: "bottom 25%",

        onEnter: () => {
          playAnimation();
        },

        onEnterBack: () => {
          playAnimation();
        },

        onLeave: () => {
          gsap.set(heading, {
            opacity: 0,
            y: 100,
          });

          gsap.set(card, {
            opacity: 0,
            y: 100,
          });

          gsap.set(textItems, {
            opacity: 0,
            y: 70,
          });

          gsap.set(image, {
            opacity: 0,
            y: 100,
          });
        },

        onLeaveBack: () => {
          gsap.set(heading, {
            opacity: 0,
            y: 100,
          });

          gsap.set(card, {
            opacity: 0,
            y: 100,
          });

          gsap.set(textItems, {
            opacity: 0,
            y: 70,
          });

          gsap.set(image, {
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
      className="smart-driver-section"
      ref={sectionRef}
    >
      <div className="smart-driver-heading-wrapper">
        <h2 className="smart-driver-heading">
          Be a Smart Driver
        </h2>
      </div>

      <div className="smart-driver-card">

        <div className="smart-driver-card-inner">
          <div className="smart-driver-content">

            <h3 className="smart-driver-title smart-driver-card-animate">
              0% Commission
            </h3>

            <h3 className="smart-driver-freedom smart-driver-card-animate">
              100% Freedom
            </h3>


            <a
              href="#"
              className="smart-driver-button smart-driver-card-animate"
            >
              <span>
                Download Smart Driver App
              </span>

              <span className="smart-driver-arrow">
                →
              </span>
            </a>

          </div>
          <div className="smart-driver-image-area">

            <img
              src={smartDriverImage}
              alt="Smart Driver"
              className="smart-driver-image"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default SmartDriver;