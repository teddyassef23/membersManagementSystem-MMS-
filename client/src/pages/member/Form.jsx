// Filename - App.js
// It contains the Form, its Structure
// and Basic Form Functionalities

import "./MemberForm.css";
import { React, useState } from "react";

function MemberForm() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      middleName,
      lastName,
      email,
      contact,
      gender,
      selectedOption,
      subjects,
      resume,
      url,
      about
    );
    // Add your form submission logic here
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };
  const handleReset = () => {
    // Reset all state variables here
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };

  return (


    <div className="App ">
      <h1>New Member Registration </h1>
      
      <fieldset>
        <form action="#" method="get">
          <section className="container ">
            

            <label for="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter First Name"
              required
            />
            <label for="middlename">Middle name*</label>
            <input
              type="text"
              name="middlename"
              id="middlename"
              value={firstName}
              onChange={(e) => setMiddleName(e.target.value)}
              placeholder="Enter Middle Name"
              
            />
            <label for="lastname">Last Name*</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter Last Name"
              required
            />

           <label for="email">Enter Email* </label>
           <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              
          />

          </section>

{/* 
          <label for="firstname">First Name*</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            required
          />
          <label for="middlename">Middle name*</label>
          <input
            type="text"
            name="middlename"
            id="middlename"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter Middle Name"
            required
          />
          <label for="lastname">Last Name*</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            required
          /> */}

<hr  style={{
    color: '#000000',
    backgroundColor: '#000000',
    height: .5,
    borderColor : '#000000'
}}/>






<label for="gender">Gender*</label>
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="other"
            id="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          Other
          <label for="lang">Your Language do can speak</label>
          <input
            type="checkbox"
            name="lang"
            id="english"
            checked={subjects.english === true}
            onChange={(e) => handleSubjectChange("english")}
          />
          English
          <input
            type="checkbox"
            name="lang"
            id="maths"
            checked={subjects.maths === true}
            onChange={(e) => handleSubjectChange("maths")}
          />
          Amharic
          <input
            type="checkbox"
            name="lang"
            id="physics"
            checked={subjects.physics === true}
            onChange={(e) => handleSubjectChange("physics")}
          />
          Tigeria
          <input
            type="checkbox"
            name="lang"
            id="maths"
            checked={subjects.maths === true}
            onChange={(e) => handleSubjectChange("maths")}
          />
          Oromo
          <label for="file">Upload Resume*</label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setResume(e.target.files[0])}
            placeholder="Enter Upload File"
            required
          />

          
          <button type="reset" value="reset" onClick={() => handleReset()}>
            Reset
          </button>
          <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default MemberForm;
