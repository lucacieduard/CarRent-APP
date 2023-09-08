import Filter from "../Filter/Filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./FilterSection.scss";

const FilterSection = () => {
  return (
    <div className="filter container_w">
      <Filter pickUp={true} />
      <div className="arrows">
        <FontAwesomeIcon
          icon={faArrowRightArrowLeft}
          rotation={90}
          className="ic"
        />
      </div>
      <Filter pickUp={false} />
    </div>
  );
};

export default FilterSection;
