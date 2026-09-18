import React, { useState } from "react";
import "@fontsource/gloock";
import "@fontsource/lato";

const initialValues = { name: "", email: "", message: "" };

function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | success

  const validate = (data) => {
    const newErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!data.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!data.message.trim()) {
      newErrors.message = "Please enter a message.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...values, [name]: value };
    setValues(updated);

    // Re-validate as the user types once they've attempted a submit
    if (Object.keys(errors).length > 0) {
      setErrors(validate(updated));
    }

    if (status === "success") {
      setStatus("idle");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setValues(initialValues);
      setStatus("success");
    }
  };

  return (
    <div
      id="Contact"
      className="w-full bg-[#603913] text-white py-12 px-6 md:px-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 font-[gloock]">
        Get in Touch
      </h2>
      <hr className="w-20 mx-auto border-t-2 border-white mb-8" />
      <p className="text-center font-[lato] mb-8 max-w-xl mx-auto">
        Have a question or feedback? Send us a message and we&apos;ll get
        back to you.
      </p>

      <form
        noValidate
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto font-[lato]"
      >
        <div className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            className="bg-transparent border border-white p-2 w-full rounded-md placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          />
          {errors.name && (
            <span className="text-sm text-red-200 mt-1">{errors.name}</span>
          )}
        </div>

        <div className="flex flex-col">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            className="bg-transparent border border-white p-2 w-full rounded-md placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          />
          {errors.email && (
            <span className="text-sm text-red-200 mt-1">{errors.email}</span>
          )}
        </div>

        <div className="flex flex-col col-span-1 md:col-span-2">
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={values.message}
            onChange={handleChange}
            className="bg-transparent border border-white p-2 w-full rounded-md placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          ></textarea>
          {errors.message && (
            <span className="text-sm text-red-200 mt-1">
              {errors.message}
            </span>
          )}
        </div>

        <div className="col-span-1 md:col-span-2 flex flex-col items-center gap-3">
          <button
            type="submit"
            className="bg-white text-[#603913] font-bold py-2 px-8 rounded-md hover:bg-white/90 transition-colors"
          >
            SUBMIT
          </button>
          {status === "success" && (
            <p className="text-sm text-green-200">
              Thank you! Your message has been sent.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
