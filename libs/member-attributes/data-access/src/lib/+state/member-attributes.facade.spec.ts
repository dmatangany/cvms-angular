import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as MemberAttributesActions from './member-attributes.actions';
import { MemberAttributesEffects } from './member-attributes.effects';
import { MemberAttributesFacade } from './member-attributes.facade';
import { MemberAttributesEntity } from './member-attributes.models';
import {
  MEMBER_ATTRIBUTES_FEATURE_KEY,
  MemberAttributesState,
  initialMemberAttributesState,
  memberAttributesReducer,
} from './member-attributes.reducer';
import * as MemberAttributesSelectors from './member-attributes.selectors';

interface TestSchema {
  memberAttributes: MemberAttributesState;
}

describe('MemberAttributesFacade', () => {
  let facade: MemberAttributesFacade;
  let store: Store<TestSchema>;
  const createMemberAttributesEntity = (
    id: string,
    name = ''
  ): MemberAttributesEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(
            MEMBER_ATTRIBUTES_FEATURE_KEY,
            memberAttributesReducer
          ),
          EffectsModule.forFeature([MemberAttributesEffects]),
        ],
        providers: [MemberAttributesFacade],
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
      facade = TestBed.inject(MemberAttributesFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allMemberAttributes$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allMemberAttributes$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadMemberAttributesSuccess` to manually update list
     */
    it('allMemberAttributes$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allMemberAttributes$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        MemberAttributesActions.loadMemberAttributesSuccess({
          memberAttributes: [
            createMemberAttributesEntity('AAA'),
            createMemberAttributesEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allMemberAttributes$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
