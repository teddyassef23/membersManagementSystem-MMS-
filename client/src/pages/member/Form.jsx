// Filename - App.js
// It contains the Form, its Structure
// and Basic Form Functionalities

import "./MemberForm.css";
import { React, useState } from "react";
import Detail from "../family/Accordion.jsx";
import { Divider, Select } from "antd";
import Address from "./../family/Address";

function MemberForm() {
  const [memberId, setMemberId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const [primaryPhone, setPrimaryPhone] = useState("");
  const [secondaryPhone, setSecondaryPhone] = useState("");
  const [baptismalName, setBaptismalName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [FamilySize, setFamilySize] = useState("");

  const [email, setEmail] = useState("");
  const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];

  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    Amharic: false,
    Tigeria: false,
    Oromo: false,
  });

  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      memberId,
      firstName,
      middleName,
      lastName,
      baptismalName,
      primaryPhone,
      secondaryPhone,
      FamilySize,
      email,
      gender,
      selectedOption,
      startDate
    );
    // Add your form submission logic here
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  var disable = true;

  const addFamily = () => {
    // call add family f
  };

  return (
    <div className="App ">
      <h1>New Member Registration </h1>
      <div className="new-line"></div>
      <fieldset>
        <form action="#" method="get">
          <section className="container ">
            <label for="firstname">Member ID</label>
            <input
              type="text"
              name="memberId"
              id="memberId"
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
              placeholder="GD-1234"
              required
            />
            <label for="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder=" Thomas"
              required
            />
            <label for="middlename">Middle name</label>
            <input
              d
              name="middlename"
              id="middlename"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              placeholder=" Jeo"
            />
            <label for="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Brown"
              required
            />
            <label for="baptismalName">Baptismal Name </label>
            <input
              type="text"
              name="baptismalName"
              id="baptismalName"
              value={baptismalName}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Weld-Meskael"
            />
            <label for="familySize"> Family size </label>
            <Select
              mode="multiple"
              placeholder="Inserted are removed"
              id="familySize"
              value={selectedItems}
              onChange={setFamilySize}
              style={{
                width: "100%",
              }}
              Select={[
                {
                  value: "1",
                  label: "1",
                },
                {
                  value: "2",
                  label: "2",
                },
                {
                  value: "3",
                  label: "3",
                },
              ]}
            />
            <label for="gender">Gender</label>
            <input type="radio" name="gender" value="male" id="male" />
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
            <div className="new-line"></div>
            <Divider></Divider>
            <Divider></Divider>
            <Divider></Divider>
            <Divider></Divider>
            <Divider></Divider>
            <Divider></Divider>

            <label for="primaryPhone">Primary Phone </label>
            <input
              type="phone"
              name="primaryPhone"
              id="primaryPhone"
              value={primaryPhone}
              onChange={(e) => setPrimaryPhone(e.target.value)}
              placeholder="+(123) 456-7890"
            />
            <label for="email">Enter Email </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jeo@abc.com"
            />
            <label for="email">Secondar Phone </label>
            <input
              type="phone"
              name="secondaryPhone"
              id="secondaryPhone"
              value={secondaryPhone}
              onChange={(e) => setSecondaryPhone(e.target.value)}
              placeholder="+(123) 456-7890"
            />
          </section>
          <div className="new-line"></div>
            <Divider>Primary Address</Divider>
          <Address />


          <Divider></Divider>
          {/* <Detail /> */}
          <label for="lang">Your Language </label>
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
            name="Amharic"
            id="Amharic"
            checked={subjects.Amharic === true}
            onChange={(e) => handleSubjectChange("Amharic")}
          />
          Amharic
          <input
            disabled={disable}
            type="checkbox"
            name="Tigeria"
            id="Tigeria"
            checked={subjects.Tigeria === true}
            onChange={(e) => handleSubjectChange("Tigeria")}
          />
          Tigeria
          <input
            disabled={disable}
            type="checkbox"
            name="Oromo"
            id="Oromo"
            checked={subjects.Oromo === true}
            onChange={(e) => handleSubjectChange("Oromo")}
          />
          Oromo
          {/* {/* <div className="new-line"></div>
          <Divider></Divider>
             <h1>Dependents or/and Member's Family</h1>  */}
          <button type="button" onClick={() => addFamily()}>
            Edit
          </button>
          <button type="submit" value="Submit" onClick={(e) => handleSubmit()}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default MemberForm;
