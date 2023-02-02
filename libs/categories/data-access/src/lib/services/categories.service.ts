import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page, ApiService } from '@membership-application/shared/data-access';
import { CategoriesEntity } from '../+state/categories.models';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private apiService: ApiService) {}

  createCategory(category: CategoriesEntity) {
    return this.apiService.post<CategoriesEntity>(`/v1/categories`, category);
  }

  updateCategory(category: CategoriesEntity) {
    return this.apiService.put<CategoriesEntity>(
      `/v1/categories/${category.id}`,
      category
    );
  }

  deleteCategory(categoryId: string | number) {
    return this.apiService.delete<CategoriesEntity>(
      `/v1/categories/${categoryId}`
    );
  }

  getCategoryById(categoryId: string | number) {
    return this.apiService.get<CategoriesEntity>(
      `/cmn/v1/categories/${categoryId}`
    );
  }

  getPaginatedCategories(filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters });
    return this.apiService.get<Page<CategoriesEntity>>(
      `/v1/categories`,
      httpParams
    );
  }

  getAllCategories() {
    return this.apiService.get<CategoriesEntity[]>(`/v1/categories/all`);
  }
}
