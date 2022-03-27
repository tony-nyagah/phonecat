import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import PhoneList from "../PhoneList.vue";

describe("Phone list", () => {
  const wrapper = mount(PhoneList);
  it("returns a list of 20 phones", () => {
    // expect the length of the phone json file too be 20
    expect(wrapper.vm.phones.length).toBe(20);
  });

  it("should have the default sort order set to 'newest'", () => {
    expect(wrapper.vm.selectedSortChoice).toBe("Newest");
  });
});
