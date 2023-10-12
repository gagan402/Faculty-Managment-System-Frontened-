import { React, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import cute from './cute.png'

function AddTrainer() {
  const gagan = useRef();

  const namee = useRef();
  const email = useRef();
  const contact = useRef();
  const address = useRef();
  const image = useRef();
  const designation = useRef();
  const subjects = useRef();
  const groupes = useRef();
  const timetable = useRef();

  const navigate = useNavigate();

  const mt = () => {
    navigate("/");
  };
  
  return (
    <>
      <div className="bdaDiv">
        <h2>Add Details </h2>
        <form
          ref={gagan}
          action="/create"
          method="post"
          encType="multipart/form-data"
        >
          <div className="bahr">
            <div className="lefte  py-2 w-50 ">
              <div>
                <label for="inputName" class="form-label fw-bold">
                  Name
                </label>
                <input
                  ref={namee}
                  type="text"
                  class="form-control  "
                  id="inputName"
                  placeholder="Enter Name"
                  autoComplete="off"
                  name="namee"
                />
              </div>
              <div>
                <label for="inputEmail4" class="form-label fw-bold">
                  Email
                </label>
                <input
                  ref={email}
                  type="email"
                  class="form-control  "
                  id="inputEmail4  border-2"
                  placeholder="Enter Email"
                  autoComplete="off"
                  name="email"
                />
              </div>
              <div>
                <label for="inputContact" class="form-label fw-bold">
                  Contact No.
                </label>
                <input
                  ref={contact}
                  type="text"
                  class="form-control  "
                  id="inputContact"
                  placeholder="Enter Contact No."
                  name="contact"
                />
              </div>
              <div>
                <label for="inputAddress" class="form-label fw-bold">
                  Address
                </label>
                <input
                  ref={address}
                  type="text"
                  class="form-control  "
                  id="inputAddress"
                  placeholder="1234 Main St"
                  autoComplete="off"
                  name="address"
                />
              </div>
              <div>
                <label class="form-label fw-bold" htmlFor="image">
                  Profile Picture
                </label>
                <input
                  name="image"
                  ref={image}
                  type="file"
                  class="form-control "
                  id="image"
                />
              </div>
            </div>
            <div className="righte  py-2  w-50 ">
        <FontAwesomeIcon icon={faCircleXmark} size="2xl"  onClick={mt} className="btnClose"/>

              <div>
                <label for="inputdesig" class="form-label fw-bold">
                  Designation
                </label>
                <input
                  ref={designation}
                  type="text"
                  class="form-control  "
                  id="inputdesig"
                  placeholder="Trainer"
                  autoComplete="off"
                  name="designation"
                />
              </div>
              <div>
                <label for="subject" class="form-label fw-bold">
                  Choose Subjects
                </label>
                <select
                  ref={subjects}
                  class="form-select "
                  multiple
                  size={3}
                  id="subject"
                  name="subjects"
                >
                  <option disabled>Select Subjects</option>
                  <option value="Java">Java</option>
                  <option value="FED">FED</option>
                  <option value="NALR">NALR</option>
                  <option value="DSA">DSA</option>
                  <option value="C++">C++</option>
                  <option value="Discrete Structures">Discrete Structures</option>
                  <option value="Computer Networks">Computer Networks</option>
                  <option value="Operating System">Operating System</option>
                  <option value="TOC">TOC</option>


                </select>
              </div>
              <div>
                <label for="group" class="form-label fw-bold">
                  Choose Groups
                </label>
                <select
                  ref={groupes}
                  class="form-select"
                  multiple
                  size={3}
                  id="group"
                  name="groupes"
                >
                  <option disabled>Select Groups</option>
                  <option value="G1">G1</option>
                  <option value="G2">G2</option>
                  <option value="G3">G3</option>
                  <option value="G4">G4</option>
                  <option value="G5">G5</option>
                  <option value="G6">G6</option>
                  <option value="G7">G7</option>
                  <option value="G8">G8</option>
                  <option value="G9">G9</option>
                  <option value="G10">G10</option>

                </select>
              </div>

              <div>
                <label class="form-label fw-bold" htmlFor="timetable">
                  Upload Resume
                </label>
                <input
                  name="timetable"
                  ref={timetable}
                  type="file"
                  class="form-control  "
                  id="timetable"
                />
              </div>

              <div className="crt">
                <button type="submit" class="btn butt">
                  Create
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTrainer;