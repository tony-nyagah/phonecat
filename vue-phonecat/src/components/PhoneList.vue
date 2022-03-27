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
            imagepath: "../assets/",
        }
    },
    methods: {
        filteredPhones() {
            let filteredPhones = this.phones.filter(phone => {
                return phone.name.toLowerCase().includes(this.searchQuery.toLowerCase());
            });
            return filteredPhones;
        },

        sortedPhones() {
            let unsortedPhones = this.filteredPhones();
            if (this.selectedSortChoice === "Name") {
                unsortedPhones.sort((a, b) => {
                    return a.name.toLowerCase() > b.name.toLowerCase()
                })
            }
            else if (this.selectedSortChoice === "Newest") {
                unsortedPhones.sort((a, b) => {
                    return a.age > b.age;
                })
            }
            let sortedPhones = unsortedPhones;
            return sortedPhones;
        }
    },
    computed: {
        filteredAndSortedPhones() {
            return this.sortedPhones();
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

                <p>
                    Sort by:
                    <select v-model="selectedSortChoice">
                        <option v-for="choice in orderChoices">{{ choice }}</option>
                    </select>
                </p>
            </div>
            <div class="col-md-10">
                <ul class="phones list-group">
                    <li v-for="phone in filteredAndSortedPhones" class="phone-desc list-group-item">
                        <a :href="phone.id" class="thumb">
                            <img
                                :src="'src/assets/' + phone.imageUrl"
                                :alt="phone.name"
                                class="img-thumbnail"
                            />
                        </a>
                        <a :href="phone.id">{{ phone.name }}</a>
                        <p>{{ phone.snippet }}</p>
                    </li>
                </ul>
            </div>
            <p>Total number of phones: {{ filteredAndSortedPhones.length }}</p>
        </div>
    </div>
</template>

