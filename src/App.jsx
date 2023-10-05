import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };
  return (
    <>
      {/* <div>
        <input
          onChange={onChangeHandler}
          type="text"
          className="border border-black"
        />
        <h2>{text}</h2>
      </div> */}

      <main className="h-screen flex items-center justify-center">
        <form className="bg-white flex rounded-lg w-1/2">
          <div className="flex-1 text-gray-700 p-20">
            <h1 className="text-3xl pb-2">Let's Start</h1>
            <p className="text-lg text-gray-500">
              Join us for a great experience of learning and sharing knowledge.
            </p>
            <div className="mt-6 ">
              {/* name */}
              <div className="pb-4">
                <label
                  className="block font-semibold text-sm pb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  type="text"
                  name="name"
                  placeholder="Enter name"
                />
              </div>
            </div>
            <div className="mt-6 ">
              {/* email */}
              <div className="pb-4">
                <label
                  className="block font-semibold text-sm pb-2"
                  htmlFor="email"
                >
                  Name
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
              </div>
            </div>
            <div className="mt-6 ">
              {/* country */}
              <div className="pb-4">
                <label
                  className="block font-semibold text-sm pb-2"
                  htmlFor="country"
                >
                  Name
                </label>
                <select
                  name="country"
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                >
                  <option>Nepal</option>
                  <option>India</option>
                  <option>Germany</option>
                  <option>Pakisthan</option>
                  <option>Bhutan</option>
                  <option>Norway</option>
                </select>
              </div>
            </div>
            <div className="mt-6 ">
              {/* terms */}
              <div className="pb-4">
                <label
                  className="block font-semibold text-sm pb-2"
                  htmlFor="terms"
                >
                  Terms of service
                </label>
                <div className="flex items-center gap-2">
                  <input
                    className=" h-5 w-5 text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-500"
                    type="checkbox"
                    name="terms"
                    value="checked"
                  />
                  <p className="text-sm font-semibold">
                    I agree for the service.{" "}
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="bg-teal-500 text-sm font-semibold text-white py-3 mt-6 rounded-lg w-full"
              >
                Start learning
              </button>
            </div>
          </div>
          <div className="relative flex-1">
            <img
              src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-3454.jpg?w=740&t=st=1696515390~exp=1696515990~hmac=08c0a4f5150e65f876168a715b742ef547b0d8f1fb515e47407fc1cab30f8500"
              className="fill-current absolute inset-0 w-full h-full object-cover rounded-lg"
              alt="learning-boy"
            />
          </div>
        </form>
      </main>
    </>
  );
}

export default App;
