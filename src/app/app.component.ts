import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MatCheckbox } from "@angular/material/checkbox";
import { MatFormField, MatInput, MatLabel } from "@angular/material/input";
import { MatButton } from "@angular/material/button";
import { NgxPrintDirective } from "ngx-print";
import { SectionFieldComponent } from "app/components/fields/section-field/section-field.component";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    MatCheckbox,
    MatInput,
    MatFormField,
    MatLabel,
    MatButton,
    NgxPrintDirective,
    SectionFieldComponent,
    ReactiveFormsModule,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
