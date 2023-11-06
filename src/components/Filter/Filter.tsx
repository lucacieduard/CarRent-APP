import "./Filter.scss";
import { motion } from "framer-motion";

type Props = {
  pickUp: boolean;
};
const Filter = (props: Props) => {
  const curr = new Date();
  const date = curr.toISOString().substring(0, 10);
  return (
    <motion.div
      initial={props.pickUp ? { opacity: 0, x: -10 } : { opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="filterContainer"
    >
      <div className="pickup">
        <input type="radio" defaultChecked className="radio" />
        <span className="title">{props.pickUp ? "Pick-Up" : "Drop - Off"}</span>
      </div>
      <div className="chooses">
        <div className="field">
          <span className="fieldTitle">Location</span>
          <select name="city" id="city">
            <option value="bacau">Bacău</option>
            <option value="iasi">Iași</option>
            <option value="bucuresti">București</option>
            <option value="brasov">Brașov</option>
          </select>
        </div>
        <div className="field">
          <span className="fieldTitle">Date</span>
          <input type="date" defaultValue={date} />
        </div>
        <div className="field">
          <span className="fieldTitle">Time</span>
          <input type="time" defaultValue={"00:00"} />
        </div>
      </div>
    </motion.div>
  );
};

export default Filter;
