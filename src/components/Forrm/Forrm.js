import React, { useEffect, useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Forrmc.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar/Navbar";
import OtherFooter from "../Footer/OtherFooter";
import { Button } from "react-scroll";
import { CgWindows } from "react-icons/cg";
import UNGA from "../../data/UNGA";
import UNSC from "../../data/UNSC";

const Formc = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [institute, setInstitute] = useState("NIT DURGAPUR");
  const [committee1, setComittee1] = useState("");
  const [preference1, setPreferences1] = useState("");
  const [committee2, setComittee2] = useState("");
  const [preference2, setPreferences2] = useState("");
  const [committee3, setComittee3] = useState("");
  const [preference3, setPreferences3] = useState("");
  const [experience, setExperience] = useState("");
  const [other, setOther] = useState("");
  const [roll, setRoll] = useState("");
  const [year, setYear] = useState("");

  const postData = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:5000/api/register", {
        // headers: {
        //   'Content-Type': 'application/json'
        // },

        name: name,
        email: email,
        phoneNumber: phoneNumber,
        institute: institute,
        committee1: committee1,
        preference1: preference1,
        committee2: committee2,
        preference2: preference2,
        committee3: committee3,
        preference3: preference3,
        experience: experience,
        year: year,
        roll: roll,
      })
      .then((res) => {
        console.log(res);
        console.log("submit");
        toast.success("Submitted.");
        window.location("/");
        //window.location.replace = "/";
      })

      .catch((err) => {
        console.log("hello");
        console.log(err);
      });
    toast.error("Please enter correct credentials");
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      Name: "",
      email: "",
      phone: "",
      institution: "NIT DURGAPUR",
      committee1: "",
      preference1: "",
      committee2: "",
      preference2: "",
      committee3: "",
      preference3: "",
      experience: "",
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .max(15, "Must atleast be of 15 Characters")
        .required("required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string().matches(phoneRegExp, "Phone Number not valid"),
      experience: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const [checkI, setCheckI] = useState(true);

  //   const checkl = async (e)=>{
  //       setCheckI(true),
  //       setCheckII(false)
  //   }
  //   const checkl2 = async (e)=>{
  //     setCheckII(true),
  //     setCheckI(false)
  // }

  return (
    <div>
      <div class="container">
        <div class="login-container">
          <input
            id="item-1"
            type="radio"
            name="item"
            class="sign-in"
            checked={checkI}
            onClick={() => setCheckI(true)}
          />
          <label for="item-1" class="item">
            Delegate
          </label>
          <input
            id="item-2"
            type="radio"
            name="item"
            class="sign-up"
            checked={!checkI}
            onClick={() => setCheckI(false)}
          />
          <label for="item-2" class="item">
            IP
          </label>
          <div class="login-form">
            <form class="sign-in-htm" onSubmit={formik.handleSubmit}>
              <div class="group">
                <label for="firstname">Name</label>
                <input
                  placeholder="Name"
                  name="Name"
                  id="Name"
                  type="text"
                  class="input"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                {formik.touched.Name && formik.errors.Name ? (
                  <div>{formik.errors.Name}</div>
                ) : null}
              </div>
              <div class="group">
                <label for="lastname">E-mail</label>
                <input
                  placeholder="Email"
                  name="email"
                  className="input"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  value={email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </div>
              <div class="group">
                <label for="lastname">Phone Number</label>
                <input
                  placeholder="Phone"
                  name="phone"
                  className="input"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  value={phoneNumber}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div>{formik.errors.phone}</div>
                ) : null}
              </div>
              <div className="group">
                <label for="lastname">Institution</label>

                <select
                  placeholder="Institution"
                  type="text"
                  className="input"
                  name="institution"
                  onChange={(e) => {
                    setInstitute(e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  value={institute}
                >
                  <option value="NIT DURGAPUR">NIT DURGAPUR</option>
                  <option value={other}>Other Institutions</option>
                </select>
              </div>
              <div
                class="group"
                style={
                  institute == "NIT DURGAPUR"
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <label for="lastname">School/College</label>
                <input
                  placeholder="School/College"
                  name="email"
                  value={institute}
                  onChange={(e) => {
                    setInstitute(e.target.value);
                  }}
                  id="pass"
                  type="text"
                  class="input"
                  data-type="text"
                />
              </div>
              <div
                class="group"
                style={
                  institute == "NIT DURGAPUR"
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <label for="lastname">Roll Number</label>
                <input
                  placeholder="Roll Number"
                  name="email"
                  value={roll}
                  onChange={(e) => {
                    setRoll(e.target.value);
                  }}
                  id="pass"
                  type="text"
                  class="input"
                  data-type="text"
                />
              </div>
              <div
                className="group"
                style={
                  institute == "NIT DURGAPUR"
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <label for="lastname">Year</label>

                <select
                  placeholder="Institution"
                  type="text"
                  className="input"
                  name="institution"
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  value={year}
                >
                  <option value="2023">First</option>
                  <option value="other">other</option>
                </select>
              </div>

              <br></br>
              <h2>Preferences 1:</h2>
              <br></br>

              <div class="group">
                <label for="Committee">Committee</label>
                <select
                  className="input"
                  type="text"
                  name="committee1"
                  value={committee1}
                  onChange={(e) => {
                    setComittee1(e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                >
                  <option defaultValue="Select..">Select</option>
                  <option value="UNGA-DISEC">UNGA-DISEC</option>
                  <option value="UNGA-SPECPOL">UNGA_SPECPOL</option>
                  <option value="AIPPM">AIPPM</option>
                </select>
              </div>

              <div
                class="group"
                style={
                  committee1 == "" ? { display: "none" } : { display: "block" }
                }
              >
                <label for="lastname">
                  {committee1 == "AIPPM" ? "Personality" : "Country"}
                </label>
                <select
                  className="input"
                  type="text"
                  name="preference1"
                  value={preference1}
                  onChange={(e) => {
                    setPreferences1(e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                >
                  {committee1 == "UNGA-DISEC" ? (
                    <>
                      <option value="Islamic Emirate of Afghanistan">
                        Islamic Emirate of Afghanistan
                      </option>
                      <option value="Republic of Albania">
                        Republic of Albania
                      </option>
                      <option value="People's Democratic Republic of Algeria">
                        People's Democratic Republic of Algeria
                      </option>
                      <option value="Republic of Angola">
                        Republic of Angola
                      </option>
                      <option value="Argentine Republic">
                        Argentine Republic
                      </option>
                      <option value="Republic of Armenia">
                        Republic of Armenia
                      </option>
                      <option value="Commonwealth of Australia">
                        Commonwealth of Australia
                      </option>
                      <option value="Republic of Austria">
                        Republic of Austria
                      </option>
                      <option value="Republic of Azerbaijan">
                        Republic of Azerbaijan
                      </option>
                      <option value="Kingdom of Bahrain">
                        Kingdom of Bahrain
                      </option>
                      <option value="People's Republic of Bangladesh">
                        People's Republic of Bangladesh
                      </option>
                      <option value="Barbados">Barbados</option>
                      <option value="Republic of Belarus">
                        Republic of Belarus
                      </option>
                      <option value="Kingdom of Bhutan">
                        Kingdom of Bhutan
                      </option>
                      <option value="Federative Republic of Brazil">
                        Federative Republic of Brazil
                      </option>
                      <option value="Republic of Bulgaria">
                        Republic of Bulgaria
                      </option>
                      <option value="Republic of Burundi">
                        Republic of Burundi
                      </option>
                      <option value="Canada">Canada</option>
                      <option value="Republic of Chad">Republic of Chad</option>
                      <option value="Republic of Chile">
                        Republic of Chile
                      </option>
                      <option value="People's Republic of China (PRC)">
                        People's Republic of China (PRC)
                      </option>
                      <option value="Republic of Colombia">
                        Republic of Colombia
                      </option>
                      <option value="Republic of Côte d'Ivoire">
                        Republic of Côte d'Ivoire
                      </option>
                      <option value="Republic of Cuba">Republic of Cuba</option>
                      <option value="Republic of Cyprus">
                        Republic of Cyprus
                      </option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Democratic People's Republic of Korea (DPRK)">
                        Democratic People's Republic of Korea (DPRK)
                      </option>
                      <option value="Democratic Republic of the Congo">
                        Democratic Republic of the Congo
                      </option>
                      <option value="Republic of Djibouti">
                        Republic of Djibouti
                      </option>
                      <option value="Arab Republic of Egypt">
                        Arab Republic of Egypt
                      </option>
                      <option value="Republic of El Salvador">
                        Republic of El Salvador
                      </option>
                      <option value="State of Eritrea">State of Eritrea</option>
                      <option value="Kingdom of Eswatini">
                        Kingdom of Eswatini
                      </option>
                      <option value="Federal Democratic Republic of Ethiopia">
                        Federal Democratic Republic of Ethiopia
                      </option>
                      <option value="Republic of Fiji">Republic of Fiji</option>
                      <option value="French Republic">French Republic</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Federal Republic of Germany">
                        Federal Republic of Germany
                      </option>
                      <option value="Hellenic Republic(Greece)">
                        Hellenic Republic(Greece)
                      </option>
                      <option value="Republic of Haiti">
                        Republic of Haiti
                      </option>
                      <option value="Hungary">Hungary</option>
                      <option value="Republic of India">
                        Republic of India
                      </option>
                      <option value="Republic of Indonesia">
                        Republic of Indonesia
                      </option>
                      <option value="Islamic Republic of Iran">
                        Islamic Republic of Iran
                      </option>
                      <option value="Republic of Iraq">Republic of Iraq</option>
                      <option value="Republic of Ireland">
                        Republic of Ireland
                      </option>
                      <option value="State of Israel">State of Israel</option>
                      <option value="Italian Republic">Italian Republic</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Hashemite Kingdom of Jordan">
                        Hashemite Kingdom of Jordan
                      </option>
                      <option value="Republic of Kazakhstan">
                        Republic of Kazakhstan
                      </option>
                      <option value="State of Kuwait">State of Kuwait</option>
                      <option value="Kyrgyz Republic">Kyrgyz Republic</option>
                      <option value="Republic of Latvia">
                        Republic of Latvia
                      </option>
                      <option value="Republic of Lebanon">
                        Republic of Lebanon
                      </option>
                      <option value="State of Libya">State of Libya</option>
                      <option value="Republic of Madagascar">
                        Republic of Madagascar
                      </option>
                      <option value="Republic of Mauritius">
                        Republic of Mauritius
                      </option>
                      <option value="United Mexican States(Mexico)">
                        United Mexican States(Mexico)
                      </option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Kingdom of Morocco">
                        Kingdom of Morocco
                      </option>
                      <option value="Kingdom of the Netherlands">
                        Kingdom of the Netherlands
                      </option>
                      <option value="Realm of New Zealand">
                        Realm of New Zealand
                      </option>
                      <option value="Federal Republic of Nigeria">
                        Federal Republic of Nigeria
                      </option>
                      <option value="Kingdom of Norway">
                        Kingdom of Norway
                      </option>
                      <option value="Sultanate of Oman">
                        Sultanate of Oman
                      </option>
                      <option value="Islamic Republic of Pakistan">
                        Islamic Republic of Pakistan
                      </option>
                      <option value="Republic of Panama">
                        Republic of Panama
                      </option>
                      <option value="Republic of Peru">Republic of Peru</option>
                      <option value="Republic of the Philippines">
                        Republic of the Philippines
                      </option>
                      <option value="Republic of Poland">
                        Republic of Poland
                      </option>
                      <option value="Portuguese Republic">
                        Portuguese Republic
                      </option>
                      <option value="State of Qatar">State of Qatar</option>
                      <option value="Republic of Korea(ROK)">
                        Republic of Korea(ROK)
                      </option>
                      <option value="Russian Federation">
                        Russian Federation
                      </option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Independent State of Samoa">
                        Independent State of Samoa
                      </option>
                      <option value="Kingdom of Saudi Arabia (KSA)">
                        Kingdom of Saudi Arabia (KSA)
                      </option>
                      <option value="Republic of Senegal">
                        Republic of Senegal
                      </option>
                      <option value="Republic of Seychelles">
                        Republic of Seychelles
                      </option>
                      <option value="Republic of Singapore">
                        Republic of Singapore
                      </option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Federal Republic of Somalia">
                        Federal Republic of Somalia
                      </option>
                      <option value="Republic of South Africa (RSA)">
                        Republic of South Africa (RSA)
                      </option>
                      <option value="Kingdom of Spain">Kingdom of Spain</option>
                      <option value="Republic of the Sudan">
                        Republic of the Sudan
                      </option>
                      <option value="Swiss Confederation">
                        Swiss Confederation
                      </option>
                      <option value="Syrian Arab Republic">
                        Syrian Arab Republic
                      </option>
                      <option value="Republic of China (ROC)">
                        Republic of China (ROC)
                      </option>
                      <option value="Kingdom of Thailand">
                        Kingdom of Thailand
                      </option>
                      <option value="Republic of Türkiye">
                        Republic of Türkiye
                      </option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom of Great Britain and Northern Ireland">
                        United Kingdom of Great Britain and Northern Ireland
                      </option>
                      <option value="United States of America">
                        United States of America
                      </option>
                      <option value="Bolivarian Republic of Venezuela">
                        Bolivarian Republic of Venezuela
                      </option>
                      <option value="Socialist Republic of Vietnam">
                        Socialist Republic of Vietnam
                      </option>
                      <option value="Republic of Yemen">
                        Republic of Yemen
                      </option>
                    </>
                  ) : (
                    <>
                      <option value="select...">Select..</option>
                    </>
                  )}
                  {committee1 == "UNGA-SPECPOL" ? (
                    <>
                      <option value="State of Israel">State of Israel</option>
                      <option value="State of Palestine">
                        State of Palestine
                      </option>
                      <option value="United States of America">
                        United States of America
                      </option>
                      <option value="French Republic">French Republic</option>
                      <option value="Federal Republic of Germany">
                        Federal Republic of Germany
                      </option>
                      <option value="State of Kuwait">State of Kuwait</option>
                      <option value="Republic of Lebanon">
                        Republic of Lebanon
                      </option>
                      <option value="Syrian Arab Republic">
                        Syrian Arab Republic
                      </option>
                      <option value="Hashemite Kingdom of Jordan">
                        Hashemite Kingdom of Jordan
                      </option>
                      <option value="Arab Republic of Egypt">
                        Arab Republic of Egypt
                      </option>
                      <option value="Kingdom of Saudi Arabia">
                        Kingdom of Saudi Arabia
                      </option>
                      <option value="Republic of Iraq">Republic of Iraq</option>
                      <option value="Islamic Republic of Iran">
                        Islamic Republic of Iran
                      </option>
                      <option value="Republic of India">
                        Republic of India
                      </option>
                      <option value="People’s Republic of China">
                        People’s Republic of China
                      </option>
                      <option value="Russian Federation">
                        Russian Federation
                      </option>
                      <option value="Republic of Indonesia">
                        Republic of Indonesia
                      </option>
                      <option value="Plurinational State of Bolivia">
                        Plurinational State of Bolivia
                      </option>
                      <option value="Republic of Chile">
                        Republic of Chile
                      </option>
                      <option value="Republic of Ecuador">
                        Republic of Ecuador
                      </option>
                      <option value="Federal Democratic Republic of Ethiopia">
                        Federal Democratic Republic of Ethiopia
                      </option>
                      <option value="Republic of Tunisia">
                        Republic of Tunisia
                      </option>
                      <option value="United Republic of Tanzania">
                        United Republic of Tanzania
                      </option>
                      <option value="Bolivarian Republic of Venezuela">
                        Bolivarian Republic of Venezuela
                      </option>
                      <option value="Republic of Cuba">Republic of Cuba</option>
                      <option value="Republic of the Congo">
                        Republic of the Congo
                      </option>
                      <option value="Independent State of Papua New Guinea">
                        Independent State of Papua New Guinea
                      </option>
                      <option value="Republic of Fiji">Republic of Fiji</option>
                      <option value="Commonwealth of Dominica">
                        Commonwealth of Dominica
                      </option>
                      <option value="Islamic Emirate of Afghanistan">
                        Islamic Emirate of Afghanistan
                      </option>
                      <option value="Commonwealth of Australia">
                        Commonwealth of Australia
                      </option>
                      <option value="Federative Republic of Brazil">
                        Federative Republic of Brazil
                      </option>
                      <option value="Democratic People's Republic of Korea">
                        Democratic People's Republic of Korea
                      </option>
                      <option value="Republic of Indonesia">
                        Republic of Indonesia
                      </option>
                      <option value="Canada">Canada</option>
                      <option value="Kingdom of Belgium">
                        Kingdom of Belgium
                      </option>
                      <option value="Republic of Italy">
                        Republic of Italy
                      </option>
                      <option value="United Mexican States">
                        United Mexican States
                      </option>
                      <option value="Republic of Belarus">
                        Republic of Belarus
                      </option>
                      <option value="People's Republic of Bangladesh">
                        People's Republic of Bangladesh
                      </option>
                      <option value="Islamic Republic of Pakistan">
                        Islamic Republic of Pakistan
                      </option>
                      <option value="Realm of New Zealand">
                        Realm of New Zealand
                      </option>
                      <option value="Japan">Japan</option>
                      <option value="Republic of Singapore">
                        Republic of Singapore
                      </option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="Republic of Austria">
                        Republic of Austria
                      </option>
                      <option value="Kingdom of Bhutan">
                        Kingdom of Bhutan
                      </option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Republic of Mauritius">
                        Republic of Mauritius
                      </option>
                      <option value="State of Qatar">State of Qatar</option>
                      <option value="Kingdom of Thailand">
                        Kingdom of Thailand
                      </option>
                      <option value="Republic of the Philippines">
                        Republic of the Philippines
                      </option>
                      <option value="Kingdom of Norway">
                        Kingdom of Norway
                      </option>
                      <option value="Kingdom of Spain">Kingdom of Spain</option>
                      <option value="State of Kuwait">State of Kuwait</option>
                      <option value="Argentine Republic">
                        Argentine Republic
                      </option>
                      <option value="Republic of Bulgaria">
                        Republic of Bulgaria
                      </option>
                      <option value="Swiss Confederation">
                        Swiss Confederation
                      </option>
                      <option value="United Kingdom of Great Britain and Northern Ireland">
                        United Kingdom of Great Britain and Northern Ireland
                      </option>
                      <option value="Republic of Poland">
                        Republic of Poland
                      </option>
                    </>
                  ) : (
                    <></>
                  )}
                  {committee1 == "AIPPM" ? (
                    <>
                      <option value="Narendra Modi">Narendra Modi</option>
                      <option value="Arun Jaitley">Arun Jaitley</option>
                      <option value="B S Yeddurappa">B S Yeddurappa</option>
                      <option value="Anurag Thakur">Anurag Thakur</option>
                      <option value="LK Advani">LK Advani</option>
                      <option value="Hemanth Biswas Sharma">
                        Hemanth Biswas Sharma
                      </option>
                      <option value="Amit Shah">Amit Shah</option>
                      <option value="Devendra Fadnavis">
                        Devendra Fadnavis
                      </option>
                      <option value="Smruti Irani">Smruti Irani</option>
                      <option value="Narotam Mishra">Narotam Mishra</option>
                      <option value="Jyotiraditya Scindhi">
                        Jyotiraditya Scindhi
                      </option>
                      <option value="Sibraj Singh">Sibraj Singh</option>
                      <option value="Kapil Mishra">Kapil Mishra</option>
                      <option value="Dharmendra Pradhan">
                        Dharmendra Pradhan
                      </option>
                      <option value="Jp Nadda">Jp Nadda</option>
                      <option value="Yogi Adityanath">Yogi Adityanath</option>
                      <option value="Ravi Shankar Prasad">
                        Ravi Shankar Prasad
                      </option>
                      <option value="Kiran Rijuju">Kiran Rijuju</option>
                      <option value="Gaurav Bhatia">Gaurav Bhatia</option>
                      <option value="Giriraj Singh">Giriraj Singh</option>
                      <option value="Nalin Kohli">Nalin Kohli</option>
                      <option value="Harsh Vardhan">Harsh Vardhan</option>
                      <option value="Murli Manohar Joshi">
                        Murli Manohar Joshi
                      </option>
                      <option value="Rajnath Singh">Rajnath Singh</option>
                      <option value="Rajyavardhan Singh Rathore">
                        Rajyavardhan Singh Rathore
                      </option>
                      <option value="Shivraj Singh Chouhan">
                        Shivraj Singh Chouhan
                      </option>
                      <option value="Subramanian Swamy">
                        Subramanian Swamy
                      </option>
                      <option value="Yashwant Sinha">Yashwant Sinha</option>
                      <option value="Piyush Goyal">Piyush Goyal</option>
                      <option value="Rajnath Singh">Rajnath Singh</option>
                      <option value="V K Singh">V K Singh</option>
                      <option value="Vijay Goyal">Vijay Goyal</option>
                      <option value="Bhupender Yadav">Bhupender Yadav</option>
                      <option value="Rameswar Teli">Rameswar Teli</option>
                      <option value="Santosh Gangwar">Santosh Gangwar</option>
                      <option value="Rahul Gandhi">Rahul Gandhi</option>
                      <option value="A K Antony">A K Antony</option>
                      <option value="Priyanka Gandhi">Priyanka Gandhi</option>
                      <option value="Ashok Gehlot">Ashok Gehlot</option>
                      <option value="Sachin Pilot">Sachin Pilot</option>
                      <option value="Digvijay Singh">Digvijay Singh</option>
                      <option value="Abhishek Manusinghvi">
                        Abhishek Manusinghvi
                      </option>
                      <option value="Sonia Gandhi">Sonia Gandhi</option>
                      <option value="Bhupendra Singh Baghela">
                        {" "}
                        Bhupendra Singh Baghela{" "}
                      </option>
                      <option value="Kamal Nath">Kamal Nath</option>
                      <option value="Salman Khurshid">Salman Khurshid</option>
                      <option value="Supriya Srinet">Supriya Srinet</option>
                      <option value="Hardik Patel">Hardik Patel</option>
                      <option value="Sashi Tharoor">Sashi Tharoor</option>
                      <option value="Ahmad Patel">Ahmad Patel</option>
                      <option value="Anand Sharma">Anand Sharma</option>
                      <option value="Kamak Nath">Kamak Nath</option>
                      <option value="Kapil Sibal">Kapil Sibal</option>
                      <option value="P Chidambaram">P Chidambaram</option>
                      <option value="Sanjay Raut">Sanjay Raut</option>
                      <option value="Uddhav Thackeray">Uddhav Thackeray</option>
                      <option value="Aditya Thackeray">Aditya Thackeray</option>
                      <option value="Mamta Bannerjee">Mamta Bannerjee</option>
                      <option value="Abhishek Banerjee">
                        Abhishek Banerjee
                      </option>
                      <option value="Derek O'Brian">Derek O'Brian</option>
                      <option value="SHARAD  PAWAR">SHARAD PAWAR</option>
                      <option value="Nitish Kumar">Nitish Kumar</option>
                      <option value="Akhilesh Yadav">Akhilesh Yadav</option>
                      <option value="Mulayam Singh Yadav">
                        Mulayam Singh Yadav
                      </option>
                      <option value="Tejasvi Yadav">Tejasvi Yadav</option>
                      <option value="Arvind Kejriwal"></option>
                      <option value="Raghav Chadha">Raghav Chadha</option>
                      <option value="Manish Sishodia">Manish Sishodia</option>
                      <option value="MK Stalin">MK Stalin</option>
                      <option value="Asaduddin Owaisi">Asaduddin Owaisi</option>
                      <option value="E K Palaniswami">E K Palaniswami</option>
                      <option value="O Panneerselvam">O Panneerselvam</option>
                      <option value="H D Beve Gowda">H D Beve Gowda</option>
                      <option value="HD Kumaraswamy">HD Kumaraswamy</option>
                      <option value="N Chandrsbabu Naidu">
                        N Chandrsbabu Naidu
                      </option>
                      <option value="Pinarayi Vijayan">Pinarayi Vijayan</option>
                      <option value="Sitaram Yechury">Sitaram Yechury</option>
                      <option value="Raj Thackeray">Raj Thackeray</option>
                      <option value="Ram Vilas Paswan">Ram Vilas Paswan</option>
                      <option value="Chirag Paswan">Chirag Paswan</option>
                      <option value="Mayawati"></option>
                      <option value="Nodeep Kaur">Nodeep Kaur</option>
                      <option value="Aruna Roy">Aruna Roy</option>
                      <option value="Anannya Bhattacharjee">
                        Anannya Bhattacharjee
                      </option>
                      <option value="Shanta Sinha">Shanta Sinha</option>
                      <option value="Sunitha Krishnan">Sunitha Krishnan</option>
                      <option value="Nalini Jameela">Nalini Jameela</option>
                      <option value="Ruchira Gupta">Ruchira Gupta</option>
                      <option value="Ashok Row Kavi">Ashok Row Kavi</option>
                      <option value="Gopi Shankar Madurai">
                        Gopi Shankar Madurai
                      </option>
                    </>
                  ) : (
                    <></>
                  )}
                </select>
              </div>
              <br></br>
              <h2>Preferences 2:</h2>
              <br></br>
              <div className="group">
                <label for="lastname">Committee</label>
                <select
                  className="input"
                  type="text"
                  name="committee2"
                  onChange={(e) => {
                    setComittee2(e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  value={committee2}
                >
                  <option defaultValue={"Select"}>Select</option>
                  <option
                    value="UNGA-DISEC"
                    style={
                      committee1 == "UNGA-DISEC"
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    UNGA-DISEC
                  </option>
                  <option
                    value="UNGA-SPECPOL"
                    style={
                      committee1 == "UNGA-SPECPOL"
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    UNGA-SPECPOL
                  </option>
                  <option
                    value="AIPPM"
                    style={
                      committee1 == "AIPPM"
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    AIPPM
                  </option>
                </select>
              </div>
              <div
                class="group"
                style={
                  committee1 == "" ? { display: "none" } : { display: "block" }
                }
              >
                <label for="lastname">
                  {committee2 == "AIPPM" ? "Personality" : "Country"}
                </label>
                <select
                  className="input"
                  name="preference2"
                  type="text"
                  value={preference2}
                  onChange={(e) => {
                    setPreferences2(e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                >
                  {committee2 == "UNGA-DISEC" ? (
                    <>
                      <option value="Islamic Emirate of Afghanistan">
                        Islamic Emirate of Afghanistan
                      </option>
                      <option value="Republic of Albania">
                        Republic of Albania
                      </option>
                      <option value="People's Democratic Republic of Algeria">
                        People's Democratic Republic of Algeria
                      </option>
                      <option value="Republic of Angola">
                        Republic of Angola
                      </option>
                      <option value="Argentine Republic">
                        Argentine Republic
                      </option>
                      <option value="Republic of Armenia">
                        Republic of Armenia
                      </option>
                      <option value="Commonwealth of Australia">
                        Commonwealth of Australia
                      </option>
                      <option value="Republic of Austria">
                        Republic of Austria
                      </option>
                      <option value="Republic of Azerbaijan">
                        Republic of Azerbaijan
                      </option>
                      <option value="Kingdom of Bahrain">
                        Kingdom of Bahrain
                      </option>
                      <option value="People's Republic of Bangladesh">
                        People's Republic of Bangladesh
                      </option>
                      <option value="Barbados">Barbados</option>
                      <option value="Republic of Belarus">
                        Republic of Belarus
                      </option>
                      <option value="Kingdom of Bhutan">
                        Kingdom of Bhutan
                      </option>
                      <option value="Federative Republic of Brazil">
                        Federative Republic of Brazil
                      </option>
                      <option value="Republic of Bulgaria">
                        Republic of Bulgaria
                      </option>
                      <option value="Republic of Burundi">
                        Republic of Burundi
                      </option>
                      <option value="Canada">Canada</option>
                      <option value="Republic of Chad">Republic of Chad</option>
                      <option value="Republic of Chile">
                        Republic of Chile
                      </option>
                      <option value="People's Republic of China (PRC)">
                        People's Republic of China (PRC)
                      </option>
                      <option value="Republic of Colombia">
                        Republic of Colombia
                      </option>
                      <option value="Republic of Côte d'Ivoire">
                        Republic of Côte d'Ivoire
                      </option>
                      <option value="Republic of Cuba">Republic of Cuba</option>
                      <option value="Republic of Cyprus">
                        Republic of Cyprus
                      </option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Democratic People's Republic of Korea (DPRK)">
                        Democratic People's Republic of Korea (DPRK)
                      </option>
                      <option value="Democratic Republic of the Congo">
                        Democratic Republic of the Congo
                      </option>
                      <option value="Republic of Djibouti">
                        Republic of Djibouti
                      </option>
                      <option value="Arab Republic of Egypt">
                        Arab Republic of Egypt
                      </option>
                      <option value="Republic of El Salvador">
                        Republic of El Salvador
                      </option>
                      <option value="State of Eritrea">State of Eritrea</option>
                      <option value="Kingdom of Eswatini">
                        Kingdom of Eswatini
                      </option>
                      <option value="Federal Democratic Republic of Ethiopia">
                        Federal Democratic Republic of Ethiopia
                      </option>
                      <option value="Republic of Fiji">Republic of Fiji</option>
                      <option value="French Republic">French Republic</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Federal Republic of Germany">
                        Federal Republic of Germany
                      </option>
                      <option value="Hellenic Republic(Greece)">
                        Hellenic Republic(Greece)
                      </option>
                      <option value="Republic of Haiti">
                        Republic of Haiti
                      </option>
                      <option value="Hungary">Hungary</option>
                      <option value="Republic of India">
                        Republic of India
                      </option>
                      <option value="Republic of Indonesia">
                        Republic of Indonesia
                      </option>
                      <option value="Islamic Republic of Iran">
                        Islamic Republic of Iran
                      </option>
                      <option value="Republic of Iraq">Republic of Iraq</option>
                      <option value="Republic of Ireland">
                        Republic of Ireland
                      </option>
                      <option value="State of Israel">State of Israel</option>
                      <option value="Italian Republic">Italian Republic</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Hashemite Kingdom of Jordan">
                        Hashemite Kingdom of Jordan
                      </option>
                      <option value="Republic of Kazakhstan">
                        Republic of Kazakhstan
                      </option>
                      <option value="State of Kuwait">State of Kuwait</option>
                      <option value="Kyrgyz Republic">Kyrgyz Republic</option>
                      <option value="Republic of Latvia">
                        Republic of Latvia
                      </option>
                      <option value="Republic of Lebanon">
                        Republic of Lebanon
                      </option>
                      <option value="State of Libya">State of Libya</option>
                      <option value="Republic of Madagascar">
                        Republic of Madagascar
                      </option>
                      <option value="Republic of Mauritius">
                        Republic of Mauritius
                      </option>
                      <option value="United Mexican States(Mexico)">
                        United Mexican States(Mexico)
                      </option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Kingdom of Morocco">
                        Kingdom of Morocco
                      </option>
                      <option value="Kingdom of the Netherlands">
                        Kingdom of the Netherlands
                      </option>
                      <option value="Realm of New Zealand">
                        Realm of New Zealand
                      </option>
                      <option value="Federal Republic of Nigeria">
                        Federal Republic of Nigeria
                      </option>
                      <option value="Kingdom of Norway">
                        Kingdom of Norway
                      </option>
                      <option value="Sultanate of Oman">
                        Sultanate of Oman
                      </option>
                      <option value="Islamic Republic of Pakistan">
                        Islamic Republic of Pakistan
                      </option>
                      <option value="Republic of Panama">
                        Republic of Panama
                      </option>
                      <option value="Republic of Peru">Republic of Peru</option>
                      <option value="Republic of the Philippines">
                        Republic of the Philippines
                      </option>
                      <option value="Republic of Poland">
                        Republic of Poland
                      </option>
                      <option value="Portuguese Republic">
                        Portuguese Republic
                      </option>
                      <option value="State of Qatar">State of Qatar</option>
                      <option value="Republic of Korea(ROK)">
                        Republic of Korea(ROK)
                      </option>
                      <option value="Russian Federation">
                        Russian Federation
                      </option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Independent State of Samoa">
                        Independent State of Samoa
                      </option>
                      <option value="Kingdom of Saudi Arabia (KSA)">
                        Kingdom of Saudi Arabia (KSA)
                      </option>
                      <option value="Republic of Senegal">
                        Republic of Senegal
                      </option>
                      <option value="Republic of Seychelles">
                        Republic of Seychelles
                      </option>
                      <option value="Republic of Singapore">
                        Republic of Singapore
                      </option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Federal Republic of Somalia">
                        Federal Republic of Somalia
                      </option>
                      <option value="Republic of South Africa (RSA)">
                        Republic of South Africa (RSA)
                      </option>
                      <option value="Kingdom of Spain">Kingdom of Spain</option>
                      <option value="Republic of the Sudan">
                        Republic of the Sudan
                      </option>
                      <option value="Swiss Confederation">
                        Swiss Confederation
                      </option>
                      <option value="Syrian Arab Republic">
                        Syrian Arab Republic
                      </option>
                      <option value="Republic of China (ROC)">
                        Republic of China (ROC)
                      </option>
                      <option value="Kingdom of Thailand">
                        Kingdom of Thailand
                      </option>
                      <option value="Republic of Türkiye">
                        Republic of Türkiye
                      </option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom of Great Britain and Northern Ireland">
                        United Kingdom of Great Britain and Northern Ireland
                      </option>
                      <option value="United States of America">
                        United States of America
                      </option>
                      <option value="Bolivarian Republic of Venezuela">
                        Bolivarian Republic of Venezuela
                      </option>
                      <option value="Socialist Republic of Vietnam">
                        Socialist Republic of Vietnam
                      </option>
                      <option value="Republic of Yemen">
                        Republic of Yemen
                      </option>
                    </>
                  ) : (
                    <>
                      <option value="select...">Select..</option>
                    </>
                  )}

                  {committee2 == "UNGA-SPECPOL" ? (
                    <>
                      <option value="State of Israel">State of Israel</option>
                      <option value="State of Palestine">
                        State of Palestine
                      </option>
                      <option value="United States of America">
                        United States of America
                      </option>
                      <option value="French Republic">French Republic</option>
                      <option value="Federal Republic of Germany">
                        Federal Republic of Germany
                      </option>
                      <option value="State of Kuwait">State of Kuwait</option>
                      <option value="Republic of Lebanon">
                        Republic of Lebanon
                      </option>
                      <option value="Syrian Arab Republic">
                        Syrian Arab Republic
                      </option>
                      <option value="Hashemite Kingdom of Jordan">
                        Hashemite Kingdom of Jordan
                      </option>
                      <option value="Arab Republic of Egypt">
                        Arab Republic of Egypt
                      </option>
                      <option value="Kingdom of Saudi Arabia">
                        Kingdom of Saudi Arabia
                      </option>
                      <option value="Republic of Iraq">Republic of Iraq</option>
                      <option value="Islamic Republic of Iran">
                        Islamic Republic of Iran
                      </option>
                      <option value="Republic of India">
                        Republic of India
                      </option>
                      <option value="People’s Republic of China">
                        People’s Republic of China
                      </option>
                      <option value="Russian Federation">
                        Russian Federation
                      </option>
                      <option value="Republic of Indonesia">
                        Republic of Indonesia
                      </option>
                      <option value="Plurinational State of Bolivia">
                        Plurinational State of Bolivia
                      </option>
                      <option value="Republic of Chile">
                        Republic of Chile
                      </option>
                      <option value="Republic of Ecuador">
                        Republic of Ecuador
                      </option>
                      <option value="Federal Democratic Republic of Ethiopia">
                        Federal Democratic Republic of Ethiopia
                      </option>
                      <option value="Republic of Tunisia">
                        Republic of Tunisia
                      </option>
                      <option value="United Republic of Tanzania">
                        United Republic of Tanzania
                      </option>
                      <option value="Bolivarian Republic of Venezuela">
                        Bolivarian Republic of Venezuela
                      </option>
                      <option value="Republic of Cuba">Republic of Cuba</option>
                      <option value="Republic of the Congo">
                        Republic of the Congo
                      </option>
                      <option value="Independent State of Papua New Guinea">
                        Independent State of Papua New Guinea
                      </option>
                      <option value="Republic of Fiji">Republic of Fiji</option>
                      <option value="Commonwealth of Dominica">
                        Commonwealth of Dominica
                      </option>
                      <option value="Islamic Emirate of Afghanistan">
                        Islamic Emirate of Afghanistan
                      </option>
                      <option value="Commonwealth of Australia">
                        Commonwealth of Australia
                      </option>
                      <option value="Federative Republic of Brazil">
                        Federative Republic of Brazil
                      </option>
                      <option value="Democratic People's Republic of Korea">
                        Democratic People's Republic of Korea
                      </option>
                      <option value="Republic of Indonesia">
                        Republic of Indonesia
                      </option>
                      <option value="Canada">Canada</option>
                      <option value="Kingdom of Belgium">
                        Kingdom of Belgium
                      </option>
                      <option value="Republic of Italy">
                        Republic of Italy
                      </option>
                      <option value="United Mexican States">
                        United Mexican States
                      </option>
                      <option value="Republic of Belarus">
                        Republic of Belarus
                      </option>
                      <option value="People's Republic of Bangladesh">
                        People's Republic of Bangladesh
                      </option>
                      <option value="Islamic Republic of Pakistan">
                        Islamic Republic of Pakistan
                      </option>
                      <option value="Realm of New Zealand">
                        Realm of New Zealand
                      </option>
                      <option value="Japan">Japan</option>
                      <option value="Republic of Singapore">
                        Republic of Singapore
                      </option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="Republic of Austria">
                        Republic of Austria
                      </option>
                      <option value="Kingdom of Bhutan">
                        Kingdom of Bhutan
                      </option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Republic of Mauritius">
                        Republic of Mauritius
                      </option>
                      <option value="State of Qatar">State of Qatar</option>
                      <option value="Kingdom of Thailand">
                        Kingdom of Thailand
                      </option>
                      <option value="Republic of the Philippines">
                        Republic of the Philippines
                      </option>
                      <option value="Kingdom of Norway">
                        Kingdom of Norway
                      </option>
                      <option value="Kingdom of Spain">Kingdom of Spain</option>
                      <option value="State of Kuwait">State of Kuwait</option>
                      <option value="Argentine Republic">
                        Argentine Republic
                      </option>
                      <option value="Republic of Bulgaria">
                        Republic of Bulgaria
                      </option>
                      <option value="Swiss Confederation">
                        Swiss Confederation
                      </option>
                      <option value="United Kingdom of Great Britain and Northern Ireland">
                        United Kingdom of Great Britain and Northern Ireland
                      </option>
                      <option value="Republic of Poland">
                        Republic of Poland
                      </option>
                    </>
                  ) : (
                    <></>
                  )}
                  {committee2 == "AIPPM" ? (
                    <>
                      <option value="Narendra Modi">Narendra Modi</option>
                      <option value="Arun Jaitley">Arun Jaitley</option>
                      <option value="B S Yeddurappa">B S Yeddurappa</option>
                      <option value="Anurag Thakur">Anurag Thakur</option>
                      <option value="LK Advani">LK Advani</option>
                      <option value="Hemanth Biswas Sharma">
                        Hemanth Biswas Sharma
                      </option>
                      <option value="Amit Shah">Amit Shah</option>
                      <option value="Devendra Fadnavis">
                        Devendra Fadnavis
                      </option>
                      <option value="Smruti Irani">Smruti Irani</option>
                      <option value="Narotam Mishra">Narotam Mishra</option>
                      <option value="Jyotiraditya Scindhi">
                        Jyotiraditya Scindhi
                      </option>
                      <option value="Sibraj Singh">Sibraj Singh</option>
                      <option value="Kapil Mishra">Kapil Mishra</option>
                      <option value="Dharmendra Pradhan">
                        Dharmendra Pradhan
                      </option>
                      <option value="Jp Nadda">Jp Nadda</option>
                      <option value="Yogi Adityanath">Yogi Adityanath</option>
                      <option value="Ravi Shankar Prasad">
                        Ravi Shankar Prasad
                      </option>
                      <option value="Kiran Rijuju">Kiran Rijuju</option>
                      <option value="Gaurav Bhatia">Gaurav Bhatia</option>
                      <option value="Giriraj Singh">Giriraj Singh</option>
                      <option value="Nalin Kohli">Nalin Kohli</option>
                      <option value="Harsh Vardhan">Harsh Vardhan</option>
                      <option value="Murli Manohar Joshi">
                        Murli Manohar Joshi
                      </option>
                      <option value="Rajnath Singh">Rajnath Singh</option>
                      <option value="Rajyavardhan Singh Rathore">
                        Rajyavardhan Singh Rathore
                      </option>
                      <option value="Shivraj Singh Chouhan">
                        Shivraj Singh Chouhan
                      </option>
                      <option value="Subramanian Swamy">
                        Subramanian Swamy
                      </option>
                      <option value="Yashwant Sinha">Yashwant Sinha</option>
                      <option value="Piyush Goyal">Piyush Goyal</option>
                      <option value="Rajnath Singh">Rajnath Singh</option>
                      <option value="V K Singh">V K Singh</option>
                      <option value="Vijay Goyal">Vijay Goyal</option>
                      <option value="Bhupender Yadav">Bhupender Yadav</option>
                      <option value="Rameswar Teli">Rameswar Teli</option>
                      <option value="Santosh Gangwar">Santosh Gangwar</option>
                      <option value="Rahul Gandhi">Rahul Gandhi</option>
                      <option value="A K Antony">A K Antony</option>
                      <option value="Priyanka Gandhi">Priyanka Gandhi</option>
                      <option value="Ashok Gehlot">Ashok Gehlot</option>
                      <option value="Sachin Pilot">Sachin Pilot</option>
                      <option value="Digvijay Singh">Digvijay Singh</option>
                      <option value="Abhishek Manusinghvi">
                        Abhishek Manusinghvi
                      </option>
                      <option value="Sonia Gandhi">Sonia Gandhi</option>
                      <option value="Bhupendra Singh Baghela">
                        {" "}
                        Bhupendra Singh Baghela{" "}
                      </option>
                      <option value="Kamal Nath">Kamal Nath</option>
                      <option value="Salman Khurshid">Salman Khurshid</option>
                      <option value="Supriya Srinet">Supriya Srinet</option>
                      <option value="Hardik Patel">Hardik Patel</option>
                      <option value="Sashi Tharoor">Sashi Tharoor</option>
                      <option value="Ahmad Patel">Ahmad Patel</option>
                      <option value="Anand Sharma">Anand Sharma</option>
                      <option value="Kamak Nath">Kamak Nath</option>
                      <option value="Kapil Sibal">Kapil Sibal</option>
                      <option value="P Chidambaram">P Chidambaram</option>
                      <option value="Sanjay Raut">Sanjay Raut</option>
                      <option value="Uddhav Thackeray">Uddhav Thackeray</option>
                      <option value="Aditya Thackeray">Aditya Thackeray</option>
                      <option value="Mamta Bannerjee">Mamta Bannerjee</option>
                      <option value="Abhishek Banerjee">
                        Abhishek Banerjee
                      </option>
                      <option value="Derek O'Brian">Derek O'Brian</option>
                      <option value="SHARAD  PAWAR">SHARAD PAWAR</option>
                      <option value="Nitish Kumar">Nitish Kumar</option>
                      <option value="Akhilesh Yadav">Akhilesh Yadav</option>
                      <option value="Mulayam Singh Yadav">
                        Mulayam Singh Yadav
                      </option>
                      <option value="Tejasvi Yadav">Tejasvi Yadav</option>
                      <option value="Arvind Kejriwal"></option>
                      <option value="Raghav Chadha">Raghav Chadha</option>
                      <option value="Manish Sishodia">Manish Sishodia</option>
                      <option value="MK Stalin">MK Stalin</option>
                      <option value="Asaduddin Owaisi">Asaduddin Owaisi</option>
                      <option value="E K Palaniswami">E K Palaniswami</option>
                      <option value="O Panneerselvam">O Panneerselvam</option>
                      <option value="H D Beve Gowda">H D Beve Gowda</option>
                      <option value="HD Kumaraswamy">HD Kumaraswamy</option>
                      <option value="N Chandrsbabu Naidu">
                        N Chandrsbabu Naidu
                      </option>
                      <option value="Pinarayi Vijayan">Pinarayi Vijayan</option>
                      <option value="Sitaram Yechury">Sitaram Yechury</option>
                      <option value="Raj Thackeray">Raj Thackeray</option>
                      <option value="Ram Vilas Paswan">Ram Vilas Paswan</option>
                      <option value="Chirag Paswan">Chirag Paswan</option>
                      <option value="Mayawati"></option>
                      <option value="Nodeep Kaur">Nodeep Kaur</option>
                      <option value="Aruna Roy">Aruna Roy</option>
                      <option value="Anannya Bhattacharjee">
                        Anannya Bhattacharjee
                      </option>
                      <option value="Shanta Sinha">Shanta Sinha</option>
                      <option value="Sunitha Krishnan">Sunitha Krishnan</option>
                      <option value="Nalini Jameela">Nalini Jameela</option>
                      <option value="Ruchira Gupta">Ruchira Gupta</option>
                      <option value="Ashok Row Kavi">Ashok Row Kavi</option>
                      <option value="Gopi Shankar Madurai">
                        Gopi Shankar Madurai
                      </option>
                    </>
                  ) : (
                    <></>
                  )}
                </select>
              </div>
              <br></br>
              <h2>Preferences 3:</h2>
              <br></br>
              <div className="group">
                <label for="lastname">Committee</label>
                <select
                  className="input"
                  type="text"
                  name="committee3"
                  value={committee3}
                  onChange={(e) => {
                    setComittee3(e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                >
                  <option defaultValue={"Select"}>Select</option>
                  <option value="UNGA-DISEC">UNGA-DISEC</option>
                  <option value="UNGA-SPECPOL">UNGA_SPECPOL</option>
                  <option value="AIPPM">AIPPM</option>
                </select>
              </div>
              <div
                class="group"
                style={
                  committee1 == "" ? { display: "none" } : { display: "block" }
                }
              >
                <label for="lastname">
                  {committee1 == "AIPPM" ? "Personality" : "Country"}
                </label>
                <select
                  className="input"
                  name="preference2"
                  type="text"
                  value={preference3}
                  onChange={(e) => {
                    setPreferences3(e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                >
                  {committee3 == "UNGA-DISEC" ? (
                    <>
                      <option value="Islamic Emirate of Afghanistan">
                        Islamic Emirate of Afghanistan
                      </option>
                      <option value="Republic of Albania">
                        Republic of Albania
                      </option>
                      <option value="People's Democratic Republic of Algeria">
                        People's Democratic Republic of Algeria
                      </option>
                      <option value="Republic of Angola">
                        Republic of Angola
                      </option>
                      <option value="Argentine Republic">
                        Argentine Republic
                      </option>
                      <option value="Republic of Armenia">
                        Republic of Armenia
                      </option>
                      <option value="Commonwealth of Australia">
                        Commonwealth of Australia
                      </option>
                      <option value="Republic of Austria">
                        Republic of Austria
                      </option>
                      <option value="Republic of Azerbaijan">
                        Republic of Azerbaijan
                      </option>
                      <option value="Kingdom of Bahrain">
                        Kingdom of Bahrain
                      </option>
                      <option value="People's Republic of Bangladesh">
                        People's Republic of Bangladesh
                      </option>
                      <option value="Barbados">Barbados</option>
                      <option value="Republic of Belarus">
                        Republic of Belarus
                      </option>
                      <option value="Kingdom of Bhutan">
                        Kingdom of Bhutan
                      </option>
                      <option value="Federative Republic of Brazil">
                        Federative Republic of Brazil
                      </option>
                      <option value="Republic of Bulgaria">
                        Republic of Bulgaria
                      </option>
                      <option value="Republic of Burundi">
                        Republic of Burundi
                      </option>
                      <option value="Canada">Canada</option>
                      <option value="Republic of Chad">Republic of Chad</option>
                      <option value="Republic of Chile">
                        Republic of Chile
                      </option>
                      <option value="People's Republic of China (PRC)">
                        People's Republic of China (PRC)
                      </option>
                      <option value="Republic of Colombia">
                        Republic of Colombia
                      </option>
                      <option value="Republic of Côte d'Ivoire">
                        Republic of Côte d'Ivoire
                      </option>
                      <option value="Republic of Cuba">Republic of Cuba</option>
                      <option value="Republic of Cyprus">
                        Republic of Cyprus
                      </option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Democratic People's Republic of Korea (DPRK)">
                        Democratic People's Republic of Korea (DPRK)
                      </option>
                      <option value="Democratic Republic of the Congo">
                        Democratic Republic of the Congo
                      </option>
                      <option value="Republic of Djibouti">
                        Republic of Djibouti
                      </option>
                      <option value="Arab Republic of Egypt">
                        Arab Republic of Egypt
                      </option>
                      <option value="Republic of El Salvador">
                        Republic of El Salvador
                      </option>
                      <option value="State of Eritrea">State of Eritrea</option>
                      <option value="Kingdom of Eswatini">
                        Kingdom of Eswatini
                      </option>
                      <option value="Federal Democratic Republic of Ethiopia">
                        Federal Democratic Republic of Ethiopia
                      </option>
                      <option value="Republic of Fiji">Republic of Fiji</option>
                      <option value="French Republic">French Republic</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Federal Republic of Germany">
                        Federal Republic of Germany
                      </option>
                      <option value="Hellenic Republic(Greece)">
                        Hellenic Republic(Greece)
                      </option>
                      <option value="Republic of Haiti">
                        Republic of Haiti
                      </option>
                      <option value="Hungary">Hungary</option>
                      <option value="Republic of India">
                        Republic of India
                      </option>
                      <option value="Republic of Indonesia">
                        Republic of Indonesia
                      </option>
                      <option value="Islamic Republic of Iran">
                        Islamic Republic of Iran
                      </option>
                      <option value="Republic of Iraq">Republic of Iraq</option>
                      <option value="Republic of Ireland">
                        Republic of Ireland
                      </option>
                      <option value="State of Israel">State of Israel</option>
                      <option value="Italian Republic">Italian Republic</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Hashemite Kingdom of Jordan">
                        Hashemite Kingdom of Jordan
                      </option>
                      <option value="Republic of Kazakhstan">
                        Republic of Kazakhstan
                      </option>
                      <option value="State of Kuwait">State of Kuwait</option>
                      <option value="Kyrgyz Republic">Kyrgyz Republic</option>
                      <option value="Republic of Latvia">
                        Republic of Latvia
                      </option>
                      <option value="Republic of Lebanon">
                        Republic of Lebanon
                      </option>
                      <option value="State of Libya">State of Libya</option>
                      <option value="Republic of Madagascar">
                        Republic of Madagascar
                      </option>
                      <option value="Republic of Mauritius">
                        Republic of Mauritius
                      </option>
                      <option value="United Mexican States(Mexico)">
                        United Mexican States(Mexico)
                      </option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Kingdom of Morocco">
                        Kingdom of Morocco
                      </option>
                      <option value="Kingdom of the Netherlands">
                        Kingdom of the Netherlands
                      </option>
                      <option value="Realm of New Zealand">
                        Realm of New Zealand
                      </option>
                      <option value="Federal Republic of Nigeria">
                        Federal Republic of Nigeria
                      </option>
                      <option value="Kingdom of Norway">
                        Kingdom of Norway
                      </option>
                      <option value="Sultanate of Oman">
                        Sultanate of Oman
                      </option>
                      <option value="Islamic Republic of Pakistan">
                        Islamic Republic of Pakistan
                      </option>
                      <option value="Republic of Panama">
                        Republic of Panama
                      </option>
                      <option value="Republic of Peru">Republic of Peru</option>
                      <option value="Republic of the Philippines">
                        Republic of the Philippines
                      </option>
                      <option value="Republic of Poland">
                        Republic of Poland
                      </option>
                      <option value="Portuguese Republic">
                        Portuguese Republic
                      </option>
                      <option value="State of Qatar">State of Qatar</option>
                      <option value="Republic of Korea(ROK)">
                        Republic of Korea(ROK)
                      </option>
                      <option value="Russian Federation">
                        Russian Federation
                      </option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Independent State of Samoa">
                        Independent State of Samoa
                      </option>
                      <option value="Kingdom of Saudi Arabia (KSA)">
                        Kingdom of Saudi Arabia (KSA)
                      </option>
                      <option value="Republic of Senegal">
                        Republic of Senegal
                      </option>
                      <option value="Republic of Seychelles">
                        Republic of Seychelles
                      </option>
                      <option value="Republic of Singapore">
                        Republic of Singapore
                      </option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Federal Republic of Somalia">
                        Federal Republic of Somalia
                      </option>
                      <option value="Republic of South Africa (RSA)">
                        Republic of South Africa (RSA)
                      </option>
                      <option value="Kingdom of Spain">Kingdom of Spain</option>
                      <option value="Republic of the Sudan">
                        Republic of the Sudan
                      </option>
                      <option value="Swiss Confederation">
                        Swiss Confederation
                      </option>
                      <option value="Syrian Arab Republic">
                        Syrian Arab Republic
                      </option>
                      <option value="Republic of China (ROC)">
                        Republic of China (ROC)
                      </option>
                      <option value="Kingdom of Thailand">
                        Kingdom of Thailand
                      </option>
                      <option value="Republic of Türkiye">
                        Republic of Türkiye
                      </option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom of Great Britain and Northern Ireland">
                        United Kingdom of Great Britain and Northern Ireland
                      </option>
                      <option value="United States of America">
                        United States of America
                      </option>
                      <option value="Bolivarian Republic of Venezuela">
                        Bolivarian Republic of Venezuela
                      </option>
                      <option value="Socialist Republic of Vietnam">
                        Socialist Republic of Vietnam
                      </option>
                      <option value="Republic of Yemen">
                        Republic of Yemen
                      </option>
                    </>
                  ) : (
                    <>
                      <option value="select...">Select..</option>
                    </>
                  )}
                  {committee1 == "UNGA-SPECPOL" ? (
                    <>
                      <option value="State of Israel">State of Israel</option>
                      <option value="State of Palestine">
                        State of Palestine
                      </option>
                      <option value="United States of America">
                        United States of America
                      </option>
                      <option value="French Republic">French Republic</option>
                      <option value="Federal Republic of Germany">
                        Federal Republic of Germany
                      </option>
                      <option value="State of Kuwait">State of Kuwait</option>
                      <option value="Republic of Lebanon">
                        Republic of Lebanon
                      </option>
                      <option value="Syrian Arab Republic">
                        Syrian Arab Republic
                      </option>
                      <option value="Hashemite Kingdom of Jordan">
                        Hashemite Kingdom of Jordan
                      </option>
                      <option value="Arab Republic of Egypt">
                        Arab Republic of Egypt
                      </option>
                      <option value="Kingdom of Saudi Arabia">
                        Kingdom of Saudi Arabia
                      </option>
                      <option value="Republic of Iraq">Republic of Iraq</option>
                      <option value="Islamic Republic of Iran">
                        Islamic Republic of Iran
                      </option>
                      <option value="Republic of India">
                        Republic of India
                      </option>
                      <option value="People’s Republic of China">
                        People’s Republic of China
                      </option>
                      <option value="Russian Federation">
                        Russian Federation
                      </option>
                      <option value="Republic of Indonesia">
                        Republic of Indonesia
                      </option>
                      <option value="Plurinational State of Bolivia">
                        Plurinational State of Bolivia
                      </option>
                      <option value="Republic of Chile">
                        Republic of Chile
                      </option>
                      <option value="Republic of Ecuador">
                        Republic of Ecuador
                      </option>
                      <option value="Federal Democratic Republic of Ethiopia">
                        Federal Democratic Republic of Ethiopia
                      </option>
                      <option value="Republic of Tunisia">
                        Republic of Tunisia
                      </option>
                      <option value="United Republic of Tanzania">
                        United Republic of Tanzania
                      </option>
                      <option value="Bolivarian Republic of Venezuela">
                        Bolivarian Republic of Venezuela
                      </option>
                      <option value="Republic of Cuba">Republic of Cuba</option>
                      <option value="Republic of the Congo">
                        Republic of the Congo
                      </option>
                      <option value="Independent State of Papua New Guinea">
                        Independent State of Papua New Guinea
                      </option>
                      <option value="Republic of Fiji">Republic of Fiji</option>
                      <option value="Commonwealth of Dominica">
                        Commonwealth of Dominica
                      </option>
                      <option value="Islamic Emirate of Afghanistan">
                        Islamic Emirate of Afghanistan
                      </option>
                      <option value="Commonwealth of Australia">
                        Commonwealth of Australia
                      </option>
                      <option value="Federative Republic of Brazil">
                        Federative Republic of Brazil
                      </option>
                      <option value="Democratic People's Republic of Korea">
                        Democratic People's Republic of Korea
                      </option>
                      <option value="Republic of Indonesia">
                        Republic of Indonesia
                      </option>
                      <option value="Canada">Canada</option>
                      <option value="Kingdom of Belgium">
                        Kingdom of Belgium
                      </option>
                      <option value="Republic of Italy">
                        Republic of Italy
                      </option>
                      <option value="United Mexican States">
                        United Mexican States
                      </option>
                      <option value="Republic of Belarus">
                        Republic of Belarus
                      </option>
                      <option value="People's Republic of Bangladesh">
                        People's Republic of Bangladesh
                      </option>
                      <option value="Islamic Republic of Pakistan">
                        Islamic Republic of Pakistan
                      </option>
                      <option value="Realm of New Zealand">
                        Realm of New Zealand
                      </option>
                      <option value="Japan">Japan</option>
                      <option value="Republic of Singapore">
                        Republic of Singapore
                      </option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="Republic of Austria">
                        Republic of Austria
                      </option>
                      <option value="Kingdom of Bhutan">
                        Kingdom of Bhutan
                      </option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Republic of Mauritius">
                        Republic of Mauritius
                      </option>
                      <option value="State of Qatar">State of Qatar</option>
                      <option value="Kingdom of Thailand">
                        Kingdom of Thailand
                      </option>
                      <option value="Republic of the Philippines">
                        Republic of the Philippines
                      </option>
                      <option value="Kingdom of Norway">
                        Kingdom of Norway
                      </option>
                      <option value="Kingdom of Spain">Kingdom of Spain</option>
                      <option value="State of Kuwait">State of Kuwait</option>
                      <option value="Argentine Republic">
                        Argentine Republic
                      </option>
                      <option value="Republic of Bulgaria">
                        Republic of Bulgaria
                      </option>
                      <option value="Swiss Confederation">
                        Swiss Confederation
                      </option>
                      <option value="United Kingdom of Great Britain and Northern Ireland">
                        United Kingdom of Great Britain and Northern Ireland
                      </option>
                      <option value="Republic of Poland">
                        Republic of Poland
                      </option>
                    </>
                  ) : (
                    <></>
                  )}
                  {committee3 == "AIPPM" ? (
                    <>
                      <option value="Narendra Modi">Narendra Modi</option>
                      <option value="Arun Jaitley">Arun Jaitley</option>
                      <option value="B S Yeddurappa">B S Yeddurappa</option>
                      <option value="Anurag Thakur">Anurag Thakur</option>
                      <option value="LK Advani">LK Advani</option>
                      <option value="Hemanth Biswas Sharma">
                        Hemanth Biswas Sharma
                      </option>
                      <option value="Amit Shah">Amit Shah</option>
                      <option value="Devendra Fadnavis">
                        Devendra Fadnavis
                      </option>
                      <option value="Smruti Irani">Smruti Irani</option>
                      <option value="Narotam Mishra">Narotam Mishra</option>
                      <option value="Jyotiraditya Scindhi">
                        Jyotiraditya Scindhi
                      </option>
                      <option value="Sibraj Singh">Sibraj Singh</option>
                      <option value="Kapil Mishra">Kapil Mishra</option>
                      <option value="Dharmendra Pradhan">
                        Dharmendra Pradhan
                      </option>
                      <option value="Jp Nadda">Jp Nadda</option>
                      <option value="Yogi Adityanath">Yogi Adityanath</option>
                      <option value="Ravi Shankar Prasad">
                        Ravi Shankar Prasad
                      </option>
                      <option value="Kiran Rijuju">Kiran Rijuju</option>
                      <option value="Gaurav Bhatia">Gaurav Bhatia</option>
                      <option value="Giriraj Singh">Giriraj Singh</option>
                      <option value="Nalin Kohli">Nalin Kohli</option>
                      <option value="Harsh Vardhan">Harsh Vardhan</option>
                      <option value="Murli Manohar Joshi">
                        Murli Manohar Joshi
                      </option>
                      <option value="Rajnath Singh">Rajnath Singh</option>
                      <option value="Rajyavardhan Singh Rathore">
                        Rajyavardhan Singh Rathore
                      </option>
                      <option value="Shivraj Singh Chouhan">
                        Shivraj Singh Chouhan
                      </option>
                      <option value="Subramanian Swamy">
                        Subramanian Swamy
                      </option>
                      <option value="Yashwant Sinha">Yashwant Sinha</option>
                      <option value="Piyush Goyal">Piyush Goyal</option>
                      <option value="Rajnath Singh">Rajnath Singh</option>
                      <option value="V K Singh">V K Singh</option>
                      <option value="Vijay Goyal">Vijay Goyal</option>
                      <option value="Bhupender Yadav">Bhupender Yadav</option>
                      <option value="Rameswar Teli">Rameswar Teli</option>
                      <option value="Santosh Gangwar">Santosh Gangwar</option>
                      <option value="Rahul Gandhi">Rahul Gandhi</option>
                      <option value="A K Antony">A K Antony</option>
                      <option value="Priyanka Gandhi">Priyanka Gandhi</option>
                      <option value="Ashok Gehlot">Ashok Gehlot</option>
                      <option value="Sachin Pilot">Sachin Pilot</option>
                      <option value="Digvijay Singh">Digvijay Singh</option>
                      <option value="Abhishek Manusinghvi">
                        Abhishek Manusinghvi
                      </option>
                      <option value="Sonia Gandhi">Sonia Gandhi</option>
                      <option value="Bhupendra Singh Baghela">
                        {" "}
                        Bhupendra Singh Baghela{" "}
                      </option>
                      <option value="Kamal Nath">Kamal Nath</option>
                      <option value="Salman Khurshid">Salman Khurshid</option>
                      <option value="Supriya Srinet">Supriya Srinet</option>
                      <option value="Hardik Patel">Hardik Patel</option>
                      <option value="Sashi Tharoor">Sashi Tharoor</option>
                      <option value="Ahmad Patel">Ahmad Patel</option>
                      <option value="Anand Sharma">Anand Sharma</option>
                      <option value="Kamak Nath">Kamak Nath</option>
                      <option value="Kapil Sibal">Kapil Sibal</option>
                      <option value="P Chidambaram">P Chidambaram</option>
                      <option value="Sanjay Raut">Sanjay Raut</option>
                      <option value="Uddhav Thackeray">Uddhav Thackeray</option>
                      <option value="Aditya Thackeray">Aditya Thackeray</option>
                      <option value="Mamta Bannerjee">Mamta Bannerjee</option>
                      <option value="Abhishek Banerjee">
                        Abhishek Banerjee
                      </option>
                      <option value="Derek O'Brian">Derek O'Brian</option>
                      <option value="SHARAD  PAWAR">SHARAD PAWAR</option>
                      <option value="Nitish Kumar">Nitish Kumar</option>
                      <option value="Akhilesh Yadav">Akhilesh Yadav</option>
                      <option value="Mulayam Singh Yadav">
                        Mulayam Singh Yadav
                      </option>
                      <option value="Tejasvi Yadav">Tejasvi Yadav</option>
                      <option value="Arvind Kejriwal"></option>
                      <option value="Raghav Chadha">Raghav Chadha</option>
                      <option value="Manish Sishodia">Manish Sishodia</option>
                      <option value="MK Stalin">MK Stalin</option>
                      <option value="Asaduddin Owaisi">Asaduddin Owaisi</option>
                      <option value="E K Palaniswami">E K Palaniswami</option>
                      <option value="O Panneerselvam">O Panneerselvam</option>
                      <option value="H D Beve Gowda">H D Beve Gowda</option>
                      <option value="HD Kumaraswamy">HD Kumaraswamy</option>
                      <option value="N Chandrsbabu Naidu">
                        N Chandrsbabu Naidu
                      </option>
                      <option value="Pinarayi Vijayan">Pinarayi Vijayan</option>
                      <option value="Sitaram Yechury">Sitaram Yechury</option>
                      <option value="Raj Thackeray">Raj Thackeray</option>
                      <option value="Ram Vilas Paswan">Ram Vilas Paswan</option>
                      <option value="Chirag Paswan">Chirag Paswan</option>
                      <option value="Mayawati"></option>
                      <option value="Nodeep Kaur">Nodeep Kaur</option>
                      <option value="Aruna Roy">Aruna Roy</option>
                      <option value="Anannya Bhattacharjee">
                        Anannya Bhattacharjee
                      </option>
                      <option value="Shanta Sinha">Shanta Sinha</option>
                      <option value="Sunitha Krishnan">Sunitha Krishnan</option>
                      <option value="Nalini Jameela">Nalini Jameela</option>
                      <option value="Ruchira Gupta">Ruchira Gupta</option>
                      <option value="Ashok Row Kavi">Ashok Row Kavi</option>
                      <option value="Gopi Shankar Madurai">
                        Gopi Shankar Madurai
                      </option>
                    </>
                  ) : (
                    <></>
                  )}
                </select>
              </div>
              <div className="group">
                <label for="lastname">Experience</label>
                <textarea
                  className="input"
                  id="message"
                  type="text"
                  name="experience"
                  placeholder="Tell us about your experience"
                  onChange={(e) => {
                    setExperience(e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  value={experience}
                ></textarea>
              </div>

              <div class="group">
                <button
                  type="submit"
                  class="buttons"
                  value="Register"
                  onClick={postData}
                >
                  <span> Register</span>
                </button>
              </div>
            </form>
            <form class="sign-up-htm" onSubmit={formik.handleSubmit}>
              <div class="group">
                <label for="firstname">Name</label>
                <input
                  placeholder="Name"
                  name="Name"
                  id="Name"
                  type="text"
                  class="input"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                {formik.touched.Name && formik.errors.Name ? (
                  <div>{formik.errors.Name}</div>
                ) : null}
              </div>
              <div class="group">
                <label for="lastname">E-mail</label>
                <input
                  placeholder="Email"
                  name="email"
                  className="input"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  value={email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </div>
              <div class="group">
                <label for="lastname">Phone Number</label>
                <input
                  placeholder="Phone"
                  name="phone"
                  className="input"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  value={phoneNumber}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div>{formik.errors.phone}</div>
                ) : null}
              </div>
              <div className="group">
                <label for="lastname">Institution</label>

                <select
                  placeholder="Institution"
                  type="text"
                  className="input"
                  name="institution"
                  onChange={(e) => {
                    setInstitute(e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  value={institute}
                >
                  <option value="NIT DURGAPUR">NIT DURGAPUR</option>
                  <option value={other}>Other Institutions</option>
                </select>
              </div>
              <div
                class="group"
                style={
                  institute == "NIT DURGAPUR"
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <label for="lastname">School/College</label>
                <input
                  placeholder="School/College"
                  name="email"
                  value={institute}
                  onChange={(e) => {
                    setInstitute(e.target.value);
                  }}
                  id="pass"
                  type="text"
                  class="input"
                  data-type="text"
                />
              </div>
              <div
                class="group"
                style={
                  institute == "NIT DURGAPUR"
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <label for="lastname">Roll Number</label>
                <input
                  placeholder="Roll Number"
                  name="email"
                  value={roll}
                  onChange={(e) => {
                    setRoll(e.target.value);
                  }}
                  id="pass"
                  type="text"
                  class="input"
                  data-type="text"
                />
              </div>
              <div
                className="group"
                style={
                  institute == "NIT DURGAPUR"
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <label for="lastname">Year</label>

                <select
                  placeholder="Institution"
                  type="text"
                  className="input"
                  name="institution"
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  value={year}
                >
                  <option value="2023">First</option>
                  <option value="other">other</option>
                </select>
              </div>

              <br></br>
              <h2>Preferences 1:</h2>
              <br></br>

              <div class="group">
                <label for="Committee">Committee</label>
                <select
                  className="input"
                  type="text"
                  name="committee1"
                  value={committee1}
                  onChange={(e) => {
                    setComittee1(e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                >
                  <option defaultValue={"Select"}>Select</option>
                  <option value="UNGA-DISEC-IP">UNGA-DISEC-IP</option>
                  <option value="UNGA-SPECPOL-IP">UNGA-SPECPOL-IP</option>
                  <option value="AIPPM-IP">AIPPM-IP</option>
                </select>
              </div>

              <div
                class="group"
                style={
                  committee1 == "" ? { display: "none" } : { display: "block" }
                }
              >
                <label for="lastname">News Agency</label>
                <select
                  className="input"
                  type="text"
                  name="preference1"
                  value={preference1}
                  onChange={(e) => {
                    setPreferences1(e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                >
                  {committee1 == "AIPPM-IP" ? (
                    <>
                      <option value="Hindustan Times">Hindustan Times</option>
                      <option value="Times Of India">Times Of India</option>
                      <option value="The Hindu">The Hindu</option>
                    </>
                  ) : (
                    <>
                      <option value="UP">UP</option>
                      <option value="Reuters">Reuters</option>
                    </>
                  )}
                </select>
              </div>
              <br></br>
              <h2>Preferences 2:</h2>
              <br></br>
              <div className="group">
                <label for="lastname">Committee</label>
                <select
                  className="input"
                  type="text"
                  name="committee2"
                  onChange={(e) => {
                    setComittee2(e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  value={committee2}
                >
                  <option defaultValue={"Select"}>Select</option>
                  <option value="UNGA-DISEC-IP">UNGA-DISEC-IP</option>
                  <option value="UNGA-SPECPOL-IP">UNGA-SPECPOL-IP</option>
                  <option value="AIPPM-IP">AIPPM-IP</option>
                </select>
              </div>
              <div
                class="group"
                style={
                  committee1 == "" ? { display: "none" } : { display: "block" }
                }
              >
                <label for="lastname">News Agency</label>
                <select
                  className="input"
                  name="preference2"
                  type="text"
                  value={preference2}
                  onChange={(e) => {
                    setPreferences2(e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                >
                  {committee1 == "AIPPM-IP" ? (
                    <>
                      <option value="Hindustan Times">Hindustan Times</option>
                      <option value="Times Of India">Times Of India</option>
                      <option value="The Hindu">The Hindu</option>
                    </>
                  ) : (
                    <>
                      <option value="UP">UP</option>
                      <option value="Reuters">Reuters</option>
                    </>
                  )}
                </select>
              </div>
              <br></br>
              <h2>Preferences 3:</h2>
              <br></br>
              <div className="group">
                <label for="lastname">Committee</label>
                <select
                  className="input"
                  type="text"
                  name="committee3"
                  value={committee3}
                  onChange={(e) => {
                    setComittee3(e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                >
                  <option defaultValue={"Select"}>Select</option>
                  <option value="UNGA-DISEC-IP">UNGA-DISEC-IP</option>
                  <option value="UNGA-SPECPOL-IP">UNGA-SPECPOL-IP</option>
                  <option value="AIPPM-IP">AIPPM</option>
                </select>
              </div>
              <div class="group">
                <label for="lastname">News Agency</label>
                <select
                  className="input"
                  name="preference2"
                  type="text"
                  value={preference3}
                  onChange={(e) => {
                    setPreferences3(e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                >
                  {committee1 == "AIPPM-IP" ? (
                    <>
                      <option value="Hindustan Times">Hindustan Times</option>
                      <option value="Times Of India">Times Of India</option>
                      <option value="The Hindu">The Hindu</option>
                    </>
                  ) : (
                    <>
                      <option value="UP">UP</option>
                      <option value="Reuters">Reuters</option>
                    </>
                  )}
                </select>
              </div>
              <div className="group">
                <label for="lastname">Experience</label>
                <textarea
                  className="input"
                  id="message"
                  type="text"
                  name="experience"
                  placeholder="Tell us about your experience"
                  onChange={(e) => {
                    setExperience(e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  value={experience}
                ></textarea>
              </div>

              <div class="group">
                <button
                  type="submit"
                  class="buttons"
                  value="Register"
                  onClick={postData}
                >
                  <span> Register</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
      <OtherFooter />
    </div>
  );
};

export default Formc;
