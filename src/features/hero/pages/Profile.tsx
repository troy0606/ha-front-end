import React, { useEffect, useRef, useState } from "react";
import styles from "./Profile.module.scss";

import { TAbilityApi, TAbilitys, IAbility } from "../model";

import { useParams } from "react-router-dom";
import heroApi from "@hero_feature/query";
import { Ability } from "@hero_feature/components";
import Test from "@hero_feature/components/Test";

interface IProps {}

const Profile = ({}: IProps) => {
  const initialValue: TAbilitys = [
    { name: "str", value: 0 },
    { name: "int", value: 0 },
    { name: "agi", value: 0 },
    { name: "luk", value: 0 },
  ];

  const [point, setPoint] = useState(0);
  const [abilities, setAbilities] = useState(initialValue);
  const initialPoint = useRef(0);
  const { id } = useParams();
  const {
    data: profileResponse,
    isLoading: profileLoading,
    isError: profileError,
  } = heroApi.useGetProfileQuery(id);

  const convertResponseToAppend = (response: TAbilityApi): TAbilitys => {
    return initialValue.map((item) => {
      return { ...item, value: response[item.name] };
    });
  };

  const getAbilitiesSum = (response: TAbilityApi): number => {
    const allKeys = Object.keys(response) as Array<keyof TAbilityApi>;
    return allKeys.reduce((prev, curr) => {
      return prev + response[curr];
    }, 0);
  };

  useEffect(() => {
    setPoint(0);
    const abilities =
      profileResponse && convertResponseToAppend(profileResponse);
    const abilitiesSum = profileResponse && getAbilitiesSum(profileResponse);
    setAbilities(abilities || initialValue);
    initialPoint.current = abilitiesSum || 0;
  }, [profileResponse]);

  const changeValue = ({ name, value }: IAbility): void => {
    const index = abilities.findIndex((ability) => ability.name === name);
    abilities[index].value = value;
    setAbilities([...abilities]);
  };

  useEffect(() => {
    const abilityApiForm = abilities.reduce((prev, cur) => {
      return { ...prev, [cur.name]: cur.value };
    }, {} as TAbilityApi);
    const abilitiesSum = profileResponse && getAbilitiesSum(abilityApiForm);
    const reCalPoint = initialPoint.current - (abilitiesSum || 0);
    setPoint(reCalPoint);
  }, [abilities]);

  const disabledAdd = point === 0;
  const disabledSub = point === initialPoint.current;

  const submit = () => {
    if(point === 0) {
      alert('發API送出')
    } else {
      alert('能力值必需相同')
    }
  }

  return (
    <React.Fragment>
      <div className="container p-4 flex max-w-lg m-auto justify-between">
        <div className="space-y-4 flex-grow pr-4">
          {abilities?.map((ability, index) => (
            <React.Fragment key={index}>
              <Ability
                name={ability.name}
                value={ability.value}
                changeValue={changeValue}
                disabledAdd={disabledAdd}
                disabledSub={disabledSub || ability.value === 0}
              />
            </React.Fragment>
          ))}
        </div>
        {/* <Test/> */}
        <div className="">
          <p>剩餘點數: {point}</p>
          <button 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={submit}
            >
            送出
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
