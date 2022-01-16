import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";

export default {
  title: "ReactComponents/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "id",
  label: "Default",
  placeholder: "Placeholder",
};

export const Error = Template.bind({});
Error.args = {
  id: "id",
  label: "Error",
  error: true,
  message: "An error occurred",
};

export const Success = Template.bind({});
Success.args = {
  id: "id",
  label: "Success",
  success: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "id",
  label: "Disabled",
  placeholder: "Placeholder",
  disabled: true,
};
