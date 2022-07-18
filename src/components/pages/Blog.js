import "./Blog.css";
import Advertise from "../Customs/advertise";
import { Icon } from "react-icons-kit";
//import { play } from "react-icons-kit/feather/play";
import { youtube } from "react-icons-kit/feather/youtube";
import { BlogData, BlogData1 } from "../Data/BlogData";

const Blog = () => {
  return (
    <div>
      <Advertise title='Welcome to blog page'/>
      <div className="Blog-main">
        <div className="Main-Blog-flex">
          {BlogData.map((item) => (
            <div className="Blog-Card">
              <div className="blog-entry">
                <i> {item.date}</i>
              </div>
              <a
                href={item.link}
                className="blog-play"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={youtube} size={75} />{" "}
              </a>
              <img className="blog-img" src={item.image} alt=""></img>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        {/* Main blog2 */}

        <div className="Main-Blog-flex">
          {BlogData1.map((item) => (
            <div className="Blog-Card">
              <div className="blog-entry">
                <i> {item.date}</i>
              </div>
              <a
                href={item.link}
                className="blog-play"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={youtube} size={75} />{" "}
              </a>

              <img className="blog-img" src={item.image} alt=""></img>

              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Blog;
