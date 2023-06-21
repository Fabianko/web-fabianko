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
      name: 'Clasificacion de noticias',
      imageUrl: 'https://st.depositphotos.com/2288675/2453/i/950/depositphotos_24539893-stock-photo-breaking-news-daily-newspaper-headline.jpg',
      to_link: 'test-news'
    },
    {
      name: 'Base de datos usach',
      imageUrl: 'https://www.csail.mit.edu/sites/default/files/2021-06/database.jpeg',
      to_link: 'web-bd'
    },
    {
      name: '2048',
      imageUrl: 'https://res.cloudinary.com/lmn/image/upload/c_limit,h_360,w_640/e_sharpen:100/f_auto,fl_lossy,q_auto/v1/gameskinny/a509d725e6b5180bfb4c33262cc93cd5.jpg',
      to_link: '2048'
    },
    {
      name: 'Pokemon game',
      imageUrl: 'https://img.lemde.fr/2022/12/22/5/0/1730/865/768/384/75/0/e968e4d_1671703423578-b5e.jpeg',
      to_link: 'pokemonGame'
    },
    {
      name: 'TicTacToe',
      imageUrl: 'https://m.media-amazon.com/images/I/41yg3KWfkQL.png',
      to_link: 'tictactoe'
    },
    {
      name: 'Easy English',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ2Q6uV4_L1CWuTJfRrsB9JanoDaVpXOG-Cw&usqp=CAU',
      to_link: 'ee'
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
