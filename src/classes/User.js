import { Model } from '@vuex-orm/core'
import Profile from '@/classes/Profile'
import List from '@/classes/List'

export default class User extends Model {
  static entity = 'users'

  static fields() {
    return {
      id: this.increment(),
      name: this.attr(''),
      email: this.attr(''),

      // Relationship

      profile: this.hasOne(Profile, 'user_id'),

      // User has Many lists

      lists: this.hasMany(List, 'user_id')
    }
  }
}