import { Component, Input } from '@angular/core';
import { Client } from '../../models/client';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})

export class TableComponent {

  public listClients: Client[] = [];
  public dataService: DataService;

  constructor(private _dataService: DataService) {
    this.dataService = _dataService;
  }

  ngOnInit(): void {
    this.getClientBase();
  }

  public searchClient(name: string) {
    if (name.trim() === "") {
      this.getClientBase();
    }
    else {
      this.listClients = this.dataService.FilterClienBase(this.listClients, name);
    }
  }

  getClientBase() {
    this.dataService.GetClientBase().subscribe(result => {
      this.listClients = result;
    }, error => console.error(error));
  }

}
