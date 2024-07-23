import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateInternPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [intern, setIntern] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
    requirements: "",
    duration: "",
    startDate: "",
    image: "",
  });

  useEffect(() => {
    const fetchIntern = async () => {
      try {
        const res = await fetch(`http://localhost:5000/internships/${id}`);
        const data = await res.json();
        setIntern(data);
      } catch (error) {
        console.log("Error in fetching data", error);
      }
    };

    fetchIntern();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIntern((prevIntern) => ({
      ...prevIntern,
      [name]: value,
    }));
  };

  const updateIntern = async (updatedIntern) => {
    try {
      await fetch(`http://localhost:5000/internships/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedIntern),
      });
      toast.success("Successfully updated the internship!");
      navigate("/internships");
    } catch (error) {
      console.log("Update failed!", error);
      toast.error("Failed to update the internship.");
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    updateIntern(intern);
  };

  return (
    <div className="container flex flex-col items-center gap-8 py-12">
      <h2 className="text-dark-gray text-2xl font-semibold lg:text-3xl">
        Update <span className="text-dark-blue">Internship</span>
      </h2>
      <form
        onSubmit={submitForm}
        className="flex w-full max-w-[900px] flex-col gap-4"
      >
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="title" className="text-dark-gray text-lg font-medium">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={intern.title}
            onChange={handleChange}
            className="w-full rounded-md border-2 border-slate-600 px-2 py-1"
            required
          />
        </div>
        <div className="flex gap-4">
          <div className="flex w-full flex-col items-start gap-2">
            <label
              htmlFor="company"
              className="text-dark-gray text-lg font-medium"
            >
              Company
            </label>
            <input
              type="text"
              name="company"
              id="company"
              value={intern.company}
              onChange={handleChange}
              className="w-full rounded-md border-2 border-slate-600 px-2 py-1"
              required
            />
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <label
              htmlFor="location"
              className="text-dark-gray text-lg font-medium"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={intern.location}
              onChange={handleChange}
              className="w-full rounded-md border-2 border-slate-600 px-2 py-1"
              required
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <label
            htmlFor="description"
            className="text-dark-gray text-lg font-medium"
          >
            Description
          </label>
          <textarea
            type="text"
            name="description"
            id="description"
            value={intern.description}
            onChange={handleChange}
            className="w-full rounded-md border-2 border-slate-600 px-2 py-1"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label
            htmlFor="requirements"
            className="text-dark-gray text-lg font-medium"
          >
            Requirements
          </label>
          <textarea
            type="text"
            name="requirements"
            id="requirements"
            value={intern.requirements}
            onChange={handleChange}
            className="w-full rounded-md border-2 border-slate-600 px-2 py-1"
            required
          />
        </div>
        <div className="flex gap-4">
          <div className="flex w-full flex-col items-start gap-2">
            <label
              htmlFor="duration"
              className="text-dark-gray text-lg font-medium"
            >
              Duration
            </label>
            <input
              type="text"
              name="duration"
              id="duration"
              value={intern.duration}
              onChange={handleChange}
              className="w-full rounded-md border-2 border-slate-600 px-2 py-1"
              required
            />
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <label
              htmlFor="startDate"
              className="text-dark-gray text-lg font-medium"
            >
              Start Date
            </label>
            <input
              type="text"
              name="startDate"
              id="startDate"
              value={intern.startDate}
              onChange={handleChange}
              className="w-full rounded-md border-2 border-slate-600 px-2 py-1"
              required
            />
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <label
              htmlFor="image"
              className="text-dark-gray text-lg font-medium"
            >
              Image URL
            </label>
            <input
              type="text"
              name="image"
              id="image"
              value={intern.image}
              onChange={handleChange}
              className="w-full rounded-md border-2 border-slate-600 px-2 py-1"
            />
          </div>
        </div>
        <button type="submit" className="cta-btn">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateInternPage;
