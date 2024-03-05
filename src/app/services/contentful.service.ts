import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { Observable } from 'rxjs';
import { from } from 'rxjs/internal/observable/from';
import { environment } from 'src/environments/environment';
import { BlogPost } from '../models/BlogPost.model';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken
  })
  constructor() { }

  // obtener todas las entradas o contenidos
  getAllEntries() {
    // convirtiendo la promesa a observable
    const promise = this.client.getEntries();
    return from(promise);
  }

  // Obtener un contenido por id
  getEntryById(id: string) {
    const promise = this.client.getEntry(id);
    return from(promise);
  }
}
