import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_MEMBER } from '../../utils/queries';
import { UPDATE_MEMBER } from '../../utils/mutations';
import { Divider } from 'antd';

function EditMemberForm({ memberId }) {
  const [memberData, setMemberData] = useState({});
  const { loading, error, data } = useQuery(GET_MEMBER, {
    variables: { memberId },
  });
  const [updateMember] = useMutation(UPDATE_MEMBER);

  useEffect(() => {
    if (data && data.getMember) {
      setMemberData(data.getMember);
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateMember({
        variables: {
          memberId,
          memberInput: memberData,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemberData({
      ...memberData,
      [name]: value,
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="App">
      <h1>Edit Member</h1>
      <div className="new-line"></div>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <Divider>Member Details</Divider>
          <label htmlFor="memberNumber">Member ID</label>
          <input
            type="text"
            name="memberNumber"
            id="memberNumber"
            value={memberData.memberNumber}
            onChange={handleChange}
            required
          />
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={memberData.firstName}
            onChange={handleChange}
            required
          />
          <label htmlFor="middleName">Middle Name</label>
          <input
            type="text"
            name="middleName"
            id="middleName"
            value={memberData.middleName}
            onChange={handleChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={memberData.lastName}
            onChange={handleChange}
            required
          />
          <label htmlFor="baptismalName">Baptismal Name</label>
          <input
            type="text"
            name="baptismalName"
            id="baptismalName"
            value={memberData.baptismalName}
            onChange={handleChange}
          />
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            value={memberData.gender}
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <label htmlFor="primaryPhone">Primary Phone</label>
          <input
            type="phone"
            name="primaryPhone"
            id="primaryPhone"
            value={memberData.primaryPhone}
            onChange={handleChange}
          />
          <label htmlFor="secondaryPhone">Secondary Phone</label>
          <input
            type="phone"
            name="secondaryPhone"
            id="secondaryPhone"
            value={memberData.secondaryPhone}
            onChange={handleChange}
          />
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={memberData.startDate}
            onChange={handleChange}
          />
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            value={memberData.endDate}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={memberData.email}
            onChange={handleChange}
          />
          <Divider></Divider>
          
          <button type="submit">Update</button>
        </form>
      </fieldset>
    </div>
  );
}

export default EditMemberForm;
