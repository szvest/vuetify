import { test, snapshotTests } from '~util/testing'
import { VRadioGroup /*, VRadio */ } from '~components/VRadioGroup'

test('VRadioGroup.vue', ({ mount }) => {
  snapshotTests(VRadioGroup)

  it('should render role on radio group', () => {
    const wrapper = mount(VRadioGroup)

    const radioGroup = wrapper.find('.radio-group')[0]
    expect(radioGroup.hasAttribute('role', 'radiogroup')).toBe(true)
  })
})
