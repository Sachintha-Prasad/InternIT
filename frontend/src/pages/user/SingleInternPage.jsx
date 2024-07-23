import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";

const SingleInternPage = () => {
  const [intern, setIntern] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
    requirements: [],
    skills: [],
    duration: "",
    startDate: "",
    image: "",
    postedTime: "",
    type: "",
    salary: "",
    brief: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const fetchIntern = async () => {
        const res = await fetch(`http://localhost:5000/internships/${id}`);
        const data = await res.json();
        setIntern(data);
      };

      fetchIntern();
    } catch (error) {
      console.log("Error in fetching data", error);
    }
  }, []);

  return (
    <div className="container py-8">
      <IoIosArrowRoundBack
        className="mb-4 cursor-pointer rounded-full text-[48px] text-indigo-400 hover:bg-indigo-50"
        onClick={() => navigate(-1)}
      />
      <div className="grid grid-cols-3 gap-6 gap-y-12 md:gap-12">
        <div className="col-span-3 flex w-full flex-col gap-4 md:flex-row md:gap-12">
          <aside className="flex flex-col gap-2 rounded-lg bg-gradient-to-r from-indigo-700 to-indigo-500 px-4 py-6">
            <img
              src={intern.image}
              alt=""
              className="mb-2 h-[60px] w-full max-w-[60px] rounded-lg object-cover ring-2 ring-white"
            />
            <p className="text-xl font-medium text-white">{intern.company}</p>
            <p className="text-slate-100">{intern.location}</p>
          </aside>

          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium md:text-4xl">{intern.title}</h1>
            <p className="w-full max-w-[800px]">{intern.description}</p>
          </div>
        </div>

        <hr className="col-span-3" />

        <div className="col-span-3 sm:col-span-1">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-1">
              <h2 className="font-semibold">Job Type |</h2>
              <p>{intern.type}</p>
            </div>
            <div className="flex flex-col items-start gap-1">
              <h2 className="font-semibold">Requirements |</h2>
              <div className="flex flex-wrap gap-3">
                {intern.requirements.map((item, index) => (
                  <p key={index} className="underline">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start gap-1">
              <h2 className="font-semibold">Skills |</h2>
              <div className="flex flex-wrap gap-3">
                {intern.skills.map((item, index) => (
                  <p key={index} className="underline">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <h2 className="font-semibold">Duration |</h2>
              <p>{intern.duration}</p>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <h2 className="font-semibold">Start Date |</h2>
              <p>{intern.startDate}</p>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <h2 className="font-semibold">Salary |</h2>
              <p>{intern.salary}</p>
            </div>
          </div>
        </div>

        <div className="col-span-3 flex flex-col gap-3 sm:col-span-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Brief</h2>
            <p>{intern.brief}</p>
          </div>
          <div className="mt-12">
            <Link to={`/apply-intern`} className="cta-btn">
              Apply now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleInternPage;
