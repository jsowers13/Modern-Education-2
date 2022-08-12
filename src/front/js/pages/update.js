import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Image } from "react-bootstrap";
import { Footer } from "../component/footer";
import "../../styles/admin.css";

export const UpdateSchool = () => {
  const { store, actions } = useContext(Context);
  const [currentBootCamp, setCurrentBootCamp] = useState(null);
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
  const params = useParams();

  const submitform = (e) => {
    e.preventDefault();
    actions.updateBootcamp(
      params.id,
      bootCampName,
      logoUrl,
      description,
      website,
      phoneNumber,
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
    // alert("BootCamp Updated Successfully");
    // navigate("/admin");
    // window.location.reload(false);
  };
  //fetch data of bootcamp to be updated and populate form with data
  useEffect(() => {
    async function fetchData() {
      const data = await actions.getBootCampsByID(params.id);
      setCurrentBootCamp(data);
      setBootCampName(data.name);
      setLogoUrl(data.logo);
      setDescription(data.description);
      setWebsite(data.website);
      setPhoneNumber(data.phone_number);
      setEmail(data.school_email);
      setAddress(data.mailing_address);
      setCareerOptions(data.career_options);
      setHousingAvailable(data.housing_available);
      setJobPlaceAvail(data.job_placement_available);
      setJobPlaceGuar(data.job_placement_guarantee);
      setGiBill(data.accept_GI_Bill);
      setProgramLength(data.length_in_weeks);
      setTuition(data.tuition);
      setSkillLevel(data.minimum_skill_level);
      setScholarshipsAvail(data.scholarships_available);

      return data;
    }
    fetchData();
  }, []);

  if (currentBootCamp == null) {
    return (
      <Image
        className="mx-auto d-block"
        src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
      />
    );
  }

  if (store.activeUser) {
    return (
      <div className="container">
        <form onSubmit={submitform}>
          <div className="form-group mb-3">
            <label htmlFor="bootCampNameInput" className="h5">
              BootCamp Name
            </label>
            <input
              id="bootCampNameInput"
              className="form-control"
              placeholder="BootCamp Name"
              value={bootCampName}
              onChange={(e) => setBootCampName(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="logoUrlInput" className="h5">
              Logo URL
            </label>
            <input
              id="logoUrlInput"
              className="form-control"
              placeholder="Last Name"
              value={logoUrl}
              onChange={(e) => setLogoUrl(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="descriptionInput" className="h5">
              Description
            </label>
            <input
              type="text"
              id="descriptionInput"
              className="form-control"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="websiteInput" className="h5">
              Website
            </label>
            <input
              type="text"
              id="websiteInput"
              className="form-control"
              placeholder="Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="phoneNumberInput" className="h5">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumberInput"
              className="form-control"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="emailInput" className="h5">
              Email
            </label>
            <input
              type="email"
              id="emailInput"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="addressInput" className="h5">
              Address
            </label>
            <input
              type="text"
              id="addressInput"
              className="form-control"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="careerOptionsInput" className="h5">
              Career Options
            </label>
            <input
              type="text"
              id="careerOptionsInput"
              className="form-control"
              placeholder="Career Options"
              value={careerOptions}
              onChange={(e) => setCareerOptions(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="housingAvailableInput" className="h5">
              Housing Available
            </label>
            <input
              type="text"
              id="housingAvailableInput"
              className="form-control"
              placeholder="Housing Available"
              value={housingAvailable}
              onChange={(e) => setHousingAvailable(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="jobPlaceAvailInput" className="h5">
              Job Placement Available
            </label>
            <input
              type="text"
              id="jobPlaceAvailInput"
              className="form-control"
              placeholder="Yes/No"
              value={jobPlaceAvail}
              onChange={(e) => setJobPlaceAvail(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="jobPlaceAvailInput" className="h5">
              Job Placement Guarantee
            </label>
            <input
              type="text"
              id="jobPlaceAvailInput"
              className="form-control"
              placeholder="Yes/No"
              value={jobPlaceGuar}
              onChange={(e) => setJobPlaceGuar(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="giBillInput" className="h5">
              GI Bill
            </label>
            <input
              type="text"
              id="giBillInput"
              className="form-control"
              placeholder="Yes/No"
              value={giBill}
              onChange={(e) => setGiBill(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="lengthInput" className="h5">
              Length in Weeks
            </label>
            <input
              type="number"
              id="lengthInput"
              className="form-control"
              value={programLength}
              onChange={(e) => setProgramLength(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="tuitionInput" className="h5">
              Tuition
            </label>
            <input
              type="number"
              id="tuitionInput"
              className="form-control"
              value={tuition}
              onChange={(e) => setTuition(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="skillLevelInput" className="h5">
              Skill Level
            </label>
            <input
              type="text"
              id="skillLevelInput"
              className="form-control"
              placeholder="Skill Level"
              value={skillLevel}
              onChange={(e) => setSkillLevel(e.target.value)}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="scholarshipsInput" className="h5">
              Scholarships Available
            </label>
            <input
              type="text"
              id="scholarshipsInput"
              className="form-control"
              placeholder="Yes/No"
              value={scholarshipsAvail}
              onChange={(e) => setScholarshipsAvail(e.target.value)}
            ></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Update School
          </button>
        </form>

        <Footer />
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
