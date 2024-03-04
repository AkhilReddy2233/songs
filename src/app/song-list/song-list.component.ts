import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';
import { Song2 } from '../song.model';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  songs: Song2[] = [];
  newSongName: string = '';

  constructor(private songsService: SongsService) { }

  ngOnInit(): void {
    this.songs = this.songsService.getSongs();
  }

  addSong(): void {
    if (this.newSongName.trim() !== '') {
      const newSong: Song2 = { id: this.songs.length + 1, name: this.newSongName, selected: false };
      this.songsService.addSong(newSong);
      this.newSongName = ''; // Clear input after adding song
    }
  }

  addToPlaylist(): void {
    console.log('song list. addToPlaylist',this.songsService)
    this.songsService.addToPlaylist();
  }
}
