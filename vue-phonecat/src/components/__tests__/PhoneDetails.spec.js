import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import PhoneDetails from "../PhoneDetails.vue";

describe("Phone details", () => {
    const wrapper = mount(PhoneDetails);
    // test props
    it("should receive and return a phone name", async() => {
        await wrapper.setProps({ phone_name: "iPhone XS" });
        expect(wrapper.vm.phone_name).toBe("iPhone XS");
    });
});