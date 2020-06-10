import { Model } from '@vuex-orm/core'
import User from '@/classes/User'
import Item from '@/classes/Item'


export default class List extends Model {

  static entity = 'Lists'

  static fields() {
    return {
      id: this.attr(null),
      title: this.attr(''),
      user_id: this.attr(null),

      // Relationships

      user: this.belongsTo(User, 'user_id'),
      items: this.hasMany(Item, 'list_id')
    }
  }
}