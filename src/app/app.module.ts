import { ImageObjectComponent } from './components/image-object/image-object.component';
import { NewsObjectComponent } from './components/news-object/news-object.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { SelectClassificatorComponent } from './components/select-classificator/select-classificator.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CvEspComponent } from './cv-esp/cv-esp.component';
import { CvEngComponent } from './cv-eng/cv-eng.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeHomeComponent } from './welcome-home/welcome-home.component';




const routes: Routes = [
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  { path: 'welcome', component: WelcomeHomeComponent },
  {path:'test-news', component: HeaderComponent},
  { path: 'cv-esp', component: CvEspComponent },
  { path: 'cv-eng', component: CvEngComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectClassificatorComponent,
    NewsObjectComponent,
    ImageObjectComponent,
    CvEspComponent,
    CvEngComponent,
    WelcomeHomeComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
