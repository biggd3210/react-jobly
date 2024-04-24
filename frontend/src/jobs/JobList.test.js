import React from "react";
import { render } from "@testing-library/react";
import Jobs from "./JobList";

it("matches snapshot", function () {
    const { asFragment } = render(<Jobs />);
    expect(asFragment()).toMatchSnapshot();
})