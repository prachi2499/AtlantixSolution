import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  flag:boolean=false;
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('is_loggedIn')=='true')
    {
      this.flag=true;
    }
    else
    {
      this.flag=false;
    }
  }

}
