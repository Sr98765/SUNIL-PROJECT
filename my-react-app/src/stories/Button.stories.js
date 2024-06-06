// src/stories/Button.stories.js
import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "../Button";

export default {
  title: "Button",
  component: Button,
};

export const Default = () => (
  <Button label="Click me" onClick={action("Button clicked")} />
);

export const Disabled = () => (
  <Button label="Disabled" onClick={action("Button clicked")} disabled />
);
