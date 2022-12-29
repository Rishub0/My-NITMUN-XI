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

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };

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
          <form class="sign-in-htm" >
            <div class="group">
              <label for="firstname">Name</label>
              <input
                placeholder="Name"
                name="Name"
                id="Name"
                type="text"
                class="input"
              />
            </div>
            <div class="group">
              <label for="lastname">E-mail</label>
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
            <h2>Preferances 2:</h2>
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
              <input type="submit" class="button" value="Sign In" />
            </div>
          </form>
          <form class="sign-up-htm" action="http://localhost:3000" method="get">
            <div class="group">
              <label for="lastname">Name</label>
              <input
                placeholder="Name"
                name="Name"
                id="Name"
                type="text"
                class="input"
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

    // <div>
    //   <section class="form-container">
    //     <form class="form" action="http://localhost:3000" method="get">
    //       <h1 class="form-header">Registration</h1>
    //       <div class="form">
    //         <div class="form-item form-item1">
    //           <label for="firstname">Name</label>
    //           <input
    //             id="Name"
    //             type="text"
    //             name="Name"
    //             onChange={formik.handleChange}
    //             onBlur={formik.handleBlur}
    //             value={formik.values.Name}
    //           />
    // 	  {formik.touched.Name && formik.errors.Name ? (
    // 		<div>{formik.errors.Name}</div>
    // 	  ): null}
    //         </div>

    //         <div class="form-item form-item1">
    //           <label for="lastname">E-mail</label>
    //           <input
    //             for="lastname"
    //             type="text"
    //             name="email"
    //             onChange={formik.handleChange}
    //             onBlur={formik.handleBlur}
    // 		value={formik.values.email}
    //           />
    // 	  {formik.touched.email && formik.errors.email ? (
    // 		<div>{formik.errors.email}</div>
    // 	  ): null}
    //         </div>

    //         <div class="form-item form-item2">
    //           <label for="phonenumber">Phone Number</label>
    //           <input
    //             id="phonenumber"
    //             type="tel"
    //             name="phone"
    //             onChange={formik.handleChange}
    //             onBlur={formik.handleBlur}
    // 		value={formik.values.phone}
    //           />
    // 	  {formik.touched.phone && formik.errors.phone ? (
    // 		<div>{formik.errors.phone}</div>
    // 	  ): null}
    //         </div>

    //         <div class="form-item form-item2">
    //           <label for="time frame">College/School</label>
    //           <select
    //             name="institution"
    //             onChange={formik.handleChange}
    //             onBlur={formik.handleBlur}
    // 		value={formik.values.institution}
    //           >
    //             <option value="week-1">NIT DURGAPUR</option>
    //             <option value="week-2">IIT Kharagpur</option>
    //             <option value="week-3">Jadavpur University</option>
    //             <option value="month-1">IEM</option>
    //             <option value="month-3">St. Xaviers College</option>
    //           </select>
    //         </div>

    //         <div class="form-item form-item3">
    //           <label for="Committee">Committee</label>
    //           <select name="Committee"
    // 	  onChange={ formik.handleChange}
    // 	  onBlur={ formik.handleBlur}
    // 	  value={formik.values.Committee}>
    //             <option value="week-1">UNGA-DISEC</option>
    //             <option value="week-2">UNGA_SPECPOL</option>
    //             <option value="week-3">AIPPM</option>
    //           </select>
    //         </div>

    //         <div class="form-item form-item3">
    //           <label for="has website">Country</label>
    //           <select name="Country"
    // 	  onChange={ formik.handleChange}
    // 	  onBlur={ formik.handleBlur}
    // 	  value={formik.values.Country}>
    //             <option value="form-no">India</option>
    //             <option value="form-yes">USA</option>
    //             <option value="form-yes">China</option>
    //             <option value="form-yes">UK</option>
    //             <option value="form-yes">Germany</option>
    //             <option value="form-yes">France</option>
    //           </select>
    //         </div>

    //         <div class="form-item form-item4">
    //           <label for="time frame">Committee</label>
    //           <select name="committee2"
    // 	  onChange={ formik.handleChange}
    // 	  onBlur={ formik.handleBlur}
    // 	  value={formik.values.committee2}>

    //             <option value="week-1">UNGA-DISEC</option>
    //             <option value="week-2">UNGA_SPECPOL</option>
    //             <option value="week-3">AIPPM</option>
    //           </select>
    //         </div>

    //         <div class="form-item form-item4">
    //           <label for="has website">Country</label>
    //           <select name="country2"
    // 	  onChange={ formik.handleChange}
    // 	  onBlur={ formik.handleBlur}
    // 	  value={formik.values.country2}
    // 	  >
    //             <option value="form-no">India</option>
    //             <option value="form-yes">USA</option>
    //             <option value="form-yes">China</option>
    //             <option value="form-yes">UK</option>
    //             <option value="form-yes">Germany</option>
    //             <option value="form-yes">France</option>
    //           </select>
    //         </div>

    //         <div class="textarea-div form-item4">
    //           <label for="message">Previous Experience</label>
    //           <textarea
    //             id="message"
    //             type="text"
    //             name="experience"
    //             placeholder="Tell us about your experience"
    // 		onChange={ formik.handleChange}
    // 		onBlur={ formik.handleBlur}
    // 		value={formik.values.experience}

    //           ></textarea>
    // 	  {formik.touched.experience && formik.errors.experience ? (
    // 		<div>{formik.errors.experience}</div>
    // 	  ): null}
    //         </div>
    //         <div class="btn-container">
    //           <input
    //             id="submit"
    //             class="btn btn-glow form-btn"
    //             type="submit"
    //             name="submit"
    //             value="Register"
    //           />
    //         </div>
    //       </div>
    //     </form>
    //   </section>
    // </div>
  );
};
const form = document.querySelector("sign-in-htm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      axios
        .post("/update-profile", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
export default Formc;
