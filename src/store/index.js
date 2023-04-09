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
    updateValue(state, payload) {
      let arr = payload.arr;
      let value = payload.value;
      let root = state.root;
    },
    addNode(state, payload) {
      let arr = payload.arr;
      let value = payload.value;
      let root = state.root;
      console.log("addddddd", arr, value);
      if (arr[0] != root.name) {
        console.log("no root");
        return;
      } // check if root is first in array
      arr.splice(0, 1);
      for (let i = 0; i < arr.length; i++) {
        console.log(
          "現在輪到 : " + arr[i] + " : " + (i + 1) + "/" + arr.length
        );
        // 如果這層是空的
        if (root.children.length == 0) {
          root.children.push({
            name: arr[i],
            value: value,
            children: [],
          });
          console.log(root.children);
        }
        for (let j = 0; j < root.children.length; j++) {
          if (arr[i] == root.children[j].name) {
            console.log("找到了 " + root.children[j].name + " 往下一層");

            root = root.children[j];

            if (i == arr.length - 1) {
              console.log("往下沒了");
              break;
            }
            console.log(root.children);
          } else {
            console.log("不是這格 這格是: " + root.children[j].name);
          }
          if (
            j == root.children.length - 1 &&
            arr[i] != root.children[j].name
          ) {
            console.log("到最後都沒中，自己加一個");
            root.children.push({
              name: arr[i],
              value: value,
              children: [],
            });
            console.log(root.children);
          }
        }
      }
    },
    removeNode(state, payload) {
      let arr = payload.arr;
      let root = state.root;

      if (arr[0] != root.name) {
        return;
      } // check if root is first in array

      arr.splice(0, 1);

      for (let i = 0; i < arr.length; i++) {
        console.log(
          "現在輪到 : " + arr[i] + " : " + (i + 1) + "/" + arr.length
        );
        // 如果這層是空的
        if (root.children.length == 0) {
          root.children.length = 0;
        }
        for (let j = 0; j < root.children.length; j++) {
          if (arr[i] == root.children[j].name) {
            console.log("找到了 " + root.children[j].name + " 往下一層");
            if (i == arr.length - 1) {
              root.children.splice(j, 1);
              break;
            } else {
              root = root.children[j];
            }
            console.log(root.children);
          } else {
            console.log("不是這格 這格是: " + root.children[j].name);
          }
        }
      }
    },
  },
  actions: {
    async updateNode(context, input) {
      let { oldArr, newArr, value } = input;
      context.commit("removeNode", { arr: oldArr });
      // let arrRebuild = ["Root"].concat(arr);
      context.commit("addNode", { arr: newArr, value: value });
    },
  },
});

export default store;
