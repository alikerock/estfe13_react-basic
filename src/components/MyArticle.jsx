function MyArticle({ title, desc, difficulty, onChangeMode, onDelete }) {
  console.log("MyArticle render");
  return (
    <section>
      <article>
        <h2>{title}</h2>
        <p>{desc}</p>
        {difficulty && <p>난이도: {difficulty}</p>}
      </article>
      {onChangeMode && <button onClick={onChangeMode}>수정</button>}
      {onDelete && <button onClick={onDelete}>삭제</button>}
    </section>
  );
}
export default MyArticle;
