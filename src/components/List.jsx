export default function List({ list, setList, index }) {
  const removeItem = () => {
    setList((prev) => {
      const newList = prev.filter((_, i) => i !== index);
      localStorage.setItem('contactList', JSON.stringify(newList));
      return newList;
    });
  };
  return (
    <li className="list">
      <p>
        {list.name} {list.phonenumber} {list.groupInfo}
      </p>
      <button className="detailBtn">세부사항</button>
      <button className="deleteBtn" onClick={removeItem}>
        삭제
      </button>
    </li>
  );
}
