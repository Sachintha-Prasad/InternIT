import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";
// import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid"

const ApplyInternPage = () => {
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  const newUser = {
    name,
    phone,
    email,
    linkedin,
    github,
  };

  const applyIntern = async (user) => {
    try {
      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
    } catch (error) {
      console.log("POST error", error);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    try {
      applyIntern(newUser);
      toast.success("Application sent successfully!");
      navigate("/");
    } catch (error) {
      console.log("error submit", error);
    }
  };

  return (
    <div className="container flex flex-col items-center py-12">
      <div className="flex w-full max-w-[600px] flex-col items-start justify-start gap-2">
        <IoIosArrowRoundBack
          className="cursor-pointer rounded-full text-[48px] text-indigo-400 hover:bg-indigo-50"
          onClick={() => navigate(-1)}
        />
        <div className="w-full">
          <h1 className="text-2xl font-medium">Intern application</h1>
          <p>Fill the following application to apply.</p>
        </div>
      </div>
      <form
        onSubmit={submitForm}
        className="mt-8 flex w-full max-w-[600px] flex-col gap-6"
      >
        <div>
          <label htmlFor="name" className="block">
            Name
          </label>

          <input
            id="name"
            type="text"
            className="mt-2 w-full rounded-md p-2 ring-1 ring-gray-400 focus:outline-indigo-500"
            placeholder="Enter your name.."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block">
            Phone number
          </label>

          <input
            id="phone"
            type="text"
            className="mt-2 w-full rounded-md p-2 ring-1 ring-gray-400 focus:outline-indigo-500"
            placeholder="Enter your number.."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="mt-2 w-full rounded-md p-2 ring-1 ring-gray-400 focus:outline-indigo-500"
            placeholder="Enter your email.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <div className="w-full">
            <label htmlFor="linkedin" className="block">
              Linkedin URL
            </label>
            <input
              id="linkedin"
              type="text"
              className="mt-2 w-full rounded-md p-2 ring-1 ring-gray-400 focus:outline-indigo-500"
              placeholder="Enter your linkedin url.."
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="github" className="block">
              Github URL
            </label>
            <input
              id="github"
              type="text"
              className="mt-2 w-full rounded-md p-2 ring-1 ring-gray-400 focus:outline-indigo-500"
              placeholder="Enter your github url.."
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="cta-btn mt-4">
          Apply
        </button>
      </form>
    </div>
  );
};

export default ApplyInternPage;
