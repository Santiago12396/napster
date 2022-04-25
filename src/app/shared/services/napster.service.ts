import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { Artist, ArtistResp } from 'src/app/core/models/artist.model';
import { Image, ImageResp } from 'src/app/core/models/img.model';
import { Album, AlbumResp } from 'src/app/core/models/album.model';
import { Track, TrackResp } from 'src/app/core/models/track.model';

@Injectable({
  providedIn: 'root'
})
export class NapsterService {

  private urlApi = environment.urlApi;
  private headers = new HttpHeaders({
    'apikey': 'ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm',
  });

  constructor(private http: HttpClient) { }

  getTopArtists(): Observable<Artist[]> {
    return this.http.get<ArtistResp>(`${this.urlApi}/artists/top?limit=10`, { headers: this.headers })
              .pipe(
                map(data => data.artists)
              );
  }

  getArtistById(id: string): Observable<Artist[]> {
    return this.http.get<ArtistResp>(`${this.urlApi}/artists/${id}`, { headers: this.headers })
              .pipe(
                map(data => data.artists)
              );
  }

  getImgByUrl(enpoint: string): Observable<Image[]> {
    return this.http.get<ImageResp>(enpoint, { headers: this.headers })
              .pipe(
                map(data => data.images)
              );
  }

  getAlbumByUrl(enpoint: string): Observable<Album[]> {
    return this.http.get<AlbumResp>(enpoint, { headers: this.headers })
              .pipe(
                map(data => data.albums)
              );
  }

  getAlbumById(id: string): Observable<Album[]> {
    return this.http.get<AlbumResp>(`${this.urlApi}/albums/${id}`, { headers: this.headers })
              .pipe(
                map(data => data.albums)
              );
  }

  getTracksByAlbumId(id: string): Observable<Track[]> {
    return this.http.get<TrackResp>(`${this.urlApi}/albums/${id}/tracks`, { headers: this.headers })
              .pipe(
                map(data => data.tracks)
              );
  }



}
