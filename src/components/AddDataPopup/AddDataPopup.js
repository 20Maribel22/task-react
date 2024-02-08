import React, { useEffect, useState } from "react";

import "./AddDataPopup.css";

function AddDataPopup({ onClose, isOpen, onAddData }) {
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [idDirty, setIdDirty] = useState(false);
  const [firstNameDirty, setFirstNameDirty] = useState(false);
  const [lastNameDirty, setLastNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [idError, setIdError] = useState("Id не может быть пустым");
  const [firstNameError, setFirstNameError] = useState(
    "Username не может быть пустым"
  );
  const [lastNameError, setLastNameError] = useState(
    "Lastname не может быть пустым"
  );
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [phoneError, setPhoneError] = useState("Phone не может быть пустым");

  const blurHandler = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.name) {
      case "id-item":
        setIdDirty(true);
        break;
      case "newname":
        setFirstNameDirty(true);
        break;
      case "newlastname":
        setLastNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "phone":
        setPhoneDirty(true);
        break;
    }
  };

  useEffect(() => {
    setId("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  }, [isOpen]);

  const handleChangeId = (e) => {
    setId(e.target.value);
    const filterId = /^(?:[1-9]\d*|\d)$/
    if(!filterId.test(String(e.target.value).toLowerCase())) {
      setIdError('Некорректный id')
    } else {
      setIdError('')
    }
  };

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
    const filterName = /^[a-zA-Z\-]+$/;
    if(!filterName.test(String(e.target.value).toLowerCase())) {
      setFirstNameError('Некорректное имя')
    } else {
      setFirstNameError('')
    }
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
    const filterLastName = /^[a-zA-Z\-]+$/;
    if(!filterLastName.test(String(e.target.value).toLowerCase())) {
      setLastNameError('Некорректная фамилия')
    } else {
      setLastNameError('')
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
    const filterEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
    if(!filterEmail.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный email')
    } else {
      setEmailError('')
    }

  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
    const filterPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    if(!filterPhone.test(String(e.target.value).toLowerCase())) {
      setPhoneError('Некорректный phone')
    } else {
      setPhoneError('')
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddData({
      id,
      firstName,
      lastName,
      email,
      phone,
    });
  };

  return (
    <div className={`popup ${isOpen ? "open" : "close"}`}>
      <div className="popup__body">
        <div className="popup__header">
          <h3 className="popup__title">Новый пользователь</h3>
          <div className="popup__close" onClick={onClose}>
            ×
          </div>
        </div>
        <form className="popup__form" onSubmit={handleSubmit}>
          <label className="popup__field">
            {idDirty && idError && (
              <div style={{ color: "red" }}>{idError}</div>
            )}
            <input
              onBlur={e => blurHandler(e)}
              className="popup__item"
              type="number"
              value={id}
              id="id-item"
              name="id-item"
              placeholder="Id"
              required
              onChange={handleChangeId}
            />
          </label>
          <label className="popup__field">
            {firstNameDirty && firstNameError && (
              <div style={{ color: "red" }}>{firstNameError}</div>
            )}
            <input
              onBlur={e => blurHandler(e)}
              className="popup__item"
              type="text"
              value={firstName}
              id="newname-item"
              name="newname"
              minLength="2"
              maxLength="40"
              placeholder="Username"
              required
              onChange={handleChangeFirstName}
            />
          </label>
          <label className="popup__field">
            {lastNameDirty && lastNameError && (
              <div style={{ color: "red" }}>{lastNameError}</div>
            )}
            <input
              onBlur={e => blurHandler(e)}
              className="popup__item"
              type="text"
              value={lastName}
              id="newlastname-item"
              name="newlastname"
              minLength="2"
              maxLength="40"
              placeholder="Userlastname"
              required
              onChange={handleChangeLastName}
            />
          </label>
          <label className="popup__field">
            {emailDirty && emailError && (
              <div style={{ color: "red" }}>{emailError}</div>
            )}
            <input
              onBlur={e => blurHandler(e)}
              className="popup__item"
              type="email"
              value={email}
              id="email-item"
              name="email"
              minLength="6"
              maxLength="24"
              placeholder="Email"
              required
              onChange={handleChangeEmail}
            />
          </label>
          <label className="popup__field">
            {phoneDirty && phoneError && (
              <div style={{ color: "red" }}>{phoneError}</div>
            )}
            <input 
            onBlur={e => blurHandler(e)}
              className="popup__item"
              type="tel"
              value={phone}
              id="phone-item"
              name="phone"
              minLength="5"
              maxLength="12"
              placeholder="Phone"
              required
              onChange={handleChangePhone}
            />
          </label>
          <button type="submit" className="popup__button-save">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddDataPopup;
