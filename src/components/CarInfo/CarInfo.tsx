import "./CarInfo.scss";
import rectangle from "/rectangle.png";
import { useState } from "react";
import { Car } from "../../types/Car";
import { Link } from "react-router-dom";
import FavoriteHeart from "../FavoriteHeart/FavoriteHeart";

type Params = {
  car: Car;
};

const CarInfo = (props: Params) => {
  const images = [props?.car.svg, ...props.car.img];
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
                  key={index}
                  className={`secondaryImgC first ${
                    index === imgId ? "active" : ""
                  }`}
                  style={{
                    backgroundImage: `url(${rectangle})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    cursor: "pointer",
                  }}
                  onClick={() => changeImage(index)}
                >
                  <img src={img} alt="" className="first" />
                </div>
              );

            return (
              <div
                key={index}
                className={`secondaryImgC ${index === imgId ? "active" : ""}`}
                onClick={() => changeImage(index)}
                style={{ cursor: "pointer" }}
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
            <h2 className="infoTitle">{props.car.carName}</h2>
            <span>stele</span>
          </div>
          <FavoriteHeart car={props.car} />
        </div>
        <p className="description">{props.car.description}</p>
        <div className="infoList">
          <div className="infoListLeft">
            <p className="title">
              Type Car <span className="value">{props.car.carType}</span>
            </p>
            <p className="title">
              Steering <span className="value">{props.car.steering}</span>
            </p>
          </div>
          <div className="infoListRight">
            <p className="title">
              Capacity{" "}
              <span className="value">{props.car.capacity} Person</span>
            </p>
            <p className="title">
              Gasoline <span className="value">{props.car.gasoline} L</span>
            </p>
          </div>
        </div>

        <div className="infoFooter">
          <span className="price">
            ${props.car.price} <span className="per">/day</span>
          </span>
          <Link to={`/payment/${props.car.uid}`}>
            <button className="rentNow" style={{ cursor: "pointer" }}>
              Rent Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarInfo;
