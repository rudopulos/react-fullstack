import Alert from "./Alert";
import "./App.css";
import Card from "./Card";
import Panel from "./Panel";

function App() {
  return (
    <main>
      <Alert>Mesajul este fara variant!</Alert>
      <Alert variant="success" isOutlined={true}>
        Mesajul este cu succes!
      </Alert>
      <Alert variant="error">Mesajul este cu eroare!</Alert>

      <Card variant={"red"} />
      <Card variant={"blue"} />
      <Card variant={"yellow"} />

      <div className="p-4 bg-yellow-500 my-4">Adaug text aici</div>
      <Panel />
    </main>
  );
}

export default App;
