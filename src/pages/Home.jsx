import React from "react";
import imageComponent from "./../assets/images/Component 1.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="d-flex flex-column justify-content-around px-4  container flex-md-row">
      <div className="d-flex flex-column align-items-start olaz px-4 py-4 m-0 mb-3">
        <h1 style={{ fontSize: "45px" }} className="fw-bold m-0">
          Manage your Tasks on{" "}
        </h1>
        <p style={{ color: "#974FD0", fontSize: "45px" }} className="fw-bold">
          TaskDuty
        </p>
        <p
          style={{ color: "#737171", fontSize: "24px" }}
          className=" text-start"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
          eveniet, necessitatibus consequatur praesentium fuga esse animi, a qui
          accusantium tempora nulla officia. Non quisquam accusamus, provident
          dolor atque sapiente quos?
        </p>
        <Link to="/tasks">
          <button
            style={{
              backgroundColor: "#974FD0",
              color: "white",
              fontSize: "20px",
            }}
            className="rounded-3 px-4 py-2  fw-bold border-0 "
          >
            Go to My Tasks
          </button>
        </Link>
      </div>
      <img src={imageComponent} alt="" className="ola py-4" />
    </div>
  );
};

export default Home;
