"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import send from "@/public/common/sendBlack.svg";
import Image from "next/image";
import Checkbox from "./Checkbox";
import { contactUsForm } from "@/app/actions";
import { Errors } from "@/utils";
import toast from "react-hot-toast";
import { useFormStatus } from "react-dom";

gsap.registerPlugin(ScrollTrigger);

function ContactUsForm() {
  const divRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors | null>();

  useEffect(() => {
    if (formRef.current) {
      const inputs = formRef.current.querySelectorAll(
        "input, textarea, button, .checkbox-item"
      );

      gsap.fromTo(
        inputs,
        { opacity: 0, y: 50 }, // Start state (fade and slide up)
        {
          opacity: 1, // End state
          y: 0, // No vertical offset
          stagger: 0.2, // Add stagger for cascading effect
          ease: "power2.out",
          duration: 0.6,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%", // Trigger the animation when the top of the form is near the viewport
            end: "bottom 20%", // End when the bottom of the form is near the viewport
          },
        }
      );

      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 50 }, // Start state (fade and slide up)
        {
          opacity: 1, // End state
          y: 0, // No vertical offset
          ease: "power2.out",
          duration: 0.6,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top bottom", // Start when the form top hits the bottom of the viewport
            end: "bottom top", // End when the form bottom hits the top of the viewport
          },
        }
      );
    }
  }, []);

  return (
    <div ref={divRef} className="bg-footer p-10  text-white rounded-3xl">
      <form
        ref={formRef}
        action={async (formData: FormData) => {
          setErrors({});
          const data = await contactUsForm(formData);

          if (!data.success) {
            setErrors(data.errors);
          } else {
            toast.success("Message sent successfully.");
            formRef.current?.reset(); // ✅ Reset the form fields
            const checkboxes =
              formRef.current?.querySelectorAll<HTMLInputElement>(
                'input[type="checkbox"]'
              );

            checkboxes?.forEach((checkbox) => {
              // Try changing the background color of the parent if needed
              checkbox.style.backgroundColor = "transparent"; // Doesn't work on default checkboxes
              checkbox.parentElement &&
                (checkbox.parentElement.style.backgroundColor = "transparent");
            });
          }
        }}
      >
        <div className="flex mb-8 flex-col gap-5">
          <div>
            <label className="text-lg" htmlFor="interest">
              I’m interested in...
            </label>
            <div className="flex mt-5 gap-3 flex-wrap">
              <Checkbox
                value="Frontend Development"
                className="checkbox-item"
              />
              <Checkbox
                value="Full-Page Animations"
                className="checkbox-item"
              />
              <Checkbox value="Landing Pages" className="checkbox-item" />
              <Checkbox value="Portfolio Websites" className="checkbox-item" />
              <Checkbox value="Others" className="checkbox-item" />
            </div>
            {errors?.interest && (
              <p className="text-red-500 mt-3">{errors.interest}</p>
            )}
          </div>
          <input
            type="email"
            className="custom-input"
            name="email"
            placeholder="Your Email"
            required
          />
          {errors?.email && <p className="text-red-500">{errors.email}</p>}

          <input
            type="text"
            className="custom-input"
            name="subject"
            placeholder="Your Subject"
            required
          />
          {errors?.subject && <p className="text-red-500">{errors.subject}</p>}

          <input
            type="text"
            className="custom-input"
            name="phone_number"
            placeholder="Your Phone Number - optional"
          />
          {errors?.phone_number && (
            <p className="text-red-500">{errors.phone_number}</p>
          )}
          <input
            type="text"
            className="custom-input"
            name="budget"
            placeholder="Your Budget"
            required
          />
          {errors?.budget && <p className="text-red-500">{errors.budget}</p>}

          <textarea
            name="message"
            rows={6}
            className="custom-input"
            placeholder="Your Message"
            required
          ></textarea>
          {errors?.message && <p className="text-red-500">{errors.message}</p>}
        </div>
        <FormButton />
      </form>
    </div>
  );
}

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="bg-white  disabled:bg-white/50 group animation disabled:cursor-not-allowed text-black flex px-4 gap-2 py-3 rounded-full"
    >
      <Image
        src={send}
        className="-rotate-45 group-hover:rotate-0 animation"
        alt="submit svg icon"
      />
      Send Message
    </button>
  );
}

export default ContactUsForm;
