import HeroCard from "../HeroCard/HeroCard";
import elipse from "/elipse.png";
import rectangle from "/rectangle.png";
import carImage from "/image_7.png";
import carImage2 from "/image_8.png";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero container_w">
      <HeroCard
        title="The Best Platform for Car Rental"
        description="Ease of doing a car rental safely and reliably. Of course at a low price."
        backgroundImage={elipse}
        carImage={carImage}
        left={true}
      />
      <HeroCard
        title="Easy way to rent a car at a low price"
        description="Providing cheap car rental services and safe and comfortable facilities."
        backgroundImage={rectangle}
        carImage={carImage2}
        left={false}
      />
    </div>
  );
};

export default Hero;
