import { createStore } from "vuex";

export default createStore({
  state: {
    mainGroup: [
      {
        id: 1,
        name: "Dir 1",
        type: "folder",
        subGroup: [
          {
            id: 11,
            name: "Dir 1-1",
            type: "folder",
            thirdGroup: [{ id: 111, name: "File 1-1-1", type: "file" }],
          },
          { id: 12, name: "File 1-2", type: "file" },
        ],
      },
      {
        id: 2,
        name: "Dir 2",
        type: "folder",
        subGroup: [
          {
            id: 21,
            name: "Dir 2-1",
            type: "folder",
            thirdGroup: [],
          },
          { id: 22, name: "File 2-2", type: "file" },
        ],
      },
      {
        id: 3,
        name: "File 2",
        type: "file",
        subGroup: [],
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
