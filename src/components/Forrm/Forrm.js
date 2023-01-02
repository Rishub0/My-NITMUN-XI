import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Forrmc.css";

const Formc = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phoneNumber,setPhoneNumber]=useState("");
  const [institute,setInstitute]=useState("");
  const [committee1,setComittee1]=useState("");
  const [preference1,setPreferences1]=useState("");
  const [committee2,setComittee2]=useState("");
  const [preference2,setPreferences2]=useState("");
  const [committee3,setComittee3]=useState("");
  const [preference3,setPreferences3]=useState("");
  const [experience,setExperience]=useState("");


  // let Name, value;

  // const handleInputs = (e) => {
  //   console.log(e);
  //   Name = e.target.name;
  //   value = e.target.value;

  //   setuser({ ...user, [Name]: value });
  // };

  const postData = async (e) => {
    e.preventDefault();
    
    await axios.post("/api/register", {
      
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
      experience: experience
    });

    // const data= await res.json();

    
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      institution: "NIT",
      Committee: "",
      Country: "",
      committee2: "",
      country2: "",
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

  return (
    <div class="container">
      <div class="login-container">
        <input id="item-1" type="radio" name="item" class="sign-in" checked />
        <label for="item-1" class="item">
          Delegate
        </label>
        <input id="item-2" type="radio" name="item" class="sign-up" />
        <label for="item-2" class="item">
          IP
        </label>
        <div class="login-form">
          <form class="sign-in-htm" method="post">
            <div class="group">
              <label for="lastname">Name</label>
              <input
                placeholder="Email"
                value={name}
                name="name"
                id="pass"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                class="input"
                data-type="text"
              />
            </div>
            <div class="group">
              <label for="lastname">Email</label>
              <input
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="pass"
                type="text"
                class="input"
                data-type="text"
              />
            </div>
            <div class="group">
              <label for="lastname">Phone Number</label>
              <input
                placeholder="Phone"
                name="phoneNumber"
                value={phoneNumber}
                id="pass"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                type="tel"
                class="input"
                data-type="password"
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div>{formik.errors.phone}</div>
              ) : null}
            </div>
            <div className="group">
              <label for="lastname">Institution</label>
              <select
                placeholder="Institution"
                className="input"
                value={institute}
                name="institute"
                onChange={(e) => {
                  setInstitute(e.target.value);
                }}
                onBlur={formik.handleBlur}
              >
                <option value="week-1">NIT DURGAPUR</option>
                <option value="week-2">IIT Kharagpur</option>
                <option value="week-3">Jadavpur University</option>
                <option value="month-1">IEM</option>
                <option value="month-3">St. Xaviers College</option>
              </select>
            </div>
            <br></br>
            <h2>Preferances 1:</h2>
            <br></br>

            <div className="group">
              <label for="lastname">Committee</label>
              <select
                className="input"
                name="committee1"
                value={committee1}
                onChange={(e) => {
                  setComittee1(e.target.value);
                }}
                onBlur={formik.handleBlur}
              >
                <option value="week-1">UNGA-DISEC</option>
                <option value="week-2">UNGA_SPECPOL</option>
                <option value="week-3">AIPPM</option>
              </select>
            </div>

            <div class="group">
              <label for="lastname">Country</label>
              <select
                className="input"
                name="preference1"
                value={preference1}
                onChange={(e) => {
                  setPreferences1(e.target.value);
                }}
                onBlur={formik.handleBlur}
              >
                <option value="form-no">India</option>
                <option value="form-yes">USA</option>
                <option value="form-yes">China</option>
                <option value="form-yes">UK</option>
                <option value="form-yes">Germany</option>
                <option value="form-yes">France</option>
              </select>
            </div>
            <br></br>
            <h2>Preferances 2:</h2>
            <br></br>
            <div className="group">
              <label for="lastname">Committee</label>
              <select
                className="input"
                name="committee2"
                value={committee2}
                onChange={(e) => {
                  setComittee2(e.target.value);
                }}
                onBlur={formik.handleBlur}
              >
                <option value="week-1">UNGA-DISEC</option>
                <option value="week-2">UNGA_SPECPOL</option>
                <option value="week-3">AIPPM</option>
              </select>
            </div>
            <div class="group">
              <label for="lastname">Country</label>
              <select
                className="input"
                name="preference2"
                value={preference2}
                onChange={(e) => {
                  setPreferences2(e.target.value);
                }}
                onBlur={formik.handleBlur}
              >
                <option value="form-no">India</option>
                <option value="form-yes">USA</option>
                <option value="form-yes">China</option>
                <option value="form-yes">UK</option>
                <option value="form-yes">Germany</option>
                <option value="form-yes">France</option>
              </select>
            </div>
            <br></br>
            <h2>Preferances 3:</h2>
            <br></br>
            <div className="group">
              <label for="lastname">Committee</label>
              <select
                className="input"
                name="committee3"
                value={committee3}
                onChange={(e) => {
                  setComittee3(e.target.value);
                }}
                onBlur={formik.handleBlur}
              >
                <option value="week-1">UNGA-DISEC</option>
                <option value="week-2">UNGA_SPECPOL</option>
                <option value="week-3">AIPPM</option>
              </select>
            </div>
            <div class="group">
              <label for="lastname">Country</label>
              <select
                className="input"
                name="preference2"
                value={preference3}
                onChange={(e) => {
                  setPreferences3(e.target.value);
                }}
                onBlur={formik.handleBlur}
              >
                <option value="form-no">India</option>
                <option value="form-yes">USA</option>
                <option value="form-yes">China</option>
                <option value="form-yes">UK</option>
                <option value="form-yes">Germany</option>
                <option value="form-yes">France</option>
              </select>
            </div>
            <div className="group">
              <label for="lastname">Experience</label>
              <textarea
                className="input"
                id="message"
                type="text"
                name="experience"
                value={experience}
                placeholder="Tell us about your experience"
                onChange={(e) => {
                  setExperience(e.target.value);
                }}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>

            <div class="group">
              <input
                type="submit"
                class="button"
                value="Register"
                onClick={postData}
              />
            </div>
          </form>
          <form class="sign-up-htm">
            <div class="group">
              <label for="lastname">Name</label>
              <input
                placeholder="Email"
                name="name"
                id="pass"
                type="password"
                class="input"
                data-type="password"
              />
            </div>
            <div class="group">
              <label for="lastname">Email</label>
              <input
                placeholder="Email"
                name="email"
                id="pass"
                type="password"
                class="input"
                data-type="password"
              />
            </div>
            <div class="group">
              <label for="lastname">Phone Number</label>
              <input
                placeholder="Phone"
                name="phone"
                id="pass"
                type="tel"
                class="input"
                data-type="password"
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div>{formik.errors.phone}</div>
              ) : null}
            </div>
            <div className="group">
              <label for="lastname">Institution</label>
              <select
                placeholder="Institution"
                className="input"
                name="institution"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.institution}
              >
                <option value="week-1">NIT DURGAPUR</option>
                <option value="week-2">IIT Kharagpur</option>
                <option value="week-3">Jadavpur University</option>
                <option value="month-1">IEM</option>
                <option value="month-3">St. Xaviers College</option>
              </select>
            </div>
            <br></br>
            <h2>Preferances 1:</h2>
            <br></br>

            <div className="group">
              <label for="lastname">Committee</label>
              <select
                className="input"
                name="Committee"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Committee}
              >
                <option value="week-1">UNGA-DISEC</option>
                <option value="week-2">UNGA_SPECPOL</option>
                <option value="week-3">AIPPM</option>
              </select>
            </div>

            <div class="group">
              <label for="lastname">Country</label>
              <select
                className="input"
                name="Country"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Country}
              >
                <option value="form-no">India</option>
                <option value="form-yes">USA</option>
                <option value="form-yes">China</option>
                <option value="form-yes">UK</option>
                <option value="form-yes">Germany</option>
                <option value="form-yes">France</option>
              </select>
            </div>
            <br></br>
            <h2>Preferances 1:</h2>
            <br></br>
            <div className="group">
              <label for="lastname">Committee</label>
              <select
                className="input"
                name="committee2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.committee2}
              >
                <option value="week-1">UNGA-DISEC</option>
                <option value="week-2">UNGA_SPECPOL</option>
                <option value="week-3">AIPPM</option>
              </select>
            </div>
            <div class="group">
              <label for="lastname">Country</label>
              <select
                className="input"
                name="country2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Country}
              >
                <option value="form-no">India</option>
                <option value="form-yes">USA</option>
                <option value="form-yes">China</option>
                <option value="form-yes">UK</option>
                <option value="form-yes">Germany</option>
                <option value="form-yes">France</option>
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.experience}
              ></textarea>
            </div>

            <div class="group">
              <input type="submit" class="button" value="Sign Up" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formc;
