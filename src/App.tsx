import { useState } from "react";
import Alert from "./components/Alert";
import MyButton from "./components/MyButton";
// import ListGroup from "./components/ListGroup";
function App() {
  const items = ["Nord", "Sud", "Est", "Littoral"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {alertVisible && <Alert onClose={()=> setAlertVisible(false)}>
        Hello World!!!
        <span>
          I'm <b>Patricia</b>
        </span>
      </Alert>}
      <br />
      <MyButton onClick={() => setAlertVisible(true)}>
        My button
      </MyButton>
    </div>
  );
}

export default App;
