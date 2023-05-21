import React, { useEffect } from "react";
import { getRemoteList } from "./slice";
import styles from "./index.module.scss";
import Item from "./components/Item";
import { useAppDispatch, useAppSelector } from "../../../store";
import { Outlet } from "react-router-dom";

const Index = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getRemoteList());
  }, []);

  const { list } = useAppSelector((state) => state.heroList);

  return (
    <React.Fragment>
      <div className="container mx-auto flex max-w-screen-xl flex-wrap">
        {list.map((item, index) => (
          <React.Fragment key={index}>
            <Item {...item} />
          </React.Fragment>
        ))}
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default Index;
