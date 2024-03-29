import type { Meta, StoryObj } from "@storybook/react";

import HeaderDesktop from "../components/HeaderDesktop";

const meta = {
	title: "HeaderDesktop",
	component: HeaderDesktop,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof HeaderDesktop>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		classNameHeader: "",
		englishTranslation: "English",
		languageTranslation: "Language",
		spanishTranslation: "Spanish",
	},
};
