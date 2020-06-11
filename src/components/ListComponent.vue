<template>
  <div>
    <h2>
      {{ list.title }}
    </h2>

    <form>
      <label for="MyINput">MyINput</label>
      <span></span>
      <input v-model="form.body"
             type="text"
             name="MyINput"
             value="" id="MyINput"
             placeholder="Insert Todo"
             required
             >
            <button @click.prevent="addItem">Add Item</button>
    </form>
    <div>
      <ul>
        <li
          v-for="item in fieldList.items"
          :key="item.id"
          item.body
          >
          <button class="list__delete" @click.prevent="deleteItem(item)">Delete X</button>
          {{ item.body }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import List from "@/classes/List";
import Item from "@/classes/Item";
export default {
  data() {
    return {
      form: {
        body: '',
        list_id: this.list.id
      }
    }
  },
  computed: {
    fieldList() {
      return List.query()
      .with('items')
      .find(this.list.id)
    }
  },
  methods: {
    addItem() {
      Item.insert({ data: this.form })

    },
    deleteItem(item) {
      Item.delete(item.id)
    }
  },
  props: {
    list: {
      required: true,
      type: List,
    },
  },
};
</script>

<style lang="scss">
*, *:before, *:after {
  box-sizing: border-box;
}
input[type=text] {
  width: 50%;
  padding: 6px;
  margin: 10px 0;
  border: 1px solid #FA8072;
  box-shadow: 5px 5px 10px 2px rgba(250, 128, 114, 0.26);
  border-radius: 3px;

}
h2{
  &:after {
    content: "aaaa Content";
  }
}
label {
  display: block;
}
button {
  appearance: none;
  padding: 6px;
  background-color: salmon;
  border: 1px solid;
  border-color: darken(salmon, 10%);
  border-radius: 3px;

  color: #fff;
  &:hover {
    background-color: darken(salmon, 30%);
  }
 
}
 .list__delete {
  margin-left: 20px;
  margin: 10px inherit;
  color: red;
  backround-color: blue;
  li & {
    margin: 10px 5px;
  }
  } 
</style>
