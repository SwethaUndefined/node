import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [info, setInfo] = useState({
    name: "",
    age: "",
    department: ""
  });
  const [err, setErr] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    if (info.name == "") {
      setErr("This field is required");
    } else if (info.age == " " && info.age <= 18 && info.age >= 50) {
      setErr("Please provide valid details");
    } else {
      setErr("");
    }
  };
  console.log(info.name + "  " + info.age + "  " + info.department);
  return (
    <div>
      <form onSubmit={formHandler}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setInfo({ ...info, [e.target.name]: e.target.value });
          }}
        />
        <p style={{ color: "red", display: "inline" }}> {err}</p>
        <br />
        <br />
        <label>Age:</label>
        <input
          type="number"
          name="age"
          onChange={(e) => {
            setInfo({ ...info, [e.target.name]: e.target.value });
          }}
        />
        <p style={{ color: "red", display: "inline" }}> {err}</p>
        <br />
        <br />
        <label>Department:</label>
        <input
          type="text"
          name="department"
          onChange={(e) => {
            setInfo({ ...info, [e.target.name]: e.target.value });
          }}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
