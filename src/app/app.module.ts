import { NewsObjectComponent } from './components/news-object/news-object.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { SelectClassificatorComponent } from './components/select-classificator/select-classificator.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectClassificatorComponent,
    NewsObjectComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
