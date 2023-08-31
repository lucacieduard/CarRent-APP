import "./HeroCard.scss";

type Props = {
  title: string;
  description: string;
  backgroundImage: string;
  carImage: string;
};

const HeroCard = (props: Props) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h2 className="title">{props.title}</h2>
      <p className="description">{props.description}</p>
      <button className="button">Rental Car</button>

      <img src={props.carImage} alt="car image" className="car" />
    </div>
  );
};

export default HeroCard;
