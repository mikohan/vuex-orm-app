import { Model } from '@vuex-orm/core'
import Profile from '@/classes/Profile'

export default class User extends Model {
  static entity = 'users'

  static fields() {
    return {
      id: this.increment(),
      name: this.attr(''),
      email: this.attr(''),

      // Relationship

      profile: this.hasOne(Profile, 'user_id')
    }
  }
}