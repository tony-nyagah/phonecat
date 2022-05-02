import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import PhoneDetails from "../PhoneDetails.vue";

describe("Phone details", () => {
  const wrapper = mount(PhoneDetails);
  // test props
  it("should receive and return a phone id", async () => {
    await wrapper.setProps({ phone_id: "iPhone-XS" });
    expect(wrapper.vm.phone_id).toBe("iPhone-XS");
  });
  // test that the checkmark function returns the correct value
  it("checkmark should be a tick icon if true and an x if false", async () => {
    expect(wrapper.vm.checkMark(true)).toBe("\u2713");
    expect(wrapper.vm.checkMark(false)).toBe("\u2718");
  });
  // test that the setMainImage function changes mainImageUrl to the passed url
  it("setImageUrl should change mainImageUrl to the passed url", async () => {
    await wrapper.vm.setMainImage("img/phones/motorola-xoom-with-wi-fi.2.jpg");
    expect(wrapper.vm.mainImageUrl).toBe(
      "../img/phones/motorola-xoom-with-wi-fi.2.jpg"
    );
  });
});
