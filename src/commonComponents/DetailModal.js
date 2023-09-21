import React from "react";
import Button from "./Button";

const DetailModal = ({ selectedContent, setSelectedContent }) => {
  const { id, first_name, last_name, email, phone_number } = selectedContent;
  const Info = (label, value) => {
    return (
      <div className="mt-2">
        <span>
          {label}: {value || 'N/A'}
        </span>
      </div>
    );
  };
  return (
    <div>
      <h4>Contact Detail</h4>
      <div className="ml-2">
      {Info("ID", id)}
      {Info("First name", first_name)}
      {Info("Last name", last_name)}
      {Info("Email", email)}
      {Info("PhonePhone", phone_number)}
      </div>
      <Button
        className="ml-4 mt-4"
        color="#46139f"
        background="#fff"
        label="Back"
        style={{ border: "1px solid #46139f", padding: "6px 20px" }}
        onClick={setSelectedContent}
      />
    </div>
  );
};

export default DetailModal;
