// import './App.css';

import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";

const btnValues = [
  ["AC", "±", "%", "/"],
  ["7", "8", "9", "x"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="]
];

function App() {
  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonBox>
        {
          btnValues.flat().map((btn, index) => {
            return <Button
              key={index}
              className={btn === "=" ? "equal" : ""}
              value={btn}
              onClick={() => {
                console.log(`${btn} clicked`);
            }}
            />
          })
        }
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
