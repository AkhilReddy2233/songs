import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  totalSongs: number = 0;
  private totalSongsSubscription!: Subscription;

  constructor(public songsService: SongsService) { }

  ngOnInit(): void {
    this.totalSongs = this.songsService.getSongs().length;
    
    // Subscribe to changes in songs array
    this.totalSongsSubscription = this.songsService.songsChanged.subscribe(
      () => {
        this.totalSongs = this.songsService.getSongs().length;
      }
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe from the subscription to prevent memory leaks
    this.totalSongsSubscription.unsubscribe();
  }
}