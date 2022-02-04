import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'to-app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  collapsed = true;
  constructor() {}

  ngOnInit(): void {}
}
