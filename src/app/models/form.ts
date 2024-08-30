export interface FormFieldStyle {
  grid?: {
    width?: number;
  };
}

interface BaseField {
  key: string;
  style?: FormFieldStyle;
}

export interface RadioGroupStyle extends FormFieldStyle {
  titlePosition?: "top" | "left";
}

export interface RadioGroup extends BaseField {
  type: "radio-group";
  title: string;
  style?: RadioGroupStyle;
  options?: string[];
}

export interface SectionField extends BaseField {
  type: "section";
  title: string;
  fields: RadioGroup[];
}

export interface TextField extends BaseField {
  type: "text-field";
  title: string;
}

export type FormField = SectionField | RadioGroup | TextField;

export interface FormConfig {
  title: string;
  fields: FormField[];
  options: FormOptions;
}

export interface FormOptions {
  radioGroupDefaultAnswer: string;
  radioGroupDefaultOptions: string[];
}
