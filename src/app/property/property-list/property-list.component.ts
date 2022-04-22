import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [
    {
      Id: 1,
      Name: 'Karkis',
      Type: 'House',
      Price: 12000,
    },
    {
      Id: 2,
      Name: 'Max Square Garden',
      Type: 'House',
      Price: 100000,
    },
    {
      Id: 3,
      Name: 'KI Hall',
      Type: 'House',
      Price: 20000,
    },
    {
      Id: 4,
      Name: 'Union TR',
      Type: 'House',
      Price: 14000,
    },
    {
      Id: 5,
      Name: 'Ucumi Inc',
      Type: 'House',
      Price: 26000,
    },
    {
      Id: 6,
      Name: 'Keizen Br',
      Type: 'House',
      Price: 45000,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
