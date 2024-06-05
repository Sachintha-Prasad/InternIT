import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const PostInternPage = () => {
    const [title, setTitle] = useState("")
    const [company, setCompany] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [skills, setSkills] = useState([])
    const [requirements, setRequirements] = useState([])
    const [duration, setDuration] = useState("")
    const [startDate, setStartDate] = useState("")
    const [image, setImage] = useState("")
    const [postedTime, setPostedTime] = useState("")
    const [type, setType] = useState("")
    const [salary, setSalary] = useState("")

    const navigate = useNavigate()

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
        salary
    }

    // post a internship
    const postIntern = async (intern) => {
        try {
            await fetch("http://localhost:5000/internships", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(intern)
            })
        } catch (error) {
            console.log("post failed!", error)
        }
    }

    const submitForm = (e) => {
        e.preventDefault()

        postIntern(newIntern)
        toast.success("Successfully added the internship!")
        navigate("/admin")
    }

    return (
        <div className="container py-12 flex flex-col gap-8 items-center">
            <h2 className="text-2xl lg:text-3xl text-dark-gray font-semibold">
                Post a <span className="text-dark-blue">Internships</span>
            </h2>
            <form
                onSubmit={submitForm}
                className="w-full max-w-[900px] flex flex-col gap-4"
            >
                <div className="flex flex-col gap-2 items-start">
                    <label
                        htmlFor="title"
                        className="text-lg text-dark-gray font-medium"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border-2 border-slate-600 rounded-md px-2 py-1 w-full"
                        required
                    />
                </div>
                <div className="flex gap-4">
                    <div className="flex flex-col gap-2 items-start w-full">
                        <label
                            htmlFor="company"
                            className="text-lg text-dark-gray font-medium"
                        >
                            Company
                        </label>
                        <input
                            type="text"
                            name="company"
                            id="company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="border-2 border-slate-600 rounded-md px-2 py-1 w-full"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2 items-start w-full">
                        <label
                            htmlFor="location"
                            className="text-lg text-dark-gray font-medium"
                        >
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="border-2 border-slate-600 rounded-md px-2 py-1 w-full"
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <label
                        htmlFor="description"
                        className="text-lg text-dark-gray font-medium"
                    >
                        Description
                    </label>
                    <textarea
                        type="text"
                        name="description"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border-2 border-slate-600 rounded-md px-2 py-1 w-full"
                    />
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <label
                        htmlFor="requirements"
                        className="text-lg text-dark-gray font-medium"
                    >
                        Requirements
                    </label>
                    <textarea
                        type="text"
                        name="requirements"
                        id="requirements"
                        value={requirements}
                        onChange={(e) => setRequirements(e.target.value)}
                        className="border-2 border-slate-600 rounded-md px-2 py-1 w-full"
                        required
                    />
                </div>
                <div className="flex gap-4">
                    <div className="flex flex-col gap-2 items-start w-full">
                        <label
                            htmlFor="duration"
                            className="text-lg text-dark-gray font-medium"
                        >
                            Duration
                        </label>
                        <input
                            type="text"
                            name="duration"
                            id="duration"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            className="border-2 border-slate-600 rounded-md px-2 py-1 w-full"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2 items-start w-full">
                        <label
                            htmlFor="startDate"
                            className="text-lg text-dark-gray font-medium"
                        >
                            StartDate
                        </label>
                        <input
                            type="text"
                            name="startDate"
                            id="startDate"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="border-2 border-slate-600 rounded-md px-2 py-1 w-full"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2 items-start w-full">
                        <label
                            htmlFor="image"
                            className="text-lg text-dark-gray font-medium"
                        >
                            Image URL
                        </label>
                        <input
                            type="text"
                            name="image"
                            id="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            className="border-2 border-slate-600 rounded-md px-2 py-1 w-full"
                        />
                    </div>
                </div>

                <button type="submit" className="cta-btn">
                    Post
                </button>
            </form>
        </div>
    )
}

export default PostInternPage
