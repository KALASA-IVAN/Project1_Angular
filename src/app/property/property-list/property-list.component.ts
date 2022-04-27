import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<any>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get('assets/properties.json').subscribe((data) => {
      console.log(data);
    });
  }
}
