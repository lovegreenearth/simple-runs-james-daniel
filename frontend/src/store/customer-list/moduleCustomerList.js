/*=========================================================================================
  File Name: moduleCustomerList.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './moduleCustomerListState.js'
import mutations from './moduleCustomerListMutations.js'
import actions from './moduleCustomerListActions.js'
import getters from './moduleCustomerListGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

