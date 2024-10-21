import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Category } from '../models/category.model';
import { UpdateCategoryRequest } from '../models/update-category-request.model';
import { Environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient,private environment:Environment) { }

  getAllCategories(
    query?: string, sortBy?: string, sortDirection?: string,
    pageNumber?: number, pageSize?: number): Observable<Category[]> {
    let params = new HttpParams();

    if (query) {
      params = params.set('query', query)
    }

    if (sortBy) {
      params = params.set('sortBy', sortBy)
    }

    if (sortDirection) {
      params = params.set('sortDirection', sortDirection)
    }

    if (pageNumber) {
      params = params.set('pageNumber', pageNumber)
    }

    if (pageSize) {
      params = params.set('pageSize', pageSize)
    }

    return this.http.get<Category[]>(`${this.environment.apiBaseUrl}/api/categories`, {
      params: params
    });
  }

  getCategoryById(id: string): Observable<Category> {
    return this.http.get<Category>(`${this.environment.apiBaseUrl}/api/categories/${id}`);
  }

  getCategoryCount(): Observable<number> {
    return this.http.get<number>(`${this.environment.apiBaseUrl}/api/categories/count`);
  }

  addCategory(model: AddCategoryRequest): Observable<void> {
    return this.http.post<void>(`${this.environment.apiBaseUrl}/api/categories?addAuth=true`, model);
  }

  updateCategory(id: string, updateCategoryRequest: UpdateCategoryRequest): Observable<Category> {
    return this.http.put<Category>(`${this.environment.apiBaseUrl}/api/categories/${id}?addAuth=true`, updateCategoryRequest);
  }

  deleteCategory(id: string): Observable<Category> {
    return this.http.delete<Category>(`${this.environment.apiBaseUrl}/api/categories/${id}?addAuth=true`)
  }
}
