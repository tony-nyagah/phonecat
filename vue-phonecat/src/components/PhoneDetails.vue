<script>
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
    fetch(`/src/assets/phones/${this.phone_id}.json`).then((response) => response.json()
      .then((data) => (this.phone_data = data)));
  },
};
</script>

<template>
  <img :src="'../' + phone_data.images[0]" :alt="phone_data.name" class="phone" />

  <h1>{{ phone_data.name }}</h1>

  <p>{{ phone_data.description }}</p>

  <ul class="phone-thumbs">
    <li v-for="img in phone_data.images">
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
      <span>Additional Features</span>
      <dd>{{ phone_data.additionalFeatures }}</dd>
    </li>
  </ul>
</template>
