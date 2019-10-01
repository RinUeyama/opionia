import Vuetify from 'vuetify'
import Heading from '@/components/Atoms/Heading.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'

describe('Heading.vue', () => {
  it('headingテキストがPropされているか', () => {
    const localVue = createLocalVue()
    localVue.use(Vuetify)

    const headingText = 'Lorem Heading'
    const wrapper = shallowMount(Heading, {
      localVue,
      propsData: { heading: headingText }
    })
    expect(wrapper.props().heading).toMatch(headingText)
  })
})
