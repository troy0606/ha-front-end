import React, { useEffect } from "react";
import { IAbility } from "@hero_feature/model";
import clsx from "clsx";

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
          type="button"
          disabled={disabledSub}
          className={clsx(
            `font-medium  font-bold py-2 px-4 rounded`,
            { ["bg-black hover:bg-black text-gray-600"]: disabledSub },
            {['bg-gray-500 hover:bg-gray-700 text-white']: !disabledSub}
          )}
          onClick={() => subOne(value)}
        >
          -
        </button>
        <div>{value}</div>
        <button
          type="button"
          disabled={disabledAdd}
          className={clsx(
            `font-medium  font-bold py-2 px-4 rounded`,
            { ["bg-black hover:bg-black text-gray-600"]: disabledAdd },
            {['bg-gray-500 hover:bg-gray-700 text-white']: !disabledAdd}
          )}
          onClick={() => addOne(value)}
        >
          +
        </button>
      </div>
    </React.Fragment>
  );
};

export default Ability;
