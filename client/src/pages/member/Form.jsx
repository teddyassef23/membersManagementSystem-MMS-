// Filename - App.js
// It contains the Form, its Structure
// and Basic Form Functionalities

import "./MemberForm.css";
import { React, useState } from "react";
import Detail from "../family/Accordion.jsx";
import { Divider, Select } from "antd";
import Address from "./../family/Address";
import { useMutation, gql } from '@apollo/client';
import { ADD_MEMBER } from '../../utils/mutations.js'; 

function MemberForm() {
  // const [memberId, setMemberId] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [middleName, setMiddleName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [memberData, setMemberData] = useState({
    memberNumber: "",
    firstName: "",
    middleName: "",
    lastName: "",
    baptismalName: "",
    primaryPhone: "",
    secondaryPhone: "",
    startDate:"2024-11-11",
    created_date:"2024-11-11",

    // familySize: "",
    email: "",
    gender: "male",
    addresses: [
      {
        street: "",
        street2: "",
        city: "",
        state: "",
        country: "",
        zip: "",
      },
    ],
  });

  const [addMember] = useMutation(ADD_MEMBER);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addMember({
        variables: {
          input: memberData,
        },
      });
      console.log(data); // Handle success response
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedAddresses = [...memberData.addresses];
    updatedAddresses[index][name] = value;
    setMemberData({
      ...memberData,
      addresses: updatedAddresses,
    });
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setMemberData({
      ...memberData,
      [name]: value,
    });
  };

  
  const handleFamilySizeChange = (value) => {
    setMemberData({
      ...memberData,
      familySize: value,
    });
  };


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
      <form onSubmit={handleSubmit}>
          <section className="container ">
            <label for="firstname">Member ID</label>
            <input
              type="text"
              name="memberNumber"
              id="memberNumber"
              value={memberData.memberNumber}
              onChange={handleChange2}
              placeholder="GD-1234"
              required
            />
            <label for="firstname">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={memberData.firstName}
              onChange={handleChange2}
              placeholder=" Thomas"
              required
            />
            <label for="middlename">Middle name</label>
            <input
            type="text"
              name="middleName"
              id="middleName"
              value={memberData.middleName}
              onChange={handleChange2}
              placeholder=" Jeo"
            />
            <label for="lastname">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={memberData.lastName}
              onChange={handleChange2}
              placeholder="Brown"
              required
            />
            <label for="baptismalName">Baptismal Name </label>
            <input
              type="text"
              name="baptismalName"
              id="baptismalName"
              value={memberData.baptismalName}
              onChange={handleChange2}
              placeholder="Weld-Meskael"
            />
            <label for="familySize"> Family size </label>
            <input
              type="text"
              name="familySize"
              id="familySize"
              // value={memberData.familySize}
              // onChange={handleChange}
              placeholder="Weld-Meskael"
            />
                         

                          <label htmlFor="male">Male</label>

            <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked={memberData.gender === "male"}
                onChange={handleChange2}
                />
                            <label htmlFor="female">Female</label>

              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={memberData.gender === "female"}
                onChange={handleChange2}
                />
          

            <label for="primaryPhone">Primary Phone </label>
            <input
              type="phone"
              name="primaryPhone"
              id="primaryPhone"
              value={memberData.primaryPhone}
              onChange={handleChange2}
              placeholder="+(123) 456-7890"
            />
            <label for="email">Enter Email </label>
            <input
              type="email"
              name="email"
              id="email"
              value={memberData.email}
              onChange={handleChange2}
              placeholder="jeo@abc.com"
            />
            <label for="email">Secondar Phone </label>
            <input
              type="phone"
              name="secondaryPhone"
              id="secondaryPhone"
              value={memberData.secondaryPhone}
              onChange={handleChange2}
              placeholder="+(123) 456-7890"
            />
          </section>
          <div className="new-line"></div>
            <Divider>Primary Address</Divider>
            <div className='container new-line'>
              <label>Street</label>
              <input
                name="street"
                placeholder="Street"
                type="text"
                value={memberData.addresses[0].street}
   onChange={(e) => handleChange(e, 0)}
              />
              <label>Street 2</label>
              <input
                name="street2"
                placeholder="Street 2"
                type="text"
                value={memberData.addresses[0].street2}
   onChange={(e) => handleChange(e, 0)}
              />
              <label>City</label>
              <input
                name="city"
                placeholder="City"
                type="text"
                value={memberData.addresses[0].city}
                onChange={(e) => handleChange(e, 0)}
                />
              <label>State</label>
              <input
                name="state"
                placeholder="State"
                type="text"
                value={memberData.addresses[0].state}
   onChange={(e) => handleChange(e, 0)}
              />
              <label>Country</label>
              <input
                name="country"
                placeholder="Country"
                type="text"
                value={memberData.addresses[0].country}
   onChange={(e) => handleChange(e, 0)}
              />
              <label>Zip Code</label>
              <input
                name="zip"
                placeholder="Zip Code"
                type="number"
                value={memberData.addresses[0].zip}
   onChange={(e) => handleChange(e, 0)}
              />
        </div>

          <Divider></Divider>
          {/* <Detail />
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
