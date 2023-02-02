import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as MemberProfilesActions from './member-profiles.actions';
import { MemberProfilesEffects } from './member-profiles.effects';
import { MemberProfilesFacade } from './member-profiles.facade';
import { MemberProfilesEntity } from './member-profiles.models';
import {
  MEMBER_PROFILES_FEATURE_KEY,
  MemberProfilesState,
  initialMemberProfilesState,
  memberProfilesReducer,
} from './member-profiles.reducer';
import * as MemberProfilesSelectors from './member-profiles.selectors';

interface TestSchema {
  memberProfiles: MemberProfilesState;
}

describe('MemberProfilesFacade', () => {
  let facade: MemberProfilesFacade;
  let store: Store<TestSchema>;
  const createMemberProfilesEntity = (
    id: string,
    name = ''
  ): MemberProfilesEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(
            MEMBER_PROFILES_FEATURE_KEY,
            memberProfilesReducer
          ),
          EffectsModule.forFeature([MemberProfilesEffects]),
        ],
        providers: [MemberProfilesFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(MemberProfilesFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allMemberProfiles$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allMemberProfiles$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadMemberProfilesSuccess` to manually update list
     */
    it('allMemberProfiles$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allMemberProfiles$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        MemberProfilesActions.loadMemberProfilesSuccess({
          memberProfiles: [
            createMemberProfilesEntity('AAA'),
            createMemberProfilesEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allMemberProfiles$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
