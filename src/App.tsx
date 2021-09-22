import React, { useCallback, useState } from "react";
import styled from "styled-components";
import "./App.css";
import { Day01 } from "./solutions/2018_01";

const TextArea = styled.textarea``;
const Select = styled.select``;
const Button = styled.button`
  background-color: #FBFBFB;
  outline: none;
  border: 1px solid #AAAAAA;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 600;
  color: #222222;
  padding: 6px 10px;
  align-items: center;
  align-self: center;
  cursor: pointer;
  box-shadow: 0 2px 0 #AAA;
  display: flex;

  &:active {
    box-shadow: 0 1px 0 #444;
    background-color: #F4F4F4;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const availableSolvers: Record<string, any> = {
  "2018_01": {
    name: "2018 Day 1",
    solver: Day01,
  },
};

function App() {
  const [problemInput, setProblemInput] = useState("");
  const [solverKey, setSolverKey] = useState("default");
  const [solverOutput, setSolverOutput] = useState("");

  const runSolver = useCallback(() => {
    const result = availableSolvers[solverKey].solver(problemInput);
    setSolverOutput(result);
    return result;
  }, [solverKey, problemInput]);

  return (
    <div className="App">
      <h3>Problem Input</h3>
      <TextArea
        value={problemInput}
        onChange={(e) => setProblemInput(e.target.value)}
      />
      <h3>Solver</h3>
      <Select value={solverKey} onChange={(e) => setSolverKey(e.target.value)}>
        <option disabled value="default">
          {" "}
          -- select a solver --{" "}
        </option>
        {availableSolvers &&
          Object.entries(availableSolvers).map(([k, v]) => (
            <option key={k} value={k}>
              {v.name}
            </option>
          ))}
      </Select>
      <Button
        disabled={solverKey === "default" || !problemInput}
        onClick={() => {
          console.log(runSolver());
        }}
      >
        Run Solution
      </Button>
      <TextArea value={solverOutput} disabled />
    </div>
  );
}

export default App;
