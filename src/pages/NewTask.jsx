import React, { useState } from "react";
import imageComponent from "./../assets/images/eva_arrow-ios-back-fill.png";
import imageVector from "./../assets/images/Vector.png";
import { useNavigate } from "react-router-dom";
// import Dropdown from "../components/Dropdown";
import Dropdown1 from "../components/Dropdown1";
import toast from "react-hot-toast";

const NewTask = ({ baseURL }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("urgent");
  const [sending, setSending] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setSending(true);
    e.preventDefault();

    const formData = {
      title,
      description,
      tag,
    };
    const options = {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    const res = await fetch(`${baseURL}/api/task/create`, options);
    const data = await res.json();

    if (res.status === 400) {
      toast.error(data.message);
      setSending(false);
      return;
    }
    toast.success(data.message);
    setSending(false);
    navigate("/tasks");
  };

  return (
    <div className="container" style={{ cursor: "pointer" }}>
      <div
        onClick={() => {
          navigate(-1);
        }}
        className="d-flex align-items-center mb-5 "
      >
        <img style={{ fontSize: "45px" }} src={imageComponent} alt="" />
        <p style={{ fontSize: "45px" }} className="m-0">
          New Task
        </p>
      </div>
      <form onSubmit={handleSubmit} action="">
        <div className="position-relative mb-5">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="w-100 ps-4 p-3 border-2 border"
            type="text"
            placeholder="E.g Project Defense, Assignment..."
          />
          <p style={{ fontSize: "22px" }} className="tasktittle">
            Task Title
          </p>
        </div>
        <div className="position-relative mb-5">
          <textarea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="p-4 w-100"
            name=""
            id=""
            cols=""
            rows="10"
            placeholder="Breifly Describe your task..."
          ></textarea>
          <p style={{ fontSize: "22px" }} className="tasktittle">
            Description
          </p>
        </div>

        {/* <Dropdown /> */}
        <Dropdown1 setTag={setTag} />

        <button
          disabled={sending}
          style={{
            backgroundColor: "#974FD0",
            color: "white",
            fontSize: "20px",
          }}
          className="w-100 p-3 border-0 rounded-1 mb-5"
        >
          Done
        </button>
      </form>

      <a href="" style={{ color: "#974FD0" }}>
        Back to Top
      </a>
    </div>
  );
};

export default NewTask;
