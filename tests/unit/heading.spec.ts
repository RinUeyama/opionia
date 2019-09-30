import { shallowMount } from '@vue/test-utils'
import Heading from '@/components/Atoms/Heading.vue'

describe('Heading.vue', () => {
  it('headingがPropされレンダリングされたとき', () => {
    const heading = 'Lorem Ipsum Heading'
    const wrapper = shallowMount(Heading, {
      propsData: { heading }
    })
    expect(wrapper.text()).toMatch(heading)
  })
})
