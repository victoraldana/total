import React, { useState } from 'react';

import { Container, FormControl } from '@mui/material';

function DateInputComponent(props) {
  
    const {label, data, setdata, fetchData}=props;
  const handleDateChange = (event) => {
    setdata(event.target.value);
    
  };

  return (
    <div className="container mt-4">
      <div className="form-group -sm" style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
        <label htmlFor="dateInput">{label}</label>
        <input
          type="date"
          id="dateInput"
          className="form-control -sm" 
          value={data}
          onChange={handleDateChange}
        />
      </div>
    </div>
  );
}

export default DateInputComponent;
