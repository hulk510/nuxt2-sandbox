import { mount } from "@vue/test-utils";
import Vue from "vue";

test("render", () => {
  const wrapper = mount({
    data: () => ({ hello: "Hello World" }),
    // created: () => {
    //   // arrow function cannot access "this"
    //   //     [Vue warn]: Error in created hook: "TypeError: Cannot read properties of undefined (reading 'hello')"
    //   console.log("say: ", this.hello);
    // },
    created: function () {
      console.log("say: ", this.hello);
    },
    template: "<div>{hello}</div>",
  });
  expect(wrapper.vm.hello).toBe("Hello World");
});

test("render 2", () => {
  // 直接 Vue インスタンスを生成する場合
  const instance = new Vue({
    data: {
      a: 1,
    },
    created: function () {
      // `this` は vm インスタンスを指します
      console.log("a is: " + this.a);
    },
  });
  expect(instance.a).toBe(1);
});
