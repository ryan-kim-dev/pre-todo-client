import React, { useState } from 'react';
import axios from 'axios';

const Require = () => {
  const [resData, setResData] = useState(null);
  const onClick = async e => {
    e.preventDefault();
    await axios
      .get('/get')
      .then(res => {
        setResData(res.data);
      })
      .catch(err => console.log(`${err}`));
  };

  return (
    <div>
      <button onClick={onClick}>겟</button>
      {resData ? resData : null}
    </div>
  );
};

export default Require;
