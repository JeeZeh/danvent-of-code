import React, { ChangeEvent, useCallback, useState } from "react";
import styled from "styled-components";
import "./App.css";
import { Button, Select, TextArea } from "./components/Shared";
import { Day01 } from "./solutions/2018_01";

const availableSolvers: Record<string, any> = {
  "2018_01": {
    name: "2018 Day 1",
    solver: Day01,
  },
};

type SolverListProps = {
  selected: string;
  onChange: (e: string) => void;
};

const SolverList = ({ selected, onChange }: SolverListProps) => {
  return (
    <Select value={selected} onChange={(e) => onChange(e.target.value)}>
      <option disabled value="default">
        -- select a solver --
      </option>
      {availableSolvers &&
        Object.entries(availableSolvers).map(([k, v]) => (
          <option key={k} value={k}>
            {v.name}
          </option>
        ))}
    </Select>
  );
};

const Container = styled.div<{ spacing?: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin: ${(p) => p.spacing ?? 0}px;
  }
`;

const App = () => {
  const [problemInput, setProblemInput] = useState("");
  const [solverKey, setSolverKey] = useState("default");
  const [solverOutput, setSolverOutput] = useState("");

  const runSolver = useCallback(() => {
    const result = availableSolvers[solverKey].solver(problemInput);
    setSolverOutput(result);
    return result;
  }, [solverKey, problemInput]);

  return (
    <Container spacing={20} className="App">
      <Container>
        <h2>Problem Input</h2>
        <TextArea
          value={problemInput}
          onChange={(e) => setProblemInput(e.target.value)}
        />
      </Container>
      <Container>
        <h2>Solver</h2>
        <SolverList selected={solverKey} onChange={setSolverKey} />
      </Container>
      <Button
        disabled={solverKey === "default" || !problemInput}
        onClick={() => {
          console.log(runSolver());
        }}
      >
        Run Solution
      </Button>
      <Container>
        <h2>Output</h2>
        <TextArea value={solverOutput} disabled />
      </Container>
    </Container>
  );
};

export default App;
