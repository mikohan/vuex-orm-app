<template>
  <div>
    <h1>Todo Component</h1>

    <form>
      <input type="text" v-model="form.title" />
      <button @click.prevent="addList">Add List</button>
    </form>

    <list-component
      v-for="list in user.lists"
      :key="list.id"
      :list="list"
    ></list-component>
  </div>
</template>

<script>
import User from "@/classes/User";
import ListComponent from "@/components/ListComponent";
import List from "@/classes/List";

export default {
  components: {
    ListComponent,
  },
  data() {
    return {
      form: {
        title: "",
        user_id: 28,
      },
    };
  },

  computed: {
    user() {
      return User.query()
        .with("lists.items")
        .find(28);
    },
  },
  methods: {
    addList() {
      List.insert({ data: this.form });
      this.form.title = ''
    },
  },
  beforeMount() {
    User.insert({
      data: [
        {
          id: 28,
          name: "Vlad",
          email: "angara99@gmail.com",
        },
        {
          id: 27,
          name: "Olesya",
          email: "angara99@gmail.com",
          profile: {
            id: 65,
            bio: "She is very cool",
            life_goal: "Leave this fucking country and move to usa",
          },
        },
      ],
    });
  },
};
</script>

<style>
ul {
  list-style: none;
}
</style>
