import {Component, OnInit} from '@angular/core';
import {Immobile} from "./model/immobile";
import {Database} from "../../../../assets/properties/database";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    private database: Database,
    private route: ActivatedRoute
  ) {
    this.immobiles = database.fun_immobileDetails()

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.immobile = this.fun_select(params['id'])
    })
  }

  immobile: Immobile
  immobiles: Immobile[]

  fun_select(id: number): Immobile {
    return this.immobiles.find(immobile => immobile.id == id)
  }
}
