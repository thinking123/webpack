import './es2015'
import './main.scss'

import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false


new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})
