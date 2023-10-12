import { React, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function EditTrainers() {
  const mt = () => {
    navigate("/");
  };
  const [data, setData] = useState({
    namee: "",
    email: "",
    contact: "",
    address: "",
    image: "",
    designation: "",
    subjects: [],
    groupes: [],
    timetable: "",
  });
  //   console.log(data);

  const navigate = useNavigate();

  const { namee } = useParams();
  console.log(namee);
  useEffect(() => {
    axios
      .get("/get/" + namee)
      .then((res) => {
        const responseData = res.data.Result[0];
        setData({
          ...data,
          namee: responseData.namee || "",
          email: responseData.email || "",
          contact: responseData.contact || "",
          address: responseData.address || "",
          image: responseData.image || "",
          designation: responseData.designation || "",
          subjects: responseData.subjects
            ? responseData.subjects.split(",")
            : [],
          groupes: responseData.groupes ? responseData.groupes.split(",") : [],
          timetable: responseData.timetable || "",
        });
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put("/update/" + namee, data)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="bdaDiv">
        <h2>Edit Details</h2>

        <form
          onSubmit={handleSubmit}
          // ref={gagan}
          // action="/create"
          // method="post"
          // encType="multipart/form-data"
        >
          <div className="bahrr bg-dark">
            <div className="lefte  py-2 w-50 ">
              <div>
                <label for="inputName" class="form-label fw-bold">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control  "
                  id="inputName"
                  placeholder="Enter Name"
                  autoComplete="off"
                  name="namee"
                  onChange={(e) => setData({ ...data, namee: e.target.value })}
                  value={data.namee}
                />
              </div>
              <div>
                <label for="inputEmail4" class="form-label fw-bold">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control  "
                  id="inputEmail4  border-2"
                  placeholder="Enter Email"
                  autoComplete="off"
                  name="email"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  value={data.email}
                />
              </div>
              <div>
                <label for="inputContact" class="form-label fw-bold">
                  Contact No.
                </label>
                <input
                  type="text"
                  class="form-control  "
                  id="inputContact"
                  placeholder="Enter Contact No."
                  name="contact"
                  onChange={(e) =>
                    setData({ ...data, contact: e.target.value })
                  }
                  value={data.contact}
                />
              </div>
              <div>
                <label for="inputAddress" class="form-label fw-bold">
                  Address
                </label>
                <input
                  type="text"
                  class="form-control  "
                  id="inputAddress"
                  placeholder="1234 Main St"
                  autoComplete="off"
                  name="address"
                  onChange={(e) =>
                    setData({ ...data, address: e.target.value })
                  }
                  value={data.address}
                />
              </div>
              {/* <div>
                <label class="form-label fw-bold" htmlFor="image">
                  Upload Image
                </label>
                <input
                  name="image"
                  type="file"
                  class="form-control "
                  id="image"
				  // onChange={e=>setData({...data,image:e.target.files[0]})} value={data.image}

                />
              </div> */}
            </div>
            <div className="righte  py-2  w-50 ">
              <FontAwesomeIcon
                icon={faCircleXmark}
                size="2xl"
                onClick={mt}
                className="btnClose"
              />

              <div>
                <label for="inputdesig" class="form-label fw-bold">
                  Designation
                </label>
                <input
                  type="text"
                  class="form-control  "
                  id="inputdesig"
                  placeholder="Trainer"
                  autoComplete="off"
                  name="designation"
                  onChange={(e) =>
                    setData({ ...data, designation: e.target.value })
                  }
                  value={data.designation}
                />
              </div>
              <div>
                <label for="subject" class="form-label fw-bold">
                  Choose Subjects
                </label>
                <select
                  class="form-select "
                  multiple
                  size={3}
                  id="subject"
                  name="subjects"
                  onChange={(e) => {
                    const sel = Array.from(e.target.options)
                      .filter((v) => v.selected)
                      .map((v) => v.value)
                      .join();
                    setData({ ...data, subjects: sel });
                  }}
                >
                  <option disabled>Select Subjects</option>

                  <option
                    value="Java"
                    selected={data.subjects.includes("Java")}
                  >
                    Java
                  </option>
                  <option value="FED" selected={data.subjects.includes("FED")}>
                    FED
                  </option>
                  <option
                    value="NALR"
                    selected={data.subjects.includes("NALR")}
                  >
                    NALR
                  </option>
                  <option value="DSA" selected={data.subjects.includes("DSA")}>
                    DSA
                  </option>
                  <option value="C++" selected={data.subjects.includes("C++")}>
                    C++
                  </option>
                  <option
                    value="Discrete Structures"
                    selected={data.subjects.includes("Discrete Structures")}
                  >
                    Discrete Structures
                  </option>
                  <option
                    value="Computer Networks"
                    selected={data.subjects.includes("Computer Networks")}
                  >
                    Computer Networks
                  </option>
                  <option
                    value="Operating System"
                    selected={data.subjects.includes("Operating System")}
                  >
                    Operating System
                  </option>
                  <option value="TOC" selected={data.subjects.includes("TOC")}>
                    TOC
                  </option>
                </select>
              </div>
              <div>
                <label for="group" class="form-label fw-bold">
                  Choose Groups
                </label>
                <select
                  class="form-select"
                  multiple
                  size={3}
                  id="group"
                  name="groupes"
                  onChange={(e) => {
                    const sel = Array.from(e.target.options)
                      .filter((v) => v.selected)
                      .map((v) => v.value)
                      .join();
                    console.log(sel);
                    setData({ ...data, groupes: sel });
                  }}
                >
                  <option disabled>Select Groups</option>
                  <option value="G1" selected={data.groupes.includes("G1")}>
                    G1
                  </option>
                  <option value="G2" selected={data.groupes.includes("G2")}>
                    G2
                  </option>
                  <option value="G3" selected={data.groupes.includes("G3")}>
                    G3
                  </option>
                  <option value="G4" selected={data.groupes.includes("G4")}>
                    G4
                  </option>
                  <option value="G5" selected={data.groupes.includes("G5")}>
                    G5
                  </option>
                  <option value="G6" selected={data.groupes.includes("G6")}>
                    G6
                  </option>
                  <option value="G7" selected={data.groupes.includes("G7")}>
                    G7
                  </option>
                  <option value="G8" selected={data.groupes.includes("G8")}>
                    G8
                  </option>
                  <option value="G9" selected={data.groupes.includes("G9")}>
                    G9
                  </option>
                  <option value="G10" selected={data.groupes.includes("G10")}>
                    G10
                  </option>
                </select>
              </div>
              {/* <div>
                <label class="form-label fw-bold" htmlFor="image">
                  Upload Resume
                </label>
                <input
                  name="timetable"
                  type="file"
                  class="form-control "
                  id="image"
				  // onChange={e=>setData({...data,timetable:e.target.files[0]})} value={data.timetable}

                />
                </div> */}
              

              <div>
                <button type="submit" class="btn butt">
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditTrainers;

{
  /* <div className="d-flex flex-column align-items-center pt-4">
        <h2>Update Trainer</h2>
        <form
          class="row py-2 g-3 w-50 "
          onSubmit={handleSubmit}
        >
          <div class="d-flex mx-5 col-12 formSize border border-secondary border-3 bg-transparent rounded">
            <div class="mx-1 ">
              <div class="col-10">
                <label for="inputName" class="form-label fw-bold">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control border-2 border-secondary"
                  id="inputName"
                  placeholder="Enter Name"
                  autoComplete="off"
                  name="namee"
				  onChange={e=>setData({...data,namee:e.target.value})}  value={data.namee}
                />
              </div>
              <div class="col-10">
                <label for="inputEmail4" class="form-label fw-bold">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control  border-2 border-secondary"
                  id="inputEmail4  border-2"
                  placeholder="Enter Email"
                  autoComplete="off"
                  name="email"
				  onChange={e=>setData({...data,email:e.target.value})}  value={data.email}
                />
              </div>
              <div class="col-10">
                <label for="inputContact" class="form-label fw-bold">
                  Contact No.
                </label>
                <input
                  type="text"
                  class="form-control  border-2 border-secondary"
                  id="inputContact"
                  placeholder="Enter Contact No."
                  name="contact"
				  onChange={e=>setData({...data,contact:e.target.value})}  value={data.contact}
                />
              </div>
              <div class="col-10">
                <label for="inputAddress" class="form-label fw-bold">
                  Address
                </label>
                <input
                  type="text"
                  class="form-control  border-2 border-secondary"
                  id="inputAddress"
                  placeholder="1234 Main St"
                  autoComplete="off"
                  name="address"
				  onChange={e=>setData({...data,address:e.target.value})}  value={data.address}
                />
              </div>
              <div class="col-10 mb-3">
                <label class="form-label fw-bold" htmlFor="image">
                  Select Image
                </label>
                <input
                  name="image"
                  type="file"
                  class="form-control  border-2 border-secondary"
                  id="image"
				  onChange={e=>setData({...data,image:e.target.files[0]})} value={data.image}
                />
              </div>
            </div>
            <div class="mx-1 ">
              <div class="col-12">
                <label for="inputdesig" class="form-label fw-bold">
                  Designation
                </label>
                <input
                  type="text"
                  class="form-control  border-2 border-secondary"
                  id="inputdesig"
                  placeholder="Trainer"
                  autoComplete="off"
                  name="designation"
				  onChange={e=>setData({...data,designation:e.target.value})}  value={data.designation}
                />
              </div>
              <div class="col-12">
                <label for="subject" class="form-label fw-bold">
                  Choose Subjects
                </label>
                <select
                  class="form-select  border-2 border-secondary"
                  multiple
                  size={3}
                  id="subject"
                  name="subjects"
				  onChange={e=>setData({...data,subjects:e.target.value})}  value={data.subjects}
                >
                  <option disabled>Select Subjects</option>
                  <option value="java">Java</option>
                  <option value="fed">FED</option>
                  <option value="nalr">NALR</option>
                </select>
              </div>
              <div class="col-12">
                <label for="group" class="form-label fw-bold">
                  Choose Groups
                </label>
                <select
                  class="form-select  border-2 border-secondary"
                  multiple
                  size={3}
                  id="group"
                  name="groupes"
				  onChange={e=>setData({...data,groupes:e.target.value})}  value={data.groupes}
                >
                  <option disabled>Select Groups</option>
                  <option value="g1">G1</option>
                  <option value="g2">G2</option>
                  <option value="g3">G3</option>
                </select>
              </div>

              <div class="col-10 mb-3">
                <label class="form-label fw-bold" htmlFor="timetable">
                  Select table
                </label>
                <input
                  name="timetable"
                  type="file"
                  class="form-control  border-2 border-secondary"
                  id="timetable"
                />
              </div>

              <div class="col-12 d-flex justify-content-center mb-2">
                <button type="submit" class="btn btn-primary ">
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
        
      </div> */
}
