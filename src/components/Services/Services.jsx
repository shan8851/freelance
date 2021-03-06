import React from "react";
import s from "./Services.module.scss";
import AppDev from "../../assets/app.svg";
import WebDev from "../../assets/development.svg";
import FullPackage from "../../assets/product.svg";

export default function Services() {
  return (
    <div id="services" className={s.container}>
      <h1 className={s.heading}>Our Services</h1>
      <div className={s.wrapper}>
        <div className={s.serviceItem}>
          <img className={s.serviceImage} src={WebDev} alt="" />
          <h3 className={s.serviceHeader}>Web Development</h3>
          <p className={s.serviceText}>
            We will custom build a modern, beautiful, and fast website for your
            business. We can build sites that are fully responsive and work on
            any device. We will also design and host the site so you can focus
            on running your business.
          </p>
        </div>
        <div className={s.serviceItem}>
          <img className={s.serviceImage} src={AppDev} alt="" />
          <h3 className={s.serviceHeader}>Mobile App Development</h3>
          <p className={s.serviceText}>
            We build beautiful, fast and responsive apps for Android and iOS.
            Our apps have a native feel, with the best possible implementation
            of your ideas. We can handle everything from start to finish
            including app store submission.
          </p>
        </div>
        <div className={s.serviceItem}>
          <img className={s.serviceImage} src={FullPackage} alt="" />
          <h3 className={s.serviceHeader}>Hosting & Support</h3>
          <p className={s.serviceText}>
            Our custom hosting and support packages are perfect for businesses
            without technical expertise, allowing you to focus on what really
            matters – your business. Our team will handle everything for you
            making sure your app or website is online 24/7, giving you more time
            to grow your business.
          </p>
        </div>
      </div>
    </div>
  );
}
