import React from "react";
import useDesigner from "./hooks/use-designer";
import { FormElements } from "./form-elements";

function PropertiesFormSidebar() {
  const { selectedElement } = useDesigner();
  if (!selectedElement) return null;

  const PropertiesForm = FormElements[selectedElement.type].propertiesComponent;
  return <PropertiesForm />;
}

export default PropertiesFormSidebar;
