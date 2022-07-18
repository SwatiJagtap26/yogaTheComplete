import Advertise from "../Customs/advertise";
import * as React from "react";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Trainers.css";
import { traineeDataHandler, traineeDataHandler2 } from "../Data/traineeData";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Trainers = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 
// slider
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

  return (
    <div>
      <Advertise title='Welcome to trainee page'/>
      <h1 className="trainee-head">Yoga Asanas Trainer</h1>

      <div className="Main-trainee">
        <div className="Main-trainee-flex">
        <Slider {...settings}>
          {traineeDataHandler.map((item)=>(
            <div className="Trainee-Card">
              <img className="display-img" src={item.img} alt="" />
              
              <div>
              <small>{item.category}</small>
              <h4>{item.title}</h4>
              <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                {item.description}
                </Typography>
              </CardContent>
            </Collapse>
            </div>
            </div>

          ))}
           </Slider>
        </div>
        {/* Seconnd trainee row */}
        <div className="Main-trainee-flex">
        <Slider {...settings}>
        {traineeDataHandler2.map((item)=>(
            <div className="Trainee-Card">
              <img className="display-img" src={item.img} alt="" />
              <small>{item.category}</small>
              <h4>{item.title}</h4>
              <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                {item.description}
                </Typography>
              </CardContent>
            </Collapse>
            </div>
          ))}
           </Slider>
        </div>
      </div>
    </div>
  );
};
export default Trainers;
