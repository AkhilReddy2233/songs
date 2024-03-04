import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Song2 } from './song.model';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  private songs: Song2[] = [
    { id: 1, name: 'Song 1', selected: false },
    { id: 2, name: 'Song 2', selected: false },
    { id: 3, name: 'Song 3', selected: false },
    { id: 4, name: 'Song 4', selected: false }
  ];

  private _selectedSongs: Song2[] = [];
  selectedSongsChanged: BehaviorSubject<Song2[]> = new BehaviorSubject<Song2[]>([]);
  songsChanged: Subject<void> = new Subject<void>();

  constructor() { }

  getSongs(): Song2[] {
    return this.songs;
  }

  addSong(song: Song2): void {
    this.songs.push(song);
    this.songsChanged.next(); // Emit change
  }

  deleteSong(id: number): void {
    this.songs = this.songs.filter(song => song.id !== id);
    this.songsChanged.next(); // Emit change
  }

  getSelectedSongs(): Song2[] {
    return this._selectedSongs.slice();
  }

  addToPlaylist(): void {
    this._selectedSongs = this.songs.filter(song => song.selected);
    this.selectedSongsChanged.next(this._selectedSongs);
  }

  getPlaylist(): Song2[] {
    return this._selectedSongs.slice();
  }
}
