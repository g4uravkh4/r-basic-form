import React from "react";

function SuccessPage() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg w-1/2 text-grey-700 p-16">
        <h1 className="text 3xl pb-4 font-semibold">
          Thank you for submitting your details.
        </h1>
        <p className="text-lg text-gray-500">
          Thank you 😊. We will get back to you soon.
        </p>
      </div>
    </main>
  );
}

export default SuccessPage;
