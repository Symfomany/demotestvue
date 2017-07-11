import Vue from 'vue'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource';
import Main from '../../src/components/Main.vue'


/**
 * Vue Resource
 */
Vue.use(VueResource);

/**
 * Plugins
 */
Vue.use(Vuetify)


/**
 * https://vuejs.org/v2/guide/unit-testing.html
 */
describe('Main.vue', () => {


  it('sets the correct default data', () => {
    expect(typeof Main.data).toBe('function')
    // const defaultData = Main.data()
    // expect(defaultData.tasks).toBe([])
  })


  it('should render correct contents', () => {
    const Constructor = Vue.extend(Main)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.main h3').textContent)
      .to.equal('Page principale')
  })


})
