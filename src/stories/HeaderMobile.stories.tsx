import type { Meta, StoryObj } from "@storybook/react";

import HeaderMobile from "../components/HeaderMobile";

const meta = {
	title: "HeaderMobile",
	component: HeaderMobile,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof HeaderMobile>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {};
