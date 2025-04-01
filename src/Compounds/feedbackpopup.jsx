import React, { useState } from "react";
import backgroundimage from '../assets/coffee.webp';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function FeedbackPopup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    feedback: "",
    isbutton: false
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (formData.name && formData.email && formData.phone && formData.feedback) {
      
      try {
        const response = await axios.post("https://divyamcafe-backend-39ny.onrender.com/api/addfeedback", {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          feedback: formData.feedback,
          isbutton: false
        });
        console.log(response.status)
        

        if (response.status === 201) {
          alert("Feedback submitted successfully");
          // Redirect to homepage after successful submission
          navigate('/');
        }
      } catch (error) {
        setErrorMessage("An error occurred while submitting your feedback.");
        console.error("Error submitting feedback:", error);
      }
    } else {
      setErrorMessage("Please fill in all fields.");
    }
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      validateEmail(formData.email) &&
      validatePhoneNumber(formData.phone) &&
      formData.feedback.length > 0
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <img
        src={backgroundimage}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-20 p-5 rounded-xl shadow-lg w-96 ">
        <h2 className="text-xl font-bold mb-4">Add Feedback</h2>
        
        {errorMessage && <p className="text-red-500 mb-3">{errorMessage}</p>}
        
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          className="w-full p-2 mb-3 border rounded"
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          className="w-full p-2 mb-3 border rounded"
          onChange={handleChange}
        />
        {formData.email && !validateEmail(formData.email) && (
          <p className="text-red-500 text-sm mb-3">Please enter a valid email address.</p>
        )}
        <input
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          className="w-full p-2 mb-3 border rounded"
          onChange={handleChange}
        />
        {formData.phone && !validatePhoneNumber(formData.phone) && (
          <p className="text-red-500 text-sm mb-3">Please enter a valid 10-digit phone number.</p>
        )}

        <textarea
          name="feedback"
          placeholder="Feedback"
          className="w-full p-2 mb-3 border rounded"
          value={formData.feedback}
          maxLength={120}
          onChange={handleChange}
        />
        <p className="text-sm text-gray-400 mt-1">{formData.feedback.length}/120 characters</p>

        <div className="flex justify-end gap-3">
          <button 
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!isFormValid()}
            className={`px-4 py-2 rounded ${isFormValid() ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-400 text-gray-200 cursor-not-allowed'}`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeedbackPopup;