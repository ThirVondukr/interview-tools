import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from "@angular/core";
import { MatRadioButton, MatRadioGroup } from "@angular/material/radio";
import { ReactiveFormsModule } from "@angular/forms";
import { MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { FormOptions, RadioGroup } from "app/models/form";
import { JsonPipe } from "@angular/common";
import { NgxControlValueAccessor } from "ngxtension/control-value-accessor";

@Component({
  selector: "app-radio-group-field",
  standalone: true,
  hostDirectives: [NgxControlValueAccessor],
  imports: [
    MatRadioGroup,
    MatRadioButton,
    ReactiveFormsModule,
    MatLabel,
    MatInput,
    JsonPipe,
  ],
  templateUrl: "./radio-group-field.component.html",
  styleUrl: "./radio-group-field.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupFieldComponent {
  field = input.required<RadioGroup>();
  formOptions = input.required<FormOptions>();
  protected cva = inject<NgxControlValueAccessor<string>>(
    NgxControlValueAccessor
  );
}
