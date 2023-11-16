import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as BorderedHeart } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { User } from "../../types/Auth";
import { Car } from "../../types/Car";

type Props = {
  car: Car;
};

const FavoriteHeart = (props: Props) => {
  const { user, addUser } = useContext(AuthContext);

  const handleFavorite = async (type: "add" | "remove") => {
    if (user) {
      const userRef = doc(db, "users", user.uid);
      if (type === "add") {
        await updateDoc(userRef, {
          favoriteCars: arrayUnion(props.car.uid),
        });
      }

      if (type === "remove") {
        await updateDoc(userRef, {
          favoriteCars: user.favoriteCars.filter((id) => id !== props.car.uid),
        });
      }

      const updatedUser = await getDoc(userRef);
      addUser(updatedUser.data() as User);
    }
  };
  return (
    <span style={{ cursor: "pointer" }}>
      {user?.favoriteCars.includes(props.car.uid) ? (
        <FontAwesomeIcon
          icon={SolidHeart}
          color="red"
          className="heart"
          onClick={() => handleFavorite("remove")}
        />
      ) : (
        <FontAwesomeIcon
          icon={BorderedHeart}
          color="gray"
          className="heart"
          onClick={() => handleFavorite("add")}
        />
      )}
    </span>
  );
};

export default FavoriteHeart;
