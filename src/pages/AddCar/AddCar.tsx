import { useContext, useEffect, useState } from "react";
import AdminLayout from "../../layout/AdminLayout/AdminLayout";
import "./AddCar.scss";
import { Car } from "../../types/Car";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../firebase";
import { setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CarsContext } from "../../context/carsContext";
import { doc, updateDoc } from "firebase/firestore";
const AddCar = () => {
  const [formData, setFormData] = useState({
    recomandation: false,
    popular: false,
  } as Car);
  const [links, setLinks] = useState(Array(3).fill(""));
  const [car, setCar] = useState<boolean>(false);
  const [pending, setPending] = useState<boolean>(false);
  const carContext = useContext(CarsContext);
  const searchParams = useSearchParams();
  const navigate = useNavigate();
  const upload = async (file: File, uid: string) => {
    const storageRef = ref(storage, `Cars/${uid}/${String(Math.random())}`);
    const uploadTask = await uploadBytesResumable(storageRef, file);
    if (uploadTask.state === "success") {
      const downloadLink = await getDownloadURL(uploadTask.ref);
      return downloadLink;
    }
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newLinks = Array(3).fill("");
    const uid = uuidv4();
    try {
      setPending(true);
      for (const [index, file] of links.entries()) {
        newLinks[index] = await upload(file, uid);
      }

      await setDoc(doc(db, "cars", uid), {
        ...formData,
        uid: uid,
        svg: newLinks[0],
        img: [newLinks[1], newLinks[2]],
        reviews: [],
        admin: false,
      });
      carContext.refresh();
      navigate("/admin/cars");
    } catch (error) {
      console.log(error);
    } finally {
      setPending(false);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(() => {
    const carId = searchParams[0].get("id");
    if (carId && carContext.cars.length > 0) {
      const car = carContext.cars.find((car) => car.uid === carId);
      if (car) {
        setFormData(car);
        setCar(true);
      }
    }
  }, []);
  const updateCarHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setPending(true);
      e.preventDefault();
      const washingtonRef = doc(db, "cars", formData.uid);
      await updateDoc(washingtonRef, formData);
      carContext.refresh();
      navigate("/admin/cars");
    } catch (error) {
      console.log(error);
    } finally {
      setPending(false);
    }
  };
  return (
    <AdminLayout>
      <div className="addContainer">
        <form
          className="addForm"
          onSubmit={car ? updateCarHandler : submitHandler}
        >
          <div className="addInputs">
            <input
              type="text"
              placeholder="Car Name"
              onChange={changeHandler}
              name="carName"
              required
              value={formData.carName}
            />
            <input
              type="number"
              placeholder="Price"
              name="price"
              min={0}
              onChange={changeHandler}
              required
              value={formData.price}
            />
            <input
              type="number"
              placeholder="Fuel tank"
              name="gasoline"
              min={0}
              onChange={changeHandler}
              required
              value={formData.gasoline}
            />
          </div>
          <div className="addSelectable">
            <select
              name="carType"
              id="carType"
              placeholder="Car Type"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              required
              value={formData.carType}
            >
              <option value="none">--- Choose ---</option>

              <option value="sport">Sport</option>
              <option value="suv">SUV</option>
              <option value="hatchback">Hatchback</option>
              <option value="sedan">Sedan</option>
              <option value="coupe">Coupe</option>
              <option value="mvp">MVP</option>
            </select>
            <select
              name="steering"
              id="steering"
              placeholder="Steering"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              value={formData.steering}
              required
            >
              <option value="none">--- Choose ---</option>
              <option value="manual">Manual</option>
            </select>
            <select
              value={formData.capacity}
              required
              name="capacity"
              id="carCapacity"
              placeholder="Car Capacity"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [e.target.name]: Number(e.target.value),
                })
              }
            >
              <option value="none">--- Choose ---</option>

              <option value="2">2 Person</option>
              <option value="4">4 Person</option>
              <option value="6">6 Person</option>
              <option value="8">8 or More</option>
            </select>
          </div>
          <textarea
            value={formData.description}
            required
            name="description"
            id="description"
            cols={50}
            rows={5}
            placeholder="Description..."
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          ></textarea>
          <div className="addImages">
            <div className="addImgContainer">
              <p>SVG Car Image</p>
              <input
                required={car ? undefined : true}
                type="file"
                name="svg"
                src=""
                alt=""
                placeholder="SVG"
                max={1}
                onChange={(e) => {
                  setLinks((prev) => {
                    prev[0] = e.target.files ? e.target.files[0] : "";
                    return prev;
                  });
                }}
              />
            </div>
            <div className="addImgContainer">
              <p>Car Image</p>
              <input
                required={car ? undefined : true}
                type="file"
                src=""
                alt=""
                name="img"
                multiple
                max={2}
                min={2}
                onChange={(e) => {
                  setLinks((prev) => {
                    prev[1] = e.target.files ? e.target.files[0] : "";
                    prev[2] = e.target.files ? e.target.files[1] : "";
                    return prev;
                  });
                }}
              />
            </div>
          </div>
          <div className="checkbox">
            <div>
              <input
                checked={formData.recomandation}
                type="checkbox"
                name="recomandation"
                id="recomandation"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.checked,
                  })
                }
              />
              <label htmlFor="recomandation">Recomandation</label>
            </div>
            <div>
              <input
                checked={formData.popular}
                type="checkbox"
                name="popular"
                id=""
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.checked,
                  })
                }
              />
              <label htmlFor="popular">Popular</label>
            </div>
          </div>
          <button
            className={`button addbtn ${pending && "pending"}`}
            disabled={pending}
          >
            {car ? "Update Car" : "Add Car"}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddCar;
