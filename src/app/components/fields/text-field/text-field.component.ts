import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from "@angular/core";
import { TextField } from "app/models/form";
import { CdkTextareaAutosize } from "@angular/cdk/text-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { NgxControlValueAccessor } from "ngxtension/control-value-accessor";

@Component({
  selector: "app-text-field",
  standalone: true,
  hostDirectives: [NgxControlValueAccessor],
  imports: [
    CdkTextareaAutosize,
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
  ],
  templateUrl: "./text-field.component.html",
  styleUrl: "./text-field.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextFieldComponent {
  field = input.required<TextField>();
  protected cva = inject<NgxControlValueAccessor<string>>(
    NgxControlValueAccessor
  );
}
