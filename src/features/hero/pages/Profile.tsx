import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss";

import { TAbilityApi, TAbilitys, TAbility } from "../model";

import { useParams } from "react-router-dom";
import heroApi from "@hero_feature/query";
import { Ability } from "@hero_feature/components";

interface IProps {}

const Profile = ({}: IProps) => {
  const initialValue: TAbilitys = [
    { name: "str", value: 0 },
    { name: "int", value: 0 },
    { name: "agi", value: 0 },
    { name: "luk", value: 0 },
  ];
  const [ability, setAbility] = useState(initialValue);
  const { id } = useParams();
  const {
    data: profileResponse,
    isLoading: profileLoading,
    isError: profileError,
  } = heroApi.useGetProfileQuery(id);

  const convertResponseToAppend = (response: TAbilityApi) => {
    // TODO: 要找出方法把 API資料類型 改成 顯示用資料類型 但是類型來源要共同管理
    return initialValue.map((item) => {
      return { ...item, value: response[item.name] };
    });
  };

  const abilities = profileResponse && convertResponseToAppend(profileResponse);
  console.log(abilities);
  return (
    <React.Fragment>
      <div className="p-4">
        <div className="space-y-4">
          {abilities?.map((ability, index) => (
            <React.Fragment key={index}>
              <Ability name={ability.name} value={ability.value} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
