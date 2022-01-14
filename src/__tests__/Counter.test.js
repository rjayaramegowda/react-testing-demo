import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../Counter";

test("<Counter />", () => {
  const { debug } = render(<Counter />);
  debug();
  const btnIncrement = screen.getByText(/Increment/);
  fireEvent.click(btnIncrement);
  fireEvent.click(btnIncrement);
  debug();

  const counterElement = screen.getByText(/2/);
  expect(counterElement).toBeInTheDocument();

  const btnDecrement = screen.getByText(/Increment/);
  fireEvent.click(btnDecrement);
  debug();
});
