<template>
  <div>
    <h1>Test Component</h1>

    <div>
      <h1>{{ user.user.name }}</h1>
      <pre>{{ user }}</pre>
      <form action="">
        <input v-model="form.body" type="text" />
        <button @click.prevent="addItem">Add Item</button>
      </form>
    </div>
    <div>
      <ul>
        <li v-for="item in items" :key="item.$uid">
          {{ item.body }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Item from "@/classes/item";
import User from "@/classes/User";
import Profile from "@/classes/Profile";
export default {
  data() {
    return {
      form: {
        body: "",
      },
    };
  },
  computed: {
    items() {
      return Item.all();
    },
    user() {
      return Profile.query()
        .with("user")
        .find(55);
    },
  },
  methods: {
    addItem() {
      Item.insert({ data: this.form });
      this.form.body = "";
    },
  },
  beforeMount() {
    User.insert({
      data: [
        {
        id: 28,
        name: "Vlad",
        email: "angara99@gmail.com",
        profile: {
           id: 55,
        bio: "I am very cool",
        life_goal: "Leave this fucking country and move to usa"
        }
      },
      {
        id: 27,
        name: "Olesya",
        email: "angara99@gmail.com",
        profile: {
           id: 65,
        bio: "She is very cool",
        life_goal: "Leave this fucking country and move to usa"
        }
      },
      ]
      
    });

    // Profile.insert({
    //   data: {
    //     id: 55,
    //     bio: "I am very cool",
    //     life_goal: "Leave this fucking country and move to usa",
    //     user_id: 28,
    //   },
    // });
  },
};
</script>

<style>
ul {
  list-style: none;
}
</style>
