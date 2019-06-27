import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

export interface Images {
  id: number;
  download_url: string;
}

@Injectable()
export class ImageService {
  response: any;
  public imgList: Images[] = [];
  constructor(private http: HttpClient) { }

  getImage(from): Observable<Images[]>  {
    const cUrl = 'https://picsum.photos/v2/list?limit=' + from;
    console.log(cUrl);
    return this.http.get<any>('https://picsum.photos/v2/list?limit=' + from)
      .pipe(map(response => {
        if (response) {
          this.response = response;
          return this.response;
        } else {
          return [];
        }
      }));
  }

}
