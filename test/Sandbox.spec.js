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
    template: "<div>hello</div>",
  });
  expect(wrapper.vm.hello).toBe("Hello World");
});

test("render 2", () => {
  // 直接 Vue インスタンスを生成する場合
  // https://v2.ja.vuejs.org/v2/guide/instance#%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AB%E3%83%80%E3%82%A4%E3%82%A2%E3%82%B0%E3%83%A9%E3%83%A0
  const instance = new Vue({
    data: {
      a: 1,
    },
    template: "<div>{{ a }}</div>",
    // createdはライフサイクルフックの一つ
    created: function () {
      // `this` は vm インスタンスを指します
      console.log("a is: " + this.a);
    },
  });
  expect(instance.a).toBe(1);
  expect(instance.$data.a).toBe(1);
  expect(instance.$mount().$el.textContent).toBe("1");
  expect(instance.$mount().$el.outerHTML).toBe("<div>1</div>");
});

test("render 3 v-if", async () => {
  const wrapper = mount({
    data: { isVisible: true },
    template: `
      <div>
        <p v-if="isVisible">Now you see me</p>
        <p v-else>Now you don't</p>
      </div>
    `,
  });
  expect(wrapper.text()).toBe("Now you see me");

  await wrapper.setData({ isVisible: false });
  // setDataをawaitで待つと自動でnextTickも待ってくれそう。
  // return Vue.nextTick().then(() => {
  //   expect(wrapper.text()).toBe("Now you don't");
  // });
  expect(wrapper.text()).toBe("Now you don't");
});
