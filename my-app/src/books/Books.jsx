const Books = () => {
  const favoriteBooks = [
    { id: "id-1", name: "JS pentru incepatori" },
    { id: "id-2", name: "React basics" },
    { id: "id-3", name: "React Router overview" },
    { id: "id-4", name: "Redux in depth" },
  ];

  /*

        {favoriteBooks.map((el) => {
          return <li key={el.id}>{el.name}</li>;
        })}

        [
    { id: "id-1", name: "JS pentru incepatori" },
    { id: "id-2", name: "React basics" },
    { id: "id-3", name: "React Router overview" },
    { id: "id-4", name: "Redux in depth" },
  ]
  
  => 

  {
    <li key='id-1'>JS pentru incepatori</li>
    <li key='id-2'>React basics</li>
    <li key='id-3'>React Router overview</li>
    <li key='id-4'>Redux in depth</li>
}

  */

  return (
    <section>
      <h1>Books</h1>
      <ul>
        {favoriteBooks.map((el) => {
          return <li key={el.id}>{el.name}</li>;
        })}
      </ul>
    </section>
  );
};

export default Books;
