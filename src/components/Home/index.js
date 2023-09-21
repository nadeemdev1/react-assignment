import React from "react";
import Button from "../../commonComponents/Button";
import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <Button label="Button A" onClick={() => history.push("/all-contacts")} />
      <Button
        className="ml-4"
        background="#ff7f50"
        label="Button B"
        sty
        onClick={() => history.push("/us-country")}
      />
    </div>
  );
};

export default Home;
