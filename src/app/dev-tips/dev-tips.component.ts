import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface ItemBlog {
  title: string;
  description: string;
  type: string;
  url: string;
  creationDate: Date;
}

@Component({
  selector: 'devTips',
  templateUrl: './dev-tips.component.html',
  styleUrls: ['./dev-tips.component.less'],
})
export class DevTipsComponent implements OnInit {
  ICONS: any = {};
  urlSelected: SafeResourceUrl = undefined;

  items: ItemBlog[] = [
    {
      title: 'SOLID',
      description: 'Principios de diseño de código',
      type: 'VIDEO',
      url: 'https://www.youtube.com/embed/6PdAOfsPh48?si=w9yn0ckaqS2YeYTS',
      creationDate: new Date('2023-09-25'),
    },
    {
      title: 'OOP',
      description: 'Programación orientada a objetos',
      type: 'VIDEO',
      url: 'https://www.youtube.com/embed/SI7O81GMG2A',
      creationDate: new Date('2023-09-25'),
    },
    {
      title: 'ACID',
      description: 'BD: (atomicity, consistency, isolation, durability)',
      type: 'VIDEO',
      url: 'https://www.youtube.com/embed/NlwQJ2kCy5M',
      creationDate: new Date('2023-09-25'),
    },
    {
      title: 'Programación funcional',
      description: 'Functional programming',
      type: 'VIDEO',
      url: 'https://www.youtube.com/embed/MW0DMjJ-2fc',
      creationDate: new Date('2023-09-25')
    },
    {
      title: 'BIG O',
      description: 'Complejidad Algorítmica',
      type: 'VIDEO',
      url: 'https://www.youtube.com/embed/UPDjjuz1Hkw',
      creationDate: new Date('2023-09-25')
    },
    {
      title: 'Sorting algorithm',
      description: 'Algoritmos de ordenamiento',
      type: 'VIDEO',
      url: 'https://www.youtube.com/embed/Hd5jp935ays',
      creationDate: new Date('2023-09-25')
    },
    {
      title: 'Binary search algorithm',
      description: 'Algoritmos de busqueda binaria',
      type: 'VIDEO',
      url: 'https://www.youtube.com/embed/MFhxShGxHWc',
      creationDate: new Date('2023-09-25')
    },
    {
      title: 'Stacks and Queues',
      description: 'Pilas y colas',
      type: 'VIDEO',
      url: 'https://www.youtube.com/embed/A3ZUpyrnCbM',
      creationDate: new Date('2023-09-25')
    },
    {
      title: 'Design patterns',
      description: 'Patrones de diseño',
      type: 'VIDEO',
      url: 'https://www.youtube.com/embed/tv-_1er1mWI',
      creationDate: new Date('2023-09-25')
    },
    {
      title: 'Architecture patterns',
      description: 'Patrones de arquitectura',
      type: 'VIDEO',
      url: 'https://www.youtube.com/embed/BrT3AO8bVQY',
      creationDate: new Date('2023-09-25')
    },
    {
      title: 'Programming paradigm',
      description: 'Paradigmas de programación',
      type: 'VIDEO',
      url: 'https://www.youtube.com/embed/xTLbG3_Rs_w',
      creationDate: new Date('2023-09-25')
    },
    {
      title: 'Clean code in js',
      description: 'Código limpio en js',
      type: 'VIDEO',
      url: 'https://www.youtube.com/embed/-d-jrxy6YbE',
      creationDate: new Date('2023-09-25')
    }
  ];
  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.ICONS['IMG'] =
      'https://cdn-icons-png.flaticon.com/512/1088/1088537.png';
    this.ICONS['VIDEO'] =
      'https://cdn-icons-png.flaticon.com/256/3670/3670163.png';
    this.ICONS['TEXT'] =
      'https://cdn-icons-png.flaticon.com/128/2905/2905285.png';
  }

  openModal(url: string) {
    console.log(url);
    /*modal show para el modal con ID = modalContent de bootstrap sin jquery*/
    let modal = document.getElementById('modalContent');
    modal.classList.add('show');
    modal.style.display = 'block';
    setTimeout(() => {
      this.urlSelected = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    },0 );
  }

  closeModal() {
    let modal = document.getElementById('modalContent');
    modal.classList.remove('show');
    modal.style.display = 'none';
    setTimeout(() => {
      this.urlSelected = undefined;
    }, 100);
  }
}


