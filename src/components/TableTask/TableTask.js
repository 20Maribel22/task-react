import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Loader from "../Loader/Loader";
import PaginationData from "../PaginationData/PaginationData";
import Button from "react-bootstrap/Button";
import "./TableTask.css";
import SearchElement from "../SearchElement/SearchElement";

function TableTask({
  tableData,
  setTableData,
  onPopupClick,
  isLoading,
  onAddDataClick,
}) {
  const [searchText, setSearchText] = useState("");

  const [sortDirection, setSortDirection] = useState(true);
  const [dateInput, setDateInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  let limitNumberPage = 50;

  const getFilterData = () => {
    if (!searchText) {
      return tableData;
    }
    return tableData.filter((el) => {
      return (
        el["firstName"].toLowerCase().includes(searchText.toLowerCase()) ||
        el["lastName"].toLowerCase().includes(searchText.toLowerCase()) ||
        el["email"].toLowerCase().includes(searchText.toLowerCase())
      );
    });
  };

  const filterData = getFilterData();

  console.log("filterData", filterData);

  const lastPage = currentPage * limitNumberPage;
  const firstPage = lastPage - limitNumberPage;
  const currentData = filterData.slice(firstPage, lastPage);

  const handleSortDate = (field) => {
    const sortDataAscend = [...tableData].sort((a, b) => {
      return a[field] > b[field] ? 1 : -1;
    });
    const sortDataDescen = [...tableData].reverse((a, b) => {
      return a[field] > b[field] ? 1 : -1;
    });

    if (sortDirection) {
      setTableData(sortDataAscend);
    } else {
      setTableData(sortDataDescen);
    }
    setSortDirection(!sortDirection);
  };

  const getCountPage = Math.ceil(filterData.length / limitNumberPage);

  let pages = [];
  for (let i = 1; i <= getCountPage; i++) {
    pages.push(i);
  }

  const handlePaginate = (page) => {
    setCurrentPage(page);
    console.log(currentPage);
  };
  const ArrowNumber = () => {
    return sortDirection ? " ▼" : " ▲";
  };

  const ArrowLetters = () => {
    return sortDirection ? " (Z - A ▲)" : " (A - Z ▼)";
  };

  const inputData = (input) => {
    handleSortDate(input);
    setDateInput(input);
  };

  const handleNextPage = () => {
    if (currentPage > 1) {
      return;
    }
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage < 2) {
      return;
    }
    setCurrentPage((prev) => prev - 1);
  };

  const onSearchData = (text) => {
    setSearchText(text);
  };

  function indexOfEmul(a, b) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b) {
        return i;
      }
    }
    return -1;
  }
  const result = indexOfEmul([11, 22, 33, 55], 33);
  console.log(result);

  return (
    <>
      {isLoading && <Loader />}
      <input className="file" id="file" type="file" />
      <label className="file__label" htmlFor="file">
        нажмите для загрузки
      </label>

      <h1 className="text" style={{ color: "red" }}>
        Text
      </h1>
      <Button className="button btn__a " variant="secondary">
        A
      </Button>
      <Button
        data-description="Какое то описание"
        className="button btn__b"
        variant="secondary"
      >
        B
      </Button>
      <div className="input__container">
        <input className="input" id="check" type="checkbox" />
        <label className="label" htmlFor="check"></label>
      </div>

      <div className="btn__add_container">
        <Button
          className="btn__add"
          variant="secondary"
          onClick={onAddDataClick}
        >
          Add
        </Button>
      </div>
      <SearchElement onSearchData={onSearchData} />
      <Table className="table" striped bordered hover>
        <thead>
          <tr>
            <th
              onClick={() => {
                inputData("id");
              }}
            >
              id{dateInput === "id" ? <ArrowNumber /> : null}
            </th>

            <th
              onClick={() => {
                inputData("firstName");
              }}
            >
              First Name{dateInput === "firstName" ? <ArrowLetters /> : null}
            </th>
            <th
              onClick={() => {
                inputData("lastName");
              }}
            >
              Last Name{dateInput === "lastName" ? <ArrowLetters /> : null}
            </th>
            <th
              onClick={() => {
                inputData("email");
              }}
            >
              email{dateInput === "email" ? <ArrowLetters /> : null}
            </th>
            <th
              onClick={() => {
                inputData("phone");
              }}
            >
              phone{dateInput === "phone" ? <ArrowNumber /> : null}
            </th>
          </tr>
        </thead>

        <tbody>
          {currentData.map((item) => (
            <tr
              key={item.id + item.email}
              onClick={() => {
                onPopupClick(item);
              }}
            >
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <PaginationData
        pages={pages}
        paginate={handlePaginate}
        nextClick={handleNextPage}
        prevClick={handlePrevPage}
      />
    </>
  );
}

export default TableTask;
