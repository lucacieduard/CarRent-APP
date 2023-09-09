import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CarInfo.scss";
import rectangle from "/rectangle.png";
import { useState } from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
const CarInfo = () => {
  const images = ["/image_8.png", "/interior1.png", "/interior2.png"];
  const [imgId, setImgId] = useState(0);
  const changeImage = (index: number) => {
    setImgId(index);
  };
  return (
    <div className="carInfoContainer">
      <div className="imagesContainer">
        <div
          className="principalImage"
          style={{
            backgroundImage: `url(${rectangle})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <img
            src={images[imgId]}
            className={`${imgId === 0 ? "svgCar" : ""}`}
          />
        </div>

        <div className="secondaryImages">
          {images.map((img, index) => {
            if (index === 0)
              return (
                <div
                  className={`secondaryImgC first ${
                    index === imgId ? "active" : ""
                  }`}
                  style={{
                    backgroundImage: `url(${rectangle})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  onClick={() => changeImage(index)}
                >
                  <img src={img} alt="" className="first" />
                </div>
              );

            return (
              <div
                className={`secondaryImgC ${index === imgId ? "active" : ""}`}
                onClick={() => changeImage(index)}
              >
                <img src={img} alt="" className="carImg" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="infoContainer">
        <div className="infoContainerHeader">
          <div className="headerInfo">
            <h2 className="infoTitle">Nissan GT - R</h2>
            <span>stele</span>
          </div>
          <FontAwesomeIcon icon={faHeart} className="heart" />
        </div>
        <p className="description">
          NISMO has become the embodiment of Nissan's outstanding performance,
          inspired by the most unforgiving proving ground, the "race track".
        </p>
        <div className="infoList">
          <div className="infoListLeft">
            <p className="title">
              Type Car <span className="value">Sport</span>
            </p>
            <p className="title">
              Steering <span className="value">Manual</span>
            </p>
          </div>
          <div className="infoListRight">
            <p className="title">
              Capacity <span className="value">2 Person</span>
            </p>
            <p className="title">
              Gasoline <span className="value">70 L</span>
            </p>
          </div>
        </div>

        <div className="infoFooter">
          <span className="price">
            $80.00 <span className="per">/day</span>
          </span>
          <button className="rentNow">Rent Now</button>
        </div>
      </div>
    </div>
  );
};

export default CarInfo;
