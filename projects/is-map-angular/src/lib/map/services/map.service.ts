/*
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library.
 */

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UrlConfig } from '../../util/config';

/**
 * Service pour récuperer des configurations pour la carte
 */
@Injectable({
  providedIn: 'root',
})
export class MapService {
  /**
   * <code>true</code> if the page map must be reloaded.
   */
  private reload = false;

  constructor(
    private urlConfig: UrlConfig,
    private logger: NGXLogger,
    private http: HttpClient
  ) {}

  /**
   * Get <code>true</code> if the page map must be reloaded.
   *
   * @returns <code>true</code> if the page map must be reloaded
   */
  public get forceReload(): boolean {
    return this.reload;
  }

  /**
   * Set <code>true</code> if the page map must be reloaded.
   *
   * @param value <code>true</code> if the page map must be reloaded
   */
  public set forceReload(value: boolean) {
    this.reload = value;
  }

  /**
   * Get the map configuration from the server.
   *
   * @param token the token of the logged user
   * @returns the configuration object
   */
  public configuration(token: string): Observable<any> {
    this.logger.debug('MapService.configuration(): Get the map configuration');

    return this.http
      .get<any>(`${this.urlConfig.url}/map/configuration`, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('token', token),
      })
      .pipe(
        map((response: any) => {
          this.logger.debug('MapService.configuration(): response', response);
          return response;
        })
      );
  }

  /**
   * Get the map configuration from the server.
   *
   * @param token the token of the logged user
   * @param mapUrl the map url
   * @param layers the layers
   * @returns the configuration object
   */
  public domains(
    token: string,
    mapUrl: string,
    layers?: string
  ): Observable<any> {
    this.logger.debug(
      'MapService.domains(): Get the map domains ' + mapUrl + ' ' + layers
        ? layers
        : '*'
    );
    const url = `${this.urlConfig.url}/map/domains?url=${mapUrl}&layers=${
      layers ? layers : '*'
    }`;

    return this.http
      .get<any>(url, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('token', token),
      })
      .pipe(
        map((response: any) => {
          this.logger.debug('MapService.domains(): response', response);
          return response;
        })
      );
  }

  /**
   * Request for authentication token for secured ArcGis service
   *
   * @param token authentication token for the web application
   * @param service name of ArcGis service for which a token is requested, when not the default one (optional)
   */
  public mapToken(token: any, service?: string): Observable<any> {
    this.logger.debug('MapService.mapToken(): Get the token');
    let url = `${this.urlConfig.url}/map/token`;
    if (service) {
      url = `${url}?service=${service}`;
    }
    return this.http
      .get<any>(url, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('token', token),
      })
      .pipe(
        map((response: any) => {
          this.logger.debug('MapService.mapToken(): response', response);
          return response;
        })
      );
  }
}
