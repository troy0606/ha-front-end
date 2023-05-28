import React from "react";
import {IAbility} from "@hero_feature/model";

interface IProps extends IAbility{

};
const Ability = (props: IProps) => {
  const {
    name,
    value
  } = props;
  return (
    <React.Fragment>
      <div key={name} className="flex items-center justify-between">
        <div className="font-medium">{name}</div>
        <div>{value}</div>
      </div>
    </React.Fragment>
  );
};

export default Ability;
