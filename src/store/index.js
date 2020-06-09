import Vue from 'vue'
import Vuex from 'vuex'

import VuexORM from '@vuex-orm/core'

import Item from '@/classes/item'

import User from '@/classes/User'

import Profile from '@/classes/Profile'






Vue.use(Vuex)

const database = new VuexORM.Database()

database.register(Item)
database.register(User)
database.register(Profile)

export default new Vuex.Store({
  plugins: [VuexORM.install(database)]
})
