import { createStore } from "vuex";

const store = createStore({
  state: {
    root: {
      name: "Root",
      index: 1,
      value: "",
      children: [
        {
          name: "First Child",
          index: 3,
          value: "",
          children: [
            {
              name: "Grand Child 1",
              index: 4,
              value: "Vue js",
              children: [
                {
                  name: "Grand Grand Child 1",
                  index: 5,
                  value: "Pug",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          name: "Second Child",
          index: 6,
          value: "Java",
          children: [
            {
              name: "Grand Child 2",
              index: 7,
              value: "Spring Boot",
              children: [
                {
                  name: "Grand Grand Child 2",
                  index: 8,
                  value: "Redis",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  },
  mutations: {
    updateValue(state, arr, value) {
      // delete origin
      // add new one
      let root = state.root;
      let arrIndex = 1;
      // let rootIndex = 0;
      // if (arr[0] != root.name) return;
      // root.children.forEach((el) => {
      //   if (el.name == arr[arrIndex]) {
      //     arrIndex += 1;
      //     el.children;
      //   }
      // });
    },
    addNode(state, arr, value) {},
    removeNode(arr, value) {},
  },
  actions: {},
});

export default store;
