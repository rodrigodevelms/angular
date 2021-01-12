import {RouterModule, Routes} from "@angular/router";
import {DetailsComponent} from "./details/details.component";
import {NgModule} from "@angular/core";
import {HomeComponent} from "../navigation/home/home.component";
import {SectionPropertiesComponent} from "./section-properties/section-properties.component";

const webRoutes: Routes = [
  {path: 'details/:id', component: DetailsComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(webRoutes)
  ],
  exports: [RouterModule]
})

export class WebRoutes {
}
