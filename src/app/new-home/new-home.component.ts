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
      to_link: 'news'
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
      imageUrl: 'https://play-lh.googleusercontent.com/o1xjpaWAF3bUEcPeyINNzAF3D6VuOJZh5_BXB-cuLTxcDIinPO06L1dyAz7-G68W',
      to_link: 'pokemonGame'
    },
    {
      name: 'TicTacToe',
      imageUrl: 'https://m.media-amazon.com/images/I/41yg3KWfkQL.png',
      to_link: 'tictactoe'
    },
    {
      name: 'Easy English',
      imageUrl: 'https://media.istockphoto.com/id/1313088031/vector/english.jpg?s=612x612&w=0&k=20&c=Mslm0FNFCeExaXw1B-aNSY89W_cB3emg03CkUDHeIbU=',
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
