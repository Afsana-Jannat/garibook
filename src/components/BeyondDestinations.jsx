import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./BeyondDestinations.css";

import b1 from "../assets/b1.webp";
import b2 from "../assets/b2.webp";
import b33 from "../assets/b33.webp";

gsap.registerPlugin(ScrollTrigger);

const BeyondDestinations = () => {
  const sectionRef = useRef(null);

  const blogs = [
    {
      id: 1,
      image: b1,
      category: "Travel Guide",
      title: "Travel Tips for Your Next Intercity Journey",
      description:
        "Discover useful travel tips and ideas to make your next journey easier and more enjoyable.",
    },
    {
      id: 2,
      image: b2,
      category: "Travel Inspiration",
      title: "Explore More, Travel Better",
      description:
        "Find inspiration, guides and helpful ideas for making every journey more memorable.",
    },
    {
      id: 3,
      image: b33,
      category: "Travel Hacks",
      title: "Make Your Journey Simple and Comfortable",
      description:
        "Helpful travel hacks and insights to make your intercity trips smoother and stress-free.",
    },
  ];


  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const heading = section.querySelector(
        ".beyond-destinations-heading"
      );

      const description = section.querySelector(
        ".beyond-destinations-description"
      );

      const button = section.querySelector(
        ".beyond-destinations-button"
      );

      const cards = gsap.utils.toArray(
        ".beyond-destination-card"
      );

      gsap.set(
        [
          heading,
          description,
          button,
          ...cards,
        ],
        {
          opacity: 0,
          y: 70,
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
          button,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.6"
        );

        tl.to(
          cards,
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
            [
              heading,
              description,
              button,
              ...cards,
            ],
            {
              opacity: 0,
              y: 70,
            }
          );
        },

        onLeaveBack: () => {
          gsap.set(
            [
              heading,
              description,
              button,
              ...cards,
            ],
            {
              opacity: 0,
              y: 70,
            }
          );
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="beyond-destinations-section"
      ref={sectionRef}
    >
      <div className="beyond-destinations-container">

        <div className="beyond-destinations-top">

          <div className="beyond-destinations-copy">

            <h2 className="beyond-destinations-heading">
              Beyond Destinations
            </h2>

            <p className="beyond-destinations-description">
              Discover travel hacks, guides, and inspirations
              for your next intercity trip with Garibook.
            </p>

          </div>


          <a
            href="/blogs"
            className="beyond-destinations-button"
          >
            <span>Show All Blogs</span>

            <span className="beyond-destinations-arrow">
              →
            </span>
          </a>

        </div>


        <div className="beyond-destinations-grid">

          {blogs.map((blog) => (

            <article
              className="beyond-destination-card"
              key={blog.id}
            >

              {/* IMAGE */}

              <a
                href="/blogs"
                className="beyond-destination-image"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                />
              </a>


              {/* CONTENT */}

              <div className="beyond-destination-content">

                <h3 className="beyond-destination-title">
                  {blog.title}
                </h3>

                <p className="beyond-destination-description">
                  {blog.description}
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
};

export default BeyondDestinations;