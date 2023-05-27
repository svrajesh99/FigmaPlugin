import React from "react";
import "./HomePage.css";
import homepagepic from "../../Assests/pic1.png";
import gateway from "../../Assests/gateway.jpg";
import man from "../../Assests/man.png";
import Services from "./Services";
import Publications from "./Publications";
import Imageslider from "./Imageslider";
import Contactus from "../Footer/Contactus";

const HomePage = () => {
  const slides = [
    {
      url: "https://www.floraison.in/wp-content/uploads/2020/08/Floraison-India-Entry-Strategies-India-PEO.webp",
    },
    {
      url: "https://www.floraison.in/wp-content/uploads/2020/08/Floraison-Small-Business-Support.webp",
    },
    {
      url: "https://www.floraison.in/wp-content/uploads/2020/08/Floraison-India-Entry-Strategies-India-Subsidiary.webp",
    },
    {
      url: "https://www.floraison.in/wp-content/uploads/2020/08/Floraison-Professional-Support-Services.webp",
    },
    {
      url: "https://www.floraison.in/wp-content/uploads/2020/08/Floraison-India-Entry-Strategies-India-PEO.webp",
    },
    {
      url: "https://www.floraison.in/wp-content/uploads/2020/08/Floraison-Small-Business-Support.webp",
    },
    {
      url: "https://www.floraison.in/wp-content/uploads/2020/08/Floraison-India-Entry-Strategies-India-Subsidiary.webp",
    },
    {
      url: "https://www.floraison.in/wp-content/uploads/2020/08/Floraison-Professional-Support-Services.webp",
    },
  ];
  return (
    <div>
      <div className="responsive-image">
        <img src={homepagepic} alt="Homepagepic" />
      </div>
      <div className="center-flex support">
        <div className="support-item">India Entry Statergies</div>
        <div className="support-item">India Subsidiary</div>
        <div className="support-item">Subsidiary Support</div>
        <div className="support-item">India PEO Services</div>
        <div className="support-item">Small business support</div>
      </div>
      <div className="welcome-text flex-column">
        <h1>Your Greateway to India</h1>
        <p>Expand your global business and enter the Indian markets NOW!</p>
      </div>
      <div className="welcome-grid">
        <div className="welcome-grid-desc-1">
          <h2>If you aren’t doing business in India, it’s time to re-think!</h2>
          <p>
            Enter the Indian markets NOW. India’s journey on the path of
            economic reforms has transformed it to one of the world’s fastest
            growing economies. Its large, young & growing population is its best
            asset. Sectors like IT and ITES, Retail, Ecommerce, Manufacturing,
            Pharma and Healthcare, R&D and so many other sectors are projected
            to provide serious growth opportunities to global and Indian
            companies who are doing business in India.
          </p>
        </div>
        <div className="res-grid-11">
          <img src={gateway} alt="gateway"></img>
        </div>
        <div className="res-grid-1">
          <img src={gateway} alt="gateway"></img>
        </div>
        <div className="res-grid-22">
          <img src={man} alt="man"></img>
        </div>
        <div className="welcome-grid-desc-1">
          <h2>Your journey into India starts by choosing the right partner</h2>
          <p>
            Your journey into India, of course, starts with engaging and
            supported by the right partner – who has the capability and resolve
            to guide you throughout. The choice of a strategic consulting firm
            offering holistic professional services, can make a huge difference
            to the business of a global organization. Increasingly, more than
            ever before, global organizations need to carefully engage local
            firms that have expertise of handling global companies and managing
            their growth, with a proactive consulting approach, which would
            mitigate all possible risks.
          </p>
        </div>
        <div className="res-grid-2">
          <img src={man} alt="man"></img>
        </div>
      </div>
      <div className="explore welcome-text flex-column">
        <h1>Explore our Service Suite</h1>
        <p>
          Share your plans with us and help us customise a workable strategy for
          your effective entry into India. Go beyond your current needs and
          experience our holistic range of services tailored for you
        </p>
      </div>
      <div className="explore-grid">
        <div className="explore-grid-div">
          <div>
            <img src="https://www.floraison.in/wp-content/uploads/2020/07/home-ss-1-768x378.webp" />
          </div>
          <div className="explore-grid-div-desc">
            <h2>India Entry Strategies</h2>
            <p>
              It's our mission to promote and formulate the entry of global
              organizations into the Indian markets through well thought out &
              structured strategies which include India Subsidiary & India PEO
              options
            </p>
          </div>
        </div>
        <div className="explore-grid-div">
          <div>
            <img src="https://www.floraison.in/wp-content/uploads/2020/07/home-ss-2-768x512.webp" />
          </div>
          <div className="explore-grid-div-desc">
            <h2>India Subsidiary</h2>
            <p>
              Setting up & operating your own India subsidiary is a great way to
              access India on permanent long-term basis, India subsidiary has
              been considered by several global companies operating in India
            </p>
          </div>
        </div>
        <div className="explore-grid-div">
          <div>
            <img src="https://www.floraison.in/wp-content/uploads/2020/07/home-ss-3-768x642.webp" />
          </div>
          <div className="explore-grid-div-desc">
            <h2>Subsidiary Support</h2>
            <p>
              While you handle your core business, our professionals from
              bookkeeping, tax, compliance, payroll, HR & business support teams
              will deliver ongoing support services, each month under a
              professional engagement
            </p>
          </div>
        </div>
        <div className="explore-grid-div">
          <div>
            <img src="https://www.floraison.in/wp-content/uploads/2020/07/home-ss-4-768x512.webp" />
          </div>
          <div className="explore-grid-div-desc">
            <h2>India PEO Services</h2>
            <p>
              Simplify your global expansion plan and commence hiring your
              talent in India without the need to form your legal entity. Engage
              our PEO services & get access to employees who you've always
              wanted to work with
            </p>
          </div>
        </div>
        <div className="explore-grid-div">
          <div>
            <img src="https://www.floraison.in/wp-content/uploads/2020/07/home-ss-5-768x512.webp" />
          </div>
          <div className="explore-grid-div-desc">
            <h2>Small Business Support</h2>
            <p>
              We aspire to cultivate the spirit of entrepreneurship among
              potential domestic entrepreneurs & to help them start their dream
              venture & support them to stabilize & grow their business and
              achieve success
            </p>
          </div>
        </div>
      </div>
      <Services />
      <Publications />
      <Imageslider slides={slides} />
      <Contactus />
    </div>
  );
};

export default HomePage;
