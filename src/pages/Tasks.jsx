import React from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import toast from "react-hot-toast";

const Tasks = ({ baseURL }) => {
  const { data, loading, error } = useFetch(`${baseURL}/api/task`);

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const options = {
      method: "DELETE",
    };
    const res = await fetch(`${baseURL}/api/task/${id}`, options);

    const data = await res.json();

    if (res.status === 200) {
      toast.success(data.message);
      setTimeout(() => {
        navigate(0);
      }, 1000);
      return;
    }
    toast.error("something went wrong");
  };

  return (
    <div>
      <div className="d-flex justify-content-between fw-bold container">
        <p style={{ fontSize: "24px" }}>My Tasks</p>
        <Link
          to="/new"
          className="text-decoration-none"
          style={{ color: "#974FD0" }}
        >
          + Add New Task
        </Link>
      </div>
      {data
        ? data.map((datum) => {
            let { title, description, tag } = datum;
            return (
              <div key={datum._id} className="border rounded container mb-5">
                <div className="d-flex align-items-center justify-content-between container p-3">
                  <p>{tag}</p>
                  <div className="d-flex gap-3 justify-content-center">
                    <Link
                      to={`/edit/${datum._id}`}
                      style={{ backgroundColor: "#974FD0", color: "white" }}
                      className="d-flex text-decoration-none align-items-center justify-content-center  px-4 rounded-3 gap-2"
                    >
                      <BiEdit />
                      <p className="m-0">Edit</p>
                    </Link>
                    <div
                      onClick={() => {
                        handleDelete(datum._id);
                      }}
                      style={{
                        backgroundColor: "white",
                        color: "#974FD0",
                        cursor: "pointer",
                      }}
                      className="d-flex align-items-center border justify-content-center px-3 py-1 rounded-3 px-3 gap-2"
                    >
                      <RiDeleteBin6Line />
                      <p className="m-0">Delete</p>
                    </div>
                  </div>
                </div>
                <hr className="container" />
                <div className="text-start container">
                  <h1>{title}</h1>
                  <p>{description}</p>
                </div>
              </div>
            );
          })
        : null}
      {loading ? <p> Loading...</p> : null}

      {error ? <p>{error}</p> : null}
    </div>
  );
};

export default Tasks;
