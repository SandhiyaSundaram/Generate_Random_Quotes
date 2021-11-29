import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './Component/ToDo';
import GenerateRandomQuotes from './Component/GenerateRandomQuotes';

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(

  <div>
    <GenerateRandomQuotes></GenerateRandomQuotes>
  </div>,  
  
  
  document.getElementById('root')
);