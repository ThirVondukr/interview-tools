import { Environment } from "app/models/env";
import { FormConfig } from "app/models/form";

const formConfig: FormConfig = {
  title: "Title",
  fields: [],
  options: {
    radioGroupDefaultAnswer: "Yes",
    radioGroupDefaultOptions: ["Yes", "No"],
  },
};
export const environment = { formConfig } satisfies Environment;
