<script>
import json from "@/assets/phones/phones.json";

export default {
    name: "PhoneList",
    data() {
        return {
            phones: json,
            searchQuery: "",
        }
    },
    computed: {
        filteredPhones() {
            let filteredPhones = this.phones.filter(phone => {
                return phone.name.toLowerCase().includes(this.searchQuery.toLowerCase());
            });
            return filteredPhones;
        }
    },
}

</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2">
                <!-- two way binding with the searchQuery data attribute -->
                <p>
                    Search:
                    <input placeholder="Search phone name" v-model="searchQuery" />
                </p>
            </div>
            <div class="col-md-10">
                <ul>
                    <!-- filteredPhones is a function that checks to see if what is in searchQuery is in any of the phone names -->
                    <li v-for="phone in filteredPhones" :key="phone.id">
                        <span>{{ phone.name }}</span>
                        <p>{{ phone.snippet }}</p>
                    </li>
                </ul>
            </div>
            <p>Total number of phones: {{ filteredPhones.length }}</p>
        </div>
    </div>
</template>