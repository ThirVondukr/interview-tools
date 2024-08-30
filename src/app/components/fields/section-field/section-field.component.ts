import {
  ChangeDetectionStrategy,
  Component,
  computed,
  forwardRef,
  inject,
  input,
} from "@angular/core";
import { MatRadioGroup } from "@angular/material/radio";
import { FormOptions, SectionField } from "app/models/form";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RadioGroupFieldComponent } from "app/components/fields/radio-group-question/radio-group-field.component";
import { NgxControlValueAccessor } from "ngxtension/control-value-accessor";
import { FieldRouterComponent } from "app/components/fields/field-router/field-router.component";

@Component({
  selector: "app-section-field",
  standalone: true,
  hostDirectives: [NgxControlValueAccessor],
  imports: [
    MatRadioGroup,
    RadioGroupFieldComponent,
    ReactiveFormsModule,
    forwardRef(() => FieldRouterComponent),
    FormsModule,
  ],
  templateUrl: "./section-field.component.html",
  styleUrl: "./section-field.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionFieldComponent {
  field = input.required<SectionField>();
  formOptions = input.required<FormOptions>();
  protected cva = inject<NgxControlValueAccessor<Record<string, any>>>(
    NgxControlValueAccessor
  );
  shouldPrint = computed(() =>
    Object.values(this.cva.value$() ?? {}).some(
      value => value !== this.formOptions().radioGroupDefaultAnswer
    )
  );
}
