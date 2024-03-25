import type { Meta, StoryObj } from "@storybook/react";
import SVGSun from "../components/SVGSun";

const meta = {
	title: "SVGSun",
	component: SVGSun,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		color: { control: "color" },
	},
} satisfies Meta<typeof SVGSun>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		color: "#000",
	},
};
