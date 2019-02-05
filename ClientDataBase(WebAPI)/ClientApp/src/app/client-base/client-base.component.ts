import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-client-base',
    templateUrl: './client-base.component.html',
    styleUrls: ['./client-base.component.css']
})

export class ClientBaseComponent implements OnInit {

  public dataService: DataService;

  constructor(private _dataService: DataService) {
    this.dataService = _dataService;
  }

  ngOnInit(): void {

  }
}
