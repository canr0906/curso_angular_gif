import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { SearchBoxComponent } from './componets/search-box/search-box.component';
import { CardListComponent } from './componets/card-list/card-list.component';
import { GifsCardComponent } from './componets/gifs-card/gifs-card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomepageComponent,
    SearchBoxComponent,
    CardListComponent,
    GifsCardComponent
  ],
  exports:[HomepageComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ]
})
export class GifsModule { }
