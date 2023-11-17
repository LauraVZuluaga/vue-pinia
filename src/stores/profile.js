import { defineStore } from "pinia";

export default defineStore("profile", {
  state: () => ({
    id: 1,
    username: "Laura Zuluaga",
    avatar: "/avatars/avatar.jpg",
    status: "active",
  }),
});