import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-titolo-manga',
  templateUrl: './titolo-manga.component.html',
  styleUrls: ['./titolo-manga.component.css']
})
export class TitoloMangaComponent {
  titolo!: any;
  loading!: Boolean;
  url: string = "https://3000-navarette-otakupeak-hr3lu7e96oa.ws-eu82.gitpod.io/titoloManga";

  constructor(public http: HttpClient) {
    this.get(this.url);
  }

  get(url: string): void {
    this.loading = true;
    this.http.get(url).subscribe(data => {
      this.titolo = data;
      this.loading = false;
    });
  }

  onKey(value: string) {
    this.get(this.url + "?titolo=" + value);
  }
}