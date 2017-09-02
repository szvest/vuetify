import { test, snapshotTests } from '~util/testing'
import Vue from 'vue/dist/vue.common'
import VBtn from 'src/components/VBtn'

const stub = {
  name: 'router-link',
  render: h => h('button')
}

test('VBtn.js', ({ mount }) => {
  snapshotTests(VBtn)

  it('should render component and match snapshot', () => {
    const wrapper = mount(VBtn)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render an <a> tag when using href prop', () => {
    const wrapper = mount(VBtn, {
      propsData: {
        href: 'http://www.google.com'
      }
    })

    expect(wrapper.is('a')).toBe(true)
    expect(wrapper.hasAttribute('href', 'http://www.google.com')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render a <button> tag when using to prop', () => {
    const instance = Vue.extend()
    instance.component('router-link', stub)

    const wrapper = mount(VBtn, {
      propsData: {
        to: '/home'
      },
      instance
    })

    expect(wrapper.is('button')).toBe(true)
    expect(wrapper.vm.$props.to).toBe('/home')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render specified tag when using tag prop', () => {
    const wrapper = mount(VBtn, {
      propsData: {
        tag: 'a'
      }
    })

    expect(wrapper.is('a')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
