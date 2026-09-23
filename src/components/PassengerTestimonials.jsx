import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./PassengerTestimonials.css";

import passenger1 from "../assets/passenger1.jpg";
import passenger2 from "../assets/passenger2.jpg";
import passenger3 from "../assets/passenger3.jpg";

gsap.registerPlugin(ScrollTrigger);

const PassengerTestimonials = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const [activeVideo, setActiveVideo] = useState(null);

  const currentIndex = useRef(0);


  const passengers = [
    {
      id: 1,
      name: "Atif Haider",
      role: "Banker",
      image: passenger1,
      video:
        "https://youtu.be/JsBwaJ_VIcA?si=s6bgehYmF0iRaIhD",
    },
    {
      id: 2,
      name: "Mohammad Habibur Rahman",
      role: "Banker",
      image: passenger2,
      video:
        "https://youtu.be/CsxeEof1T3M?si=Ohr1T23xUdhlV3v0",
    },
    {
      id: 3,
      name: "Sadia Afrin",
      role: "Service Holder",
      image: passenger3,
      video:
        "https://youtu.be/8ma9XEGhi5s?si=CO_dumHAIlBkME4v",
    },
  ];

  const getYoutubeEmbedUrl = (url) => {
    try {
      const parsedUrl = new URL(url);

      let videoId = "";

      if (parsedUrl.hostname === "youtu.be") {
        videoId = parsedUrl.pathname.replace("/", "");
      }
      else if (
        parsedUrl.hostname.includes("youtube.com") &&
        parsedUrl.pathname === "/watch"
      ) {
        videoId = parsedUrl.searchParams.get("v");
      }

      else if (
        parsedUrl.hostname.includes("youtube.com") &&
        parsedUrl.pathname.startsWith("/embed/")
      ) {
        videoId = parsedUrl.pathname.split("/embed/")[1];
      }

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }

      return url;
    } catch (error) {
      console.error("Invalid YouTube URL:", error);

      return url;
    }
  };


  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const heading = section.querySelector(
        ".passenger-testimonials-heading"
      );

      const description = section.querySelector(
        ".passenger-testimonials-description"
      );

      const items = gsap.utils.toArray(
        ".passenger-testimonial-card"
      );

      const arrows = gsap.utils.toArray(
        ".passenger-testimonials-arrow"
      );

      gsap.set(
        [heading, description, ...items, ...arrows],
        {
          opacity: 0,
          y: 60,
        }
      );

      const animateSection = () => {
        const tl = gsap.timeline();

        tl.to(heading, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        tl.to(
          description,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        );

        tl.to(
          arrows,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.55"
        );

        tl.to(
          items,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.45"
        );
      };

      ScrollTrigger.create({
        trigger: section,
        start: "top 78%",
        end: "bottom 20%",

        onEnter: animateSection,
        onEnterBack: animateSection,

        onLeave: () => {
          gsap.set(
            [heading, description, ...items, ...arrows],
            {
              opacity: 0,
              y: 60,
            }
          );
        },

        onLeaveBack: () => {
          gsap.set(
            [heading, description, ...items, ...arrows],
            {
              opacity: 0,
              y: 60,
            }
          );
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getCardWidth = () => {
    const track = trackRef.current;

    if (!track) return 0;

    const card = track.querySelector(
      ".passenger-testimonial-card"
    );

    if (!card) return 0;

    const gap = 15;

    return card.offsetWidth + gap;
  };

  const slideNext = () => {
    const track = trackRef.current;

    if (!track) return;

    const cardWidth = getCardWidth();

    currentIndex.current += 1;

    if (currentIndex.current >= passengers.length) {
      currentIndex.current = 0;

      gsap.to(track, {
        x: 0,
        duration: 0.7,
        ease: "power3.inOut",
      });

      return;
    }

    gsap.to(track, {
      x: -(currentIndex.current * cardWidth),
      duration: 0.7,
      ease: "power3.inOut",
    });
  };

  const slidePrev = () => {
    const track = trackRef.current;

    if (!track) return;

    const cardWidth = getCardWidth();

    if (currentIndex.current === 0) {
      currentIndex.current = passengers.length - 1;

      gsap.to(track, {
        x: -(currentIndex.current * cardWidth),
        duration: 0.7,
        ease: "power3.inOut",
      });

      return;
    }

    currentIndex.current -= 1;

    gsap.to(track, {
      x: -(currentIndex.current * cardWidth),
      duration: 0.7,
      ease: "power3.inOut",
    });
  };


  const openVideo = (video) => {
    setActiveVideo(video);

    document.body.style.overflow = "hidden";
  };


  const closeVideo = () => {
    setActiveVideo(null);

    document.body.style.overflow = "";
  };


  useLayoutEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeVideo();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow = "";
    };
  }, []);


  return (
    <>
      <section
        className="passenger-testimonials-section"
        ref={sectionRef}
      >
        <div className="passenger-testimonials-container">


          <div className="passenger-testimonials-top">

            <div className="passenger-testimonials-copy">

              <h2 className="passenger-testimonials-heading">
                Our Passengers Speak For Us
              </h2>

              <p className="passenger-testimonials-description">
                Our journey was seamless and enjoyable from
                start to finish. The booking process was
                straightforward, and the staff were incredibly
                attentive, ensuring we felt comfortable
                throughout the trip.
              </p>

            </div>


            <div className="passenger-testimonials-arrows">

              <button
                type="button"
                className="passenger-testimonials-arrow"
                onClick={slidePrev}
                aria-label="Previous testimonial"
              >
                <span>←</span>
              </button>

              <button
                type="button"
                className="passenger-testimonials-arrow"
                onClick={slideNext}
                aria-label="Next testimonial"
              >
                <span>→</span>
              </button>

            </div>

          </div>

          <div className="passenger-testimonials-slider">

            <div
              className="passenger-testimonials-track"
              ref={trackRef}
            >

              {passengers.map((passenger) => (

                <article
                  className="passenger-testimonial-card"
                  key={passenger.id}
                >

                  <button
                    type="button"
                    className="passenger-video-thumbnail"
                    onClick={() =>
                      openVideo(passenger.video)
                    }
                    aria-label={`Play ${passenger.name}'s testimonial`}
                  >

                    <img
                      src={passenger.image}
                      alt={`${passenger.name} testimonial`}
                    />

                    <span className="passenger-play-button">

                      <span className="passenger-play-icon">
                        ▶
                      </span>

                    </span>

                  </button>

                  <h3 className="passenger-testimonial-name">
                    {passenger.name}
                  </h3>

                  <p className="passenger-testimonial-role">
                    {passenger.role}
                  </p>

                </article>

              ))}

            </div>

          </div>

        </div>
      </section>
      {activeVideo && (

        <div
          className="passenger-video-modal"
          onClick={closeVideo}
        >

          <div
            className="passenger-video-modal-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              type="button"
              className="passenger-video-close"
              onClick={closeVideo}
              aria-label="Close video"
            >
              ×
            </button>

            <div className="passenger-video-wrapper">

              <iframe
                src={`${getYoutubeEmbedUrl(
                  activeVideo
                )}?autoplay=1&rel=0`}
                title="Passenger testimonial"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />

            </div>

          </div>

        </div>

      )}

    </>
  );
};

export default PassengerTestimonials;