import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as MemberPackagesActions from './member-packages.actions';
import { MemberPackagesEffects } from './member-packages.effects';
import { MemberPackagesFacade } from './member-packages.facade';
import { MemberPackageEntity } from './member-packages.models';
import {
  MEMBER_PACKAGES_FEATURE_KEY,
  MemberPackagesState,
  initialMemberPackagesState,
  memberPackagesReducer,
} from './member-packages.reducer';
import * as MemberPackagesSelectors from './member-packages.selectors';

interface TestSchema {
  memberPackages: MemberPackagesState;
}

describe('MemberPackagesFacade', () => {
  let facade: MemberPackagesFacade;
  let store: Store<TestSchema>;
  const createMemberPackageEntity = (
    id: string,
    name = ''
  ): MemberPackageEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(
            MEMBER_PACKAGES_FEATURE_KEY,
            memberPackagesReducer
          ),
          EffectsModule.forFeature([MemberPackagesEffects]),
        ],
        providers: [MemberPackagesFacade],
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
      facade = TestBed.inject(MemberPackagesFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allMemberPackages$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allMemberPackages$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadMemberPackagesSuccess` to manually update list
     */
    it('allMemberPackages$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allMemberPackages$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        MemberPackagesActions.loadMemberPackagesSuccess({
          memberPackages: [
            createMemberPackageEntity('AAA'),
            createMemberPackageEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allMemberPackages$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
