function CreateArticle({ onSubmit }) {
  console.log("CreateArticle render");

  return (
    <>
      <h2>Create Article</h2>

      <form
        onSubmit={e => {
          e.preventDefault();

          const title = e.target.title.value;
          const desc = e.target.desc.value;
          const difficulty = e.target.difficulty.value;

          onSubmit(title, desc, difficulty);

          e.target.reset();
        }}
      >
        <div>
          <label htmlFor="title">title</label>
          <input type="text" name="title" id="title" required />
        </div>

        <div>
          <label htmlFor="desc">desc</label>
          <textarea name="desc" id="desc" required></textarea>
        </div>

        <div>
          <label htmlFor="difficulty">difficulty</label>
          <input type="number" name="difficulty" id="difficulty" min="1" max="5" required />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default CreateArticle;
