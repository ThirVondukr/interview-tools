import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
} from "@angular/core";
import { SectionFieldComponent } from "app/components/fields/section-field/section-field.component";
import { FormConfig, FormFieldStyle } from "app/models/form";
import { NgClass, NgComponentOutlet, NgStyle } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CallPipe } from "ngxtension/call-apply";
import { TextFieldComponent } from "app/components/fields/text-field/text-field.component";
import { FieldRouterComponent } from "app/components/fields/field-router/field-router.component";
import { formLocalStorageKey } from "app/models/const";

@Component({
  selector: "app-form",
  standalone: true,
  imports: [
    SectionFieldComponent,
    NgComponentOutlet,
    ReactiveFormsModule,
    FormsModule,
    CallPipe,
    TextFieldComponent,
    FieldRouterComponent,
    NgClass,
    NgStyle,
  ],
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  config = input.required<FormConfig>();
  protected value: Record<string, any>;

  protected saveChanges() {
    localStorage.setItem(formLocalStorageKey, JSON.stringify(this.value));
    console.log(this.value);
  }

  constructor() {
    const storedValue = localStorage.getItem(formLocalStorageKey);
    this.value = storedValue
      ? JSON.parse(storedValue)
      : {
          fullName: "",
        };
  }

  protected style(style?: FormFieldStyle) {
    if (!style) {
      return {};
    }
    const styles: Record<string, string | number> = {};
    if (style?.grid?.width) {
      styles["grid-column"] = `span ${style?.grid?.width}`;
    }
    return styles;
  }
}
