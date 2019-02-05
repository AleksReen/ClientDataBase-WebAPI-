import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Client } from '../../models/client';

@Component({
    selector: 'app-table-data-base',
    templateUrl: './table-data-base.component.html',
    styleUrls: ['./table-data-base.component.css']
})

export class TableDataBaseComponent implements OnInit {

  @Input()
  public listClients: Client[];
  public selectedClient: Client;

  constructor() {}

  ngOnInit(): void {}

  public onSelect(item: Client) {
    this.selectedClient = item;
  }

}
