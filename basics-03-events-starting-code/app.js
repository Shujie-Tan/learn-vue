const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName : '',
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      // event.preventDefault();
      alert('Submitted!');
    },
    setName(event, lastname) {
      this.name = event.target.value + ' ' + lastname;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
