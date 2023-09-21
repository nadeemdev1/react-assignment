import React from 'react';
import Button from './Button';

const ActionsButtons = ({handleButtonClick, handleUSContactsClick, history}) => {
    return (
        <div className="p-4">
           <Button onClick={handleButtonClick} label="All Contacts" />
              <Button
                className="ml-2"
                background="#ff7f50"
                onClick={handleUSContactsClick}
                label="US Contacts"
              />
              <Button
                className="ml-2"
                color="#46139f"
                background="#fff"
                label="Close"
                style={{ border: "1px solid #46139f" }}
                onClick={() => history.push("/")}
              />  
        </div>
    );
}

export default ActionsButtons;
