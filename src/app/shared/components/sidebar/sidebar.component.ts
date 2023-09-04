import { Component, Input } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private gifsService: GifsService ) {}

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  searchGifsByTag( tag: string ): void {
    console.log(tag);
    this.gifsService.searchTag( tag );
  }
}
