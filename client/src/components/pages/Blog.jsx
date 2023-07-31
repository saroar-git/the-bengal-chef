import React from "react";
import jsPDF from "jspdf";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Blog = () => {
  //handle download pdf
  const handleDownloadPdf = () => {
    const doc = new jsPDF("p", "mm", "a4");

    // Select all h2 and p tags
    const headings = document.querySelectorAll("h2, h3");

    let yOffset = 20;

    // Loop through each element and add it to the PDF
    headings.forEach((heading) => {
      // Add Title
      if (heading.tagName === "H2") {
        doc.setFontSize(16);
        doc.text(10, yOffset, heading.textContent);
        yOffset += 15;
      }

      // Add Paragraph
      else if (heading.tagName === "H3") {
        doc.setFontSize(14);
        const lines = doc.splitTextToSize(heading.textContent, 180);
        doc.text(10, yOffset, lines);
        yOffset += lines.length * 5 + 10;
      }
    });

    doc.save("blog.pdf");
  };

  return (
    <>
      <div className="card mx-8 md:mx-36 my-16">
        {/* handle pdf download button */}
        <div className="text-center">
          <h1 className="md:text-4xl text-2xl font-bold font-lobster">
            Blogs about React-JS
          </h1>
          <button onClick={handleDownloadPdf}>
            <FaCloudDownloadAlt
              title="Download PDF"
              className="mt-6 text-3xl"
            />
          </button>
        </div>

        <div className="card-body">
          <h2 className="card-title text-center my-0 font-semibold text-lg md:text-2xl bg-[#C19D60] text-white hover:bg-[#d1952c]  px-3 py-2 rounded-lg">
            Q-01: The differences between uncontrolled and controlled
            components.
          </h2>
          <h3 className="text-slate-700 text-center my-3 md:text-lg">
            The main difference between uncontrolled and controlled components
            in React is how they manage state. Controlled components are those
            that rely on React state to determine what is displayed on the
            screen, while uncontrolled components manage their own state through
            the DOM.
          </h3>
          <hr className="md:w-1/2 mx-auto border-2 border-[#C19D60] w-full mt-6 mb-24" />

          <h2 className="card-title text-center my-0 font-semibold text-lg md:text-2xl bg-[btn border-none bg-[#C19D60] text-white hover:bg-[#d1952c] normal-case] px-3 py-2 rounded-lg">
            Q-02: How to validate React props using PropTypes?
          </h2>
          <h3 className="text-slate-700 text-center my-3 md:text-lg">
            In React, we can validate the types of props being passed into a
            component using PropTypes. To use PropTypes, we need to import them
            from the 'prop-types' package and then define the expected type for
            each prop in the component's propTypes object.
          </h3>
          <hr className="md:w-1/2 mx-auto border-2 border-[#C19D60] w-full mt-6 mb-24" />

          <h2 className="card-title text-center my-0 font-semibold text-lg md:text-2xl bg-[btn border-none bg-[#C19D60] text-white hover:bg-[#d1952c] normal-case] px-3 py-2 rounded-lg">
            Q-03: The difference between nodejs and express js.
          </h2>
          <h3 className="text-slate-700 text-center my-3 md:text-lg">
            Node.js is a JavaScript runtime environment that allows developers
            to run JavaScript code on the server-side. Express.js is a popular
            web framework built on top of Node.js that provides additional
            features for building web applications, such as routing, middleware
            support, and template engines.
          </h3>
          <hr className="md:w-1/2 mx-auto border-2 border-[#C19D60] w-full mt-6 mb-24" />

          <h2 className="card-title text-center my-0 font-semibold text-lg md:text-2xl bg-[btn border-none bg-[#C19D60] text-white hover:bg-[#d1952c] normal-case] px-3 py-2 rounded-lg">
            Q-04: What is a custom hook, and why will you create a custom hook?
          </h2>
          <h3 className="text-slate-700 text-center my-3 md:text-lg">
            Custom hooks are a way to extract reusable logic from a component so
            it can be easily shared across multiple components or projects. A
            custom hook is simply a function that uses one or more of React's
            built-in hooks (like useState, useEffect, etc.) to encapsulate some
            behavior.
          </h3>
        </div>
      </div>
    </>
  );
};

export default Blog;
