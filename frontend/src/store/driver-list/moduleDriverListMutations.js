/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
  ADD_ITEM (state, item) {
    state.drivers.unshift(item)
  },
  SET_DRIVERS (state, drivers) {
    state.drivers = drivers
  },
  // SET_LABELS(state, labels) {
  //   state.eventLabels = labels
  // },
  UPDATE_PRODUCT (state, product) {
    const productIndex = state.drivers.findIndex((p) => p.id === product.id)
    Object.assign(state.drivers[productIndex], product)
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.drivers.findIndex((p) => p.id === itemId)
    state.drivers.splice(ItemIndex, 1)
  }
}
