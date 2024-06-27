import React, { useState } from "react";
import "./home.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaFacebookF, FaRegEnvelope, FaSnapchatGhost, FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
const Home = () => {
  const [activeHeader, setActiveHeader] = useState(1);
  const [activeLink , setActiveLink] = useState('home')

  
  return (
    <div className="home">
      <header id="home">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="img/logo.png" alt="" />
              <span>
                Summer <span>School</span>
              </span>
            </a>
            <button
              className="navbar-toggler text-white border-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <RxHamburgerMenu />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeLink === "home" ? "active" : ""}`}
                    href="#home"
                    onClick={() => setActiveLink("home")}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                  href="#about"
                  className={`nav-link ${activeLink === "about" ? "active" : ""}`}
                  onClick={() => setActiveLink("about")}
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                  href="#programs"
                  className={`nav-link ${activeLink === "program" ? "active" : ""}`}
                  onClick={() => setActiveLink("program")}
                  >
                    Programs
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contact"
                  className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
                  onClick={() => setActiveLink("contact")}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className={`header-body ${activeHeader == 1 ? "show" : ""}`}>
          <img src="img/header/img-01.png" alt="" />
          <div className="header-body-info">
            <h2>
              Live Your Life <br /> Through Travel!
            </h2>

            <button className="custom-button">Apply Now</button>
          </div>
        </div>
        <div className={`header-body ${activeHeader == 2 ? "show" : ""}`}>
          <img src="img/header/img-02.png" alt="" />
          <div className="header-body-info">
            <h2>
              Live Your Life <br /> Through Travel!
            </h2>

            <button className="custom-button">Apply Now</button>
          </div>
        </div>
        <div className={`header-body ${activeHeader == 3 ? "show" : ""}`}>
          <img src="img/header/img-03.png" alt="" />
          <div className="header-body-info">
            <h2>
              Live Your Life <br /> Through Travel!
            </h2>

            <button className="custom-button">Apply Now</button>
          </div>
        </div>
        <div className={`header-body ${activeHeader == 4 ? "show" : ""}`}>
          <img src="img/header/img-04.png" alt="" />
          <div className="header-body-info">
            <h2>
              Live Your Life <br /> Through Travel!
            </h2>

            <button className="custom-button">Apply Now</button>
          </div>
        </div>
        <div className={`header-body ${activeHeader == 5 ? "show" : ""}`}>
          <img src="img/header/img-05.png" alt="" />
          <div className="header-body-info">
            <h2>
              Live Your Life <br /> Through Travel!
            </h2>

            <button className="custom-button">Apply Now</button>
          </div>
        </div>

        <div className="pagination text-white">
          <ul>
            <li>
              <span
                className={activeHeader == 1 ? "active" : ""}
                onClick={() => setActiveHeader(1)}
              ></span>
            </li>
            <li>
              <span
                className={activeHeader == 2 ? "active" : ""}
                onClick={() => setActiveHeader(2)}
              ></span>
            </li>
            <li>
              <span
                className={activeHeader == 3 ? "active" : ""}
                onClick={() => setActiveHeader(3)}
              ></span>
            </li>
            <li>
              <span
                className={activeHeader == 4 ? "active" : ""}
                onClick={() => setActiveHeader(4)}
              ></span>
            </li>
            <li>
              <span
                className={activeHeader == 5 ? "active" : ""}
                onClick={() => setActiveHeader(5)}
              ></span>
            </li>
          </ul>

          <p>Keep Scrolling And Start The Journey!</p>
        </div>
      </header>

      <div className="about" id="about">
        <div>
          <div className="row w-100 m-0">
            <div className="col-md-6 p-0">
              <div className="about-info">
                <h3>About Us</h3>
                <p>
                  Welcome to Summer School! 🌞 As passionate advocates for the
                  vibrant world of tourism, we offer an immersive educational
                  experience tailored for students eager to explore the depths
                  of this exciting industry. From dynamic workshops to hands-on
                  field experiences, our program is designed to ignite
                  curiosity, foster innovation, and cultivate future leaders in
                  the realm of travel and hospitality. Join us as we embark on a
                  journey of discovery, learning, and unforgettable adventures.
                  Let's make this summer one to remember!
                </p>
              </div>
            </div>

            <div className="col-md-6 p-0">
              <div>
                <img className="img-fluid" src="/img/team.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="our-programs"
        id="programs"
        style={{ backgroundImage: "url(img/bg-img.png)" }}
      >
        <img
          className="our-program-logo d-none d-md-block"
          src="/img/logo.png"
          alt=""
        />
        <div className="container">
          <div className="our-programs-header text-center">
            <h3>Our Programs</h3>
            <p>
              You can pick the journey that fits your vibe from an unusual
              variety of options
            </p>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="program-card">
                <div className="program-card-body">
                  <img
                    className="img-fluid"
                    src="/img/programs/img-01.png"
                    alt=""
                  />
                  <h3>Social Program</h3>
                </div>
                <div className="program-card-footer">
                  <a href="/socialprogram" className="custom-button">Explore</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="program-card">
                <div className="program-card-body">
                  <img
                    className="img-fluid"
                    src="/img/programs/img-02.png"
                    alt=""
                  />
                  <h3>Trips</h3>
                </div>
                <div className="program-card-footer">
                  <a href="#" className="custom-button">Explore</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="program-card">
                <div className="program-card-body">
                  <img
                    className="img-fluid"
                    src="/img/programs/img-03.png"
                    alt=""
                  />
                  <h3>Optional Trips</h3>
                </div>
                <div className="program-card-footer">
                  <a href="#" className="custom-button">Explore</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="explore"
        style={{ backgroundImage: "url(img/bg-img.png)" }}
      >
        <img className="bell" src="/img/bell.png" alt="" />
        <div className="container">
          <p>
            Explore seamless travel with our <span>Transportation</span> and{" "}
            <span>Accommodation</span> section.{" "}
          </p>

          <div className="explore-card-wrapper">
            <div className="explore-card explore-card-left">
              <div className="explore-card-header">
                <h3>Trips</h3>
              </div>
              <div className="explore-card-body">
                <img
                  className="img-fluid"
                  src="/img/explore/img-01.png"
                  alt=""
                />
                <button className="custom-button">Explore</button>
              </div>
            </div>
            <div className="explore-card explore-card-right">
              <div className="explore-card-header">
                <h3>Accommodation</h3>
              </div>
              <div className="explore-card-body">
                <img
                  className="img-fluid"
                  src="/img/explore/img-02.png"
                  alt=""
                />
                <button className="custom-button">Explore</button>
              </div>
            </div>
          </div>
        </div>
        <img className="bicycle" src="/img/bicycle.png" alt="" />
      </div>

      <div
        className="choose"
        style={{ backgroundImage: "url(img/choose-bg.png)" }}
      >
        <div className="container">
          <div className="choose-header">
            <h1>WHY CHOOSE US?</h1>
            <p>A Traveling agency you can trust and rely on</p>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="choose-item">
                <span className="icon">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_37_33)">
                      <path
                        fillRule="evenodd"
                        clipRule={"evenodd"}
                        d="M60 19.2856C56.7698 19.2857 53.6259 20.3286 51.036 22.259C48.4462 24.1895 46.5486 26.9044 45.6257 29.9999H74.3743C73.4514 26.9044 71.5538 24.1895 68.964 22.259C66.3741 20.3286 63.2302 19.2857 60 19.2856ZM40.3029 14.5885C36.1692 18.7215 33.4404 24.0502 32.5029 29.8199C32.5248 30.0135 32.5362 30.208 32.5371 30.4028V119.597C32.5371 119.734 32.5371 119.863 32.52 120H87.48C87.4692 119.866 87.4635 119.732 87.4629 119.597V30.4028C87.4641 30.208 87.4755 30.0135 87.4971 29.8199C86.6749 24.7582 84.4714 20.0217 81.1294 16.1322C77.7874 12.2427 73.4367 9.3512 68.5565 7.77617C63.6763 6.20115 58.4561 6.00376 53.4709 7.20576C48.4857 8.40775 43.929 10.9625 40.3029 14.5885ZM98.16 29.9999C98.1708 30.1339 98.1765 30.2683 98.1771 30.4028V119.597C98.1771 119.734 98.1771 119.863 98.16 120H98.5714C101.385 120 104.172 119.446 106.772 118.369C109.372 117.292 111.734 115.713 113.724 113.724C115.714 111.734 117.292 109.372 118.369 106.772C119.446 104.172 120 101.385 120 98.5714V51.4285C120 45.7453 117.742 40.2948 113.724 36.2762C109.705 32.2576 104.255 29.9999 98.5714 29.9999H98.16ZM21.4286 29.9999H21.84C21.8293 30.134 21.8236 30.2683 21.8229 30.4028V119.597C21.8229 119.734 21.8229 119.863 21.84 120H21.4286C18.6145 120 15.828 119.446 13.2282 118.369C10.6284 117.292 8.26611 115.713 6.27628 113.724C4.28646 111.734 2.70804 109.372 1.63115 106.772C0.554266 104.172 0 101.385 0 98.5714L0 51.4285C0 45.7453 2.25765 40.2948 6.27628 36.2762C10.2949 32.2576 15.7454 29.9999 21.4286 29.9999Z"
                        fill="#FBA60A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_37_33">
                        <rect width="120" height="120" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <h5>AFFORDABLE PRICE GUARANTEE</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum id turpis lacinia, tempor nisi ut, lacinia lorem.
                  Nulla facilisi. Nam nec purus euismod, tempor libero eget,
                  sollicitudin orci.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="choose-item">
                <span className="icon">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M60 7.5C46.0761 7.5 32.7226 13.0312 22.8769 22.8769C13.0312 32.7226 7.5 46.0761 7.5 60C7.5 73.9239 13.0312 87.2774 22.8769 97.1231C32.7226 106.969 46.0761 112.5 60 112.5C73.6486 112.486 86.7552 107.157 96.5414 97.643C106.328 88.129 112.024 75.1779 112.423 61.5352C108.798 62.5073 112.351 61.5867 108.564 62.5922C106.431 61.8973 101.903 64.9978 101.721 64.9978C101.309 64.9978 98.287 53.3587 98.287 53.3587L89.3156 48.75H86.25L85.9416 50.2313L93.0197 56.8978L81.8259 61.7536L73.5136 50.2313L72.2855 50.7769L74.9128 59.2847L84.9534 64.7168L74.9128 76.5687L75.2416 84.964L67.9113 100.71L55.6845 99.1357L51.9345 78.3131L51.2093 70.478L34.4475 69.5784L32.2777 55.3355L39.8512 46.9385L52.6908 45.4573L62.0737 50.5601L70.7292 48.282C70.4686 43.9755 70.7409 45.3429 70.4686 43.9755L65.8594 43.8115L65.6126 41.4246L64.2134 40.9308L63.5548 43.8933L61.3329 43.77L58.5344 37.5558L56.5587 38.2144L58.9458 43.482L56.8059 44.2226L53.5964 39.3668L51.6211 39.0373L46.518 39.6959L42.2384 45.128L37.8759 45.4575L37.5466 37.4738L43.2255 37.062L43.7196 34.6751L42.3614 33.3584L42.3206 32.4935L46.1133 30.6326L48.8227 29.9426L53.4316 28.3376L54.9129 26.6091L55.736 28.3376L61.0034 28.9962L63.0612 26.8563L64.4604 21.0949L62.8964 20.4363L60.2625 24.3872L58.2867 22.0823L55.5712 25.5394L52.1962 26.1155L52.0322 23.7286L54.6656 18.1317L62.0733 14.9222L72.3609 14.1816L73.2666 17.3091C73.2666 17.3091 72.1144 20.4366 71.8673 20.5188C71.835 20.5294 71.9677 20.9299 72.2105 21.5887H79.5218L82.8141 18.8723L89.7244 16.7306C80.9771 10.7199 70.6134 7.50161 60 7.5ZM34.0073 16.2809L35.4473 16.5277C35.4473 16.5277 35.8589 18.4205 35.5298 18.873C35.2005 19.3259 32.9787 20.7253 32.9787 20.7253L31.5377 17.8859L34.0073 16.2809ZM43.6369 18.9968L45.5709 23.5648L46.353 27.4741C46.353 27.4741 43.6371 28.8319 43.4313 28.9966C43.2255 29.1607 41.9906 27.1036 41.9906 27.1036L41.5383 22.9059L42.1969 19.3669L43.6369 18.9968ZM40.7972 24.2641V28.0505L38.4518 28.9552L37.958 27.1448L40.7974 24.2644L40.7972 24.2641ZM85.1184 80.1902L83.3923 94.6741L79.6038 95.4162C79.6038 95.4162 80.7448 83.5821 81.3209 82.924L85.1182 80.19L85.1184 80.1902Z"
                      fill="#FBA60A"
                    />
                  </svg>
                </span>
                <h5>WIDE VARIETY OF DESTINATIONS</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum id turpis lacinia, tempor nisi ut, lacinia lorem.
                  Nulla facilisi. Nam nec purus euismod, tempor libero eget,
                  sollicitudin orci.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="choose-item">
                <span className="icon">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M101.35 81.3246L104.875 60.9246C105.082 59.7289 105.025 58.5025 104.708 57.3311C104.392 56.1597 103.823 55.0716 103.042 54.1429C102.261 53.2143 101.287 52.4675 100.187 51.9547C99.087 51.442 97.8885 51.1757 96.675 51.1746H70.77C70.1655 51.1747 69.5681 51.0432 69.0195 50.7892C68.4709 50.5353 67.9841 50.1649 67.593 49.7039C67.2019 49.2428 66.9159 48.7022 66.7548 48.1195C66.5937 47.5368 66.5613 46.926 66.66 46.3296L69.975 26.1046C70.513 22.8207 70.3597 19.4608 69.525 16.2396C69.1679 14.9086 68.48 13.6895 67.5255 12.6955C66.5709 11.7016 65.3805 10.9651 64.065 10.5546L63.34 10.3196C61.7009 9.793 59.9222 9.91468 58.37 10.6596C56.67 11.4796 55.43 12.9746 54.97 14.7496L52.59 23.9196C51.8323 26.8377 50.7313 29.6557 49.31 32.3146C47.235 36.1996 44.025 39.3146 40.685 42.1896L33.49 48.3896C32.4919 49.2521 31.7123 50.3389 31.2152 51.5608C30.718 52.7828 30.5175 54.1052 30.63 55.4196L34.69 102.385C34.869 104.462 35.8202 106.396 37.356 107.806C38.8917 109.216 40.9003 109.998 42.985 110H66.225C83.635 110 98.49 97.8696 101.35 81.3246Z"
                      fill="#FBA60A"
                    />
                    <path
                      fillRule="evenodd"
                      
                      clipRule="evenodd"
                      d="M14.8399 47.4255C15.8062 47.3832 16.7515 47.716 17.4782 48.3542C18.205 48.9924 18.657 49.8868 18.7399 50.8505L23.5899 107.03C23.6721 107.867 23.5828 108.712 23.3276 109.513C23.0724 110.314 22.6566 111.054 22.1056 111.689C21.5546 112.324 20.88 112.84 20.1229 113.205C19.3659 113.57 18.5423 113.778 17.7024 113.814C16.8626 113.851 16.0241 113.715 15.2383 113.417C14.4524 113.118 13.7357 112.663 13.1318 112.078C12.5279 111.493 12.0496 110.791 11.726 110.016C11.4025 109.24 11.2405 108.406 11.2499 107.565V51.1705C11.2503 50.2039 11.6239 49.2748 12.2928 48.577C12.9617 47.8792 13.8742 47.4667 14.8399 47.4255Z"
                      fill="#FBA60A"
                    />
                  </svg>
                </span>
                <h5>HIGHLY QUALIFIED SERVICE</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum id turpis lacinia, tempor nisi ut, lacinia lorem.
                  Nulla facilisi. Nam nec purus euismod, tempor libero eget,
                  sollicitudin orci.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <footer id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="footer-item">
                <h5> 
                  <img src="/img/footer_logo.png" alt="" />
                  Summer School
                </h5>

                <ul className="social-links">
                  <li>
                    <a href="#"> <FaFacebookF /> </a>
                  </li>
                  <li>
                    <a href="#"> <FaSnapchatGhost /> </a>
                  </li>
                  <li>
                    <a href="#"> <RiInstagramFill /> </a>
                  </li>
                  <li>
                    <a href="#"> <FaTiktok /> </a>
                  </li>
                </ul>

              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="footer-item contact">
                <h5>Contact Us</h5>

                <ul className="ahmed-info">
                  <li>
                    <p style={{color:"#FFE457"}}>Ahmed Elyamani</p>
                  </li>
                  <li>
                    <p>+201557030100</p>
                  </li>
                  <li>
                    <p>summerschoolalexandria@gmail.com</p>
                  </li>
                  
                </ul>

              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="footer-item subscribe">
                <h5>SUBSCRIBE</h5>

                <ul>
                  <li>
                    <p style={{fontWeight:400}}>
                    Enter your email to get notified about our programs and trips!
                    </p>
                  </li>
                  <li className="input-email">
                    <input type="text" placeholder="Email" />
                    <FaRegEnvelope />
                  </li>
                  
                </ul>

              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
