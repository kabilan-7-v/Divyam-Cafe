import React, { useState } from "react";
import backgroundimage from '../assets/coffee.webp';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

function FeedbackPopup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    feedback: "",
    rating: null,
    isbutton: false
  });
  const [errorMessage, setErrorMessage] = useState('');

  const emojis = ["😠", "😐", "🙂", "😋", "🤤"];
  const labels = ["Very Bad", "Average", "Good", "Tasty", "Excellent"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRating = (index) => {
    setFormData({ ...formData, rating: index });
  };

  const handleSubmit = async () => {
    if (isFormValid()) {
      try {
        const response = await axios.post("https://divyamcafe-backend-39ny.onrender.com/api/addfeedback", {
          name: formData.name,
          rating: labels[formData.rating],

          phone: formData.phone,
          feedback: formData.feedback,
          isbutton: false,
          ishomepage:false
        });

        if (response.status === 201) {
          alert("Feedback submitted successfully");
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

  const validatePhoneNumber = (phone) => /^\d{10}$/.test(phone);


  const isFormValid = () => {
    return (
      formData.name &&
      validatePhoneNumber(formData.phone) &&
      formData.feedback.length > 0 &&
      formData.rating !== null
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <img
        src={backgroundimage}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-60 "></div>

      {/* 🎉 Popup with Framer Motion animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative z-20 p-5 rounded-xl shadow-2xl w-116  "
      >
        <h2 className="text-xl font-bold mb-4 text-center">Add Feedback</h2>
        
        {errorMessage && <p className="text-red-500 mb-3">{errorMessage}</p>}

        <input
          name="name"
          placeholder="Name"
          value={formData.name}
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
        {/* 🎭 Emoji rating with animation */}
        <div className="mb-4 text-center">
          <p className="font-medium mb-2">How was the food?</p>
          <div className="flex justify-between">
            {emojis.map((emoji, index) => (
              <motion.button
                whileTap={{ scale: 1.3 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                key={index}
                onClick={() => handleRating(index)}
                className={`text-2xl ${
                  formData.rating === index ? 'scale-125' : ''
                }`}
              >
                {emoji}
              </motion.button>
            ))}
          </div>
          {formData.rating !== null && (
            <p className="text-sm text-white mt-3">
              You selected: <span className="font-semibold">{labels[formData.rating]}</span>
            </p>
          )}
        </div>

        

        <div className="flex justify-end gap-3 mt-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            Cancel
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
            disabled={!isFormValid()}
            className={`px-4 py-2 rounded transition-all duration-300 ${
              isFormValid() ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-400 text-gray-200 cursor-not-allowed'
            }`}
          >
            Submit
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default FeedbackPopup;
