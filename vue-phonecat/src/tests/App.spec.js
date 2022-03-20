import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App", () => {
  it("returns a list of 20 phones", () => {
    const wrapper = mount(App);
    // expect the length of the phone json file tro be 20
    expect(wrapper.vm.phones.length).toBe(20);
  });
});
