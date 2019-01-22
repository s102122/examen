import { Component, OnInit } from '@angular/core';

import { Recept } from '../recept';

@Component({
  selector: 'app-list-recept',
  templateUrl: './list-recept.component.html',
  styleUrls: ['./list-recept.component.css']
})
export class ListReceptComponent implements OnInit {
  recepts: Recept[];

  constructor() { }

  ngOnInit(): void {
	    this.recepts = JSON.parse(localStorage.getItem('recepts'));
  } 
}
