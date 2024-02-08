import React from "react";
import "./UserInfoPopup.css";

function UserInfoPopup({ item, onClose }) {
  const addressStreetAddress = item && item.address ? item.address.streetAddress : null;
  const addressCity = item && item.address ? item.address.city : null;
  const addressState = item && item.address ? item.address.state : null;
  const addressZip = item && item.address ? item.address.zip : null;
  return (
    <div className={`user__container ${item.firstName ? "open" : "close"}`}>
      <div className="user__close" onClick={onClose}>
        ×
      </div>
      <ul className="user__list">
        <li>
          Выбран пользователь:{" "}
          <b>
            {item.firstName} {item.lastName}
          </b>
        </li>
        <li>
          Описание: <b className="user__text">{item.description}</b>
        </li>
        <li>
          Адрес проживания: <b>{addressStreetAddress}</b>
        </li>
        <li>
          Город: <b>{addressCity}</b>
        </li>
        <li>
          Провинция/штат: <b>{addressState}</b>
        </li>
        <li>
          Индекс: <b>{addressZip}</b>
        </li>
      </ul>
    </div>
  );
}

export default UserInfoPopup;
