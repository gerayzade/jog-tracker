import { shallowMount } from '@vue/test-utils';
import PageFooter from '~/components/PageFooter';

describe('Footer', () => {
  test('has copyright with current year pointered', () => {
    const wrapper = shallowMount(PageFooter);
    let year = `${new Date().getFullYear()}`;
    expect(wrapper.find('mark').text()).toContain(year);
  });
});