import * as React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { FetchGreeting } from "../fetch-greeting";

const server = setupServer(
  rest.get("/greeting", (req, res, ctx) => {
    return res(ctx.json({ greeting: "hello there" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("loads and displays greeting", async () => {
  render(<FetchGreeting />);

  userEvent.click(screen.getByText("Load Greeting"));

  await screen.findByRole("heading", { name: "hello there" });

  expect(screen.getByRole("button")).toHaveAttribute("disabled");
});
