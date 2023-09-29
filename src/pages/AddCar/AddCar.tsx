import AdminLayout from "../../layout/AdminLayout/AdminLayout";
import "./AddCar.scss";
const AddCar = () => {
  return (
    <AdminLayout>
      <div className="addContainer">
        <form className="addForm">
          <div className="addInputs">
            <input type="text" placeholder="Car Name" />
            <input type="number" placeholder="Price" min={0} />
            <input type="number" placeholder="Fuel tank" min={0} />
          </div>
          <div className="addSelectable">
            <select name="carType" id="carType" placeholder="Car Type">
              <option value="sport">Sport</option>
              <option value="suv">SUV</option>
              <option value="hatchback">Hatchback</option>
              <option value="sedan">Sedan</option>
              <option value="coupe">Coupe</option>
              <option value="mvp">MVP</option>
            </select>
            <select name="steering" id="steering" placeholder="Steering">
              <option value="sport">Manual</option>
            </select>
            <select
              name="carCapacity"
              id="carCapacity"
              placeholder="Car Capacity"
            >
              <option value="2">2 Person</option>
              <option value="4">4 Person</option>
              <option value="6">6 Person</option>
              <option value="8">8 or More</option>
            </select>
          </div>
          <textarea
            name="description"
            id="description"
            cols={50}
            rows={5}
            placeholder="Description..."
          ></textarea>
          <div className="addImages">
            <div className="addImgContainer">
              <p>SVG Car Image</p>
              <input type="file" src="" alt="" placeholder="SVG" />
            </div>
            <div className="addImgContainer">
              <p>Car Image</p>
              <input type="file" src="" alt="" />
            </div>
          </div>
          <button className="button addbtn">Add Car</button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddCar;
