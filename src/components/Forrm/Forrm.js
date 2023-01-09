import React, { useEffect, useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Forrmc.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
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
                <label for="firstname">Name11</label>
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
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="China">China</option>
                  <option value="UK">UK</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
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
                  {committee2 == "UNGA-SPECPOL" ? (
                    <>
                      <option value="Islamic Emirate of Afghanistan">Islamic Emirate of Afghanistan
    </option>
<option value="Republic of Albania">Republic of Albania
    </option>
<option value="People's Democratic Republic of Algeria">People's Democratic Republic of Algeria
    </option>
<option value="Republic of Angola">Republic of Angola
    </option>
<option value="Argentine Republic">Argentine Republic
    </option>
<option value="Republic of Armenia">Republic of Armenia
    </option>
<option value="Commonwealth of Australia">Commonwealth of Australia
    </option>
<option value="Republic of Austria">Republic of Austria
    </option>
<option value="Republic of Azerbaijan">Republic of Azerbaijan
    </option>
<option value="Kingdom of Bahrain">Kingdom of Bahrain
    </option>
<option value="People's Republic of Bangladesh">People's Republic of Bangladesh
    </option>
<option value="Barbados">Barbados
    </option>
<option value="Republic of Belarus">Republic of Belarus
    </option>
<option value="Kingdom of Bhutan">Kingdom of Bhutan
    </option>
<option value="Federative Republic of Brazil">Federative Republic of Brazil
    </option>
<option value="Republic of Bulgaria">Republic of Bulgaria
    </option>
<option value="Republic of Burundi">Republic of Burundi
    </option>
<option value="Canada">Canada
    </option>
<option value="Republic of Chad">Republic of Chad
    </option>
<option value="Republic of Chile">Republic of Chile
    </option>
<option value="People's Republic of China (PRC)">People's Republic of China (PRC)
    </option>
<option value="Republic of Colombia">Republic of Colombia
    </option>
<option value="Republic of Côte d'Ivoire">Republic of Côte d'Ivoire
    </option>
<option value="Republic of Cuba">Republic of Cuba
    </option>
<option value="Republic of Cyprus">Republic of Cyprus
    </option>
<option value="Czech Republic">Czech Republic
    </option>
<option value="Democratic People's Republic of Korea (DPRK)">Democratic People's Republic of Korea (DPRK)
    </option>
<option value="Democratic Republic of the Congo">Democratic Republic of the Congo
    </option>
<option value="Republic of Djibouti">Republic of Djibouti
    </option>
<option value="Arab Republic of Egypt">Arab Republic of Egypt
    </option>
<option value="Republic of El Salvador">Republic of El Salvador
    </option>
<option value="State of Eritrea">State of Eritrea
    </option>
<option value="Kingdom of Eswatini">Kingdom of Eswatini
    </option>
<option value="Federal Democratic Republic of Ethiopia">Federal Democratic Republic of Ethiopia
    </option>
<option value="Republic of Fiji">Republic of Fiji
    </option>
<option value="French Republic">French Republic
    </option>
<option value="Georgia">Georgia
    </option>
<option value="Federal Republic of Germany">Federal Republic of Germany
    </option>
<option value="Hellenic Republic(Greece)">Hellenic Republic(Greece)
    </option>
<option value="Republic of Haiti">Republic of Haiti
    </option>
<option value="Hungary">Hungary
    </option>
<option value="Republic of India">Republic of India
    </option>
<option value="Republic of Indonesia">Republic of Indonesia
    </option>
<option value="Islamic Republic of Iran">Islamic Republic of Iran
    </option>
<option value="Republic of Iraq">Republic of Iraq
    </option>
<option value="Republic of Ireland">Republic of Ireland
    </option>
<option value="State of Israel">State of Israel
    </option>
<option value="Italian Republic">Italian Republic
    </option>
<option value="Jamaica">Jamaica
    </option>
<option value="Japan">Japan
    </option>
<option value="Hashemite Kingdom of Jordan">Hashemite Kingdom of Jordan
    </option>
<option value="Republic of Kazakhstan">Republic of Kazakhstan
    </option>
<option value="State of Kuwait">State of Kuwait
    </option>
<option value="Kyrgyz Republic">Kyrgyz Republic
    </option>
<option value="Republic of Latvia">Republic of Latvia
    </option>
<option value="Republic of Lebanon">Republic of Lebanon
    </option>
<option value="State of Libya">State of Libya
    </option>
<option value="Republic of Madagascar">Republic of Madagascar
    </option>
<option value="Republic of Mauritius">Republic of Mauritius
    </option>
<option value="United Mexican States(Mexico)">United Mexican States(Mexico)
    </option>
<option value="Mongolia">Mongolia
    </option>
<option value="Kingdom of Morocco">Kingdom of Morocco
    </option>
<option value="Kingdom of the Netherlands">Kingdom of the Netherlands
    </option>
<option value="Realm of New Zealand">Realm of New Zealand
    </option>
<option value="Federal Republic of Nigeria">Federal Republic of Nigeria
    </option>
<option value="Kingdom of Norway">Kingdom of Norway
    </option>
<option value="Sultanate of Oman">Sultanate of Oman
    </option>
<option value="Islamic Republic of Pakistan">Islamic Republic of Pakistan
    </option>
<option value="Republic of Panama">Republic of Panama
    </option>
<option value="Republic of Peru">Republic of Peru
    </option>
<option value="Republic of the Philippines">Republic of the Philippines
    </option>
<option value="Republic of Poland">Republic of Poland
    </option>
<option value="Portuguese Republic">Portuguese Republic
    </option>
<option value="State of Qatar">State of Qatar
    </option>
<option value="Republic of Korea(ROK)">Republic of Korea(ROK)
    </option>
<option value="Russian Federation">Russian Federation
    </option>
<option value="Saint Lucia">Saint Lucia
    </option>
<option value="Independent State of Samoa">Independent State of Samoa
    </option>
<option value="Kingdom of Saudi Arabia (KSA)">Kingdom of Saudi Arabia (KSA)
    </option>
<option value="Republic of Senegal">Republic of Senegal
    </option>
<option value="Republic of Seychelles">Republic of Seychelles
    </option>
<option value="Republic of Singapore">Republic of Singapore
    </option>
<option value="Solomon Islands">Solomon Islands
    </option>
<option value="Federal Republic of Somalia">Federal Republic of Somalia
    </option>
<option value="Republic of South Africa (RSA)">Republic of South Africa (RSA)
    </option>
<option value="Kingdom of Spain">Kingdom of Spain
    </option>
<option value="Republic of the Sudan">Republic of the Sudan
    </option>
<option value="Swiss Confederation">Swiss Confederation
    </option>
<option value="Syrian Arab Republic">Syrian Arab Republic
    </option>
<option value="Republic of China (ROC)">Republic of China (ROC)
    </option>
<option value="Kingdom of Thailand">Kingdom of Thailand
    </option>
<option value="Republic of Türkiye">Republic of Türkiye
    </option>
<option value="Turkmenistan">Turkmenistan
    </option>
<option value="Ukraine">Ukraine
    </option>
<option value="United Arab Emirates">United Arab Emirates
    </option>
<option value="United Kingdom of Great Britain and Northern Ireland">United Kingdom of Great Britain and Northern Ireland
    </option>
<option value="United States of America">United States of America
    </option>
<option value="Bolivarian Republic of Venezuela">Bolivarian Republic of Venezuela
    </option>
<option value="Socialist Republic of Vietnam">Socialist Republic of Vietnam
    </option>
<option value="Republic of Yemen">Republic of Yemen
    </option>

                    </>
                  ) :
                    <><option value="select...">Select..
                    </option></>
                  }
                  {committee2 == "UNGA-DISEC"?<></>:<></>}
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
                  <option
                    value="UNGA-DISEC"
                    style={
                      committee1 == "UNGA-DISEC" || committee2 == "UNGA-DISEC"
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    UNGA-DISEC
                  </option>
                  <option
                    value="UNGA-SPECPOL"
                    style={
                      committee1 == "UNGA-SPECPOL" ||
                      committee2 == "UNGA-SPECPOL"
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    UNGA_SPECPOL
                  </option>
                  <option
                    value="AIPPM"
                    style={
                      committee1 == "AIPPM" || committee2 == "AIPPM"
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
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="China">China</option>
                  <option value="UK">UK</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
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
                <label for="firstname">Name11</label>
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
                  <option value="UNGA-DISEC-IP">UNGA-DISEC</option>
                  <option value="UNGA-SPECPOL-IP">UNGA_SPECPOL</option>
                  <option value="AIPPM-IP">AIPPM</option>
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
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="China">China</option>
                  <option value="UK">UK</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
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
                  <option
                    value="UNGA-SPECPOL-IP"
                    style={
                      committee1 == "UNGA-SPECPOL-IP"
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    UNGA-SPECPOL-IP
                  </option>
                  <option
                    value="AIPPM-IP"
                    style={
                      committee1 == "AIPPM-IP"
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    AIPPM-IP
                  </option>
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
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="China">China</option>
                  <option value="UK">UK</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
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
                  <option
                    value="UNGA-DISEC-IP"
                    style={
                      committee1 == "UNGA-DISEC-IP" ||
                      committee2 == "UNGA-DISEC"
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    UNGA-DISEC-IP
                  </option>
                  <option
                    value="UNGA-SPECPOL-IP"
                    style={
                      committee1 == "UNGA-SPECPOL-IP" ||
                      committee2 == "UNGA-SPECPOL-IP"
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    UNGA-SPECPOL-IP
                  </option>
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
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="China">China</option>
                  <option value="UK">UK</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
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
      <Footer />
    </div>
  );
};

export default Formc;
