import Counter from "@/components/Counter.vue";
import { mount } from "@vue/test-utils";

test("counter increments", async () => {
  const wrapper = mount(Counter);
  expect(wrapper.text()).toContain("0");

  const button = wrapper.find("button");
  await button.trigger("click");
  expect(wrapper.text()).toContain("1");
});

test("counter resets", async () => {
  const wrapper = mount(Counter);

  const buttons = wrapper.findAll("button");

  const incrementButton = buttons.at(0);
  const resetButton = buttons.at(1);

  await incrementButton.trigger("click");
  await incrementButton.trigger("click");
  expect(wrapper.text()).toContain("Count is: 2");
  expect(wrapper.text()).toEqual("Count is: 2 Reset button");

  await resetButton.trigger("click");
  expect(wrapper.text()).toContain("0");
});
