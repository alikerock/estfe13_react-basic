//Nav 컴포넌트
function Nav({ data }) {
  const lists = data.map(d => (
    <li key={d.id}>
      <a href="">{d.title}</a>
    </li>
  ));
  //list에 출력할 코드 생성

  return (
    <nav>
      <ul>{lists}</ul>
    </nav>
  );
}
export default Nav;
