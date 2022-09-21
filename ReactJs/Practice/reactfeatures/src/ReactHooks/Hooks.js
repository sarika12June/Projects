import React, { useEffect, useState } from "react";

function Hooks() {
  const [player, setPlayer] = useState("sachin");
  useEffect(() => {
    //did mount
    setPlayer("srikanth");
  }, []);
  function chnagePlayer() {
    setPlayer("dhoin");
  }

  return (
    <div>
      <hr></hr>
      <h1>player in hooks is {player}</h1>
      <button onClick={chnagePlayer}>change Player</button>
    </div>
  );
}

export default Hooks;
