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
      title: 'POO',
      description: 'Programación orientada a objetos',
      type: 'VIDEO',
      url: 'https://www.youtube.com/embed/SI7O81GMG2A',
      creationDate: new Date('2023-09-25'),
    },
    {
      title: 'ACID',
      description: 'Principio ACID, Normalización, Tipos de Bases de Datos y Características del DBA',
      type: 'VIDEO',
      url: 'https://www.youtube.com/embed/NlwQJ2kCy5M',
      creationDate: new Date('2023-09-25'),
    },
    {
      title: 'Programación funcional',
      description: 'Programación funcional',
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
      title: 'Algoritmos de ordenamiento',
      description: 'Algoritmos de ordenamiento',
      type: 'VIDEO',
      url: 'https://www.youtube.com/embed/Hd5jp935ays',
      creationDate: new Date('2023-09-25')
    },
    {
      title: 'Algoritmos de busqueda',
      description: 'Algoritmos de busqueda',
      type: 'VIDEO',
      url: 'https://www.youtube.com/embed/Hd5jp935ays',
      creationDate: new Date('2023-09-25')
    },
    {
      title: 'text imagen',
      description: 'Principios de diseño de código',
      type: 'IMG',
      url: 'https://www.imagen.com.mx/assets/img/imagen_share.png',
      creationDate: new Date('2023-09-25'),
    },
    {
      title: 'pagina web cualquiera',
      description: 'este es un ejemplo',
      type: 'TEXT',
      url: 'https://www.imagen.com.mx/assets/img/imagen_share.png',
      creationDate: new Date('2023-09-25'),
    },
  ];
  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.ICONS['IMG'] =
      'https://cdn-icons-png.flaticon.com/512/1088/1088537.png';
    this.ICONS['VIDEO'] =
      'https://cdn-icons-png.flaticon.com/512/3191/3191412.png';
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


