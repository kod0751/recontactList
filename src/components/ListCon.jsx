import InputFiled from './InputFiled';

import PostList from './PostList';

export default function ListCon({ lists, setList }) {
  // const data = JSON.parse(localStorage.getItem('contactList')) || [];

  return (
    <section className="listField">
      <InputFiled />
      <PostList lists={lists} setList={setList} />
    </section>
  );
}
