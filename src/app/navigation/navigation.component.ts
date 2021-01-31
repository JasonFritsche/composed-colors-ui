import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  opened: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public toggleSidenav() {
    this.opened = !this.opened;
  }
}
