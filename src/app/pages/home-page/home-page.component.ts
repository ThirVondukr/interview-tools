import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { NgxPrintDirective } from "ngx-print";
import { FormComponent } from "app/components/form/form.component";
import { environment } from "environments/environment";
import { formLocalStorageKey } from "app/models/const";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [FormComponent, MatButton, NgxPrintDirective, FormComponent],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  protected readonly formConfig = environment.formConfig;

  protected clearStorage() {
    if (confirm("Are you sure? This action will delete all stored data.")) {
      localStorage.removeItem(formLocalStorageKey);
      window.location.reload();
    }
  }
}
