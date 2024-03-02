import { Component } from '@angular/core';
import { SongsService } from '../services/songs.service';
import { Song } from '../song.model';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss']
})
export class AddSongComponent {
  newSong: Song = { name: '', album: '' };

  constructor(private songsService: SongsService) { }

  addSong(): void {
    if (this.newSong.name.trim() && this.newSong.album.trim()) {
      this.songsService.addSong(this.newSong);
      console.log(this.songsService.getSongs().length);
      this.newSong = { name: '', album: '' };
    }
  }
}
