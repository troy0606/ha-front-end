import Footer from "components/footer";
import Header from "components/header";
import React from "react";

type Props = {
  children?: React.ReactNode
};

const Index = (props: Props) => {
  return (
    <>
      <Header/>
        {props.children}
      <Footer/>
    </>
  );
};

export default Index;