import React, { useEffect } from "react";

const Pro = (props: any) => {
  useEffect(() => {
    console.log(props);
  });

  return <h1>Pro</h1>;
};

Pro.getInitialProps = async () => {
  return {
    page: "pro",
  };
};

export default Pro;
