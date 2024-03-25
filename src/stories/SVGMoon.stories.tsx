import type { Meta, StoryObj } from "@storybook/react";
import SVGMoon from "../components/SVGMoon";

const meta = {
	title: "SVGMoon",
	component: SVGMoon,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		color: { control: "color" },
	},
} satisfies Meta<typeof SVGMoon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		color: "#000",
	},
};
