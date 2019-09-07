import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  names: Array<string>;
  constructor() {
    this.names = ['Arch', 'Mangus', 'Rose', 'Ruby'];
  }

  ngOnInit() {
  }

}
