import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Forrmc.css";

const Formc = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
	
	const formik = useFormik({
    initialValues: {
      Name: "",
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
    <div>
      <section class="form-container">
        <form class="form" action="http://localhost:3000" method="get">
          <h1 class="form-header">Registration</h1>
          <div class="form">
            <div class="form-item form-item1">
              <label for="firstname">Name</label>
              <input
                id="Name"
                type="text"
                name="Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Name}
              />
			  {formik.touched.Name && formik.errors.Name ? (
				<div>{formik.errors.Name}</div>
			  ): null}
            </div>

            <div class="form-item form-item1">
              <label for="lastname">E-mail</label>
              <input
                for="lastname"
                type="text"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
				value={formik.values.email}
              />
			  {formik.touched.email && formik.errors.email ? (
				<div>{formik.errors.email}</div>
			  ): null}
            </div>

            <div class="form-item form-item2">
              <label for="phonenumber">Phone Number</label>
              <input
                id="phonenumber"
                type="tel"
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
				value={formik.values.phone}
              />
			  {formik.touched.phone && formik.errors.phone ? (
				<div>{formik.errors.phone}</div>
			  ): null}
            </div>

            <div class="form-item form-item2">
              <label for="time frame">College/School</label>
              <select
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

            <div class="form-item form-item3">
              <label for="Committee">Committee</label>
              <select name="Committee"
			  onChange={ formik.handleChange}
			  onBlur={ formik.handleBlur}
			  value={formik.values.Committee}>
                <option value="week-1">UNGA-DISEC</option>
                <option value="week-2">UNGA_SPECPOL</option>
                <option value="week-3">AIPPM</option>
              </select>
            </div>

            <div class="form-item form-item3">
              <label for="has website">Country</label>
              <select name="Country"
			  onChange={ formik.handleChange}
			  onBlur={ formik.handleBlur}
			  value={formik.values.Country}>
                <option value="form-no">India</option>
                <option value="form-yes">USA</option>
                <option value="form-yes">China</option>
                <option value="form-yes">UK</option>
                <option value="form-yes">Germany</option>
                <option value="form-yes">France</option>
              </select>
            </div>

            <div class="form-item form-item4">
              <label for="time frame">Committee</label>
              <select name="committee2"
			  onChange={ formik.handleChange}
			  onBlur={ formik.handleBlur}
			  value={formik.values.committee2}>
			  
                <option value="week-1">UNGA-DISEC</option>
                <option value="week-2">UNGA_SPECPOL</option>
                <option value="week-3">AIPPM</option>
              </select>
            </div>

            <div class="form-item form-item4">
              <label for="has website">Country</label>
              <select name="country2"
			  onChange={ formik.handleChange}
			  onBlur={ formik.handleBlur}
			  value={formik.values.country2}
			  >
                <option value="form-no">India</option>
                <option value="form-yes">USA</option>
                <option value="form-yes">China</option>
                <option value="form-yes">UK</option>
                <option value="form-yes">Germany</option>
                <option value="form-yes">France</option>
              </select>
            </div>

            <div class="textarea-div form-item4">
              <label for="message">Previous Experience</label>
              <textarea
                id="message"
                type="text"
                name="experience"
                placeholder="Tell us about your experience"
				onChange={ formik.handleChange}
				onBlur={ formik.handleBlur}
				value={formik.values.experience}

              ></textarea>
			  {formik.touched.experience && formik.errors.experience ? (
				<div>{formik.errors.experience}</div>
			  ): null}
            </div>
            <div class="btn-container">
              <input
                id="submit"
                class="btn btn-glow form-btn"
                type="submit"
                name="submit"
                value="Register"
              />
            </div>
          </div>
        </form>
      </section>
    </div>
	
  );
};



export default Formc;
