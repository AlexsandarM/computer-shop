import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-collapse-navbar',
  templateUrl: './collapse-navbar.component.html',
  styleUrls: ['./collapse-navbar.component.css']
})
export class CollapseNavbarComponent implements OnInit {

   public isMenuCollapsed = true;

   @Output() featureSelected = new EventEmitter<string>();

   onSelect(feature: string) {
    this.featureSelected.emit(feature);
   }
  
  constructor() { }

  ngOnInit(): void {
  }

}
