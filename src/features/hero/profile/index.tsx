import React from "react";
import styles from "./index.module.scss";

import {TAbilitys} from '../model';
import Ability from './components/Ability'

interface IProps extends TAbilitys{};

const index = ({}: IProps) => {
  return (
    <React.Fragment>
      {/* <div className="p-4">
      <div className="space-y-4">
      {(abilities as TAbilitys).map((ability) => (
        <>
          <Ability/>
        </>
      ))}
      </div>
      </div> */}
    </React.Fragment>
  );
};

export default index;
