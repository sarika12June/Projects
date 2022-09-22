import React, { useState } from "react";
function Home() {
  const [arrState, setArrState] = useState([10, 20, 30]);
  const values = arrState.map((object, index) => {
    return (
      <div>
        <h1>{object}</h1>
      </div>
    );
  });
  return (
    <div>
      <h1>map demo</h1>
      {values}
    </div>
  );
}

export default Home;
