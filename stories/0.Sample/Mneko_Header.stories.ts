import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Mneko_Header from "./Mneko_Header";

const meta: Meta<typeof Mneko_Header> = {
  component: Mneko_Header,
  title: "Mneko_Header",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;
/**
 * 背景 ホワイト.ver
 */
export const whiteHeader: Story = {
  args: {
    site_title: "My Website",
  },
};
