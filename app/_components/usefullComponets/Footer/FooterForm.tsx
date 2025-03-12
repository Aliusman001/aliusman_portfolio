"use client";
import { subscribeUs } from "@/app/actions";
import send from "@/public/common/send.svg";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

function FooterForm() {
  return (
    <form
      action={async (formData: FormData) => {
        const data = await subscribeUs(formData);
        if (!data.success) {
          toast.error(data.message);
        } else {
          toast.success(data.message);
        }
      }}
    >
      <div className="h-[3.1875rem] flex md:w-full w-[20.75rem]">
        <input
          type="email"
          required
          name="email"
          placeholder="Email Address"
          className="w-full  h-full rounded-tl-2xl rounded-bl-2xl pl-3"
        />
        <FormButton />
      </div>
    </form>
  );
}

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-primary disabled:cursor-not-allowed flex justify-center items-center w-[46px] rounded-tr-2xl rounded-br-2xl"
    >
      <Image src={send} alt="submit svg icon" />
    </button>
  );
}

export default FooterForm;
