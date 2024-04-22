import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.component.html',
  styleUrls: ['./new-home.component.less'],
})

export class NewHomeComponent implements OnInit, OnDestroy {
  dark:boolean = false;
  texts = ['Software Engineer 🤓', 'Geek 🎮', 'Otaku 🥷', 'MCU fan 🦹'];
  currentText = this.texts[0];
  textIndex = 0;
  fadeOut = false;
  intervalSubscription: Subscription;
  projects = [
    {
      name: 'Latam News (ES)',
      imageUrl: 'https://www.fabianko.com/assets/img/home/news.jpg',
      to_link: 'news'
    },
    {
      name: 'Database usach (ES)',
      imageUrl: 'https://www.fabianko.com/assets/img/home/database.jpeg',
      to_link: 'web-bd'
    },
    {
      name: '2048 puzzle game',
      imageUrl: 'https://www.fabianko.com/assets/img/home/2048.jpg',
      to_link: '2048'
    },
    {
      name: 'who\'s that pokemon? game',
      imageUrl: 'https://www.fabianko.com/assets/img/home/pokemon.png',
      to_link: 'pokemonGame'
    },
    {
      name: 'TicTacToe',
      imageUrl: 'https://www.fabianko.com/assets/img/home/gato.png',
      to_link: 'tictactoe'
    },
    {
      name: 'Easy English for spanish speakers',
      imageUrl: 'https://www.fabianko.com/assets/img/home/english.jpg',
      to_link: 'ee'
    },
    {
      name: 'Dev Tips',
      imageUrl: 'https://www.fabianko.com/assets/img/home/dev.jpeg',
      to_link: 'dev-tips'
    },
    {
      name: 'Local Todo List',
      imageUrl: 'https://www.fabianko.com/assets/img/home/to-do-list-apps.png',
      to_link: 'local-todolist'
    }
  ]

  
  constructor(private router: Router) {}
  onClickDark(){
    this.dark = !this.dark;
  }
  onImageClick(link: string) {
    console.log('Image clicked');
    //redireccionar a link que es una pagina interna del proyecto
    this.router.navigate([link]);
  }

  public navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
    
}
  
  ngOnInit() {
    const timer = interval(2000);
    this.intervalSubscription = timer.subscribe(() => {
      this.changeText();
    });
  }
  changeText() {
    this.fadeOut = !this.fadeOut;
    if (this.fadeOut) {
      this.textIndex = (this.textIndex + 1) % this.texts.length;
    } else {
      this.currentText = this.texts[this.textIndex];
    }
  }

  ngOnDestroy() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }
}
