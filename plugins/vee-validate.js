import Vue from 'vue';
import {extend,ValidationProvider,ValidationObserver,localize} from 'vee-validate';
import {required} from 'vee-validate/dist/rules';
import ja from 'vee-validate/dist/locale/ja.json';

extend('required',required);
localize('ja', ja);

Vue.component('ValidationProvider',ValidationProvider);
Vue.component('ValidationObserver',ValidationObserver);
