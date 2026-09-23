import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

const heroTitles = [
  "Assurance of Effortless Travel",
  "Luxury Trips with Comfort",
  "Your Journey Starts Here ...",
];


  //  CAR ICON


function CarIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 17H4C3.45 17 3 16.55 3 16V12C3 11.45 3.45 11 4 11H5L7 6.5C7.32 5.59 8.18 5 9.14 5H14.86C15.82 5 16.68 5.59 17 6.5L19 11H20C20.55 11 21 11.45 21 12V16C21 16.55 20.55 17 20 17H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M7 11H17L15.8 7.8C15.64 7.32 15.18 7 14.67 7H9.33C8.82 7 8.36 7.32 8.2 7.8L7 11Z"
        fill="currentColor"
      />

      <circle cx="7" cy="17" r="2" fill="currentColor" />
      <circle cx="17" cy="17" r="2" fill="currentColor" />
    </svg>
  );
}


function PickupIcon() {
  return (
    <span className="pickup-icon">
      <span />
    </span>
  );
}


function LocationIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 10C20 15.5 12 21 12 21C12 21 4 15.5 4 10C4 5.58 7.58 2 12 2C16.42 2 20 5.58 20 10Z"
        fill="#1457FF"
      />

      <circle cx="12" cy="10" r="3" fill="white" />
    </svg>
  );
}


function CalendarIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="16"
        rx="2"
        stroke="#222222"
        strokeWidth="2"
      />

      <path
        d="M16 3V7M8 3V7M3 10H21"
        stroke="#222222"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}


  //  HERO

function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("car");
  const [tripType, setTripType] = useState("one-way");

  const titleRef = useRef(null);

    //  BLUE SECTION REFS


  const blueSectionRef = useRef(null);
  const blueHeadingRef = useRef(null);
  const blueStatsRef = useRef(null);


    //  HERO TITLE TYPING ANIMATION

  useEffect(() => {
    let timeout;
    let cancelled = false;

    const typeTitle = (text, index) => {
      if (!titleRef.current || cancelled) {
        return;
      }

      titleRef.current.textContent = "";

      let charIndex = 0;

      const typeNextCharacter = () => {
        if (!titleRef.current || cancelled) {
          return;
        }

        titleRef.current.textContent = text.slice(
          0,
          charIndex + 1
        );

        charIndex += 1;

        if (charIndex < text.length) {
          timeout = setTimeout(
            typeNextCharacter,
            55
          );
        } else {
          timeout = setTimeout(() => {
            if (!titleRef.current || cancelled) {
              return;
            }

            const nextIndex =
              (index + 1) % heroTitles.length;

            setTitleIndex(nextIndex);

            gsap.to(titleRef.current, {
              opacity: 0,
              duration: 0.35,
              ease: "power2.out",

              onComplete: () => {
                if (cancelled) {
                  return;
                }

                gsap.set(titleRef.current, {
                  opacity: 1,
                });

                typeTitle(
                  heroTitles[nextIndex],
                  nextIndex
                );
              },
            });
          }, 1800);
        }
      };

      typeNextCharacter();
    };

    typeTitle(heroTitles[0], 0);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, []);

    //  BLUE SECTION SCROLL ANIMATION

  useEffect(() => {
    const section = blueSectionRef.current;
    const heading = blueHeadingRef.current;
    const stats = blueStatsRef.current;

    if (!section || !heading || !stats) {
      return;
    }

    const ctx = gsap.context(() => {
      const hideBlueContent = () => {
        gsap.killTweensOf([
          heading,
          stats,
        ]);

        gsap.set(heading, {
          opacity: 0,
          y: 120,
        });

        gsap.set(stats, {
          opacity: 0,
          y: 70,
        });
      };

      const showBlueContent = () => {
        gsap.killTweensOf([
          heading,
          stats,
        ]);

        gsap.set(heading, {
          opacity: 0,
          y: 120,
        });

        gsap.set(stats, {
          opacity: 0,
          y: 70,
        });

        const timeline = gsap.timeline();

        timeline.to(heading, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        timeline.to(
          stats,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.35"
        );
      };

      hideBlueContent();

      ScrollTrigger.create({
        trigger: section,
        start: "top 85%",
        end: "bottom 18%",

        onEnter: () => {
          showBlueContent();
        },

        onEnterBack: () => {
          showBlueContent();
        },

        onLeave: () => {
          hideBlueContent();
        },

        onLeaveBack: () => {
          hideBlueContent();
        },
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="hero">


          {/* HERO TOP */}


      <div className="hero-top">

        {/* LEFT */}

        <div className="hero-heading">
          <h1 ref={titleRef}>
            {heroTitles[titleIndex]}
          </h1>
        </div>


        {/* RIGHT */}

        <div className="hero-intro">

          <p>
            Choose your city, pick your car and enjoy the
            <br className="desktop-break" />
            journey with Garibook’s best drivers.
          </p>

          <button
            type="button"
            className="download-btn"
          >
            <span>
              Download App
            </span>

            <span className="download-arrow">
              →
            </span>
          </button>

        </div>

      </div>



          {/* HERO LOWER SECTION */}


      <div className="hero-lower-section">


            {/* BOOKING BOX */}

        <div className="booking-wrapper">

          <div className="booking-card">

            {/* TABS */}

            <div className="booking-tabs">

              <button
                type="button"
                className={
                  activeTab === "car"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveTab("car")
                }
              >
                Car Rental
              </button>

              <button
                type="button"
                className={
                  activeTab === "airport"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveTab("airport")
                }
              >
                Airport Rental
              </button>

            </div>


            {/* FORM */}

            <div className="booking-form">

              {/* CAR */}

              <div className="booking-field">

                <label>
                  <CarIcon />

                  <span>
                    Choose a Car *
                  </span>
                </label>

                <button
                  type="button"
                  className="select-input"
                >
                  <span>
                    Select Car Type
                  </span>

                  <span className="chevron">
                    ⌄
                  </span>
                </button>

              </div>


              {/* PICKUP */}

              <div className="booking-field">

                <label>

                  <PickupIcon />

                  <span>
                    {activeTab === "airport"
                      ? "Pickup Airport *"
                      : "Pickup Location *"}
                  </span>

                </label>

                <div className="text-input">

                  <input
                    type="text"
                    placeholder={
                      activeTab === "airport"
                        ? "Select Airport"
                        : "Enter Pickup Location"
                    }
                  />

                </div>

              </div>


              {/* DROP OFF */}

              <div className="booking-field">

                <label>

                  <LocationIcon />

                  <span>
                    Drop-off Location *
                  </span>

                </label>

                <div className="text-input">

                  <input
                    type="text"
                    placeholder="Enter Drop-off Location"
                  />

                </div>

              </div>


              {/* DATE */}

              <div className="booking-field">

                <label>

                  <CalendarIcon />

                  <span>
                    Pickup Date & Time *
                  </span>

                </label>

                <div className="text-input">

                  <input
                    type="text"
                    placeholder="MM/DD/YYYY 00:00 PM"
                  />

                </div>

              </div>

            </div>


            {/* BOOKING BOTTOM */}

            <div className="booking-bottom">

              {/* TRIP TYPES */}

              <div className="trip-types">

                <label
                  className={
                    tripType === "one-way"
                      ? "trip-active"
                      : ""
                  }
                >
                  <input
                    type="radio"
                    name="trip"
                    checked={
                      tripType === "one-way"
                    }
                    onChange={() =>
                      setTripType("one-way")
                    }
                  />

                  <span>
                    One Way
                  </span>
                </label>


                <label
                  className={
                    tripType === "round-way"
                      ? "trip-active"
                      : ""
                  }
                >
                  <input
                    type="radio"
                    name="trip"
                    checked={
                      tripType === "round-way"
                    }
                    onChange={() =>
                      setTripType("round-way")
                    }
                  />

                  <span>
                    Round Way
                  </span>
                </label>


                <label
                  className={
                    tripType === "hourly"
                      ? "trip-active"
                      : ""
                  }
                >
                  <input
                    type="radio"
                    name="trip"
                    checked={
                      tripType === "hourly"
                    }
                    onChange={() =>
                      setTripType("hourly")
                    }
                  />

                  <span>
                    Hourly
                  </span>
                </label>

              </div>


              {/* CONTINUE */}

              <button
                type="button"
                className="continue-btn"
              >
                <span>
                  Continue
                </span>

                <span className="continue-arrow">
                  →
                </span>
              </button>

            </div>

          </div>

        </div>

        <section
          ref={blueSectionRef}
          className="hero-blue-section"
        >

          <div className="blue-journey-content">

            <h2 ref={blueHeadingRef}>
              From Everyday Rides
              <br />
              to Meaningful Journeys
            </h2>


            {/* STATS */}

            <div
              ref={blueStatsRef}
              className="blue-stats"
            >

              <div className="blue-stat">
                <strong>0+</strong>
                <span>Trip Requests</span>
              </div>

              <div className="blue-stat">
                <strong>0+</strong>
                <span>Total Customers</span>
              </div>

              <div className="blue-stat">
                <strong>0+</strong>
                <span>Active Drivers</span>
              </div>

              <div className="blue-stat">
                <strong>0</strong>
                <span>District Covered</span>
              </div>

            </div>

          </div>


          {/* MOVING BUILDINGS */}

          <div className="city-animation">

            <div className="city-track">

              <img
                src="https://garibook.com/_next/static/media/frame_1.312c65e3.png"
                alt=""
                className="city-image"
              />

              <img
                src="https://garibook.com/_next/static/media/frame_1.312c65e3.png"
                alt=""
                className="city-image"
              />

            </div>

          </div>


          {/* FIXED CAR */}

          <img
            src="https://garibook.com/_next/static/media/Sedan_GiF.9efd9ae4.gif"
            alt="Garibook car"
            className="fixed-car"
          />

        </section>

      </div>

    </section>
  );
}

export default Hero;