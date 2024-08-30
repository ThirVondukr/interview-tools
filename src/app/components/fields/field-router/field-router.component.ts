import {
  ChangeDetectionStrategy,
  Component,
  effect,
  forwardRef,
  inject,
  input,
} from "@angular/core";
import {
  RadioGroupFieldComponent,
  SectionFieldComponent,
  TextFieldComponent,
} from "app/components/fields/index";
import { FormField, FormOptions } from "app/models/form";
import { FormsModule } from "@angular/forms";
import { NgxControlValueAccessor } from "ngxtension/control-value-accessor";

function getDefaultValue(field: FormField, options: FormOptions) {
  switch (field.type) {
    case "section":
      return {};
    case "text-field":
      return "";
    case "radio-group":
      const fieldOptions = field.options || options.radioGroupDefaultOptions;
      return fieldOptions.includes(options.radioGroupDefaultAnswer)
        ? options.radioGroupDefaultAnswer
        : null;
  }
}

@Component({
  selector: "app-field-router",
  standalone: true,
  hostDirectives: [NgxControlValueAccessor],
  imports: [
    TextFieldComponent,
    FormsModule,
    TextFieldComponent,
    RadioGroupFieldComponent,
    forwardRef(() => SectionFieldComponent),
  ],
  templateUrl: "./field-router.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldRouterComponent {
  field = input.required<FormField>();
  formOptions = input.required<FormOptions>();
  protected cva = inject<NgxControlValueAccessor<Record<string, any>>>(
    NgxControlValueAccessor
  );

  initKeyEffect = effect(
    () => {
      const value = this.cva.value$();
      if (value === null) {
        return;
      }

      const field = this.field();
      const key = field.key;

      if (!(key in value)) {
        value[key] = getDefaultValue(field, this.formOptions());
      }
      this.initKeyEffect.destroy();
    },
    { manualCleanup: true }
  );

  protected onChange(key: string, value: any) {
    this.cva.value = { [key]: value, ...this.cva.value };
  }
}
