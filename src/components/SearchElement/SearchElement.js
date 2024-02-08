import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchElement({onSearchData}) {
    const[searchValue, setSearchValue]= useState('')
  return (
    <div> <InputGroup className="mb-3">
    <Form.Control
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      value = {searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
    <Button variant="outline-secondary" id="button-addon2" onClick={() => {onSearchData(searchValue)}}>
      Button
    </Button>
  </InputGroup></div>
  )
}

export default SearchElement