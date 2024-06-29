import type { Meta, StoryObj } from "@storybook/react";
import SVGGenericContainer from "../components/SVGGenericContainer";
import SVGSun from "../components/SVGSun";

const meta = {
	title: "SVGGenericContainer",
	component: SVGGenericContainer,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		width: { control: "text" },
		height: { control: "text" },
	},
} satisfies Meta<typeof SVGGenericContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		width: "100px",
		height: "100px",
		children: <SVGSun color="#f00" />,
	},
};
