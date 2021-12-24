import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GoogleMapRoutingModule } from "./google-map-routing.module";
import { GoogleMapComponent } from "./google-map.component";
import { SharedModule } from "../../../shared/shared.module";
import { AgmCoreModule } from "@agm/core";

@NgModule({
  imports: [
    CommonModule,
    GoogleMapRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({
      //default key: AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk
      apiKey: "AIzaSyAv-gQfsVWULK4vu2THDXFXUmg9cc-MVz4",
    }),
  ],
  declarations: [GoogleMapComponent],
})
export class GoogleMapModule {}
