<script>
// adding the node-fetch module because a test fails without it
// fetch is a browser API and isn't built into node, yet
import axios from "axios";

export default {
  name: "PhoneDetails",
  // props is set to true in the route definition
  // so that the component can receive the phone_name
  // from the route
  props: {
    phone_id: { String },
  },
  data() {
    return {
      phone_data: null,
    };
  },
  created() {
    // fetch(`/src/assets/phones/${this.phone_id}.json`).then((response) => response.json()
    //   .then((data) => (this.phone_data = data)));
    axios.get(`/src/assets/phones/${this.phone_id}.json`).then((response) => {
      this.phone_data = response.data;
    });

  },
  methods: {
    checkMark(value) {
      return value ? "\u2713" : "\u2718";
    },
  }
};
</script>

<template>
  <img v-if="phone_data.images" :src="'../' + phone_data.images[0]" :alt="phone_data.name" class="phone" />

  <h1>{{ phone_data.name }}</h1>

  <p>{{ phone_data.description }}</p>

  <ul class="phone-thumbs">
    <li v-if="phone_data.images" v-for="img in phone_data.images">
      <img :src="'../' + img" :alt="phone_data.name">
    </li>
  </ul>

  <ul class="specs">
    <li>
      <span>Availability and Networks</span>
      <dl>
        <dt>Availability</dt>
        <dd v-for="availability in phone_data.availability">{{ availability }}</dd>
      </dl>
    </li>

    <li>
      <span>Battery</span>
      <dl>
        <dt>Type</dt>
        <dd>{{ phone_data.battery.type }}</dd>
        <dt>Talk Time</dt>
        <dd>{{ phone_data.battery.talkTime }}</dd>
        <dt>Standby time (max)</dt>
        <dd>{{ phone_data.battery.standbyTime }}</dd>
      </dl>
    </li>

    <li>
      <span>Storage and Memory</span>
      <dl>
        <dt>RAM</dt>
        <dd>{{ phone_data.storage.ram }}</dd>
        <dt>Internal Storage</dt>
        <dd>{{ phone_data.storage.flash }}</dd>
      </dl>
    </li>

    <li>
      <span>Connectivity</span>
      <dl>
        <dt>Network Support</dt>
        <dd>{{ phone_data.connectivity.cell }}</dd>
        <dt>WiFi</dt>
        <dd>{{ phone_data.connectivity.wifi }}</dd>
        <dt>Bluetooth</dt>
        <dd>{{ phone_data.connectivity.bluetooth }}</dd>
        <dt>Infrared</dt>
        <dd>{{ checkMark(phone_data.connectivity.infrared) }}</dd>
        <dt>GPS</dt>
        <dd>{{ checkMark(phone_data.connectivity.gps) }}</dd>
      </dl>
    </li>

    <li>
      <span>Android</span>
      <dl>
        <dt>OS Version</dt>
        <dd>{{ phone_data.android.os }}</dd>
        <dt>UI</dt>
        <dd>{{ phone_data.android.ui }}</dd>
      </dl>
    </li>

    <li>
      <span>Size and Weight</span>
      <dl>
        <dt>Dimensions</dt>
        <dd v-for="dim in phone_data.sizeAndWeight.dimensions">{{ dim }}</dd>
        <dt>Weight</dt>
        <dd>{{ phone_data.sizeAndWeight.weight }}</dd>
      </dl>
    </li>

    <li>
      <span>Display</span>
      <dl>
        <dt>Screen size</dt>
        <dd>{{ phone_data.display.screenSize }}</dd>
        <dt>Screen resolution</dt>
        <dd>{{ phone_data.display.screenResolution }}</dd>
        <dt>Touch screen</dt>
        <dd>{{ checkMark(phone_data.display.touchScreen) }}</dd>
      </dl>
    </li>

    <li>
      <span>Hardware</span>
      <dl>
        <dt>CPU</dt>
        <dd>{{ phone_data.hardware.cpu }}</dd>
        <dt>USB</dt>
        <dd>{{ phone_data.hardware.usb }}</dd>
        <dt>Audio / headphone jack</dt>
        <dd>{{ phone_data.hardware.audioJack }}</dd>
        <dt>FM Radio</dt>
        <dd>{{ checkMark(phone_data.hardware.fmRadio) }}</dd>
        <dt>Accelerometer</dt>
        <dd>{{ checkMark(phone_data.hardware.accelerometer) }}</dd>
      </dl>
    </li>

    <li>
      <span>Camera</span>
      <dl>
        <dt>Primary</dt>
        <dd>{{ phone_data.camera.primary }}</dd>
        <dt>Features</dt>
        <dd>{{ phone_data.camera.features.join(', ') }}</dd>
      </dl>
    </li>

    <li>
      <span>Additional Features</span>
      <dd>{{ phone_data.additionalFeatures }}</dd>
    </li>
  </ul>
</template>
