import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      {showAlert && (
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
      )}
    </div>
  );
}

export default App;
