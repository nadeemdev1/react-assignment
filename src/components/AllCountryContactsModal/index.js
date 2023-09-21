import React, { useState, useEffect, Fragment } from "react";
import Button from "../../commonComponents/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesList } from "../../redux/actions/country";
import { Scrollbars } from "react-custom-scrollbars";
import { useHistory } from "react-router-dom";
import DetailModal from "../../commonComponents/DetailModal";
import ActionsButtons from "../../commonComponents/ActionsButtons";
import { debounce } from "../../helpers/debounce";

const AllCountryContactsModal = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [contactsIds, setContactsIds] = useState([]);
  const [selectedContent, setSelectedContent] = useState(null);
  const [isEven, setIsEven] = useState(false);

  const { contacts_ids, contacts } = useSelector(
    (state) => state.contactReducer
  );

  useEffect(() => {
    dispatch(
      getCountriesList({ companyId: 560, page: 1, noGroupDuplicates: 1 })
    );
  }, []);

  useEffect(() => {
    contacts && setContactsIds(Object.keys(contacts));
  }, [contacts_ids, contacts]);

  const handleButtonClick = () => {
    history.push("/all-contacts");
    setPage(1);
    dispatch(
      getCountriesList({ companyId: 560, page: 1, noGroupDuplicates: 1 })
    );
  };

  const handleUSContactsClick = () => {
    history.push("/us-country");
  };

  const handleEvenClicked = () => {
    setIsEven(!isEven);
    if (!isEven) {
      let evenContactIds = Object.keys(contacts).filter((id) => id % 2 === 0);
      setContactsIds(evenContactIds);
    } else {
      setContactsIds(Object.keys(contacts));
    }
  };

  const handleScrollStop = () => {
    debounce(async () => {
      setPage(page + 1);
      dispatch(
        getCountriesList({
          companyId: 560,
          page: page,
          noGroupDuplicates: 1,
        })
      );
    }, 1500);
  };

  const handleQuerySearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    debounce(async () => {
      dispatch(
        getCountriesList({
          companyId: 560,
          page: page + 1,
          noGroupDuplicates: 1,
          query: value,
        })
      );
    }, 1000);
  };

  return (
    <Modal show={true}>
      {!selectedContent && <h4 className="ml-3 mt-3">All Countries Contacts</h4>}
      <Modal.Body className="d-flex align-items-center justify-content-center vh-25 flex-column">
        {selectedContent ? (
          <DetailModal
            selectedContent={selectedContent}
            setSelectedContent={() => setSelectedContent(null)}
          />
        ) : (
          <>
            <Form.Group controlId="search" className="w-100">
              <Form.Control
                type="text"
                placeholder="Enter search query"
                value={searchQuery}
                onChange={(e) => handleQuerySearch(e)}
              />
            </Form.Group>
            <ul className="list-group w-100 mt-4">
              <li className="list-group-item">
                <div className="d-flex justify-content-between btn">
                  <span>ID</span>
                  <span>Phone Number</span>
                </div>
              </li>
            </ul>
            <Scrollbars
              autoHide
              autoHideTimeout={1000}
              autoHideDuration={200}
              onScrollStop={handleScrollStop}
              style={{ width: "100%", height: "300px" }}
            >
              <ul className="list-group w-100">
                {contactsIds.length > 0 &&
                  contactsIds.map((id) => (
                    <li
                      key={id}
                      onClick={() => setSelectedContent(contacts[id])}
                      className="list-group-item"
                    >
                      <div className="d-flex justify-content-between btn">
                        <span>{id}</span>
                        <span>{contacts[id]?.phone_number || "N/A"}</span>
                      </div>
                    </li>
                  ))}
              </ul>
            </Scrollbars>
            <ActionsButtons
              handleButtonClick={handleButtonClick}
              handleUSContactsClick={handleUSContactsClick}
              history={history}
            />
            <div className="mr-auto">
              <Form.Check
                type="checkbox"
                onChange={handleEvenClicked}
                label="Only even"
              />
            </div>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default AllCountryContactsModal;
