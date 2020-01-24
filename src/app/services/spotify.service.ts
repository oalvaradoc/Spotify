import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";


import { map } from "rxjs/operators";


@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {

  }


  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQADfQ25vLMnXIGxnevrRumLdwg4RIhkHHVe3F_FqHDjOpAP9f6wkgk9qU1xah68kWgcOMEBGsd5iD0GvfgOw89cTk5BQcg3LtF5FClo9Nsp1CXzaIVWH5VbH_j9U2zeRPLt3_XRaDEWJCwYAUUprN5oYb1CVwYvvqJZQfAXWQeIaDQDFA"
    });

    return this.http.get(url, { headers });
  }



  getNewReleases() {
    return this.getQuery("browse/new-releases?limit=20").pipe(
      map(data => data["albums"].items)
    );
  }


  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map(data => data["artists"].items)
    );
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map(data => data["tracks"])
    );
  }
}
