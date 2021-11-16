import React from "react";
import ContactSty from "./Contact.module.css";
import ContactImage from "../../../../assets/ContactImage.png";
function Contact() {
  // const [input, setInput] = useState({
  //   username: "",
  //   email: "",
  //   subjects: "",
  //   message: "",
  // });
  // const getValue = (e) => {
  //   setInput({
  //     [e.target.name]: [e.target.value],
  //   });
  // };
  // const submit = (e) => {
  //   e.preventDefault();
  //   alert(`${username} ${email} ${subjects} ${message}`);
  // };
  return (
    <>
      <div className={ContactSty.contact}>
        <div className={ContactSty.left_side_contact}>
          <img src={ContactImage} alt="contactimage" />
        </div>
        <div className={ContactSty.right_side_contact}>
          <form autoComplete="off" >
            <input
              type="text"
              name="username"
              // value={input.username}
              // onChange={getValue}
              placeholder="Enter your name"
            />
            <input
              type="email"
              name="email"
              // value={input.email}
              // onChange={getValue}
              placeholder="Enter your email"
            />
            <input
              type="text"
              name="subjects"
              // value={input.subjects}
              // onChange={getValue}
              placeholder="Enter subjects"
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              // value={input.message}
              // onChange={getValue}
              placeholder="Message"
            ></textarea>
            <button type="submit" >Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
