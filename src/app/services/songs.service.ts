import { Injectable } from '@angular/core';
import { Song } from '../song.model';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  private songs: Song[] = [
    {    
      name: 'song1',
      album: 'album2'},
    {    
      name: 'song2',
      album: 'album2'},
    {    
      name: 'song3',
      album: 'album2'},
    {    
      name: 'song4',
      album: 'album2'}
  ];

  constructor() { }

  getSongs(): Song[] {
    return this.songs;
  }

  addSong(song: Song): void {
    this.songs.push(song);
  }

  deleteSong(name: string): void {
    this.songs = this.songs.filter(song => song.name !== name);
  }

  editSong(updatedSong: Song): void {
    const index = this.songs.findIndex(song => song.name === updatedSong.name);
    if (index !== -1) {
      this.songs[index] = updatedSong;
    }
  }
}
