"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export const BookingForm = () => {
  // Define the shape of formData
  interface FormData {
    fullName: string;
    email: string;
    phone: string;
    travelDate: string;
    numberOfPersons: number;
    pickLocation: string;
  }

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    travelDate: "",
    numberOfPersons: 1,
    pickLocation: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof FormData]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const validateForm = (): Partial<Record<keyof FormData, string>> => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.fullName) newErrors.fullName = "Please fill out this field.";
    if (!formData.email) {
      newErrors.email = "Please fill out this field.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone) {
      newErrors.phone = "Please fill out this field.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }
    if (!formData.travelDate)
      newErrors.travelDate = "Please fill out this field.";
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        const templateParams = {
          ...formData,
          time: new Date().toLocaleString("en-US", {
            timeZone: "Asia/Kolkata",
          }),
        };

        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
        );

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          travelDate: "",
          numberOfPersons: 1,
          pickLocation: "Kanchipuram Bus Stand",
        });
      } catch (error) {
        console.error("EmailJS error:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section className="container mx-auto py-5 lg:py-10" id="booking-form">
      <p className="text-heading text-2xl lg:text-4xl font-semibold text-center">
        Book Your Trip with Firstry Travels
      </p>
      <form
        className="w-full max-w-[800px] mx-auto mt-10"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-4">
          <div className="mt-4">
            <label className="block text-paragraph mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-1 focus:border-brand outline-none"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            )}
          </div>
          <div className="mt-4">
            <label className="block text-paragraph mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-1 focus:border-brand outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="mt-4">
            <label className="block text-paragraph mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-1 focus:border-brand outline-none"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          <div className="mt-4">
            <label className="block text-paragraph mb-2">Travel Date</label>
            <input
              type="date"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-1 focus:border-brand outline-none"
            />
            {errors.travelDate && (
              <p className="text-red-500 text-sm">{errors.travelDate}</p>
            )}
          </div>

          <div className="mt-4">
            <label className="block text-paragraph mb-2">
              Number of Persons
            </label>
            <input
              type="number"
              name="numberOfPersons"
              value={formData.numberOfPersons}
              onChange={handleChange}
              min="1"
              className="w-full p-2 border rounded mb-1 focus:border-brand outline-none"
            />
          </div>

          <div className="mt-4">
            <label className="block text-paragraph mb-2">Pick Location</label>
            <select
              name="pickLocation"
              value={formData.pickLocation}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-1 focus:border-brand outline-none"
            >
              <option value="Kanchipuram Bus Stand">
                Kanchipuram Bus Stand
              </option>
              <option value="Kanchipuram Railway Station">
                Kanchipuram Railway Station
              </option>
            </select>
          </div>
        </div>
        <div className="w-full flex justify-center mt-10 lg:mt-6">
          <button
            type="submit"
            className="w-full lg:w-[200px] bg-brand text-btnText px-5 py-3 rounded"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
};
