import type { Meta, StoryObj } from "@storybook/react";

import LanguageSelect from "../components/LanguageSelect";
import styles from "../components/LanguageSelect/LanguageSelect.module.css";

const meta = {
	title: "LanguageSelect",
	component: LanguageSelect,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof LanguageSelect>;

export default meta;

const Template: React.FC<{ className: string }> = (args) => (
	<LanguageSelect {...args} />
);

export const Default: React.FC = (args) => (
	<Template className={""} {...args} />
);
