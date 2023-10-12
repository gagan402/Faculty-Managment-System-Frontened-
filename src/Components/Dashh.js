import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { React, useState, useEffect } from "react";
import BarChartt from "./BarChartt";
import PieOne from "./PieOne";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Dashh() {
  const [data, setData] = useState({
    namee: "",
    email: "",
    contact: "",
    image: "",
    designation: "",
    subjects: "",
    groupes: "",
  });

  const { namee } = useParams();
  console.log(namee);
  useEffect(() => {
    axios
      .get("/gett/" + namee)
      .then((res) => {
        const responseData = res.data.Result[0];
        setData({
          namee: responseData.namee || "",
          email: responseData.email || "",
          contact: responseData.contact || "",
          designation: responseData.designation || "",
          image: responseData.image || "",
          subjects: responseData.subjects || "",
          groupes: responseData.groupes || "",
        });
      })
      .catch((err) => console.log(err));
  }, [namee]);
  console.log(data);

  const navigate = useNavigate();
  const mt = () => {
    navigate("/");
  };
  return (
    
  
    <div className="main" >
      <div className="dash ">
        <div className="left">
          <h2 className="proHead">{data.namee}'s profile</h2>
          <div className="photu">
            <img src={`http://localhost:3000/${data.image}`} alt="no pic" />
          </div>
          <div className="dataa">
            <table className="table  lowTab">
              <tr>
                <td className="p-2">Designation</td>
                <td >:</td>
                <td className="p-2">{data.designation}</td>
              </tr>
              <tr>
                <td className="p-2">Email id</td>
                <td >:</td>
                <td className="p-2">{data.email}</td>
              </tr>
              <tr>
                <td className="p-2">Contact No.</td>
                <td >:</td>
                <td className="p-2">{data.contact}</td>
              </tr>
              <tr>
                <td className="p-2">Groups</td>
                <td >:</td>
                <td className="p-2">{data.groupes}</td>
              </tr>
              <tr>
                <td className="p-2">Subjects</td>
                <td >:</td>
                <td className="p-2">{data.subjects}</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="right">
          
          <FontAwesomeIcon icon={faCircleXmark} size="2xl"  onClick={mt} className="btnClose"/>
         
          <div className="barr">
            <h3>Attendance</h3>
            <BarChartt />
          </div>
          <h3>Ratings</h3>
          <div className="piee">
          
            <PieOne />
            <PieOne />

          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Dashh;
