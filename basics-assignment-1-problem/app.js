const app = Vue.createApp({
    data() {
        return {
            user_name: "Joshua Tan",
            user_age: 21,
            favorite_image: "https://curiokids.net/wp-content/uploads/2019/12/UNE_Panda_couleur_curiokids-678x381.jpg.webp",
        };
    },
    methods: {
        age_in_5_years() {
            return this.user_age + 5;
        },
        favorite_number() {
            return Math.random();
        }
    }
});

app.mount("#assignment");
