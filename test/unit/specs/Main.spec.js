import Vue from 'vue'
import Main from '@/components/Main'


/**
 * https://vuejs.org/v2/guide/unit-testing.html
 */
describe('Main.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Main)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.main h3').textContent)
      .to.equal('Page principale')
    expect(vm.$el.querySelector('.main p#paraph').textContent)
      .to.equal('Je suis la page')
    expect(vm.$el.querySelector('.main .box h4').textContent)
      .to.equal('Je suis dans la boite')

  })

  it('has a created hook', () => {
    console.log(Main)
    expect(typeof Main.created).toBe('function')
  })
})
