import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PostInternPage = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState([]);
  const [requirements, setRequirements] = useState([]);
  const [duration, setDuration] = useState("");
  const [startDate, setStartDate] = useState("");
  const [image, setImage] = useState("");
  const [postedTime, setPostedTime] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [brief, setBrief] = useState("");

  const navigate = useNavigate();

  const newIntern = {
    title,
    company,
    location,
    description,
    skills,
    requirements,
    duration,
    startDate,
    image,
    postedTime,
    type,
    salary,
    brief,
  };

  // post a internship
  const postIntern = async (intern) => {
    try {
      await fetch("http://localhost:5000/internships", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(intern),
      });
    } catch (error) {
      console.log("post failed!", error);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    postIntern(newIntern);
    toast.success("Successfully added the internship!");
    navigate("/admin");
  };

  return (
    <div className="container flex flex-col items-center gap-8 py-12">
      <h2 className="text-dark-gray text-2xl font-semibold lg:text-3xl">
        Post a <span className="text-dark-blue">Internships</span>
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
              value={company}
              onChange={(e) => setCompany(e.target.value)}
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
              value={location}
              onChange={(e) => setLocation(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
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
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full rounded-md border-2 border-slate-600 px-2 py-1"
              required
            />
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <label
              htmlFor="startDate"
              className="text-dark-gray text-lg font-medium"
            >
              StartDate
            </label>
            <input
              type="text"
              name="startDate"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
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
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full rounded-md border-2 border-slate-600 px-2 py-1"
            />
          </div>
        </div>

        <button type="submit" className="cta-btn">
          Post
        </button>
      </form>
    </div>
  );
};

export default PostInternPage;
