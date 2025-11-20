import For from "@/components/For.vue";
import { mount } from "@vue/test-utils";

test("render v-for", () => {
  const wrapper = mount(For);
  expect(wrapper.text()).toBe("Item 1Item 2Item 3Item 4Item 5");
});
