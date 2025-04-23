import { useState } from "react"
import {  UserIcon } from "lucide-react"
import { Button } from "../components/ui/Button"
import { Link } from "react-router-dom"

// Initial form state
const initialUserData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "",
  personalInfo: {
    fullName: "",
    dateOfBirth: undefined,
    gender: "",
    location: "",
    emailAddress: "",
    phoneNumber: "",
  },
  vaccinationHistory: {
    vaccines: [],
    other: "",
  },
  healthInfo: {
    conditions: [],
    other: "",
  },
  medications: {
    name: "",
    dosage: "",
    purpose: "",
    none: false,
  },
}

export default function VaccineSignup() {
  // Form state
  const [userData, setUserData] = useState(initialUserData)

  // UI state
  const [currentStep, setCurrentStep] = useState("signup")
  const [formStep, setFormStep] = useState(1)
  const [isSignedUp, setIsSignedUp] = useState(false)

  // Handle signup form submission
  const handleSignup = (e) => {
    e.preventDefault()
    setIsSignedUp(true)
    setCurrentStep("role")
  }

  // Handle role selection
  const handleRoleSelect = (role) => {
    setUserData({ ...userData, role })
    setCurrentStep("form")
  }

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target

    if (name.includes(".")) {
      const [section, field] = name.split(".")
      setUserData({
        ...userData,
        [section]: {
          ...userData[section],
          [field]: value,
        },
      })
    } else {
      setUserData({ ...userData, [name]: value })
    }
  }

  // Handle checkbox/radio changes
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target

    if (name === "medications.none") {
      setUserData({
        ...userData,
        medications: {
          ...userData.medications,
          none: checked,
        },
      })
      return
    }

    if (name === "vaccinationHistory.vaccines") {
      const updatedVaccines = [...userData.vaccinationHistory.vaccines]

      if (checked) {
        updatedVaccines.push(value)
      } else {
        const index = updatedVaccines.indexOf(value)
        if (index > -1) {
          updatedVaccines.splice(index, 1)
        }
      }

      setUserData({
        ...userData,
        vaccinationHistory: {
          ...userData.vaccinationHistory,
          vaccines: updatedVaccines,
        },
      })
      return
    }

    if (name === "healthInfo.conditions") {
      const updatedConditions = [...userData.healthInfo.conditions]

      if (checked) {
        updatedConditions.push(value)
      } else {
        const index = updatedConditions.indexOf(value)
        if (index > -1) {
          updatedConditions.splice(index, 1)
        }
      }

      setUserData({
        ...userData,
        healthInfo: {
          ...userData.healthInfo,
          conditions: updatedConditions,
        },
      })
    }
  }

  // Handle date selection
  const handleDateSelect = (date) => {
    setUserData({
      ...userData,
      personalInfo: {
        ...userData.personalInfo,
        dateOfBirth: date,
      },
    })
  }

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault()

    if (formStep < 4) {
      setFormStep(formStep + 1)
    } else {
      // Submit the complete form data
      console.log("Form submitted:", userData)
      // Here you would typically send the data to your backend
      alert("Form submitted successfully!")
    }
  }

  // Render the signup form
  if (currentStep === "signup") {
    return (
      <div className="flex min-h-screen w-full bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-16 h-24 md:w-[112px] md:h-[177px] bg-[#0056B3] rounded-br-[100px]">   
        </div>
        <Link to="/" className="absolute left-4 md:left-9 text-2xl font-bold text-[#010B2A]">
            <img
              src="../../logo.png"
              alt="Logo"
              className="h-20 md:h-30 w-auto"
            />
        </Link>

        {/* Main content container */}
        <div className="container z-10 mx-auto mt-20 px-6 py-12 flex flex-col md:flex-row items-center justify-between relative ">
          {/* Left side content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-[45px] font-bold mb-2">
              Join the Future of <br /> <span className="bg-gradient-to-r from-[#010B2A] to-[#0056B3] bg-clip-text text-transparent">Vaccine Trials</span>
            </h1>
            <p className="text-[25px] mb-8">AI-Powered, Secure, and Transparent</p>

            {/* Medical professionals illustration */}
            <div className="w-full max-w-md">
              <img
                src="https://c.animaapp.com/m8sv2x5wuEhcZn/img/story-board-21-2.png"
                alt="Medical professionals with vaccine"
                className="w-full"
              />
            </div>
          </div>

          {/* Right side form */}
          <div className="md:w-1/2 mb-10 mt-3 max-w-md">
            <p className="text-lg mb-2">Start For Free</p>
            <h2 className="text-4xl font-bold mb-2">
              Create new account<span className="text-blue-600 text-4xl font-bold">.</span>
            </h2>
            <p className="mb-8">
              Already a member?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Log in
              </a>
            </p>

            {/* Registration form */}
            <form className="space-y-4" onSubmit={handleSignup}>
              <div className="flex gap-4 z-0">
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    value={userData.firstName}
                    onChange={handleInputChange}
                    name="firstName"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    value={userData.lastName}
                    onChange={handleInputChange}
                    name="lastName"
                    required
                  />
                </div>
              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={userData.email}
                onChange={handleInputChange}
                name="email"
                required
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={userData.password}
                onChange={handleInputChange}
                name="password"
                required
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={userData.confirmPassword}
                onChange={handleInputChange}
                name="confirmPassword"
                required
              />

            <div className="flex items-end justify-end mb-4">
                <Button
                    type="submit"
                    className="w-[223px] h-[60px] py-3 px-4 bg-white hover:bg-[#010B2A] border border-[#010B2A] text-[#010B2A] hover:text-white font-medium rounded-md  transition-colors mt-4"
                >
                    Create account
                </Button>
            </div>
            </form>
          </div>
        </div>

        {/* Decorative dotted curved line */}
        <div className="absolute bottom-30 w-full right-0 h-64 z-0 pointer-events-none">
          <img src="https://c.animaapp.com/m8sql0mhBjidY2/img/vector-2-1.svg" alt="" />
        </div>
      </div>
    )
  }

  // Render the role selection screen
  if (currentStep === "role") {
    return (
      <div className="min-h-screen w-full bg-white relative overflow-hidden">
        {/* Blue curved shape on left */}
        <div className="absolute top-0 left-0 w-16 h-24 md:w-[112px] md:h-[177px] bg-[#0056B3] rounded-br-[100px]">   
        </div>
        <Link to="/" className="absolute left-4 md:left-9 text-2xl font-bold text-[#010B2A]">
            <img
              src="../../logo.png"
              alt="Logo"
              className="h-20 md:h-30 w-auto"
            />
        </Link>

        {/* Main content container */}
        <div className="container mx-auto mt-7 md:mt-25 px-4 py-12 relative z-10">
          <div className="p-8 mx-auto w-full">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              Let's personalize your <span className="block">experience!</span>
            </h1>

            <p className="text-lg md:text-xl mb-12 mt-4">
              Answer a few quick questions so we can match you with the best vaccine trials.
            </p>

            <div className="flex flex-col md:flex-row w-full justify-between items-center md:items-start">
              <div className="flex flex-col items-start justify-center space-y-4 mb-8 md:w-1/2">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-blue-600"
                    name="role"
                    checked={userData.role === "volunteer"}
                    onChange={() => setUserData({ ...userData, role: "volunteer" })}
                  />
                  <span className="text-base md:text-lg font-bold">
                    I'm a Volunteer <span className=" font-medium">(Trial Participant)</span>
                  </span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-gray-400"
                    name="role"
                    checked={userData.role === "researcher"}
                    onChange={() => setUserData({ ...userData, role: "researcher" })}
                  />
                  <span className="text-base md:text-lg font-bold">
                    I'm a Researcher / Healthcare Provider
                  </span>
                </label>
              </div>

              <div className="flex justify-center md:justify-end items-center md:w-1/2">
                <div className="w-3/4 md:w-full">
                  <img
                    src="https://c.animaapp.com/m8sv2x5wuEhcZn/img/story-board-21-2.png"
                    alt="Medical professionals with vaccine"
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-end mt-8">
              <Button
                onClick={() => handleRoleSelect(userData.role || "volunteer")}
                className="py-3 px-8 w-full md:w-[223px] md:h-[60px]  bg-white hover:bg-[#010B2A] border border-[#010B2A] text-[#010B2A] hover:text-white font-medium rounded-md transition-colors"
              >
                Get started
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative dotted curved line */}
        <div className="absolute bottom-30 w-full right-0 h-64 z-0 pointer-events-none">
          <img src="https://c.animaapp.com/m8sql0mhBjidY2/img/vector-2-1.svg" alt="" />
        </div>
      </div>
    );
  }

  // Render the multi-step form
  return (
    <div className="flex min-h-screen w-full bg-white relative overflow-hidden">
      {/* Blue curved shape on left */}
      <div className="absolute top-0 left-0 w-[80px] md:w-[111px] h-[120px] md:h-[176px] bg-[#0056B3] rounded-br-[100px]" />

      {/* Main content container */}
      <div className="container mx-auto px-4 py-12 flex flex-col items-start justify-start relative z-10">
        <div className="max-w-3xl mx-auto w-full">
          {/* Progress bar */}
          <div className="mb-20 mt-24 md:mt-12 px-5 md:px-0">
            <div className="relative flex items-center justify-between">
              {/* Base line */}
              <div className="absolute left-0 h-[9px] top-1/2  w-full -translate-y-1/2 bg-gray-200 z-0" />

              {/* Progress overlay gradient */}
              <div
                className="absolute left-0 top-1/2 h-[9px] -translate-y-1/2 bg-gradient-to-r from-blue-900 via-blue-400 to-transparent z-10 transition-all duration-500"
                style={{ width: `${(formStep - 1) / 3 * 100}%` }}
              />

              {/* Steps */}
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="relative z-20 flex flex-col items-center">
                  <div
                    className={`h-4 w-4 rounded-full ${
                      formStep >= step ? "bg-black" : "bg-gray-300"
                    }`}
                  ></div>
                  <div
                    className={`absolute -bottom-6 whitespace-nowrap text-[16px] ${
                      formStep >= step ? "text-[#3D3D3D]" : "text-gray-400"
                    }`}
                  >
                    Step {step}
                  </div>
                </div>
              ))}
            </div>
          </div>

            {/* Step 1: Personal Information */}
            {formStep === 1 && (
                <form onSubmit={handleFormSubmit} className="lg:mt-10">
                    <h1 className="text-3xl md:text-4xl font-semibold mb-8 text-[#000E42]">
                    <span className="bg-gradient-to-r from-[#010B2A] to-[#0056B3] bg-clip-text text-transparent">Tell us about yourself</span>
                        <span className="text-[#0B4DFF]"> !</span>
                    </h1>
                    <div className="mt-25">
                            {/* Left form section */}
                            <div className="flex flex-wrap gap-5 md:gap-0 justify-between">
                                <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            name="personalInfo.fullName"
                                            value={userData.personalInfo.fullName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border font-bold border-gray-300 rounded-md placeholder-gray-500"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="date"
                                            className="w-full px-4 py-3 font-bold flex items-center justify-between border border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div>
                                        <select
                                            name="personalInfo.gender"
                                            value={userData.personalInfo.gender}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border font-bold border-gray-300 rounded-md placeholder-gray-500"
                                        >
                                            <option value="" disabled>
                                                Select Gender
                                            </option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>

                                    <div className="md:col-span-2">
                                        <input
                                            type="text"
                                            placeholder="Location"
                                            name="personalInfo.location"
                                            value={userData.personalInfo.location}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border font-bold border-gray-300 rounded-md placeholder-gray-500"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Email address"
                                            name="personalInfo.emailAddress"
                                            value={userData.personalInfo.emailAddress}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border font-bold border-gray-300 rounded-md placeholder-gray-500"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="tel"
                                            placeholder="Phone number"
                                            name="personalInfo.phoneNumber"
                                            value={userData.personalInfo.phoneNumber}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border font-bold border-gray-300 rounded-md placeholder-gray-500"
                                        />
                                    </div>
                                </div>

                                {/* Right image upload section */}
                                                <div className="w-full lg:w-64 h-64 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 relative">
                                                  {userData.personalInfo.image ? (
                                                    <div className="relative">
                                                      <img
                                                        src={URL.createObjectURL(userData.personalInfo.image)}
                                                        alt="Uploaded"
                                                        className="w-full h-full object-cover rounded-lg"
                                                      />
                                                      <button
                                                        onClick={() =>
                                                          setUserData({
                                                            ...userData,
                                                            personalInfo: { ...userData.personalInfo, image: null },
                                                          })
                                                        }
                                                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                                                      >
                                                        ✕
                                                      </button>
                                                    </div>
                                                  ) : (
                                                    <div className="flex flex-col items-center">
                                                      <label
                                                        htmlFor="imageUpload"
                                                        className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
                                                      >
                                                        <UserIcon className="text-white" />
                                                      </label>
                                                      <p className="mt-2 text-sm text-gray-500">Upload Profile Picture</p>
                                                      <input
                                                        type="file"
                                                        id="imageUpload"
                                                        accept="image/*"
                                                        className="hidden"
                                                        onChange={(e) => {
                                                          const file = e.target.files[0]
                                                          if (file) {
                                                            setUserData({
                                                              ...userData,
                                                              personalInfo: { ...userData.personalInfo, image: file },
                                                            })
                                                          }
                                                        }}
                                                      />
                                                    </div>
                                                  )}
                                                </div>
                                              </div>
                                          </div> 
                                          <div className="w-full mt-10 lg:mt-10 flex justify-end lg:justify-end">
                                          <button
                                            type="submit"
                                            className="px-8 py-3 bg-white hover:bg-[#010B2A] border border-[#010B2A] text-[#010B2A] hover:text-white font-medium rounded-md transition"
                                          >
                                            Continue
                                          </button>
                                          </div>
                                        </form>
            )}

                                          {/* Step 3: Health Information */}
            {formStep === 2 && (
            <form onSubmit={handleFormSubmit}>
              <h1 className="text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-[#010B2A] to-[#0056B3] bg-clip-text text-transparent">Your Health & Trial Preferences</span><span className="text-blue-600">.</span>
              </h1>

              <div className="mb-8">
                <h2 className="text-xl font-medium mb-4 flex items-center">
                  <span className="h-4 w-4 rounded-full bg-blue-900 mr-2"></span>
                  Pre-existing Conditions
                </h2>

                <div className="flex flex-wrap gap-3 mb-8">
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-full border ${
                      userData.healthInfo.conditions.includes("Diabetes")
                        ? "bg-[#010B2C] text-white"
                        : "border-[#010B2A] bg-white hover:border-blue-500"
                    }`}
                    onClick={() => {
                      const conditions = [...userData.healthInfo.conditions]
                      const index = conditions.indexOf("Diabetes")
                      if (index > -1) {
                        conditions.splice(index, 1)
                      } else {
                        conditions.push("Diabetes")
                      }
                      setUserData({
                        ...userData,
                        healthInfo: {
                          ...userData.healthInfo,
                          conditions,
                        },
                      })
                    }}
                  >
                    Diabetes
                  </button>

                  <button
                    type="button"
                    className={`px-4 py-2 rounded-full border ${
                      userData.healthInfo.conditions.includes("Hypertension")
                        ? "bg-[#010B2C] text-white"
                        : "border-[#010B2A] bg-white hover:border-blue-500"
                    }`}
                    onClick={() => {
                      const conditions = [...userData.healthInfo.conditions]
                      const index = conditions.indexOf("Hypertension")
                      if (index > -1) {
                        conditions.splice(index, 1)
                      } else {
                        conditions.push("Hypertension")
                      }
                      setUserData({
                        ...userData,
                        healthInfo: {
                          ...userData.healthInfo,
                          conditions,
                        },
                      })
                    }}
                  >
                    Hypertension
                  </button>

                  <button
                    type="button"
                    className={`px-4 py-2 rounded-full border ${
                      userData.healthInfo.conditions.includes("Asthama")
                        ? "bg-[#010B2C] text-white"
                        : "border-[#010B2A] bg-white hover:border-blue-500"
                    }`}
                    onClick={() => {
                      const conditions = [...userData.healthInfo.conditions]
                      const index = conditions.indexOf("Asthama")
                      if (index > -1) {
                        conditions.splice(index, 1)
                      } else {
                        conditions.push("Asthama")
                      }
                      setUserData({
                        ...userData,
                        healthInfo: {
                          ...userData.healthInfo,
                          conditions,
                        },
                      })
                    }}
                  >
                    Asthama
                  </button>

                  <button
                    type="button"
                    className={`px-4 py-2 rounded-full border ${
                      userData.healthInfo.conditions.includes("Autoimmune Disorders")
                        ? "bg-[#010B2C] text-white"
                        : "border-[#010B2A] bg-white hover:border-blue-500"
                    }`}
                    onClick={() => {
                      const conditions = [...userData.healthInfo.conditions]
                      const index = conditions.indexOf("Autoimmune Disorders")
                      if (index > -1) {
                        conditions.splice(index, 1)
                      } else {
                        conditions.push("Autoimmune Disorders")
                      }
                      setUserData({
                        ...userData,
                        healthInfo: {
                          ...userData.healthInfo,
                          conditions,
                        },
                      })
                    }}
                  >
                    Autoimmune Disorders
                  </button>

                  <button
                    type="button"
                    className={`px-4 py-2 rounded-full border ${
                      userData.healthInfo.conditions.includes("Heart Disease")
                        ? "bg-[#010B2C] text-white"
                        : "border-[#010B2A] bg-white hover:border-blue-500"
                    }`}
                    onClick={() => {
                      const conditions = [...userData.healthInfo.conditions]
                      const index = conditions.indexOf("Heart Disease")
                      if (index > -1) {
                        conditions.splice(index, 1)
                      } else {
                        conditions.push("Heart Disease")
                      }
                      setUserData({
                        ...userData,
                        healthInfo: {
                          ...userData.healthInfo,
                          conditions,
                        },
                      })
                    }}
                  >
                    Heart Disease
                  </button>

                  <button
                    type="button"
                    className={`px-4 py-2 rounded-full border ${
                      userData.healthInfo.conditions.includes("Lung Disease")
                        ? "bg-[#010B2C] text-white"
                        : "border-[#010B2A] bg-white hover:border-blue-500"
                    }`}
                    onClick={() => {
                      const conditions = [...userData.healthInfo.conditions]
                      const index = conditions.indexOf("Lung Disease")
                      if (index > -1) {
                        conditions.splice(index, 1)
                      } else {
                        conditions.push("Lung Disease")
                      }
                      setUserData({
                        ...userData,
                        healthInfo: {
                          ...userData.healthInfo,
                          conditions,
                        },
                      })
                    }}
                  >
                    Lung Disease
                  </button>

                  <button
                    type="button"
                    className={`px-4 py-2 rounded-full border ${
                      userData.healthInfo.conditions.includes("Chronic Kidney Disease")
                        ? "bg-[#010B2C] text-white"
                        : "border-[#010B2A] bg-white hover:border-blue-500"
                    }`}
                    onClick={() => {
                      const conditions = [...userData.healthInfo.conditions]
                      const index = conditions.indexOf("Chronic Kidney Disease")
                      if (index > -1) {
                        conditions.splice(index, 1)
                      } else {
                        conditions.push("Chronic Kidney Disease")
                      }
                      setUserData({
                        ...userData,
                        healthInfo: {
                          ...userData.healthInfo,
                          conditions,
                        },
                      })
                    }}
                  >
                    Chronic Kidney Disease
                  </button>

                  <button
                    type="button"
                    className={`px-4 py-2 rounded-full border ${
                      userData.healthInfo.conditions.includes("Cancer")
                        ? "bg-[#010B2C] text-white"
                        : "border-[#010B2A] bg-white hover:border-blue-500"
                    }`}
                    onClick={() => {
                      const conditions = [...userData.healthInfo.conditions]
                      const index = conditions.indexOf("Cancer")
                      if (index > -1) {
                        conditions.splice(index, 1)
                      } else {
                        conditions.push("Cancer")
                      }
                      setUserData({
                        ...userData,
                        healthInfo: {
                          ...userData.healthInfo,
                          conditions,
                        },
                      })
                    }}
                  >
                    Cancer
                  </button>

                  <button
                    type="button"
                    className={`px-4 py-2 rounded-full border ${
                      userData.healthInfo.conditions.includes("Neurological Disorders")
                        ? "bg-[#010B2C] text-white"
                        : "border-[#010B2A] bg-white hover:border-blue-500"
                    }`}
                    onClick={() => {
                      const conditions = [...userData.healthInfo.conditions]
                      const index = conditions.indexOf("Neurological Disorders")
                      if (index > -1) {
                        conditions.splice(index, 1)
                      } else {
                        conditions.push("Neurological Disorders")
                      }
                      setUserData({
                        ...userData,
                        healthInfo: {
                          ...userData.healthInfo,
                          conditions,
                        },
                      })
                    }}
                  >
                    Neurological Disorders
                  </button>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-medium mb-4 flex items-center">
                    <span className="h-4 w-4 rounded-full bg-blue-900 mr-2"></span>
                    Other
                  </h2>

                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-[#010B2A] rounded-4xl bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Please specify....."
                    name="healthInfo.other"
                    value={userData.healthInfo.other}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="py-3 px-8  bg-white hover:bg-[#010B2A] border border-[#010B2A] text-[#010B2A] hover:text-white font-medium rounded-md transition-colors"
                >
                  Save and Continue
                </button>
              </div>
            </form>
          )}


          {/* Step 2: Vaccination History */}
          {formStep === 3 && (
                <form onSubmit={handleFormSubmit}>
                  <h1 className="text-3xl md:text-[45px] font-bold mb-2 bg-gradient-to-r from-[#010B2A] to-[#0056B3] bg-clip-text text-transparent">
                  Vaccination History<span className="text-blue-600">.</span>
                  </h1>
                  <p className="text-lg mb-8">Which Vaccines have you received in the past?</p>

                  <div className="space-y-4 mb-8">
                  <label className="flex items-center space-x-3">
                    <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-[#010B2A] bg-white border-2 border-[#010B2A] appearance-none rounded-full checked:bg-[#010B2A] checked:border-[#010B2A] focus:outline-none transition duration-200"
                    name="vaccinationHistory.vaccines"
                    value="COVID 19"
                    checked={userData.vaccinationHistory.vaccines.includes("COVID 19")}
                    onChange={handleCheckboxChange}
                    />
                    <span className="text-[18px] md:text-[20px]">COVID 19</span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                    type="checkbox"
                     className="form-checkbox h-5 w-5 text-[#010B2A] bg-white border-2 border-[#010B2A] appearance-none rounded-full checked:bg-[#010B2A] checked:border-[#010B2A] focus:outline-none transition duration-200"
                    name="vaccinationHistory.vaccines"
                    value="Influenza shot"
                    checked={userData.vaccinationHistory.vaccines.includes("Influenza shot")}
                    onChange={handleCheckboxChange}
                    />
                    <span className="text-[18px] md:text-[20px]">Influenza shot</span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                    type="checkbox"
                     className="form-checkbox h-5 w-5 text-[#010B2A] bg-white border-2 border-[#010B2A] appearance-none rounded-full checked:bg-[#010B2A] checked:border-[#010B2A] focus:outline-none transition duration-200"
                    name="vaccinationHistory.vaccines"
                    value="Hepatitis A and B"
                    checked={userData.vaccinationHistory.vaccines.includes("Hepatitis A and B")}
                    onChange={handleCheckboxChange}
                    />
                    <span className="text-[18px] md:text-[20px]">Hepatitis A and B</span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                    type="checkbox"
                     className="form-checkbox h-5 w-5 text-[#010B2A] bg-white border-2 border-[#010B2A] appearance-none rounded-full checked:bg-[#010B2A] checked:border-[#010B2A] focus:outline-none transition duration-200"
                    name="vaccinationHistory.vaccines"
                    value="Tetanus, Diphtheria and Pertussis ( TDAP )"
                    checked={userData.vaccinationHistory.vaccines.includes(
                      "Tetanus, Diphtheria and Pertussis ( TDAP )",
                    )}
                    onChange={handleCheckboxChange}
                    />
                    <span className="text-[18px] md:text-[20px]">Tetanus, Diphtheria and Pertussis ( TDAP )</span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-[#010B2A] bg-white border-2 border-[#010B2A] appearance-none rounded-full checked:bg-[#010B2A] checked:border-[#010B2A] focus:outline-none transition duration-200"
                    name="vaccinationHistory.vaccines"
                    value="Measle, Mumps and Rubella ( MMR )"
                    checked={userData.vaccinationHistory.vaccines.includes("Measle, Mumps and Rubella ( MMR )")}
                    onChange={handleCheckboxChange}
                    />
                    <span className="text-[18px] md:text-[20px]">Measle, Mumps and Rubella ( MMR )</span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                    type="checkbox"
                     className="form-checkbox h-5 w-5 text-[#010B2A] bg-white border-2 border-[#010B2A] appearance-none rounded-full checked:bg-[#010B2A] checked:border-[#010B2A] focus:outline-none transition duration-200"
                    name="vaccinationHistory.vaccines"
                    value="Chickenpox ( Varicella )"
                    checked={userData.vaccinationHistory.vaccines.includes("Chickenpox ( Varicella )")}
                    onChange={handleCheckboxChange}
                    />
                    <span className="text-[18px] md:text-[20px]">Chickenpox ( Varicella )</span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                    type="checkbox"
                     className="form-checkbox h-5 w-5 text-[#010B2A] bg-white border-2 border-[#010B2A] appearance-none rounded-full checked:bg-[#010B2A] checked:border-[#010B2A] focus:outline-none transition duration-200"
                    name="vaccinationHistory.vaccines"
                    value="Polio Vaccine"
                    checked={userData.vaccinationHistory.vaccines.includes("Polio Vaccine")}
                    onChange={handleCheckboxChange}
                    />
                    <span className="text-[18px] md:text-[20px]">Polio Vaccine</span>
                  </label>

                  <label className="flex items-center space-x-3">
                    <input
                    type="checkbox"
                     className="form-checkbox h-5 w-5 text-[#010B2A] bg-white border-2 border-[#010B2A] appearance-none rounded-full checked:bg-[#010B2A] checked:border-[#010B2A] focus:outline-none transition duration-200"
                    name="vaccinationHistory.vaccines"
                    value="Other"
                    checked={userData.vaccinationHistory.vaccines.includes("Other")}
                    onChange={handleCheckboxChange}
                    />
                    <span className="text-[18px] md:text-[20px]">Other</span>
                  </label>

                  {userData.vaccinationHistory.vaccines.includes("Other") && (
                    <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-4xl md:w-[725px] focus:outline-none focus:ring-1 focus:ring-blue-500 mt-2"
                    placeholder="Please specify....."
                    name="vaccinationHistory.other"
                    value={userData.vaccinationHistory.other}
                    onChange={handleInputChange}
                    />
                  )}
                  </div>

                  <div className="flex justify-end">
                  <button
                    type="submit"
                    className="py-3 px-8 bg-navy-900 bg-white hover:bg-[#010B2A] border border-[#010B2A] text-[#010B2A] hover:text-white font-medium rounded-md transition-colors"
                  >
                    Save and Continue
                  </button>
                  </div>
                </form>
          )}

          {/* Step 4: Medications */}
          {formStep === 4 && (
            <form onSubmit={handleFormSubmit}>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
               <span className="bg-gradient-to-r from-[#010B2A] to-[#0056B3] bg-clip-text text-transparent"> Are you currently taking any </span><br /> Medications<span className="text-blue-600">?</span>
              </h1>
              <p className="text-lg mb-8">
                Providing this information helps ensure your safety and eligibility for vaccine trials. List all
                prescribed medications, over-the-counter drugs, and supplements you take regularly.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h2 className="text-xl text-center md:text-start font-medium mb-4 flex items-center">
                    <span className="h-4 w-4 rounded-full bg-blue-900 mr-2"></span>
                    Medication Name
                  </h2>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded-4xl focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Medication Name"
                    name="medications.name"
                    value={userData.medications.name}
                    onChange={handleInputChange}
                    disabled={userData.medications.none}
                  />
                </div>

                <div>
                  <h2 className="text-xl font-medium mb-4 flex items-center">
                    <span className="h-4 w-4 rounded-full bg-blue-900 mr-2"></span>
                    Dosage ( mg/ml )
                  </h2>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded-4xl focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Dosage"
                    name="medications.dosage"
                    value={userData.medications.dosage}
                    onChange={handleInputChange}
                    disabled={userData.medications.none}
                  />
                </div>

                <div>
                  <h2 className="text-xl font-medium mb-4 flex items-center">
                    <span className="h-4 w-4 rounded-full bg-blue-900 mr-2"></span>
                    Purpose
                  </h2>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded-4xl focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Purpose"
                    name="medications.purpose"
                    value={userData.medications.purpose}
                    onChange={handleInputChange}
                    disabled={userData.medications.none}
                  />
                </div>

                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    className="form-checkbox h-5 w-5 text-blue-600 rounded-4xl"
                    name="medications.none"
                    checked={userData.medications.none}
                    onChange={(e) => {
                      setUserData({
                        ...userData,
                        medications: {
                          ...userData.medications,
                          none: e.target.checked,
                          name: e.target.checked ? "" : userData.medications.name,
                          dosage: e.target.checked ? "" : userData.medications.dosage,
                          purpose: e.target.checked ? "" : userData.medications.purpose,
                        },
                      })
                    }}
                  />
                  <span className="text-lg">I am not taking any medications</span>
                </label>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="py-3 px-8  bg-white hover:bg-[#010B2A] border border-[#010B2A] text-[#010B2A] hover:text-white font-medium rounded-md transition-colors"
                  onClick={() => {
                    window.location.href = "/";
                  }}
                >
                  Save and continue
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      {/* <div className="absolute bottom-0 right-0 w-3/4 h-64 pointer-events-none"> */}
        {/* Decorative dotted curved line */}
        <div className="absolute bottom-30 w-full right-0 h-64 z-0 pointer-events-none">
          <img src="https://c.animaapp.com/m8sql0mhBjidY2/img/vector-2-1.svg" alt="" />
        </div>
      {/* </div> */}
    </div>
  )
}
