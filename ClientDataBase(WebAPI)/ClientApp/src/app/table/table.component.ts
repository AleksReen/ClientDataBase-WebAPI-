import { Component, Input, OnInit, OnChanges} from '@angular/core';
import { Client } from '../../models/client';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {  

  public listClients: Client[] = [];

  constructor(private dataService: DataService) {
    this.dataService.newClient.subscribe(result => {
      this.listClients.push(result);
    })
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
