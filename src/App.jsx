import './App.css';
import InputCon from './components/InputCon';
import ListCon from './components/ListCon';
import { useState } from 'react';

function App() {
  // const data = [
  //   { name: '박은규', phonenumber: '010-1234-5678', info: '아무정보' },
  //   { name: '박은규', phonenumber: '010-1234-5678', info: '아무정보' },
  //   { name: '박은규', phonenumber: '010-1234-5678', info: '아무정보' },
  // ];
  const data = JSON.parse(localStorage.getItem('contactList')) || [];
  let [lists, setList] = useState(data);

  return (
    <section>
      <h1>연락처리스트</h1>
      <main>
        <InputCon setList={setList} />
        <ListCon lists={lists} setList={setList} />
      </main>
    </section>
  );
}

export default App;
