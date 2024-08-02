import { useEffect } from "react";
import logo from "../src/Image/logo.png";
import "./App.css";
import "./main_index";
// Main DemoDark pages link
import "./Main DemoDark";
import "./Main DemoDark.css";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";
import $ from "jquery";
import {
  FiAirplay,
  FiArrowUp,
  FiCast,
  FiChevronUp,
  FiFacebook,
  FiInstagram,
  FiLayers,
  FiLinkedin,
  FiMonitor,
  FiUser,
  IconName,
} from "react-icons/fi";

function App() {
  useEffect(() => {
    $.fn.jQuerySimpleCounter = function (options) {
      var settings = $.extend(
        {
          start: 0,
          end: 100,
          easing: "swing",
          duration: 400,
          complete: "",
        },
        options
      );

      let thisElement = $(this);

      $({ count: settings.start }).animate(
        { count: settings.end },
        {
          duration: settings.duration,
          easing: settings.easing,
          step: function () {
            let mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
          },
          complete: settings.complete,
        }
      );
    };

    $("#number1").jQuerySimpleCounter({ end: 199, duration: 3000 });
    $("#number2").jQuerySimpleCounter({ end: 575, duration: 3000 });
    $("#number3").jQuerySimpleCounter({ end: 69, duration: 2000 });
    // $("#number4").jQuerySimpleCounter({ end: 246, duration: 2500 });

    /* AUTHOR LINK */
    $(".about-me-img").hover(
      function () {
        $(".authorWindowWrapper")
          .stop()
          .fadeIn("fast")
          .find("p")
          .addClass("trans");
      },
      function () {
        $(".authorWindowWrapper")
          .stop()
          .fadeOut("fast")
          .find("p")
          .removeClass("trans");
      }
    );

    // Get a reference to the button element
    var scrollToTopButton = document.getElementById("scrollToTopBtn");

    // Add a click event listener to the button
    scrollToTopButton.addEventListener("click", function () {
      // Scroll to the top of the page smoothly
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Add a scroll event listener to check if the user has scrolled down
    window.addEventListener("scroll", function () {
      // If the user has scrolled down 200 pixels or more, show the button
      if (window.scrollY >= 200) {
        scrollToTopButton.style.display = "block";
      } else {
        // Otherwise, hide the button
        scrollToTopButton.style.display = "none";
      }
    });
  }, []);

  function myFunction(textId) {
    if (textId === "Aklima") {
      document.getElementById("testr").innerHTML =
        "Aklima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.";
    } else if (textId === "Fatima Asrafy") {
      document.getElementById("testr").innerHTML =
        "Fatima Asrafy standard chunk of Lorem Ipsum used <br> since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.";
    } else if (textId === "JANNAT TUMPA") {
      document.getElementById("testr").innerHTML =
        "Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.";
    } else if (textId === "Standard chunk") {
      document.getElementById("testr").innerHTML =
        "Standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorumet Malorum original.";
    } else if (textId === "John Doe") {
      document.getElementById("testr").innerHTML =
        "John Doe The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorumet Malorum original.";
    } else if (textId === "Chunk") {
      document.getElementById("testr").innerHTML =
        "Chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorumet Malorum original.";
    } else if (textId === "standard") {
      document.getElementById("testr").innerHTML =
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorumet Malorum original.";
    } else {
      document.getElementById("testr").innerHTML =
        "Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorumet Malorum original.";
    }
  }

  return (
    <div className="myApp">
      {/* navbar  trydo with logo */}

      <header className="header-area formobile-menu header--transparent default-color">
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <img
                src={require("../src/Image/logo.png")}
                alt="Digital Agency"
              />
            </div>
          </div>
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                <li className="has-droupdown">
                  <a>Home</a>
                  <ul className="submenu">
                    <li>
                      <a>Main Demo</a>
                    </li>
                    <li>
                      <a>Main Demo Dark</a>
                    </li>
                    <li>
                      <a>Creative Agency</a>
                    </li>
                    <li>
                      <a>Creative One Page</a>
                    </li>
                    <li>
                      <a>Creative Portfolio</a>
                    </li>
                    <li>
                      <a>Personal Portfolio</a>
                    </li>
                    <li>
                      <a>Portfolio One Page</a>
                    </li>
                    <li>
                      <a>Portfolio One Page 02</a>
                    </li>
                    <li>
                      <a>Digital Agency</a>
                    </li>
                    <li>
                      <a>Startup</a>
                    </li>
                    <li>
                      <a>Paralax</a>
                    </li>
                    <li>
                      <a>Minimal Portfolio</a>
                    </li>
                    <li>
                      <a>Business</a>
                    </li>
                    <li>
                      <a>Home Particles</a>
                    </li>
                    <li>
                      <a>Studio Agency</a>
                    </li>
                    <li>
                      <a>Designer Portfolio</a>
                    </li>
                    <li>
                      <a>Interactive Agency</a>
                    </li>
                  </ul>
                </li>
                <li className="has-droupdown">
                  <a>Service</a>
                  <ul className="submenu">
                    <li>
                      <a>Service</a>
                    </li>
                    <li>
                      <a>Service Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li className="has-droupdown">
                  <a>Pages</a>
                  <ul className="submenu">
                    <li>
                      <a>Blog List</a>
                    </li>
                    <li>
                      <a>Blog Details</a>
                    </li>
                    <li>
                      <a>Service</a>
                    </li>
                    <li>
                      <a>Service Details</a>
                    </li>
                    <li>
                      <a>Portfolio</a>
                    </li>
                    <li>
                      <a>Portfolio Details</a>
                    </li>
                    <li>
                      <a>404</a>
                    </li>
                  </ul>
                </li>
                <li className="has-droupdown">
                  <a>Blocks</a>
                  <ul className="submenu">
                    <li>
                      <a>Portfolio</a>
                    </li>
                    <li>
                      <a>Team</a>
                    </li>
                    <li>
                      <a>Service</a>
                    </li>
                    <li>
                      <a>Video Popup</a>
                    </li>
                    <li>
                      <a>Progressbar</a>
                    </li>
                    <li>
                      <a>Gallery</a>
                    </li>
                    <li>
                      <a>Counters</a>
                    </li>
                    <li>
                      <a>Blog List</a>
                    </li>
                    <li>
                      <a>Clint Logo</a>
                    </li>
                    <li>
                      <a>Contact Form</a>
                    </li>
                    <li>
                      <a>Google Map</a>
                    </li>
                    <li>
                      <a>Columns</a>
                    </li>
                    <li>
                      <a>Pricing Table</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </nav>
            <div className="header-btn">
              <p className="rn-btn">
                <span>buy now</span>
              </p>
            </div>
            <div className="humberger-menu d-block d-lg-none pl--20"></div>
          </div>
        </div>
      </header>

      {/* sliders in trygo logo */}

      <div className="slider-wrapper">
        <div className="slider-activation">
          <div
            className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1"
            data-black-overlay="6"
          >
            <div className="container-fluid image_item position-relative ">
              <div className="row">
                <div className="col-lg-12">
                  <div className="inner_digitl">
                    <h1 className="title theme-gradient">
                      A DIGITAL<br></br>AGENCY.
                    </h1>
                  </div>
                  <div className="container position_item">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="service service_styles--1">
                          <div className="icon">
                            <img
                              src={require("../src/Image/icon-01.png")}
                              alt="Logo"
                            />
                          </div>

                          {/* Business Website Marketing */}
                          <div className="content">
                            <h4 className="title">Business Stratagy</h4>
                            <p className="availble_p">
                              There are many variations of <br></br>passages of
                              Lorem Ipsum available,<br></br> but the majority
                              have suffered.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="service service_styles--1">
                          <div className="icon">
                            <img
                              src={require("../src/Image/icon-02.png")}
                              alt="Logo"
                            />
                          </div>
                          <div className="content">
                            <h4 className="title">Website Development</h4>
                            <p className="availble_p">
                              There are many variations of <br></br> passages of
                              Lorem Ipsum available, but the majority have
                              suffered.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="service service_styles--1">
                          <div className="icon">
                            <img
                              src={require("../src/Image/icon-03.png")}
                              alt="Logo"
                            />
                          </div>
                          <div className="content">
                            <h4 className="title">Marketing &amp; Reporting</h4>
                            <p className="availble_p">
                              There are many variations of <br></br>passages of
                              Lorem Ipsum available, but the majority have
                              suffered.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About amd photo Who we are */}

      <div className="about-area about-position-top pb--120">
        <div className="about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="thumbnail">
                  <img
                    className="w-100"
                    src={require("../src/Image/about-1.jpg")}
                    alt="about Image"
                  />
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="about-inner inner_item  ">
                  <div className="secon-tital">
                    <h2 className="">About</h2>
                    <p className="description">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      dont look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum,
                    </p>
                  </div>
                  <div className="row mt--30 mt_sm--10">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="about-us-list">
                        <h2>Who we are</h2>
                        <p>
                          <fontsninja-text className="fontsninja-family-1929">
                            There are many vtions of passages<br></br> of Lorem
                            Ipsum available, but<br></br> the majority have
                            suffered.
                          </fontsninja-text>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="about-us-list">
                        <h2>Who we are</h2>
                        <p>
                          <fontsninja-text className="fontsninja-family-1929">
                            There are many vtions of passages <br></br>of Lorem
                            Ipsum available, but<br></br> the majority have
                            suffered.
                          </fontsninja-text>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* service-area Request Business Website Marketing Mobile App */}

      <div className="service-area ptb--80  bg_image bg_image--3">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                <h2 className="title_service">Service</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
                <div className="service_btn">
                  <a className="btn-transparent rn-btn-dark">
                    <span className="text">Request Custom Service</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-12 mt_md--50">
              <div className="row service-one-wrapper">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <a>
                    <div className="service service__style--2">
                      <div className="icon">
                        <h2 className="title_h3_Business">
                          <FiCast size="2em" />
                        </h2>
                      </div>
                      <div className="content">
                        <h3 className="title_h3_Business ">
                          Business Stratagy
                        </h3>
                        <span>
                          I throw myself down among the tall grass by the stream
                          as I lie close to the earth.
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <a>
                    <div className="service service__style--2">
                      <div className="icon">
                        <h2 className="title_h3_Business">
                          <FiLayers size="2em" />
                        </h2>
                      </div>
                      <div className="content">
                        <h3 className="title_h3_Business ">
                          Website Development
                        </h3>
                        <span>
                          I throw myself down among the tall grass by the stream
                          as I lie close to the earth.
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <a>
                    <div className="service service__style--2">
                      <div className="icon">
                        <h2 className="title_h3_Business">
                          <FiUser size="2em" />
                        </h2>
                      </div>
                      <div className="content">
                        <h3 className="title_h3_Business">
                          Marketing & Reporting
                        </h3>
                        <span>
                          I throw myself down among the tall grass by the stream
                          as I lie close to the earth.
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <a>
                    <div className="service service__style--2">
                      <div className="icon">
                        <h2 className="title_h3_Business ">
                          <FiMonitor size="2em" />
                        </h2>
                      </div>
                      <div className="content">
                        <h3 className="title_h3_Business">
                          Mobile App Development
                        </h3>
                        <span className="title_h3_Business">
                          I throw myself down among the tall grass by the stream
                          as I lie close to the earth.
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Works sliders our fun facts */}

      <div className="portfolio-area  bg_color--1">
        <div className="portfolio-sacousel-inner mb--55">
          <div className="portfolio-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="section-title">
                    <h2>Our Works</h2>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={60}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="mySwiper" aria-hidden="false">
          <div className="slick-cloned slick_data_index ">
            <div className="portfolio portflio_item">
              <div className="thumbnail-inner">
                <div className="image-2">
                  <a>
                    <img
                      className="link-overlay"
                      src={require("../src/Image/portfolio-1.jpg")}
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="inner">
                    <p className="p">Development</p>
                    <h4 className="title">
                      <a>
                        {" "}
                        Getting tickets to the <br></br> big show
                      </a>
                    </h4>
                    <div className="portfolio-button">
                      <p className="rn-btn" href="/portfolio-details">
                        Case Study
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiper" aria-hidden="false">
          <div className="slick-cloned slick_data_index">
            <div className="portfolio portflio_item">
              <div className="thumbnail-inner">
                <div className=" image-2">
                  <a>
                    <img
                      className="link-overlay"
                      src={require("../src/Image/portfolio-2.jpg")}
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="inner">
                    <p className="p">Development</p>
                    <h4 className="title">
                      <a>
                        {" "}
                        Getting tickets to the <br></br> big show
                      </a>
                    </h4>
                    <div className="portfolio-button">
                      <p className="rn-btn" href="/portfolio-details">
                        Case Study
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiper" aria-hidden="false">
          {" "}
          <div className="slick-cloned slick_data_index">
            <div className="portfolio portflio_item">
              <div className="thumbnail-inner">
                <div className=" image-2">
                  <a>
                    <img
                      className="link-overlay"
                      src={require("../src/Image/portfolio-3.jpg")}
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="inner">
                    <p className="p">Development</p>
                    <h4 className="title">
                      <a>
                        {" "}
                        Getting tickets to the <br></br>big show
                      </a>
                    </h4>
                    <div className="portfolio-button">
                      <p className="rn-btn" href="/portfolio-details">
                        Case Study
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiper" aria-hidden="false">
          {" "}
          <div className="slick-cloned slick_data_index">
            <div className="portfolio portflio_item">
              <div className="thumbnail-inner">
                <div className=" image-2">
                  <a>
                    <img
                      className="link-overlay"
                      src={require("../src/Image/portfolio-4.jpg")}
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="inner">
                    <p className="p">Development</p>
                    <h4 className="title">
                      <a>
                        {" "}
                        Getting tickets to the <br></br> big show
                      </a>
                    </h4>
                    <div className="portfolio-button">
                      <p className="rn-btn" href="/portfolio-details">
                        Case Study
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiper" aria-hidden="false">
          {" "}
          <div className="slick-cloned slick_data_index">
            <div className="portfolio portflio_item">
              <div className="thumbnail-inner">
                <div className=" image-2">
                  <a>
                    <img
                      className="link-overlay"
                      src={require("../src/Image/portfolio-1.jpg")}
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="inner">
                    <p className="p">Development</p>
                    <h4 className="title">
                      <a>
                        {" "}
                        Getting tickets to the <br></br> big show
                      </a>
                    </h4>
                    <div className="portfolio-button">
                      <p className="rn-btn" href="/portfolio-details">
                        Case Study
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiper" aria-hidden="false">
          {" "}
          <div className="slick-cloned slick_data_index">
            <div className="portfolio portflio_item">
              <div className="thumbnail-inner">
                <div className=" image-2">
                  <a>
                    <img
                      className="link-overlay"
                      src={require("../src/Image/portfolio-2.jpg")}
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="inner">
                    <p className="p">Development</p>
                    <h4 className="title">
                      <a>
                        {" "}
                        Getting tickets to the <br></br> big show
                      </a>
                    </h4>
                    <div className="portfolio-button">
                      <p className="rn-btn" href="/portfolio-details">
                        Case Study
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiper" aria-hidden="false">
          {" "}
          <div className="slick-cloned slick_data_index">
            <div className="portfolio portflio_item">
              <div className="thumbnail-inner">
                <div className=" image-2">
                  <a>
                    <img src={require("../src/Image/portfolio-3.jpg")} />
                  </a>
                </div>
                <div className="content">
                  <div className="inner">
                    <p className="p">Development</p>
                    <h4 className="title">
                      <a>
                        {" "}
                        Getting tickets to the <br></br> big show
                      </a>
                    </h4>
                    <div className="portfolio-button">
                      <p className="rn-btn" href="/portfolio-details">
                        Case Study
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiper" aria-hidden="false">
          {" "}
          <div className="slick-cloned slick_data_index">
            {/* //  className="slick-slide slick-cloned slick_data_index"> */}
            <div className="portfolio portflio_item">
              <div className="thumbnail-inner">
                <div className=" image-2">
                  <a>
                    <img
                      className="link-overlay"
                      src={require("../src/Image/portfolio-4.jpg")}
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="inner">
                    <p className="p">Development</p>
                    <h4 className="title">
                      <a>
                        {" "}
                        Getting tickets to the <br></br> big show
                      </a>
                    </h4>
                    <div className="portfolio-button">
                      <p className="rn-btn" href="/portfolio-details">
                        Case Study
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <a className="link-overlay" href="/portfolio-details"></a> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiper" aria-hidden="true">
          {" "}
          <div className="slick-cloned slick_data_index">
            {/* //  className="slick-slide slick-cloned slick_data_index"> */}
            <div className="portfolio portflio_item">
              <div className="thumbnail-inner">
                <div className=" image-2">
                  <a>
                    <img
                      className="link-overlay"
                      src={require("../src/Image/portfolio-1.jpg")}
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="inner">
                    <p className="p">Development</p>
                    <h4 className="title">
                      <a>
                        {" "}
                        Getting tickets to the <br></br> big show
                      </a>
                    </h4>
                    <div className="portfolio-button">
                      <p className="rn-btn" href="/portfolio-details">
                        Case Study
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiper" aria-hidden="true">
          {" "}
          <div className="slick-cloned slick_data_index">
            {/* //  className="slick-slide slick-cloned slick_data_index"> */}
            <div className="portfolio portflio_item">
              <div className="thumbnail-inner">
                <div className=" image-2">
                  <a>
                    <img
                      className="link-overlay"
                      src={require("../src/Image/portfolio-2.jpg")}
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="inner">
                    <p className="p">Development</p>
                    <h4 className="title">
                      <a>
                        {" "}
                        Getting tickets to the <br></br> big show
                      </a>
                    </h4>
                    <div className="portfolio-button">
                      <p className="rn-btn" href="/portfolio-details">
                        Case Study
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiper" aria-hidden="true">
          {" "}
          <div className="slick-cloned slick_data_index">
            {/* //  className="slick-slide slick-cloned slick_data_index"> */}
            <div className="portfolio portflio_item">
              <div className="thumbnail-inner">
                <div className=" image-2">
                  <a>
                    <img
                      className="link-overlay"
                      src={require("../src/Image/portfolio-3.jpg")}
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="inner">
                    <p className="p">Development</p>
                    <h4 className="title">
                      <a>
                        {" "}
                        Getting tickets to the <br></br> big show
                      </a>
                    </h4>
                    <div className="portfolio-button">
                      <p className="rn-btn" href="/portfolio-details">
                        Case Study
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiper" aria-hidden="true">
          {" "}
          <div className="slick-cloned slick_data_index">
            {/* //  className="slick-slide slick-cloned slick_data_index"> */}
            <div className="portfolio portflio_item">
              <div className="thumbnail-inner">
                <div className=" image-4">
                  <a>
                    <img
                      className="link-overlay"
                      src={require("../src/Image/portfolio-1.jpg")}
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="inner">
                    <p className="p">Development</p>
                    <h4 className="title">
                      <a>
                        {" "}
                        Getting tickets to the <br></br> big show
                      </a>
                    </h4>
                    <div className="portfolio-button">
                      <p className="rn-btn" href="/portfolio-details">
                        Case Study
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Our Fun Facts countin number */}

      <div className="rn-counterup-area pt--25 pb--110 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="fontWeight500">Our Fun Facts</h2>
              </div>
            </div>
            <div className="row">
              <div className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12 item">
                <h5 className="counter">
                  <span
                    className="sp_item item number"
                    id="number1"
                    data-number="199"
                  ></span>
                </h5>
                <p className="description">
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those.
                </p>
              </div>
              <div className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12 item">
                <h5 className="counter">
                  <span
                    className="sp_item item number"
                    id="number2"
                    data-number="575"
                  ></span>
                </h5>
                <p className="description">
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those.
                </p>
              </div>
              <div className=" counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12 item">
                <h5 className="counter">
                  <span
                    className="sp_item item number"
                    data-number="39"
                    id="number3"
                  ></span>
                </h5>
                <p className="description">
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aklima  TumpaStandard John Chunk FATIMA MA JON CUMMINS */}

      <div className="rn-testimonial-area bg_color--5 ptb--120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="react-tabs">
                <div
                  className="testimonial-thumb-wrapper react-tabs__tab-panel--selected"
                  role="tabpanel"
                  id="react-tabs-1"
                  aria-labelledby="react-tabs-0"
                >
                  <div className="rn-testimonial-content text-center">
                    <div className="inner">
                      <p id="testr">
                        Aklima The standard chunk of Lorem Ipsum used since the
                        1500s is reproduced below for those interested. Sections
                        Bonorumet Malorum original.
                      </p>
                    </div>
                    <div className="author-info">
                      <h6>
                        <span>Aklima </span> - COO, AMERIMAR ENTERPRISES, INC.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="testimonial-thumb-wrapper" role="tablist">
              <li>
                <div className="testimonial-thumbnai">
                  <div className="thumb">
                    <img
                      src={require("../src/Image/testimonial-1.jpg")}
                      id="Aklima"
                      onClick={(e) => myFunction(e.target.id)}
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="testimonial-thumbnai">
                  <div className="thumb">
                    <img
                      src={require("../src/Image/testimonial-2.jpg")}
                      id="Fatima Asrafy"
                      onClick={(e) => myFunction(e.target.id)}
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="testimonial-thumbnai">
                  <div className="thumb">
                    <img
                      src={require("../src/Image/testimonial-3.jpg")}
                      id="JANNAT TUMPA"
                      onClick={(e) => myFunction(e.target.id)}
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="testimonial-thumbnai">
                  <div className="thumb">
                    <img
                      src={require("../src/Image/testimonial-4.jpg")}
                      id="Standard chunk"
                      onClick={(e) => myFunction(e.target.id)}
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="testimonial-thumbnai">
                  <div className="thumb">
                    <img
                      src={require("../src/Image/testimonial-5.jpg")}
                      id="John Doe"
                      onClick={(e) => myFunction(e.target.id)}
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="testimonial-thumbnai">
                  <div className="thumb p_text">
                    <img
                      src={require("../src/Image/testimonial-6.jpg")}
                      id="Chunk"
                      onClick={(e) => myFunction(e.target.id)}
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="testimonial-thumbnai">
                  <div className="thumb">
                    <img
                      src={require("../src/Image/testimonial-7.jpg")}
                      id="standard"
                      onClick={(e) => myFunction(e.target.id)}
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="testimonial-thumbnai">
                  <div className="thumb">
                    <img
                      src={require("../src/Image/testimonial-8.jpg")}
                      id="Ipsum"
                      onClick={(e) => myFunction(e.target.id)}
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Latest News Getting Management A big ticket Design */}

      <div className="rn-blog-area pt--120 bg_color--1 mb-dec--30">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="section-title text-left">
                <h2>Latest News</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="blog-btn text-left text-lg-right mt_sm--10 mt_md--10">
                <a className="btn-transparent rn-btn-dark">
                  <span className="text_item">View All News</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row mt--60 mt_sm--40">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="blog blog-style--1">
                <div className="thumbnail">
                  <a href="#">
                    <img
                      className="img_blog"
                      src={require("../src/Image/blog.jpg")}
                      alt="Blog Images"
                    />
                  </a>
                  <div className="content">
                    <p className="blogtype">Development</p>
                    <h4 className="title">
                      <p>A big ticket gone to be an interesting </p>
                    </h4>
                    <div className="blog-btn">
                      <p className="rn-btn text-white" href="/blog-details">
                        Read More
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="blog blog-style--1">
                <div className="thumbnail">
                  <a>
                    <img
                      className="img_blog"
                      src={require("../src/Image/blog-01.jpg")}
                      alt="Blog Images"
                    />
                  </a>
                  <div className="content">
                    <p className="blogtype">Management</p>
                    <h4 className="title">
                      <p>A big ticket gone to be an interesting</p>
                    </h4>
                    <div className="blog-btn">
                      <p className="rn-btn text-white" href="/blog-details">
                        Read More
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="blog blog-style--1">
                <div className="thumbnail">
                  <a>
                    <img
                      className="img_blog"
                      src={require("../src/Image/blog-02.jpg")}
                      alt="Blog Images"
                    />
                  </a>
                  <div className="content">
                    <p className="blogtype">Design</p>
                    <h4 className="title">
                      <p>The Home of the Future Could Bebes</p>
                    </h4>
                    <div className="blog-btn">
                      <p className="rn-btn text-white" href="/blog-details">
                        Read More
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* icon and image bread area */}

      <div className="rn-brand-area brand-separation bg_color--5 pb--120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="brand-style-2">
                <li>
                  <img src={require("../src/Image/brand-01.png")} />
                </li>
                <li>
                  <img src={require("../src/Image/brand-02.png")} />
                </li>
                <li>
                  <img src={require("../src/Image/brand-03.png")} />
                </li>
                <li>
                  <img src={require("../src/Image/brand-04.png")} />
                </li>
                <li>
                  <img src={require("../src/Image/brand-05.png")} />
                </li>
                <li>
                  <img src={require("../src/Image/brand-06.png")} />
                </li>
                <li>
                  <img src={require("../src/Image/brand-01.png")} />
                </li>
                <li>
                  <img src={require("../src/Image/brand-02.png")} />
                </li>
                <li>
                  <img src={require("../src/Image/brand-06.png")} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* aeroo */}

      <div className="backto-top">
        <div className="aero backto-top svg item_aero " id="scrollToTopBtn">
          <FiChevronUp />
        </div>
      </div>

      {/* Let's get to work Quick Link Say Hello and copy right */}

      <footer className="footer-area">
        <div className="footer-wrapper">
          <div className="row align-items-end row--0">
            <div className="col-lg-6">
              <div className="footer-left">
                <div className="inner_inner">
                  <span className="span">Ready To Do This</span>
                  <h2 className="h2">
                    Let's get <br></br>to work
                  </h2>
                  <p className="rn-button-style--2">
                    <span>Contact Us</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="footer-right ">
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="footer-link">
                      <h4>Quick Link</h4>
                      <ul className="ft-link">
                        <li>
                          <a href="/portfolio">Work</a>
                        </li>
                        <li>
                          <a href="/about">About</a>
                        </li>
                        <li>
                          <a href="/contact">Let's Talk</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="footer_link ">
                      <h4>Say Hello</h4>
                      <ul className="ft-link">
                        <li>
                          <a href="#">admin@example.com</a>
                        </li>
                        <li>
                          <a href="#">HR@example.com</a>
                        </li>
                      </ul>
                      <div className="social-share-inner ">
                        <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                          <li>
                            <p href="https://www.facebook.com/login/">
                              <FiFacebook />
                            </p>
                          </li>
                          <li>
                            <p href="https://www.linkedin.com/login">
                              <FiLinkedin />
                            </p>
                          </li>
                          <li>
                            <p href="https://www.instagram.com/accounts/login/">
                              <FiInstagram />
                            </p>
                          </li>
                          <li>
                            <p href="https://twitter.com/">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                // stroke-width="0"
                                viewBox="0 0 512 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                              </svg>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="copyright-text">
                      <p>
                        Copyright © 2022 Rainbow-Themes. All Rights Reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
