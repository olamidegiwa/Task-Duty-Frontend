import React, { useEffect, useState } from "react";
import imageComponent from "./../assets/images/eva_arrow-ios-back-fill.png";
import imageVector1 from "./../assets/images/Vector (1).png";
import { useNavigate, useParams } from "react-router-dom";
// import Dropdown from "../components/Dropdown";
import Dropdown1 from "../components/Dropdown1";
import { useFetch } from "../hooks/useFetch";
import toast from "react-hot-toast";

const EditTask = ({ baseURL }) => {
  const { id } = useParams();
  console.log(id);

  const { data, loading, error } = useFetch(`${baseURL}/api/task/${id}`);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("urgent");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setDescription(data.description);
    }
  }, [data]);

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
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const res = await fetch(`${baseURL}/api/task/${id}`, options);
    const data = await res.json();

    if (res.status === 200) {
      toast.success(data.message);
      navigate("/tasks");
      return;
    }
    toast.error("something went wrong");
  };

  return (
    <div className="container">
      <div
        onClick={() => {
          navigate(-1);
        }}
        className="d-flex align-items-center mb-5 "
        style={{ cursor: "pointer" }}
      >
        <img style={{ fontSize: "45px" }} src={imageComponent} alt="" />
        <p style={{ fontSize: "45px" }} className="m-0">
          Edit Task
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
            value={title}
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
            value={description}
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

      <a href="#" style={{ color: "#974FD0" }}>
        Back To Top
      </a>
    </div>
  );
};

export default EditTask;
