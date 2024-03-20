import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup/index";
import Like from "./components/Like";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  const setLikeToggle = (id: string) => {
    console.log(`Sending like to ${id}`);
  };

  return (
    <div>
      <Like
        id="game1"
        currentStatus={true}
        onClick={() => setLikeToggle("game1")}
      ></Like>
      <Like
        id="game2"
        currentStatus={false}
        onClick={() => setLikeToggle("game2")}
      ></Like>
      {/* <ListGroup
        header="Fruits"
        items={["Apple", "Banana", "Orange"]}
        onSelectItem={console.log}
      /> */}
      {/* {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>
          <strong>Warning!</strong> Better check yourself, you're not looking
          too good.
        </Alert>
      )}
      {!showAlert && (
        <Button
          color="primary"
          children="Click"
          onClick={() => setShowAlert(true)}
        />
      )} */}
    </div>
  );
}

export default App;
