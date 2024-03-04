import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';
import { AddSongComponent } from './add-song/add-song.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { HeaderComponent } from './header/header.component';
import { SongListComponent } from './song-list/song-list.component';
import { Playlist2Component } from './playlist2/playlist2.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSongComponent,
    PlaylistComponent,
    HeaderComponent,
    SongListComponent,
    Playlist2Component
  ],
  imports: [
    BrowserModule,
    FormsModule // Add FormsModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
