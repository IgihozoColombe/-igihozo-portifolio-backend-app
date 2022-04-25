import React, { Fragment } from "react";
import Wrapper from "./Wrapper";
import classes from "../../assets/css/ProductionDash/Content.module.css";
import pieChartImage from "../../assets/images/ProductionDash/pieChart.png";
import rectangleGreen from "../../assets/images/ProductionDash/rectangleGreen.png";
import rectangleRed from "../../assets/images/ProductionDash/rectangleRed.png";
import Vector from "../../assets/images/ProductionDash/Vector.png";
import barChart from "../../assets/images/ProductionDash/barChart.png";
import blueBar from "../../assets/images/ProductionDash/blueBar.png";
import greenBar from "../../assets/images/ProductionDash/greenBar.png";
import RectangleMale from "../../assets/images/ProductionDash/RectangleMale.png";
import RectangleFemale from "../../assets/images/ProductionDash/RectangleFemale.png";
import Histograph from "../../assets/images/ProductionDash/Histograph.png";

const Content = () => {
  return (
    <Fragment>
      <Wrapper>
        <div className={classes.content}>
          <div className={classes.first_container}>
            <div className={`${classes.box}`}>
              <header>Tanks</header>
              <h1>100</h1>
              <div className={classes.pieChartImage}>
                <img
                  src={pieChartImage}
                  alt="pieChartImage"
                  style={{ width: "200px", height: "200px" }}
                ></img>
              </div>
              <div className={classes.chartInfoMainArea}>
                <div className={classes.chartInfo}>
                  <div className={classes.chartInfoChild}>
                    <p>Filled (75)</p>

                    <img
                      src={rectangleGreen}
                      alt="rectangleGreen"
                      style={{ width: "24px", height: "14px" }}
                    />
                  </div>
                  <div className={classes.chartInfoChild}>
                    <p>Empty (25)</p>

                    <img
                      src={rectangleRed}
                      alt="rectangleRed"
                      style={{ width: "24px", height: "14px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${classes.box}`}>
              <header>Regular Feed</header>
              <div className={classes.header_infoMain}>
                <p className={classes.header_info}>
                  12000Kg Produced this Month
                </p>
                <img
                  src={Vector}
                  alt="Vector"
                  style={{
                    width: "12px",
                    height: "5.99px",
                  }}
                />
              </div>

              <div className={classes.barChartMainArea}>
                <div className={classes.barChartParagraphArea}>
                  <p>500</p>
                  <p>400</p>
                  <p>300</p>
                  <p>200</p>
                  <p>100</p>
                </div>
                <div>
                  <img
                    src={barChart}
                    alt="barChart"
                    style={{ width: "100%" }}
                  />
                  <div className={classes.barChartAreaWeekDays}>
                    <p>mon</p>
                    <p>tue</p>
                    <p>wed</p>
                    <p>thu</p>
                    <p>fri</p>
                    <p>sat</p>
                    <p>sun</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${classes.box}`}>
              <header>Custom Feed</header>
              <div className={classes.header_infoMain}>
                <p className={classes.header_info}>
                  12000Kg Produced this Month
                </p>
                <img
                  src={Vector}
                  alt="Vector"
                  style={{
                    width: "12px",
                    height: "5.99px",
                  }}
                />
              </div>
              <div className={classes.barChartMainArea}>
                <div className={classes.barChartParagraphArea}>
                  <p>500</p>
                  <p>400</p>
                  <p>300</p>
                  <p>200</p>
                  <p>100</p>
                </div>
                <div>
                  <img
                    src={barChart}
                    alt="barChart"
                    style={{ width: "100%" }}
                  />
                  <div className={classes.barChartAreaWeekDays}>
                    <p>mon</p>
                    <p>tue</p>
                    <p>wed</p>
                    <p>thu</p>
                    <p>fri</p>
                    <p>sat</p>
                    <p>sun</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.second_container}>
            <div className={`${classes.box}`}>
              <div className={`${classes.FNmainArea}`}>
                <div className={`${classes.FNmain}`}>
                  <header>Fishery Nursery</header>
                  <div>
                    <p className={`${classes.FNmainParagraph}`}>
                      Amount of fish: 730
                    </p>
                  </div>
                  <div className={classes.FNbarChart}>
                    <div className={classes.FNparagraph}>
                      <p>500</p>
                      <p>400</p>
                      <p>300</p>
                      <p>200</p>
                      <p>100</p>
                    </div>
                    <div className={classes.barBorder}>
                      <img src={blueBar} alt="blueBar" />
                      <img src={greenBar} alt="greenBars" />
                    </div>
                  </div>
                </div>
                <div className={classes.genderMainArea}>
                  <div className={classes.gender}>
                    <img
                      src={RectangleMale}
                      alt="RectangleMale"
                      style={{ width: "10px", height: "13px" }}
                    />
                    <p>male</p>
                  </div>
                  <div className={classes.gender}>
                    <img
                      src={RectangleFemale}
                      alt="RectangleFemale"
                      style={{ width: "10px", height: "13px" }}
                    />
                    <p>female</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${classes.box}`}>
              <div className={`${classes.FNmainArea}`}>
                <div className={`${classes.FNmain}`}>
                  <header>Fishery Nursery</header>
                  <div>
                    <p className={`${classes.FNmainParagraph}`}>
                      Amount of fish: 730
                    </p>
                  </div>
                  <div className={classes.FNbarChart}>
                    <div className={classes.FNparagraph}>
                      <p>500</p>
                      <p>400</p>
                      <p>300</p>
                      <p>200</p>
                      <p>100</p>
                    </div>
                    <div className={classes.barBorder}>
                      <img src={blueBar} alt="blueBar" />
                      <img src={greenBar} alt="greenBars" />
                    </div>
                  </div>
                </div>
                <div className={classes.genderMainArea}>
                  <div className={classes.gender}>
                    <img
                      src={RectangleMale}
                      alt="RectangleMale"
                      style={{ width: "10px", height: "13px" }}
                    />
                    <p>male</p>
                  </div>
                  <div className={classes.gender}>
                    <img
                      src={RectangleFemale}
                      alt="RectangleFemale"
                      style={{ width: "10px", height: "13px" }}
                    />
                    <p>female</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${classes.box}`}>
              <header className={classes.second_container_header}>
                Fish Feeding
              </header>
              <div className={classes.header_infoMain}>
                <p className={classes.header_info}>
                  12000Kg Produced this Month
                </p>
                <img
                  src={Vector}
                  alt="Vector"
                  style={{
                    width: "12px",
                    height: "5.99px",
                  }}
                />
              </div>
              <div className={classes.histographParagraphArea}>
                <img
                  src={Histograph}
                  alt="Histograph"
                  style={{ width: "279px", height: "84px" }}
                />
                <div className={classes.histographParagraph}>
                  <p>mon</p>
                  <p>tue</p>
                  <p>wes</p>
                  <p>thu</p>
                  <p>fri</p>
                  <p>sat</p>
                  <p>sun</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </Fragment>
  );
};

export default Content;
