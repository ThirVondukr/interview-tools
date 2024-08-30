import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("app/pages/home-page/home-page.component").then(
        m => m.HomePageComponent
      ),
  },
];
