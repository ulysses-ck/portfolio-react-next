import type { Meta, StoryObj } from "@storybook/react";

import CardWork from "../components/CardWork";
import SVGReact from "../components/SVGReact";

const meta = {
	title: "CardWork",
	component: CardWork,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof CardWork>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		projectWork: {
			urlProject: "https://www.google.com",
			titleProjectWork: "Ecommerce",
			imageProject: {
				alt: "Project Image",
				src: "https://via.placeholder.com/150",
				width: 100,
				height: 100,
			},
			techStack: [
				{
					title: "React.js",
					color: "black",
					Component: () => <SVGReact color="black" />,
				},
				{
					title: "React.js",
					color: "black",
					Component: () => <SVGReact color="black" />,
				},
				{
					title: "React.js",
					color: "black",
					Component: () => <SVGReact color="black" />,
				},
				{
					title: "React.js",
					color: "black",
					Component: () => <SVGReact color="black" />,
				},
			],
		},
	},
};
