import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchComponent {
  public searchName: string;
  public searchState = 'default';
  @Output()
  public emitSearchName = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public search(): void {
    this.emitSearchName.emit(this.searchName);
  }

}
