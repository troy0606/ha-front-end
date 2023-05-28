import React, { useEffect } from "react";
import { IAbility } from "@hero_feature/model";

interface IProps extends IAbility {
  changeValue: (data: IAbility) => void;
  disabledAdd: boolean;
  disabledSub: boolean;
}
const Ability = (props: IProps) => {
  const { name, value, changeValue, disabledAdd, disabledSub } = props;

  const setChange = (calFn: (val: number) => number) => (initVal: number) => {
    const value = calFn(initVal);
    changeValue({ name, value });
  };

  const addOne = setChange((val) => val + 1);

  const subOne = setChange((val) => val - 1);

  return (
    <React.Fragment>
      <div key={name} className="flex items-center justify-between">
        <div className="font-medium mr-12">{name.toUpperCase()}</div>
        <button
          disabled={disabledSub}
          className="font-medium bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => subOne(value)}
        >
          -
        </button>
        <div>{value}</div>
        <button
          disabled={disabledAdd}
          className="font-medium bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => addOne(value)}
        >
          +
        </button>
      </div>
    </React.Fragment>
  );
};

export default Ability;
