import Image from "next/image";
import message from "@/public/discuss/message.svg";
import toast from "react-hot-toast";
import { discuss } from "@/app/actions";
import { useFormStatus } from "react-dom";
import { useRef } from "react";

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async (formData: FormData) => {
        const data = await discuss(formData);
        if (!data.success) {
          toast.error(data.message);
        } else {
          toast.success(data.message);
          formRef.current?.reset(); // ✅ Reset the form fields
        }
      }}
      className="contact-form"
    >
      <div className="max-w-[52rem] my-5 mx-auto gap-5 border border-border h-[86px] flex items-center rounded-[50px] px-3">
        <Image src={message} alt="Email Svg Icon" className="aspect-square" />
        <input
          type="email"
          required
          name="email"
          placeholder="Enter Email Address"
          className="w-full sm:text-xsmall text-base  placeholder:text-secondary placeholder:font-normal focus:outline-none focus:border-none"
        />
        <FormButton />
      </div>
    </form>
  );
}

export default ContactForm;

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="bg-primary flex-[0.3] hover:bg-orange-500 animation inline-block relative z-10 sm:px-8 px-4 py-4 sm:py-4 sm:text-xsmall text-base sm:leading-xsmall  font-normal text-white rounded-[60px]"
    >
      {pending ? "loading.." : "Send"}
    </button>
  );
}
