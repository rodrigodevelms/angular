import {Component, OnInit} from '@angular/core';
import {Database} from "../../../../assets/properties/database";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-section-properties',
  templateUrl: './section-properties.component.html',
  styleUrls: ['./section-properties.component.css']
})
export class SectionPropertiesComponent implements OnInit {

  constructor(private database: Database) {
  }


  ngOnInit(): void {
  }

  properties = this.database.fun_properties();
}
