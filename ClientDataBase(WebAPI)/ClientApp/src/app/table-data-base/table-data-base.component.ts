import { Component, Input } from '@angular/core';
import { Client } from '../../models/client';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-table-data-base',
    templateUrl: './table-data-base.component.html',
    styleUrls: ['./table-data-base.component.css']
})

export class TableDataBaseComponent {

  public listClients: Client[];
  public dataService: DataService;

  constructor(private _dataService: DataService) {
    this.dataService = _dataService;
  }

  ngOnInit(): void {

    this.dataService.GetClientBase().subscribe(result => {
      this.listClients = result;
    }, error => console.error(error));

  }


}
