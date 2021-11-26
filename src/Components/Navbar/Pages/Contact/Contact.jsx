import React, { useState } from "react";
import ContactSty from "./Contact.module.css";
import ContactImage from "../../../../assets/ContactImage.png";
function Contact() {
  const [Data, setData] = useState({
    userName: "",
    email: "",
    subjects: "",
    message: "",
  });

  const getValue = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    const { userName, email, subjects, message } = Data;
    if(userName && email && subjects && message){

      const ref = await fetch(
        "https://react-firebase-website-ffe1d-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            userName,
            email,
            subjects,
            message,
          }),
        }
        );
        if (ref) {
          alert("Data stored");
          setData({
            userName: "",
            email: "",
            subjects: "",
            message: "",
          });
        } else {
          alert("please fill the data");
        }
      }else{
        alert('Please Fill the Data')
      }
      };
      
      return (
    <>
      <div className={ContactSty.contact}>
        <div className={ContactSty.left_side_contact}>
          <img src={ContactImage} alt="contactimage" />
        </div>
        <div className={ContactSty.right_side_contact}>
          <form autoComplete="off" method="post" onSubmit={submit}>
            <input
              type="text"
              name="userName"
              placeholder="Enter your name"
              value={Data.userName}
              onChange={getValue}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={Data.email}
              onChange={getValue}
            />
            <input
              type="text"
              name="subjects"
              placeholder="Enter subjects"
              value={Data.subjects}
              onChange={getValue}
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Message"
              value={Data.message}
              onChange={getValue}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
