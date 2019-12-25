import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-home',
  templateUrl: './welcome-home.component.html',
  styleUrls: ['./welcome-home.component.less']
})
export class WelcomeHomeComponent implements OnInit {
  public listSnow = [];
  public titleFinal = "Bienvenido forastero";
  public title = "";
  constructor() { }

  ngOnInit() {
    this.listSnow = [...Array(100).keys()];
    //this.createTitle();
  }
  public createTitle() {
    for (const character of this.titleFinal) {

      setTimeout(()=> {
        this.title = this.title + character;
      },2000)
    }
    setTimeout(
      ()=> {
        this.title="";
        this.createTitle();
      },3000
    );
  }


}
