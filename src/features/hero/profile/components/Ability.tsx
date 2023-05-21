import React from "react";

const Ability = () => {
  return (
    <React.Fragment>
      <div key={ability.name} className="flex items-center justify-between">
        <div className="font-medium">{ability.name}</div>
        <div>{ability.value}</div>
      </div>
    </React.Fragment>
  );
};

export default Ability;
