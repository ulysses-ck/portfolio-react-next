import type { Meta, StoryObj } from "@storybook/react";

import ThemeSwitcher from "../components/ThemeSwitcher";

const meta = {
	title: "ThemeSwitcher",
	component: ThemeSwitcher,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} as Meta<typeof ThemeSwitcher>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {};
