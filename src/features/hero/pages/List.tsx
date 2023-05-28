import React, { useEffect } from "react";
import { getRemoteList } from "../slice";
import styles from "./List.module.scss";
import Item from "@hero_feature/components/Item";
import { useAppDispatch, useAppSelector } from "../../../store";
import { Outlet } from "react-router-dom";
import heroApi from '@hero_feature/query';

const List = () => {
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(getRemoteList());
  // }, []);

  // const { list } = useAppSelector((state) => state.heroList);
  const { data: listResponse , isLoading: listLoading, isError: listError } = heroApi.useGetListQuery();


  return (
    <React.Fragment>
      <div className="container mx-auto flex max-w-screen-xl flex-wrap">
        {listResponse?.map((item, index) => (
          <React.Fragment key={index}>
            <Item {...item} />
          </React.Fragment>
        ))}
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default List;
