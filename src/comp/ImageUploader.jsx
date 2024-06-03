import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";
// import loadingGif from "../images/gif.gif";
import Footer from "./Footer";
import { Logo } from "./SvgImages";
import Payment from "../images/online-pay-svgrepo-com.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import zone from "../images/zone.png";
import ezera from "../images/ezera.png";
import { useInView } from "react-intersection-observer";

function ImageUploader() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleChangeLanguage = (lng) => {
    setLanguage(lng);
    changeLanguage(lng);
  };

  const [hasAnimated, setHasAnimated] = useState({
    branch: false,
    smalldino: false,
    finger: false,
    wolve: false,
    childrens: false,
    trex: false,
    irons: false,
    bigdino: false,
    bifg: false,
    dinofooter: false,
    encyPic: false,
    infoBookImg: false,
    texts: [],
    svgs: [],
    instructions: [],
    buttons: [],
    dino: false,
  });
  const [branchRef, branchInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [smalldinoRef, smalldinoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [fingerRef, fingerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [wolveRef, wolveInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [childrensRef, childrensInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [trexRef, trexInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ironsRef, ironsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [bigdinoRef, bigdinoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [bifgRef, bifgInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [dinofooterRef, dinofooterInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [encyPicRef, encyPicInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [infoBookImgRef, infoBookImgInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [textRefs, setTextRefs] = useState([]);
  const [svgRefs, setSvgRefs] = useState([]);
  const [instructionRefs, setInstructionRefs] = useState([]);
  const [buttonRefs, setButtonRefs] = useState([]);
  const [dinoRef, dinoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const location = useLocation();
  const navigate = useNavigate();
  const [pages, setPages] = useState([]);
  const [userName, setUserName] = useState("");
  const [language, setLanguage] = useState("ru");
  const [gender, setGender] = useState("girl");
  const [imageLinks, setImageLinks] = useState([]);
  const [bookText, setBookText] = useState({});
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!location.state) {
      navigate("/");
      return;
    }

    const {
      swappedPages,
      userName,
      language,
      gender,
      bookPageLinks,
      bookText,
    } = location.state;

    console.log("Received state:", location.state);
    setPages([...swappedPages, ...bookPageLinks]);
    setUserName(userName);
    setLanguage(language);
    setGender(gender);
    setImageLinks(bookPageLinks);
    setBookText(bookText);
  }, [location, navigate]);

  const getBookTextWithUserName = (pageText) => {
    if (!pageText) return null;
    const formattedText = pageText.replace(
      /{name}/g,
      ` ${userName.charAt(0).toUpperCase() + userName.slice(1)}`
    );
    return formattedText
      .split("<!--split-->")
      .map((paragraph, index, array) => (
        <React.Fragment key={index}>
          <p>{paragraph.trim()}</p>
          {index < array.length - 1 && <br />}
        </React.Fragment>
      ));
  };

  console.log(pages);

  return (
    <div>
      <div className="info_page">
        <div className="nav">
          <div className="logo">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          <div className="language-select-wrapper">
            <select
              value={language}
              onChange={(e) => handleChangeLanguage(e.target.value)}
              className="language-select"
            >
              <option value="en" data-icon="url(/images/flag_us.png)">
                {t("language.eng")}
              </option>
              <option value="ru" data-icon="url(/images/flag_ru.png)">
                {t("language.ru")}
              </option>
            </select>
          </div>
          <Link to="/payment">
            {" "}
            <img src={Payment} alt="" className="payment" />
          </Link>
        </div>

        <div className="discover">
          <div className="jungle-overlay"></div>

          <img src={zone} alt="" className="zone" />
          <img src={ezera} alt="" className="ezera" />
          <div className="main_info"></div>
        </div>
      </div>
      <div className="containerr">
        {pages.length > 0 && (
          <>
            <div className="book-container">
              <section className="open-book">
                <div className="book-spread">
                  <div className="book-page full-page-image">
                    <img src={pages[0]} alt="Page 1" />
                  </div>
                  <div className="book-page full-page-image">
                    <img src={pages[3]} alt="Page 2" />
                  </div>
                </div>
              </section>
            </div>
            <div className="book-container">
              <section className="open-book">
                <div className="book-spread">
                  <div className="book-page">
                    <div className="page-content">
                      <h2 className="title">The beginning of the journey</h2>
                      {getBookTextWithUserName(bookText.page3)}
                    </div>
                  </div>
                  <div className="book-page">
                    <div className="half-page">
                      <img
                        src={pages[4]}
                        alt="Page 4"
                        className="half-page-image secondimage"
                      />
                      <div className="half-page-text fourthtext">
                        {getBookTextWithUserName(bookText.page4)}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="book-container">
              <section className="open-book">
                <div className="book-spread">
                  <div className="book-page">
                    <div className="half-page">
                      <div className="half-page-text">
                        {getBookTextWithUserName(bookText.page5)}
                      </div>
                      <img
                        src={pages[5]}
                        alt="Page 5"
                        className="half-page-image fiveimg"
                      />
                    </div>
                  </div>
                  <div className="book-page">
                    <div className="half-page">
                      <div className="half-page-text">
                        {getBookTextWithUserName(bookText.page6)}
                      </div>
                      <img
                        src={pages[1]}
                        alt="Page 6"
                        className="half-page-image"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="book-container">
              <section className="open-book">
                <div className="book-spread">
                  <div className="book-page">
                    <div className="half-page">
                      <div className="half-page-text-30">
                        {getBookTextWithUserName(bookText.page7)}
                      </div>
                      <img
                        src={pages[6]}
                        alt="Page 7"
                        className="large-page-image"
                      />
                    </div>
                  </div>
                  <div className="book-page">
                    <div className="half-page">
                      <div className="half-page-text">
                        {getBookTextWithUserName(bookText.page8)}
                      </div>
                      <img
                        src={pages[2]}
                        alt="Page 8"
                        className="half-page-image sevenimg"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="book-container">
              <section className="open-book">
                <div className="book-spread">
                  <div className="book-page full-page-image">
                    <img src={pages[7]} alt="Page 9" />
                  </div>
                  <div className="book-page full-page-image">
                    <img src={pages[10]} alt="Page 10" />
                  </div>
                </div>
              </section>
            </div>
            <div className="book-container">
              <section className="open-book">
                <div className="book-spread">
                  <div className="book-page">
                    <div className="half-page">
                      <div className="half-page-text">
                        {getBookTextWithUserName(bookText.page11)}
                      </div>
                      <img
                        src={pages[8]}
                        alt="Page 11"
                        className="half-page-image elevenimg"
                      />
                    </div>
                  </div>
                  <div className="book-page full-page-image">
                    <img src={pages[9]} alt="Page 12" />
                  </div>
                </div>
              </section>
            </div>
          </>
        )}
      </div>
      <Footer style={{ marginTop: "0", color: "white" }} />
    </div>
  );
}

export default ImageUploader;
