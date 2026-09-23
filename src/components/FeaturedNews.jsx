import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./FeaturedNews.css";

import d1 from "../assets/d1.webp";
import d2 from "../assets/d2.jpeg";
import d3 from "../assets/d3.png";
import d4 from "../assets/d4.gif";

gsap.registerPlugin(ScrollTrigger);

const FeaturedNews = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const currentIndex = useRef(0);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      const heading = section.querySelector(".featured-news-heading");
      const items = gsap.utils.toArray(".featured-news-item");
      const buttons = gsap.utils.toArray(".featured-news-arrow");

      gsap.set(heading, {
        opacity: 0,
        y: 70,
      });

      gsap.set(items, {
        opacity: 0,
        y: 70,
      });

      const animateSection = () => {
        const tl = gsap.timeline();

        tl.to(heading, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
        });

        tl.to(
          items,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.4"
        );

        tl.to(
          buttons,
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.5)",
          },
          "-=0.5"
        );
      };

      ScrollTrigger.create({
        trigger: section,
        start: "top 78%",
        end: "bottom 20%",

        onEnter: animateSection,
        onEnterBack: animateSection,

        onLeave: () => {
          gsap.set(heading, {
            opacity: 0,
            y: 70,
          });

          gsap.set(items, {
            opacity: 0,
            y: 70,
          });

          gsap.set(buttons, {
            opacity: 0,
            scale: 0.85,
          });
        },

        onLeaveBack: () => {
          gsap.set(heading, {
            opacity: 0,
            y: 70,
          });

          gsap.set(items, {
            opacity: 0,
            y: 70,
          });

          gsap.set(buttons, {
            opacity: 0,
            scale: 0.85,
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);


const slideNext = () => {
  const track = trackRef.current;

  if (!track) return;

  const card = track.querySelector(".featured-news-item");

  if (!card) return;

  const gap = 15;
  const cardWidth = card.offsetWidth + gap;

  currentIndex.current += 1;

  gsap.to(track, {
    x: -(currentIndex.current * cardWidth),
    duration: 0.7,
    ease: "power3.inOut",
    onComplete: () => {
      if (currentIndex.current >= 4) {
        currentIndex.current = 0;

        gsap.set(track, {
          x: 0,
        });
      }
    },
  });
};
const slidePrev = () => {
  const track = trackRef.current;

  if (!track) return;

  const card = track.querySelector(".featured-news-item");

  if (!card) return;

  const gap = 15;
  const cardWidth = card.offsetWidth + gap;

  if (currentIndex.current === 0) {
    currentIndex.current = 4;

    gsap.set(track, {
      x: -(4 * cardWidth),
    });
  }

  currentIndex.current -= 1;

  gsap.to(track, {
    x: -(currentIndex.current * cardWidth),
    duration: 0.7,
    ease: "power3.inOut",
  });
};

  return (
    <section
      className="featured-news-section"
      ref={sectionRef}
    >
      <div className="featured-news-container">

        <div className="featured-news-top">

          <h2 className="featured-news-heading">
            We Featured by Top news
            <br />
            Platforms
          </h2>

          <div className="featured-news-arrows">

            <button
              className="featured-news-arrow"
              onClick={slidePrev}
              aria-label="Previous news"
            >
              <span>←</span>
            </button>

            <button
              className="featured-news-arrow"
              onClick={slideNext}
              aria-label="Next news"
            >
              <span>→</span>
            </button>

          </div>

        </div>


        <div className="featured-news-slider">

          <div
            className="featured-news-list"
            ref={trackRef}
          >

            {/* CARD 1 */}

            <article className="featured-news-item">

              <div className="featured-news-image">
                <img
                  src={d1}
                  alt="Replacing ride-hailing commissions"
                />
              </div>

              <div className="featured-news-date">
                July 16, 2026
              </div>

              <h3 className="featured-news-title">
                Replacing ride-hailing
                <br />
                commissions with fixed
                <br />
                subscriptions
              </h3>

              <p className="featured-news-description">
                Garibook differentiates itself by eliminating trip commissions
                and focusing on high-ticket, long-haul intercity routes. This
                model increases driver retention and enables 10% to 15%...
              </p>

              <div className="featured-news-bottom">

                <div className="featured-news-logo techinasia">
                  <span className="logo-mark">T</span>
                  <strong>TECHINASIA</strong>
                </div>

                <a
                  href="#"
                  className="featured-news-link"
                >
                  Read Article
                  <span>→</span>
                </a>

              </div>

            </article>


            {/* CARD 2 */}

            <article className="featured-news-item">

              <div className="featured-news-image">
                <img
                  src={d2}
                  alt="Bangladesh intercity travel"
                />
              </div>

              <div className="featured-news-date">
                December 05, 2024
              </div>

              <h3 className="featured-news-title bengali">
                গাড়িবুক: বাংলাদেশের ইন্টারসিটি ভ্রমণে স্বাচ্ছন্দ্যের
                নতুন পন্থা
              </h3>

              <p className="featured-news-description bengali">
                বাংলাদেশ ইন্টারসিটি ট্রাভেল সহজ ও সাশ্রয়ী করার লক্ষ্যে একটি
                অনন্য উদ্যোগ নিয়ে এসেছে 'গাড়িবুক'। কোনো কমিশন ছাড়াই
                ইন্টারসিটি কার রেন্টাল পরিষেবা দেওয়া গাড়িবুক দেশের প্রথম এবং
                একমাত্র অ্যাপ।
              </p>

              <div className="featured-news-bottom">

                <div className="featured-news-logo prothom-alo">
                  <strong>প্রথম আলো</strong>
                </div>

                <a
                  href="#"
                  className="featured-news-link"
                >
                  Read Article
                  <span>→</span>
                </a>

              </div>

            </article>


            {/* CARD 3 */}

            <article className="featured-news-item">

              <div className="featured-news-image">
                <img
                  src={d3}
                  alt="Digital app to offer Chander Gari"
                />
              </div>

              <div className="featured-news-date">
                December 04, 2024
              </div>

              <h3 className="featured-news-title">
                Digital App to offer "Chander Gari"
              </h3>

              <p className="featured-news-description">
                For the first time in Bangladesh, tourists can now book the
                iconic Chander Gari through an online platform.
              </p>

              <div className="featured-news-bottom">

                <div className="featured-news-logo dhaka-tribune">
                  <strong>
                    <span>Dhaka</span>Tribune
                  </strong>
                </div>

                <a
                  href="#"
                  className="featured-news-link"
                >
                  Read Article
                  <span>→</span>
                </a>

              </div>

            </article>


            {/* CARD 4 */}

            <article className="featured-news-item">

              <div className="featured-news-image">
                <img
                  src={d4}
                  alt="Featured news"
                />
              </div>

              <div className="featured-news-date">
                November 20, 2024
              </div>

              <h3 className="featured-news-title">
                Garibook makes intercity travel easier
              </h3>

              <p className="featured-news-description">
                A simple digital solution for comfortable and convenient
                intercity transportation.
              </p>

              <div className="featured-news-bottom">

                <div className="featured-news-logo">
                  <strong>NEWS</strong>
                </div>

                <a
                  href="#"
                  className="featured-news-link"
                >
                  Read Article
                  <span>→</span>
                </a>

              </div>

            </article>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedNews;