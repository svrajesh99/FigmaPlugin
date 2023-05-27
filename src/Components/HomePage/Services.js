import React from "react";
import "./Services.css";
import tree from "../../Assests/tree.png";
import man1 from "../../Assests/man1.png";
import man2 from "../../Assests/man2.png";
import world from "../../Assests/world.png";
import { TbMathGreater } from "react-icons/tb";
const Services = () => {
  return (
    <div className="service-grid">
      <div>
        <img src={tree} alt="tree"></img>
      </div>
      <div className="service-grid-desc">
        <h2>
          Finding perfect growth story for our global and domestic clients
        </h2>
        <p>
          Floraison is a strategic and business consulting company founded in
          2002 and is based out of Bangalore, India. Since our inception, we
          have helped more than 300 global companies to create successful
          businesses in India under our India Entry Strategies and have nurtured
          the aspirations of more than 200 domestic entrepreneurs with our Small
          Business Support.
        </p>
        <a href="#">
          <TbMathGreater />
          <TbMathGreater />
          &nbsp;&nbsp; Know more about us
        </a>
      </div>
      <div className="service-image-11">
        <img src={man1} alt="tree"></img>
      </div>
      <div className="service-grid-desc">
        <h2>Benefit from our visionary leadership and astute planning</h2>
        <p>
          We share a common vision to constantly influence, lead & simplify the
          way our global & domestic clients setup and do their business in
          India. For us, every client engagement is unique and needs careful &
          smart planning. We lead every engagement with a sense of purpose,
          responsibility and ownership, to help you achieve your objectives and
          goals.
        </p>
        <a href="#">
          <TbMathGreater />
          <TbMathGreater />
          &nbsp;&nbsp; Meet our leadership team
        </a>
      </div>
      <div className="service-image-1">
        <img src={man1} alt="tree"></img>
      </div>
      <div>
        <img src={man2} alt="tree"></img>
      </div>
      <div className="service-grid-desc">
        <h2>Each engagement is managed by single point of contact</h2>
        <p>
          We have dedicated in-house experts in each of our service offering and
          they all work together in focussed groups. We always start by
          analysing a client engagement from several points of view. This
          multidisciplinary approach is a major benefit for our clients as they
          get the best of expertise & experience. A customised team is created
          for large or complex engagement and this team is led by a single point
          of contact.
        </p>
        <a href="#">
          <TbMathGreater />
          <TbMathGreater />
          &nbsp;&nbsp; See how we do this
        </a>
      </div>
      <div className="service-image-11">
        <img src={world} alt="tree"></img>
      </div>
      <div className="service-grid-desc">
        <h2>
          Our unmatched experience and local expertise will guide you throughout
        </h2>
        <p>
          India is a diverse country and to many it represents a sub-continent –
          many nations rolled into one! Our several man years of combined local
          experience and expertise will help you navigate through various
          complex situations and put you on the definite path of success in the
          Indian market.
        </p>
        <div>
          <a href="#">
            <TbMathGreater />
            <TbMathGreater />
            &nbsp;&nbsp; Learn how this benefits you
          </a>
        </div>
      </div>
      <div className="service-image-1">
        <img src={world} alt="tree"></img>
      </div>
    </div>
  );
};

export default Services;
