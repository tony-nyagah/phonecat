import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import PhoneList from "../PhoneList.vue";

describe("Phone list", () => {
  it("returns a list of 20 phones", () => {
    const wrapper = mount(PhoneList);
    // expect the length of the phone json file tro be 20
    expect(wrapper.vm.phones.length).toBe(20);
  });
});
