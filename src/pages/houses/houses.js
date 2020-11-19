import React, { useState } from "react";
import "./houses.scss";

import { housesSource } from "./data.js";
import House from "./house.js";
import Popup from "devextreme-react/popup";
import Button from 'devextreme-react/button';
import notify from 'devextreme/ui/notify';

const ADD_TO_FAVORITES = 'Add to Favorites';
const REMOVE_FROM_FAVORITES = 'Remove from Favorites';

const formatCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2
}).format;

const favButtonAttrs = {
  class: 'favorites'
};

const Houses = (props) => {
  const [currentHouse, setCurrentHouse] = useState(housesSource[0]);
  const [popupVisible, setPopupVisible] = useState(false);

  const changeFavoriteState = () => {
    currentHouse.Favorite = !currentHouse.Favorite;
    setCurrentHouse(currentHouse);

    notify({
      message: `This item has been ${
        currentHouse.Favorite ? 'added to' : 'removed from'
      } the Favorites list!`,
      width: 450
    },
    currentHouse.Favorite ? 'success' : 'error', 2000
    );
  }

  const renderPopup = () => {
    console.log(currentHouse);
    return (
      <div className="popup-property-details">
        <div className="large-text">{formatCurrency(currentHouse.Price)}</div>
        <div className="opacity">{currentHouse.Address}, {currentHouse.City}, {currentHouse.State}</div>
        <Button
          icon="favorites"
          text={currentHouse.Favorite ? REMOVE_FROM_FAVORITES : ADD_TO_FAVORITES}
          width={210}
          height={44}
          elementAttr={favButtonAttrs}
          onClick={changeFavoriteState}
        />
        <div className="images">
          <img src={currentHouse.Image} alt="" />
          <img src={currentHouse.Image.replace(".jpg", "b.jpg")} alt="" />
        </div>
        <div>{currentHouse.Features}</div>
      </div>
    );
  };

  return (
    <div className="houses">
      {housesSource.map((h) => (
        <House
          house={h}
          key={h.ID}
          show={(h) => {
            setCurrentHouse(h);
            setPopupVisible(true);
          }}
        />
      ))}
      <Popup
        width={600}
        height={500}
        showTitle={true}
        tilte={currentHouse.Address}
        closeOnOutsideClick={true}
        contentRender={renderPopup}
        visible={popupVisible}
        onHiding={() => setPopupVisible(false)}
      />
    </div>
  );
};

export default Houses;
