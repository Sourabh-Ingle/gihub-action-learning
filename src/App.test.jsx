import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import App from "./App.jsx";


afterEach(() => {
    cleanup();
});

test("renders Hello World", () => {
    render(<App />);

    const heading = screen.getByRole("heading", {
        level: 2, name: /Hello World/i,
        
    });
    expect(heading).toBeInTheDocument();
})