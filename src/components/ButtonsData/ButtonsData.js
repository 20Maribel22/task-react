import React from 'react'
import Button from 'react-bootstrap/Button';
import './ButtonsData.css'

function ButtonsData({handleChangeUrl}) {
    const smallUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    const bigUrl = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

  return (
    <div className='btns__data'>
        <Button className='btn__data' variant="secondary" onClick={() =>{handleChangeUrl(smallUrl)}} active>Small</Button>
        <Button className='btn__data' variant="secondary" onClick={() =>{handleChangeUrl(bigUrl)}}>Big</Button>
    </div>
  )
}

export default ButtonsData