import { useState } from "react";
import AdminLayout from "../../layout/AdminLayout/AdminLayout";
import "./AddCar.scss";
import { Car } from "../../types/Car";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

import { v4 as uuidv4 } from "uuid";
const AddCar = () => {
  const [formData, setFormData] = useState({} as Car);
  const [links, setLinks] = useState(Array(3).fill(""));

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
      for (const [index, file] of links.entries()) {
        newLinks[index] = await upload(file, uid);
      }

      await setDoc(doc(db, "cars", uid), {
        ...formData,
        uid: uid,
        svg: newLinks[0],
        img: [newLinks[1], newLinks[2]],
      });
    } catch (error) {
      console.log(error);
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
  return (
    <AdminLayout>
      <div className="addContainer">
        <form className="addForm" onSubmit={submitHandler}>
          <div className="addInputs">
            <input
              type="text"
              placeholder="Car Name"
              onChange={changeHandler}
              name="carName"
              required
            />
            <input
              type="number"
              placeholder="Price"
              name="price"
              min={0}
              onChange={changeHandler}
              required
            />
            <input
              type="number"
              placeholder="Fuel tank"
              name="gasoline"
              min={0}
              onChange={changeHandler}
              required
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
              required
            >
              <option value="none">--- Choose ---</option>
              <option value="manual">Manual</option>
            </select>
            <select
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
                required
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
                required
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
                required
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
                required
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
          <button className="button addbtn">Add Car</button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddCar;
