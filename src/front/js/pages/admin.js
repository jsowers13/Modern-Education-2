import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";
import "../../styles/admin.css";

export const Admin = () => {
  const { store, actions } = useContext(Context);
  const [tableData, setTableData] = useState([]);
  const [bootCampName, setBootCampName] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [careerOptions, setCareerOptions] = useState("");
  const [housingAvailable, setHousingAvailable] = useState("");
  const [jobPlaceAvail, setJobPlaceAvail] = useState("");
  const [jobPlaceGuar, setJobPlaceGuar] = useState("");
  const [giBill, setGiBill] = useState("");
  const [programLength, setProgramLength] = useState(0);
  const [tuition, setTuition] = useState(0);
  const [skillLevel, setSkillLevel] = useState("");
  const [scholarshipsAvail, setScholarshipsAvail] = useState("");
  const navigate = useNavigate();

  const submitform = (e) => {
    e.preventDefault();
    actions.createBootcamp(
      bootCampName,
      logoUrl,
      description,
      website,
      email,
      address,
      careerOptions,
      housingAvailable,
      jobPlaceAvail,
      jobPlaceGuar,
      giBill,
      programLength,
      tuition,
      skillLevel,
      scholarshipsAvail
    );
    // navigate("/admin");
    // window.location.reload(false);
  };
  //generate table showing API data of bootcamps
  useEffect(() => {
    async function fetchData() {
      const data = await actions.getSchools();
      setTableData(store.schools);
      console.log(tableData.length);
      return data;
    }
    fetchData();
  }, []);

  //   Old way of returning intervening with react hook
  //   if (tableData.length == 0) {
  //     return <h1>No BootCamp Data to Display. Create a New Bootcamp Above</h1>;
  //   }

  if (store.activeUser) {
    return (
      <div className="container">
        <form onSubmit={submitform}>
          <div className="form-group mb-3">
            <label htmlFor="bootCampNameInput">BootCamp Name</label>
            <input
              id="bootCampNameInput"
              className="form-control"
              placeholder="BootCamp Name"
              onChange={(e) => setBootCampName(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="logoUrlInput">Logo URL</label>
            <input
              id="logoUrlInput"
              className="form-control"
              placeholder="Last Name"
              onChange={(e) => setLogoUrl(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="descriptionInput">Description</label>
            <input
              type="text"
              id="descriptionInput"
              className="form-control"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="websiteInput">Website</label>
            <input
              type="text"
              id="websiteInput"
              className="form-control"
              placeholder="Website"
              onChange={(e) => setWebsite(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="phoneNumberInput">Phone Number</label>
            <input
              type="tel"
              id="phoneNumberInput"
              className="form-control"
              placeholder="Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="emailInput">Email</label>
            <input
              type="email"
              id="emailInput"
              className="form-control"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="addressInput">Address</label>
            <input
              type="text"
              id="addressInput"
              className="form-control"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="careerOptionsInput">Career Options</label>
            <input
              type="text"
              id="careerOptionsInput"
              className="form-control"
              placeholder="Career Options"
              onChange={(e) => setCareerOptions(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="housingAvailableInput">Housing Available</label>
            <input
              type="text"
              id="housingAvailableInput"
              className="form-control"
              placeholder="Housing Available"
              onChange={(e) => setHousingAvailable(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="jobPlaceAvailInput">Job Placement Available</label>
            <input
              type="text"
              id="jobPlaceAvailInput"
              className="form-control"
              placeholder="Yes/No"
              onChange={(e) => setJobPlaceGuar(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="jobPlaceAvailInput">Job Placement Guarantee</label>
            <input
              type="text"
              id="jobPlaceAvailInput"
              className="form-control"
              placeholder="Yes/No"
              onChange={(e) => setJobPlaceGuar(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="giBillInput">GI Bill</label>
            <input
              type="text"
              id="giBillInput"
              className="form-control"
              placeholder="Yes/No"
              onChange={(e) => setGiBill(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="lengthInput">Length in Weeks</label>
            <input
              type="number"
              id="lengthInput"
              className="form-control"
              onChange={(e) => setProgramLength(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="tuitionInput">Tuition</label>
            <input
              type="number"
              id="tuitionInput"
              className="form-control"
              onChange={(e) => setTuition(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="skillLevelInput">Skill Level</label>
            <input
              type="text"
              id="skillLevelInput"
              className="form-control"
              placeholder="Skill Level"
              onChange={(e) => setSkillLevel(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="scholarshipsInput">Scholarships Available</label>
            <input
              type="text"
              id="scholarshipsInput"
              className="form-control"
              placeholder="Yes/No"
              onChange={(e) => setScholarshipsAvail(e.target.value)}
            ></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Create School
          </button>
        </form>
        {tableData.length == 0 ? (
          <h1 className="text-white">
            No BootCamp Data to Display. Create a New Bootcamp Above
          </h1>
        ) : (
          <table className="table table-hover table-striped big-bottom-margin">
            <thead>
              <tr>
                <th>BootCamp Name</th>
                <th>Logo URL</th>
                <th>Description</th>
                <th>Website</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Address</th>
                <th>Career Options</th>
                <th>Housing Available</th>
                <th>JP Avail</th>
                <th>JP Guar</th>
                <th>Accept GI</th>
                <th>Length Wks</th>
                <th>Tuition</th>
                <th>Skill Level</th>
                <th>Scholarships</th>
                <th className="text-center">Edit</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((bootcamp, index) => {
                return (
                  <tr key={bootcamp.id}>
                    <td>{bootcamp.id}</td>
                    <td>{bootcamp.name}</td>
                    <td>{bootcamp.logo}</td>
                    <td>{bootcamp.description}</td>
                    <td>{bootcamp.website}</td>
                    <td>{bootcamp.phone_number}</td>
                    <td>{bootcamp.school_email}</td>
                    <td>{bootcamp.mailing_address}</td>
                    <td>{bootcamp.career_options}</td>
                    <td>{bootcamp.housing_available}</td>
                    <td>{bootcamp.job_placement_available}</td>
                    <td>{bootcamp.job_placement_guarantee}</td>
                    <td>{bootcamp.accept_GI_Bill}</td>
                    <td>{bootcamp.length_in_weeks}</td>
                    <td>{bootcamp.tuition}</td>
                    <td>{bootcamp.minimum_skill_level}</td>
                    <td>{bootcamp.scholarships_available}</td>
                    <td className="text-center">
                      {/* <Link to={"/update/" + employee.id}> */}
                      <i
                        className="fa-solid fa-file-pen text-black"
                        type="button"
                      ></i>
                      {/* </Link> */}
                    </td>
                    <td className="text-center">
                      <i
                        className="fa-solid fa-trash-can"
                        // onClick={() => {
                        //   actions.deleteEmployee(employee.id);
                        // }}
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    );
  } else
    return (
      <div className="container">
        <h1>You do not have permissions to view this page</h1>
        <Link to="/">Back to Home</Link>
      </div>
    );
};
