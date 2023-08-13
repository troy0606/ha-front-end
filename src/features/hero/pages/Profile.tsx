import React, { useEffect, useRef, useState } from "react";
import styles from "./Profile.module.scss";

import { TAbilityApi, TAbilitys, IAbility, TAbility } from "../model";

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
  const [
    patchProfile,
    {
      data: profileUpdatingData,
      isLoading: profileIsUpdating,
      error: profileUpdatingError,
    },
  ] = heroApi.usePatchProfileMutation();
  const {
    data: profileResponse,
    isLoading: profileLoading,
    isError: profileError,
  } = heroApi.useGetProfileQuery(id);

  const convertResponseToView = (response: TAbilityApi): TAbilitys => {
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

  const converViewToRespond = (abilities: TAbilitys): any => {
    return abilities.reduce((prev, curr) => {
      return { ...prev, ...{ [curr.name]: curr.value } };
    }, {});
  };

  useEffect(() => {
    setPoint(0);
    const abilities = profileResponse && convertResponseToView(profileResponse);
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

  const disabledAdd = point === 0 || profileIsUpdating;
  const disabledSub = point === initialPoint.current || profileIsUpdating;

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (point === 0 && id) {
      patchProfile({ heroId: id, abilities: converViewToRespond(abilities) });
    } else {
      alert("能力值必需相同");
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        {profileUpdatingError && (
          <div>
            <span>Error: {JSON.stringify(profileUpdatingError)}</span>
          </div>
        )}
        {profileUpdatingData && (
          <div>
            <span>
              Success! Response: {JSON.stringify(profileUpdatingData)}
            </span>
          </div>
        )}
        <form
          className="p-4 flex max-w-lg m-auto justify-between"
          onSubmit={onSubmit}
        >
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
          <div className="mt-auto">
            <p>剩餘點數: {point}</p>
            <button
              type="submit"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              送出
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Profile;
