import "./About.css";
import Advertise from "../Customs/advertise";
import * as React from "react";
import { AboutData1 } from "../Data/AboutData.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Trainers.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const About = () => {
  return (
    <div>
      <Advertise title='Welcome to about page'/>

      <div className="about-main">
        <small className="about-head">Yoga Asanas</small>
        <h1>CONTROL YOUR BODY TO FREE YOUR SOUL</h1>
        <div className="about-box">
          <div className="aboutus-img"></div>
          <div>
            <div className="about-box-info">
              <h3>Body & Mind Balance</h3>
              <p>
                Many everyday discomforts and tensions arise from the fact that
                we are alienated from our bodies. With the help of Body Mind
                Balancing, readers will learn to talk to and reconnect with
                their bodies. After just a short time, readers will begin to
                appreciate how much the body has been working for them and
                supporting them, and from this new perspective one can find new
                ways to work with the body and create a more harmonious balance
                of body and mind.
              </p>
            </div>
            <div className="about-box-info">
              <h3>Healthy Daily Life</h3>
              <p>
                If you’re feeling stuck in a rut, it may be time to shake up
                your daily routine and help your body feel energized again. And
                you’ll be pleased to know that this doesn’t require an entire
                overhaul of your life. In fact, adopting just a few healthy
                daily habits can make all the difference in the world. (Great
                news for those of us who happily identify as lazy.)
              </p>
            </div>
            <div className="about-box-info">
              <h3>Improves your flexibility</h3>
              <p>
                “Flexibility helps you perform activities of daily living and
                self-maintenance as you age, like putting socks and shoes on,
                taking care of your foot health, and being able to wash
                yourself”
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-Banner"></div>

      <div className="about-card-flex">
        <div className="about-card-flex-slider">
          <Slider>
            {AboutData1.map((info) => (
              <div>
                <p>{info.info}</p>
                <img className="about-Card-img" src={info.img} alt="" />
                <div className="about-Card-Title">
                  <h4>{info.title}</h4>
                  <p>{info.subTitle}</p>
                </div>
                <div className="about-card-star">
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={4.5}
                      precision={0.5}
                      readOnly
                    />
                  </Stack>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="about-card-flex-info">
          <div>
            <small className="about-head">Yoga Asanas</small>
            <h1>WHAT THEY ARE SAYING</h1>
            <p>
              Thanks for choosing Universal for your next project! Universal is
              a unique theme for building beautiful business website. We have a
              dedicated support team ready to answer your questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
