import React, { useState } from "react";
function Contact() {
  const [arrState, setArrState] = useState([
    { name: "srikanth", country: "india" },
    { name: "sarika", country: "Canada" },
  ]);
  const values = arrState.map((object, index) => {
    return (
      <div>
        <h1>
          {object.name} {object.country}
        </h1>
      </div>
    );
  });
  return (
    <div>
      <h1>Object iteration </h1>
      {values}
    </div>
  );
}

export default Contact;
