import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {faIdCard} from "@fortawesome/free-solid-svg-icons";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
function Trainer() {
  const [data, setData] = useState([]);
  window.abc = axios;
  useEffect(() => {
    axios
      .get("/getTrainer")
      .then((res) => {
        if (res.data.Status === "Success") {
          console.log(res.data.Result);
          setData(res.data.Result);
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to remove this faculty?");
    if (confirmDelete) {
    axios
      .delete("/delete/" + id)
      .then((res) => {
        if (res.data.Status === "Success") {
          window.location.reload(true);
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
    }
  };

  const [search , setSearch] = useState('')
  console.log(search)
  return (
    <div className="container trin">
      <div className="d-flex  align-items-center mb-1">
        <Link to="/create" className="btn butt">
        Enroll Faculty
        </Link>
        <h2 className="blbl">Faculty Members</h2>
        <Form className="searchBar">
          <InputGroup>
          
            <Form.Control placeholder="Search Faculty..." onChange={(e) => setSearch(e.target.value)} className="searchInp"></Form.Control>
          </InputGroup>
        </Form>
      </div>
      <div className="response rounded-5">
      <table className="table table-dark table-striped table-bordered ">
        <thead className="thead-dark">
          <tr className="text-center">
            <th>
              Click to Track{" "}
              <FontAwesomeIcon
                icon={faArrowTurnDown}
                beat
                style={{ color:" rgb(255, 124, 0)"}}
              />
            </th>
            <th>Profile Picture</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact No.</th>
            <th>Address</th>
            <th>Resume</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((addtrainerg) =>{
            return search.toLowerCase() === '' ? addtrainerg : addtrainerg.namee.toLowerCase().includes(search)
          }).map((addtrainerg, index) => {
            return (
              <tr key={index}>
                <td className="text-center">
                  <Link
                    to={`/dashh/` + addtrainerg.namee}
                    className=" me-2"
                  >
                    <FontAwesomeIcon icon={faIdCard} size="lg" style={{color: "#fff",}} />
                  </Link>
                </td>

                <td className="text-center">
                  {
                    <img
                      src={addtrainerg.image}
                      alt="no pic"
                      className="trainer_image"
                    />
                  }
                </td>
                <td className="text-center">{addtrainerg.namee}</td>
                <td className="text-center">{addtrainerg.email}</td>
                <td className="text-center">{addtrainerg.contact}</td>
                <td className="text-center">{addtrainerg.address}</td>
                <td className="text-center">
                  <a target="_blank" href={addtrainerg.timetable} rel="noopener">
                    <img
                    src={addtrainerg.timetable}
                    alt="no pic"
                    className="resume_image"
                  />
                  </a>
                </td>

                <td className="text-center">
                  <Link
                    to={`/trainerEdit/` + addtrainerg.namee}
                    className=" me-2"
                  >
                  <FontAwesomeIcon icon={faPenToSquare} size="lg" style={{color: "#fff",}} />
                  </Link>
                  <Link
                    onClick={(e) => handleDelete(addtrainerg.id)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} size="lg" style={{color: "#fff",}} />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Trainer;
