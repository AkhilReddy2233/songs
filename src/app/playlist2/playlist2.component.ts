import { Component } from '@angular/core';
import { SongsService } from '../songs.service';
import { Song2 } from '../song.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-playlist2',
  templateUrl: './playlist2.component.html',
  styleUrls: ['./playlist2.component.scss']
})
export class Playlist2Component {

  selectedSongs: Song2[] = [];

  constructor(private songsService: SongsService) { }
  private selectedSongsSubscription!: Subscription;
  ngOnInit(): void {
   // Subscribe to changes in selectedSongs array
   this.selectedSongsSubscription = this.songsService.selectedSongsChanged.subscribe(
    (selectedSongs: Song2[]) => {
      this.selectedSongs = selectedSongs;
    }
  );
}

ngOnDestroy(): void {
  // Unsubscribe from the subscription to prevent memory leaks
  this.selectedSongsSubscription.unsubscribe();
}
}
