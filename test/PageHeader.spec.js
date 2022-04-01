import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import PageHeader from '~/components/PageHeader';

describe('Header', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);

  let stubs = { 
    NuxtLink: true, 
    SvgIcon: true 
  };
  let routes = [{ name: 'jogs', path: '/jogs' }];
  let router = new VueRouter({ routes });
  
  let store, actions, getters;

  beforeEach(() => {
    actions = {
      setMenuToggle: jest.fn(),
      setFiltersToggle: jest.fn(),
    }
    getters = {
      menuToggle: () => false,
      filtersToggle: () => false,
    }
    store = new Vuex.Store({ actions, getters });
  });

  test('has button on every page, which calls \'setMenuToggle\' store action', () => {
    const wrapper = shallowMount(PageHeader, { localVue, store, router, stubs });
    const button = wrapper.find('.menu-toggle');
    button.trigger('click');
    expect(actions.setMenuToggle).toHaveBeenCalled();
  });

  test('has button on \'jogs\' page, which calls \'setFiltersToggle\' store action', async () => {
    const wrapper = shallowMount(PageHeader, { localVue, store, router, stubs });
    router.push('/jogs');
    await wrapper.vm.$nextTick();
    const button = wrapper.find('.filters-toggle');
    button.trigger('click');
    expect(actions.setFiltersToggle).toHaveBeenCalled();
  });
});