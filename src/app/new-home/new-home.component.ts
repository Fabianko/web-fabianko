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
      imageUrl: 'https://st.depositphotos.com/2288675/2453/i/950/depositphotos_24539893-stock-photo-breaking-news-daily-newspaper-headline.jpg',
      to_link: 'news'
    },
    {
      name: 'Database usach (ES)',
      imageUrl: 'https://www.csail.mit.edu/sites/default/files/2021-06/database.jpeg',
      to_link: 'web-bd'
    },
    {
      name: '2048 puzzle game',
      imageUrl: 'https://res.cloudinary.com/lmn/image/upload/c_limit,h_360,w_640/e_sharpen:100/f_auto,fl_lossy,q_auto/v1/gameskinny/a509d725e6b5180bfb4c33262cc93cd5.jpg',
      to_link: '2048'
    },
    {
      name: 'who\'s that pokemon? game',
      imageUrl: 'https://cdn-icons-png.flaticon.com/256/1169/1169608.png',
      to_link: 'pokemonGame'
    },
    {
      name: 'TicTacToe',
      imageUrl: 'https://m.media-amazon.com/images/I/41yg3KWfkQL.png',
      to_link: 'tictactoe'
    },
    {
      name: 'Easy English for spanish speakers',
      imageUrl: 'https://media.istockphoto.com/id/1313088031/vector/english.jpg?s=612x612&w=0&k=20&c=Mslm0FNFCeExaXw1B-aNSY89W_cB3emg03CkUDHeIbU=',
      to_link: 'ee'
    },
    {
      name: 'Dev Tips',
      imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      to_link: 'dev-tips'
    },
    {
      name: 'Local Todo List',
      imageUrl: 'https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png',
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
