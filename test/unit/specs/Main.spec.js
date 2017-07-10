import Vue from 'vue'
import Hello from '@/components/Main'

describe('Main.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.main h3').textContent)
      .to.equal('Page principale')
  })
})
