import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import TableTask from "./TableTask/TableTask";
import UserInfoPopup from "./UserInfoPopup/UserInfoPopup";
import ButtonsData from "./ButtonsData/ButtonsData";
import AddDataPopup from "./AddDataPopup/AddDataPopup";

function App() {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedData, setSelectedData] = useState("");
  const [isButtonClick, setIsButtonClick] = useState(false);
  const [url, setUrl] = useState("");
  const [isAddDataPopupOpen, setIsAddDataPopupOpen] = useState(false);
  
  const handleUrl = (url) => {
    setUrl(url);
    setIsButtonClick(true);
    console.log(url);
  };

  useEffect(() => {
    if (!isButtonClick) {
      return 
    }
    axios.get(url).then((res) => {
      console.log(res.data);
      setTableData(res.data);
      setIsLoading(false);
      setIsLoaded(true)
    });
  }, [url]);


  const handleClickPopup = (selectedData) => {
    setSelectedData(selectedData);
  };

  const closePopup = () => {
    setSelectedData("");
    setIsAddDataPopupOpen('')
  };

const onAddDataClick = () =>{
  setIsAddDataPopupOpen(!isAddDataPopupOpen)
}


const handleAddDataSubmit = (data) => {
  const NewData = data;
  setTableData([NewData, ...tableData])
  console.log(NewData)
  closePopup()
}

  return (
    <>
      <div className="container">
       {!isButtonClick ? <ButtonsData handleChangeUrl={handleUrl} />
        :
        <TableTask
          tableData={tableData}
          isLoading={isLoading}
          setTableData={setTableData}
          onPopupClick={handleClickPopup}
          isLoaded={isLoaded}
          onAddDataClick={onAddDataClick}
        />}
      </div>
      <UserInfoPopup item={selectedData} onClose={closePopup} />
      <AddDataPopup isOpen={isAddDataPopupOpen} onClose={closePopup} onAddData={handleAddDataSubmit} />
    </>
  );
}

export default App;
