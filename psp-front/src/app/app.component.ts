import { Component } from '@angular/core';
import { Router,  NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'psp-front';
  titlePage;
  constructor(public router: Router) {

    this.router.events.subscribe(event =>{
      if(event instanceof NavigationEnd){
        console.log(window.location.pathname);
        this.setPageTitle(window.location.pathname)
      }
    })
    
  }

  setPageTitle(href: string){
/*
    if(href == "/input") {
      this.titlePage = "Вызовы / Новый вызов";
    }

    else if(href == "/calls") {
      this.titlePage = "Вызовы / Все вызовы";
    }

    else if(href == "/redactCall") {
      this.titlePage = "Вызовы / Редактировать вызов";
    }
    else if(href == "/workers-create") {
      this.titlePage = "Персонал / Создать работника";
    }
    else if(href == "/technic-create") {
      this.titlePage = "Оборудование / Новое оборудование";
    }
  

    else {console.log("Page title not received");}

*/
  }

  
}
