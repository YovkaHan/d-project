import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  searchValue: string;
  searchPlaceholderClass: string;

  constructor() {}
  ngOnInit() {
    this.searchPlaceholderClass = "show";
  }
  searchInputChange() {
    console.log(this.searchValue);
    if ( this.searchValue && this.searchValue.length > 0) {
      this.searchPlaceholderClass = 'hide';
    } else if ( this.searchValue.length === 0 ) {
      this.searchPlaceholderClass = 'show';
    }
  }
  onSearchClick(e) {
    console.dir();
  }
}
