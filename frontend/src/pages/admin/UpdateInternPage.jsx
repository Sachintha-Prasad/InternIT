import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"

const UpdateInternPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [intern, setIntern] = useState({
        title: "",
        company: "",
        location: "",
        description: "",
        requirements: "",
        duration: "",
        startDate: "",
        image: ""
    })

    useEffect(() => {
        const fetchIntern = async () => {
            try {
                const res = await fetch(
                    `http://localhost:5000/internships/${id}`
                )
                const data = await res.json()
                setIntern(data)
            } catch (error) {
                console.log("Error in fetching data", error)
            }
        }

        fetchIntern()
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target
        setIntern((prevIntern) => ({
            ...prevIntern,
            [name]: value
        }))
    }

    const updateIntern = async (updatedIntern) => {
        try {
            await fetch(`http://localhost:5000/internships/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedIntern)
            })
            toast.success("Successfully updated the internship!")
            navigate("/internships")
        } catch (error) {
            console.log("Update failed!", error)
            toast.error("Failed to update the internship.")
        }
    }

    const submitForm = (e) => {
        e.preventDefault()
        updateIntern(intern)
    }

    return (
        <div className="container py-12 flex flex-col gap-8 items-center">
            <h2 className="text-2xl lg:text-3xl text-dark-gray font-semibold">
                Update <span className="text-dark-blue">Internship</span>
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
                        value={intern.title}
                        onChange={handleChange}
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
                            value={intern.company}
                            onChange={handleChange}
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
                            value={intern.location}
                            onChange={handleChange}
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
                        value={intern.description}
                        onChange={handleChange}
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
                        value={intern.requirements}
                        onChange={handleChange}
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
                            value={intern.duration}
                            onChange={handleChange}
                            className="border-2 border-slate-600 rounded-md px-2 py-1 w-full"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2 items-start w-full">
                        <label
                            htmlFor="startDate"
                            className="text-lg text-dark-gray font-medium"
                        >
                            Start Date
                        </label>
                        <input
                            type="text"
                            name="startDate"
                            id="startDate"
                            value={intern.startDate}
                            onChange={handleChange}
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
                            value={intern.image}
                            onChange={handleChange}
                            className="border-2 border-slate-600 rounded-md px-2 py-1 w-full"
                        />
                    </div>
                </div>
                <button type="submit" className="cta-btn">
                    Update
                </button>
            </form>
        </div>
    )
}

export default UpdateInternPage
