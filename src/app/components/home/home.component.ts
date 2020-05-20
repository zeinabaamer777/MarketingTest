import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
isactive:boolean = true;

@HostListener('window:resize', ['$event'])
onResize(event){
  if(event.target.innerWidth < 900){
    this.isactive = false;
  }else{
    this.isactive = true;
  }
}
isOpen:boolean = false;
scroll(el: HTMLElement) {
  el.scrollIntoView({behavior: "smooth"});
  this.isOpen= false
}
  

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(){
    this.isOpen = !this.isOpen ;
  }

}
