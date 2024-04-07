"use client";

import { Form } from "@prisma/client";
import React from "react";

function FormBuilder({ form }: { form: Form }) {
  return (
    <main className="flex flex-col w-full">
      <div className="flex justify-between border-b-2 p-4 gap-3 items-center">
        <h2 className="truncate font-medium">
          <span className="text-muted-foreground mr-2">Form:</span>
          {form.name}
        </h2>
      </div>
    </main>
  );
}

export default FormBuilder;
