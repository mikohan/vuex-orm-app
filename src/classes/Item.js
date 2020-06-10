import { Model } from '@vuex-orm/core'
import List from '@/classes/List'


export default class Item extends Model {

  static entity = 'items'

  static fields() {
    return {
      id: this.attr(null),
      body: this.attr(''),
      list_id: this.attr(null),

      // Relationships

      list: this.belongsTo(List, 'list_id')
    }
  }
}