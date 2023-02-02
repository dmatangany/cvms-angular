import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService, Page } from '@membership-application/shared/data-access';
import { SubscriptionsEntity } from '../+state/subscriptions.models';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionsService {
  constructor(private apiService: ApiService) {}

  getPaginatedSubscriptions(filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters });
    return this.apiService.get<Page<SubscriptionsEntity>>(
      `/v1/subscriptions`,
      httpParams
    );
  }

  getPaginatedMemberSubscriptions(memberId: any, filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters });
    return this.apiService.get<Page<SubscriptionsEntity>>(
      `/v1/member-profiles/${memberId}/subscriptions`,
      httpParams
    );
  }

  createSubscription(subscriptionDetails: SubscriptionsEntity) {
    return this.apiService.post<SubscriptionsEntity>(
      `/v1/subscriptions`,
      subscriptionDetails
    );
  }

  getSubscription(subscriptionId: string | number) {
    return this.apiService.get<SubscriptionsEntity>(
      `/v1/subscriptions/${subscriptionId}`
    );
  }

  getMyCurrentSubscription() {
    return this.apiService.get<SubscriptionsEntity>(
      `/v1/subscriptions/my-current-subscription`
    );
  }

  updateSubscription(subscriptionDetails: SubscriptionsEntity) {
    return this.apiService.put<SubscriptionsEntity>(
      `/v1/subscriptions/${subscriptionDetails.id}`,
      subscriptionDetails
    );
  }

  initiateSubscription(subscriptionContext: any) {
    const httpParams = new HttpParams()
      .set('amount', subscriptionContext.amount)
      .set('membershipPackageId', subscriptionContext.membershipPackageId)
      .set('memberId', subscriptionContext.memberId);
    return this.apiService.post(
      `/v1/subscriptions/subscribe`,
      subscriptionContext,
      httpParams
    );
  }

  getAllSubscriptions() {
    return this.apiService.get<SubscriptionsEntity[]>(`/v1/subscriptions/all`);
  }

  getMemberSubscriptions(memberId: any, filters?: any) {
    const httpParams = new HttpParams({ fromObject: filters });
    return this.apiService.get<Page<SubscriptionsEntity>>(
      `/v1/member-profiles/${memberId}/subscriptions`,
      httpParams
    );
  }
  getMemberSubscriptionsByMemberId(memberId: any) {
    return this.apiService.get<Page<SubscriptionsEntity>>(
      `/v1/member-profiles/${memberId}/subscriptions`,
    );
  }
}
