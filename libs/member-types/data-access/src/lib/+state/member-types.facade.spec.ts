import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as MemberTypesActions from './member-types.actions';
import { MemberTypesEffects } from './member-types.effects';
import { MemberTypesFacade } from './member-types.facade';
import { MemberTypesEntity } from './member-types.models';
import {
  MEMBER_TYPES_FEATURE_KEY,
  MemberTypesState,
  initialMemberTypesState,
  memberTypesReducer,
} from './member-types.reducer';
import * as MemberTypesSelectors from './member-types.selectors';

interface TestSchema {
  memberTypes: MemberTypesState;
}

describe('MemberTypesFacade', () => {
  let facade: MemberTypesFacade;
  let store: Store<TestSchema>;
  const createMemberTypesEntity = (
    id: string,
    name = ''
  ): MemberTypesEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(MEMBER_TYPES_FEATURE_KEY, memberTypesReducer),
          EffectsModule.forFeature([MemberTypesEffects]),
        ],
        providers: [MemberTypesFacade],
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
      facade = TestBed.inject(MemberTypesFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allMemberTypes$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allMemberTypes$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadMemberTypesSuccess` to manually update list
     */
    it('allMemberTypes$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allMemberTypes$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        MemberTypesActions.loadMemberTypesSuccess({
          memberTypes: [
            createMemberTypesEntity('AAA'),
            createMemberTypesEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allMemberTypes$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
