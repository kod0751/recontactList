import { useState } from 'react';

export default function InputCon({ setList }) {
  const [inputs, setInputs] = useState({
    name: '',
    phonenumber: '',
    info: '',
    groupInfo: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    phonenumber: '',
  });

  const validate = (name, value) => {
    let error = '';

    if (name === 'name') {
      const koreanRegex = /^[가-힣]+$/; // 한글만 허용
      if (!value) {
        error = '이름을 입력해주세요.';
      } else if (!koreanRegex.test(value)) {
        error = '이름은 한글만 입력 가능합니다.';
      } else if (value.length < 2) {
        error = '이름은 최소 2글자 이상이어야 합니다.';
      }
    }

    if (name === 'phonenumber') {
      const phoneRegex = /^(010{1})[0-9]{4}[0-9]{4}$/;
      if (!value) {
        error = '전화번호를 입력해주세요.';
      } else if (!phoneRegex.test(value.replace(/-/g, ''))) {
        error = '전화번호는 010-0000-0000 형식으로 입력해주세요.';
      }
    }

    return error;
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    const error = validate(name, value);

    setInputs({
      ...inputs,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const onSave = () => {
    const selectElement = document.getElementById('select');
    const selectedValue =
      selectElement.options[selectElement.selectedIndex].value; //select 값 가져오기

    setList((prev) => {
      const newList = [{ ...inputs, groupInfo: selectedValue }, ...prev]; //마지막에 그룹정보 담기
      localStorage.setItem('contactList', JSON.stringify(newList));
      return newList;
    });

    setInputs({
      name: '',
      phonenumber: '',
      info: '',
    });
  };

  return (
    <div className="inputCon">
      <div className="input">
        <label htmlFor="inputName">이름</label>
        <input
          className="inputText"
          type="text"
          id="inputName"
          name="name"
          onChange={onChange}
          value={inputs.name}
          placeholder="이름"
        />
      </div>
      {errors.name && <p className="error">{errors.name}</p>}
      <div className="input">
        <label htmlFor="inputName">전화번호</label>
        <input
          className="inputText"
          type="text"
          id="inputName"
          name="phonenumber"
          onChange={onChange}
          value={inputs.phonenumber}
          placeholder="전화번호"
        />
      </div>
      {errors.phonenumber && (
        <p className="error" style={{ color: 'red' }}>
          {errors.phonenumber}
        </p>
      )}
      <div className="select">
        <label htmlFor="selctName">그룹</label>
        <div className="selectFnc">
          <select id="select">
            <option value="가족" selected>
              가족
            </option>
            <option value="친구">친구</option>
            <option value="직장">직장</option>
            <option value="스터디">스터디</option>
          </select>
          <button className="selectBtn">조직추가</button>
        </div>
      </div>
      <div className="input">
        <label htmlFor="inputName">간단한정보</label>
        <input
          className="inputText"
          type="text"
          id="inputName"
          name="info"
          onChange={onChange}
          value={inputs.info}
          placeholder="간단한정보"
        />
      </div>
      <button onClick={onSave}>저장</button>
    </div>
  );
}
