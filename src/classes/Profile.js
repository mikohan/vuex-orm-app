import { Model } from '@vuex-orm/core'
import User from '@/classes/User'

export default class Profile extends Model {
  static entity = 'profiles'

  static fields() {
    return {
      id: this.increment(),
      bio: this.attr(''),
      life_goal: this.attr(''),
      user_id: this.attr(null),

      // Relationship

      user: this.belongsTo(User, 'user_id')
    }
  }
}