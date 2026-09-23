
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import airportRental from "../assets/airport_rental.svg";
import hourlyRental from "../assets/hourly_rental.svg";
import intercityCarRental from "../assets/intercity_car_rental.svg";
import rideshare from "../assets/rideshare.svg";

import "./OurServices.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Intercity Car Rental",
    description: "Travel between cities with comfort and confidence.",
    image: intercityCarRental,
  },
  {
    title: "Ride share",
    description: "Go anywhere in the city, quickly and easily.",
    image: rideshare,
  },
  {
    title: "Airport Rental",
    description:
      "Whether you’re flying abroad or returning home, enjoy a comfortable and worry-free airport journey.",
    image: airportRental,
  },
  {
    title: "Hourly Rental",
    description: "Rent a car by the hour, tailored to your needs.",
    image: hourlyRental,
  },
];

const tabs = [
  "Rides",
  "Garibook Business",
  "Garibook Club",
  "VMS",
];

function OurServices() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const tabsRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);

  const [activeCard, setActiveCard] = useState(0);
  const [activeTab, setActiveTab] = useState("Rides");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);

      const hideElements = () => {
        gsap.killTweensOf([
          headingRef.current,
          tabsRef.current,
          subtitleRef.current,
          ...cards,
        ]);

        gsap.set(headingRef.current, {
          opacity: 0,
          y: 90,
        });

        gsap.set(tabsRef.current, {
          opacity: 0,
          y: 70,
        });

        gsap.set(subtitleRef.current, {
          opacity: 0,
          y: 90,
        });

        gsap.set(cards, {
          opacity: 0,
          y: 120,
        });
      };


      const showElements = () => {

        gsap.killTweensOf([
          headingRef.current,
          tabsRef.current,
          subtitleRef.current,
          ...cards,
        ]);

        gsap.set(headingRef.current, {
          opacity: 0,
          y: 90,
        });

        gsap.set(tabsRef.current, {
          opacity: 0,
          y: 70,
        });

        gsap.set(subtitleRef.current, {
          opacity: 0,
          y: 90,
        });

        gsap.set(cards, {
          opacity: 0,
          y: 120,
        });



        const tl = gsap.timeline();

        tl.to(headingRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        })

        .to(
          tabsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.35"
        )


        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.3"
        )


        .to(
          cards,
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.25"
        );
      };


      hideElements();


      ScrollTrigger.create({
        trigger: sectionRef.current,

        start: "top 82%",

        end: "bottom 18%",


        onEnter: () => {
          showElements();
        },

        onEnterBack: () => {
          showElements();
        },


        onLeave: () => {
          hideElements();
        },

        onLeaveBack: () => {
          hideElements();
        },
      });

    }, sectionRef);


    return () => {
      ctx.revert();
    };
  }, []);


  return (
    <section
      ref={sectionRef}
      className="our-services"
    >
      <div className="our-services-container">

        <h2
          ref={headingRef}
          className="our-services-heading"
        >
          Our Services
        </h2>
        <div
          ref={tabsRef}
          className="services-tabs"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`services-tab ${
                activeTab === tab ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <h3
          ref={subtitleRef}
          className="services-main-title"
        >
          <span>Every Ride</span>
          <span>One Platform</span>
        </h3>

        <div className="services-cards">

          {services.map((service, index) => {
            const isActive = activeCard === index;

            return (
              <div
                key={service.title}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className={`service-card ${
                  isActive ? "active" : ""
                }`}
                onMouseEnter={() =>
                  setActiveCard(index)
                }
                onFocus={() =>
                  setActiveCard(index)
                }
                tabIndex={0}
              >


                <span className="service-notch" />


                <div className="service-illustration">

                  <img
                    src={service.image}
                    alt=""
                    draggable="false"
                  />

                </div>


                <div className="service-card-content">

                  <h4>
                    {service.title}
                  </h4>

                  <p>
                    {service.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default OurServices;

