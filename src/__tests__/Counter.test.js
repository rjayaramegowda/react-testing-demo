import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../Counter";

test("<Counter />", () => {
  render(<Counter />);
  const btnIncrement = screen.getByText(/Increment/);
  fireEvent.click(btnIncrement);
});
