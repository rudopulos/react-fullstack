import "./App.css";
import Books from "./books/Books";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import TutorsList from "./TutorsList";
import Button from "./Button";

function App() {
  const isVisible = true;
  const menuItems = [
    {
      id: 1,
      name: "Acasa",
    },
    {
      id: 2,
      name: "Despre noi",
    },
    {
      id: 3,
      name: "Contact",
    },
  ];

  const data = {
    name: "MIT",
    description:
      "Experience, a concentration of knowledge and the ability to avoid most recruiting mistakes. We know what most local and foreign companies want and we can give it to you. And we are constantly improving our programming courses, adding something new there. You can see the success stories of our alumni for yourself to see the effectiveness of our teaching methodology. Yes, we will start with the basics and the most basic information. We know that most people come to us with zero knowledge. ",
    tutors: [
      {
        firstName: "John",
        lastName: "Smith",
        phone: "+1 302-865-7394",
        email: "johnsmith@goit.global",
        city: "New York",
        options: "Group creation",
      },
      {
        firstName: "Antonio",
        lastName: "García",
        phone: "+34 456 890 302",
        email: "antonio.garcia@goit.global",
        city: "Madrid",
        options: "Group creation, editing teacher profiles",
      },
    ],
    cities: ["Kyiv", "London", "Berlin"],
    department: [
      { name: "Faculty of Computer Science" },
      { name: "Faculty of Automation" },
      { name: "Faculty of Neural Networks" },
    ],
  };

  return (
    <div>
      <Menu items={menuItems} />
      <Button
        text="Buton"
        icon="&"
        handleClick={() => console.log("Scrie asta")}
      />
      <SearchBar text={"Ar"} isVisible={isVisible} price={23}>
        <h3>Tag</h3>
        <h4>Inca ceva</h4>
      </SearchBar>
      <TutorsList tutors={data.tutors} />
      <Books />
      <h1>Aplicatia mea react</h1>
    </div>
  );
}

export default App;
