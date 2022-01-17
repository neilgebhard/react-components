import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "ReactComponents/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  label: "Button",
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  label: "Button",
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  label: "Button",
  size: "large",
};
