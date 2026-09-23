import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./DownloadApp.css";

import appImage from "../assets/app-with-logo.0f885eea.png";

gsap.registerPlugin(ScrollTrigger);

const DownloadApp = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const content = section.querySelector(".download-app-content");
      const image = section.querySelector(".download-app-image");

      gsap.set(content, {
        opacity: 0,
        x: -50,
      });

      gsap.set(image, {
        opacity: 0,
        x: 60,
        y: 30,
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        once: true,

        onEnter: () => {
          const tl = gsap.timeline();

          tl.to(content, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
          });

          tl.to(
            image,
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 1,
              ease: "power3.out",
            },
            "-=0.45"
          );
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="download-app-section" ref={sectionRef}>
      <div className="download-app-wrapper">
        <div className="download-app-box">

          <div className="download-app-content">

            <h2>
              Download
              <br />
              Garibook Mobile App
            </h2>

            <p>
              Download our Customer, Smart Driver and
              <br className="desktop-break" />
              Enterprise App
            </p>

            <a
              href="#"
              className="download-app-button"
              onClick={(e) => e.preventDefault()}
            >
              <span>Download App</span>

              <span className="download-app-arrow">
                →
              </span>
            </a>

          </div>


          <div className="download-app-image-wrapper">

            <img
              src={appImage}
              alt="Garibook Mobile App"
              className="download-app-image"
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default DownloadApp;