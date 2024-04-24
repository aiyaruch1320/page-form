"use client";

import { MdTextFields } from "react-icons/md";
import { ElementsType, FormElement } from "../form-elements";

const type: ElementsType = "TextField";

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      label: "Text Field",
      helperText: "Helper text",
      required: false,
      placeHolder: "Value here...",
    },
  }),
  designerBtnElement: {
    icon: MdTextFields,
    label: "Text Field",
  },
  designerComponent: () => <div>Designer Components</div>,
  formComponent: () => <div>Designer Components</div>,
  propertiesComponent: () => <div>Designer Components</div>,
};
