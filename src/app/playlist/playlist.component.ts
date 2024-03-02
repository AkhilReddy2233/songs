import { Component, OnInit } from '@angular/core';
import { Song } from '../song.model';
import { SongsService } from '../services/songs.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})

export class PlaylistComponent implements OnInit {
  songs: Song[] = []

  constructor(private songsService: SongsService) { }

  ngOnInit(): void {
    this.songs = this.songsService.getSongs();
  }

  deleteSong(name: string): void {
    this.songsService.deleteSong(name);
    this.songs = this.songsService.getSongs();
  }

  editSong(updatedSong: Song): void {
    this.songsService.editSong(updatedSong);
    this.songs = this.songsService.getSongs();
  }
}