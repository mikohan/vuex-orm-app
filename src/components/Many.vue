<template>
  <div>
    <hr />
    <form action="">
      <input v-model="form.body" type="text" />
      <button @click.prevent="addItem">Add Item</button>
    </form>
    <div>
      <h6>For part</h6>
      <hr />
      <pre v-show="true">
        <ul>
          <li v-for="(item, i) in user.lists" :key="i">
            <ul>
              <li v-for="it in item.items" :key="it.id">{{ it }}</li>
            </ul>
          </li>
        </ul>
      </pre>
      <h6>Single part</h6>
      <hr />
      <pre>
        <div>
          {{ user }}
        </div>
      </pre>
    </div>
  </div>
</template>

<script>
import User from "@/classes/User";
export default {
  data() {
    return {
      form: {
        body: "",
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
  beforeMount() {
    User.insert({
      data: [
        {
          id: 28,
          name: "Vlad",
          email: "angara99@gmail.com",
          lists: [
            {
              id: 1,
              title: "Shopping stuff",
              items: [
                { id: 100, body: "Item title one" },
                { id: 101, body: "Item title two" },
                { id: 102, body: "Item title Three" },
              ],
            },
            {
              id: 2,
              title: "Life goals",
              items: [
                { id: 103, body: "Item title one" },
                { id: 104, body: "Item title two" },
                { id: 105, body: "Item title Three" },
              ],
            },
            {
              id: 3,
              title: "Friends",
              items: [
                { id: 106, body: "Item title one" },
                { id: 107, body: "Item title two" },
                { id: 108, body: "Item title Three" },
              ],
            },
          ],
          profile: {
            id: 55,
            bio: "I am very cool",
            life_goal: "Leave this fucking country and move to usa",
          },
        },
        {
          id: 27,
          name: "Olesya",
          email: "angara99@gmail.com",
          lists: [
            {
              id: 4,
              title: "Shopping stuff",
              items: [
                { id: 109, body: "Item title one" },
                { id: 110, body: "Item title two" },
                { id: 111, body: "Item title Three" },
              ],
            },
            {
              id: 5,
              title: "Life goals",
              items: [
                { id: 112, body: "Item title one" },
                { id: 113, body: "Item title two" },
                { id: 114, body: "Item title Three" },
              ],
            },
            {
              id: 6,
              title: "Friends",
              items: [
                { id: 115, body: "Item title one" },
                { id: 116, body: "Item title two" },
                { id: 117, body: "Item title Three" },
              ],
            },
          ],
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

<style></style>
