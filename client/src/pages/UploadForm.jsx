import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../GlobalStyle';
import axios from 'axios';

const UploadForm = () => {
  const [data, setData] = useState({
    name: '',
    title: '',
    message: '',
  });

  const onChange = e => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post('/upload/post', data)
      .then(res => console.log(res.data))
      .catch(err => console.log(`${err}`));
  };

  return (
    <FormContainer>
      <form action="/upload/post" onChange={onChange} onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">이름</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="이름을 입력하세요"
          />
        </div>
        <div>
          <label htmlFor="title">제목</label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="제목을 입력하세요"
          />
        </div>
        <div>
          <label htmlFor="message">본문</label>
          <textarea
            id="message"
            name="message"
            type="text"
            placeholder="본문을 입력하세요"
          />
        </div>
        <div>
          <input type="submit" value="제출" />
        </div>
      </form>
    </FormContainer>
  );
};

export default UploadForm;

const FormContainer = styled(Container)``;
