<script>
  import json from "@/assets/phones/phones.json";

  export default {
    name: "PhoneList",
    data() {
      return {
        phones: json,
        searchQuery: "",
        orderChoices: ["Name", "Newest"],
        selectedSortChoice: "Newest",
      };
    },
    methods: {
      filteredPhones() {
        let filteredPhones = this.phones.filter((phone) => {
          return phone.name
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());
        });
        return filteredPhones;
      },

      sortedPhones() {
        let unsortedPhones = this.filteredPhones();
        if (this.selectedSortChoice === "Name") {
          unsortedPhones.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            }
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1;
            }
            return 0;
          });
        }
        if (this.selectedSortChoice === "Newest") {
          unsortedPhones.sort((a, b) => {
            if (a.age > b.age) {
              return 1;
            }
            if (a.age < b.age) {
              return -1;
            }
            return 0;
          });
        }
        let sortedPhones = unsortedPhones;
        return sortedPhones;
      },
    },
    computed: {
      filteredAndSortedPhones() {
        return this.sortedPhones();
      },
    },
  };
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-3">
        <!-- two way binding with the searchQuery data attribute -->
        <p>
          Search:
          <input placeholder="Search phone name" v-model="searchQuery" />
        </p>

        <p>
          Sort by:
          <select v-model="selectedSortChoice">
            <option v-for="choice in orderChoices">{{ choice }}</option>
          </select>
        </p>
      </div>
      <div class="col-lg-8">
        <ul class="phones list-group">
          <li
            v-for="phone in filteredAndSortedPhones"
            class="phone-desc list-group-item"
          >
            <router-link
              :to="{
                name: 'PhoneDetails',
                params: { phone_name: phone.name },
              }"
              :key="phone.name"
              class="thumb"
            >
              <img
                :src="phone.imageUrl"
                :alt="phone.name"
                class="img-thumbnail"
              />
            </router-link>

            <router-link
              :to="{
                name: 'PhoneDetails',
                params: { phone_name: phone.name },
              }"
              :key="phone.name"
              >{{ phone.name }}</router-link
            >
            <p>{{ phone.snippet }}</p>
          </li>
        </ul>
      </div>
      <p>Total number of phones: {{ filteredAndSortedPhones.length }}</p>
    </div>
  </div>
</template>
