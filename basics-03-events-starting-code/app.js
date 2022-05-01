const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName : '',
    };
  },
  methods: {
    outputFullname() {
      console.log("Running again");
      if (this.name === '') {
        return '';
      }
      return this.name + " " + "Tan"
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      // event.preventDefault();
      alert('Submitted!');
    },
    setName(event, lastname) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
