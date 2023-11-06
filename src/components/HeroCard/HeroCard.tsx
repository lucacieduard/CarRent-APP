import { Link } from "react-router-dom";
import "./HeroCard.scss";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  backgroundImage: string;
  carImage: string;
  left: boolean;
};

const HeroCard = (props: Props) => {
  return (
    <motion.div
      initial={props.left ? { opacity: 0, x: -10 } : { opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="card"
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h2 className="title">{props.title}</h2>
      <p className="description">{props.description}</p>

      <Link to={"/cars"} style={{ textDecoration: "none" }}>
        <button className="button">Rent now!</button>
      </Link>

      <img src={props.carImage} alt="car image" className="car" />
    </motion.div>
  );
};

export default HeroCard;
