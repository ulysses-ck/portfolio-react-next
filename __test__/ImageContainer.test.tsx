import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ImageContainer from "@/components/ImageContainer";

import { axe, toHaveNoViolations } from "jest-axe";
expect.extend(toHaveNoViolations);

describe("ImageContainer", () => {
	it("should have to attribute alt description", async () => {
		const { container } = render(<ImageContainer />);

		const results = await axe(container);

		expect(results).toHaveNoViolations();
	});
});
