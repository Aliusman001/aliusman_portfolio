import {
  ContactUsForm,
  ContactUsLinks,
  HeroComponent,
} from "@/app/_components";

function Page() {
  return (
    <>
      <HeroComponent
        title={["We’re Here to Help and ", "Support You"]}
        paragraph="Have questions or need assistance? We're here to help! Whether you're looking for more information, have feedback to share, or just want to say hello, feel free to reach out. Let’s connect and make great things happen together. Your journey with us starts with a simple conversation—let’s get started!"
      />
      <div className="md:px-content-spacing">
        <div className="mx-auto max-w-screen  grid gap-5 md:grid-cols-[1fr,1.8fr] grid-cols-1 mb-10 ">
          <ContactUsLinks />
          <ContactUsForm />
        </div>
      </div>
    </>
  );
}

export default Page;
