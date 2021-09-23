import styled from "styled-components";

export const TextArea = styled.textarea`
    min-height: 200px;
    min-width: 500px;
`;

export const Select = styled.select`
    padding: 0.5rem;
    border-radius: 0.5rem;
    outline: none;
`;

export const Button = styled.button`
  background-color: #111111;
  outline: none;
  border: 1px solid #535353;
  border-radius: 1rem;
  font-size: 2rem;
  font-weight: 600;
  color: #d8d8d8;
  padding: 1rem 2rem;
  align-items: center;
  align-self: center;
  cursor: pointer;
  box-shadow: 0 4px 0 #3b3b3b;
  display: flex;

  &:active {
    box-shadow: 0 1px 0 #0a0a0a;
    transform: translateY(3px);
    background-color: #0f0f0f;
  }

  &:disabled {
    opacity: 0.5;
  }
`;
