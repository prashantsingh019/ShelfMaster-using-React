import { useState } from "react";

function Form() {
  return (
    <>
      <div className="form  inline-block p-5 bg-gray-200 text-[1rem] rounded-lg">
        <h3 className="text-center text-2xl m-2">Form Validation</h3>
        <form action="/">
          <div className="form-row  flex justify-around mb-1 gap-10">
            <span>Full Name</span>
            <input type="text" name="fullName" placeholder="Enter your name" className="border-b-[1px] border-gray-500 border-t-0 border-l-0 border-r-0 outline-none p-1 rounded-sm"/>
          </div>
          <div className="form-row  flex justify-around mb-1 gap-10">
            <span>Phone No.</span>
            <input type="number" name="phoneno" placeholder="00000 00000" className="border-b-[1px] border-gray-500 border-t-0 border-l-0 border-r-0 outline-none p-1 rounded-sm"/>
          </div>
          <div className="form-row  flex justify-around mb-1 gap-10">
            <span>Email Id</span>
            <input type="text" name="emailid" className="outline-none border-b-[1px] border-gray-500 border-t-0 border-l-0 border-r-0 p-1 rounded-sm" placeholder="example@gmail.com"/>
          </div>
          <div className="form-big-row  flex justify-around mb-1 gap-10">
             <span>Your Message</span>
             <textarea name="userMessage" className="outline-none border-b-[1px] border-gray-500 border-t-0 border-l-0 border-r-0 p-1 rounded-sm" rows="4"></textarea>
          </div>
        </form>
         <div className="text-center py-2">
            <button type="submit" value="Submit" className="bg-black text-white mx-auto px-2 py-1 rounded hover:bg-gray-600 cursor-pointer">Submit</button>
            </div>
          
      </div>
    </>
  );
}

export default Form;
