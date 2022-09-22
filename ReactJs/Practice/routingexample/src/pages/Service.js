import React from "react";
function Service() {
  return (
    <div>
      <h1>Condition</h1>
      {(() => {
        if (true) {
          return <h1>true</h1>;
        } else {
          return <h1>false</h1>;
        }
      })()}
    </div>
  );
}
export default Service;
