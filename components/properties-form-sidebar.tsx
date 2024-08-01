import React from "react";
import useDesigner from "./hooks/use-designer";
import { FormElements } from "./form-elements";

function PropertiesFormSidebar() {
  const { selectedElement } = useDesigner();
  if (!selectedElement) return null;

  const PropertiesForm = FormElements[selectedElement.type].propertiesComponent;
  return (
    <div className="flex flex-col p-2">
      <div className="flex justify-between items-center">
        <p className="text-sm text-foreground/70">Element properties</p>
      </div>
      <PropertiesForm />
    </div>
  );
}

export default PropertiesFormSidebar;
