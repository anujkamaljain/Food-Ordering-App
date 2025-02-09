import { useState } from "react";

const Contact = () => {

    const [message, setmessage] = useState("");
    const [name, setname] = useState("");

    const handleSubmit = () => {
        alert(`Hello ${name}, we have received your message. Our team will contact you within 3-5 working days.`)
    }

    return (
      <div className="text-center">
        <h1 className="p-3 text-center text-2xl font-extrabold">Contact Us</h1>
        <form className="text-center" onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
            className="mx-auto my-5 rounded-lg border border-orange-400 p-1.5"
            placeholder="Name"
          />
          <textarea
            value={message}
            onChange={(e) => setmessage(e.target.value)}
            placeholder="Please enter your message here!!"
            className="mx-auto my-5 block h-44 w-6/12 resize-y rounded-lg border border-orange-400 p-1.5 break-words break-all whitespace-pre-wrap shadow-xl"
          ></textarea>
          <button
            className="mx-auto my-5 block cursor-pointer rounded-lg bg-orange-400 p-1.5 text-white hover:translate-y-0.5 hover:scale-105"
            type="Submit"
          >
            Submit
          </button>
          <h1 className="absolute bottom-2 left-5 font-bold">
            Our team will contact you within 3-5 working days
          </h1>
        </form>
      </div>
    );
};

export default Contact;
