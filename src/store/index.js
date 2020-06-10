import Vue from 'vue'
import Vuex from 'vuex'

import VuexORM from '@vuex-orm/core'

import Item from '@/classes/Item'

import User from '@/classes/User'

import Profile from '@/classes/Profile'

import List from '@/classes/List'






Vue.use(Vuex)

const database = new VuexORM.Database()

database.register(Item)
database.register(User)
database.register(Profile)
database.register(List)

export default new Vuex.Store({
  plugins: [VuexORM.install(database)]
})
