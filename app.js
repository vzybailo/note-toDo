const App = {
  data() {
    return {
      title: "Notes",
      input: {
        value: "",
        placeholder: "Type ur note",
      },
      notes: ["task 1", "task 2", "task 3"],
    };
  },
  mounted() {
    this.getNotes();
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem("notes", JSON.stringify(updatedList));
      },
      deep: true,
    },
  },
  methods: {
    getNotes() {
      const localNotes = localStorage.getItem("notes");
      if (localNotes) {
        this.notes = JSON.parse(localNotes);
      }
    },
    onSubmit() {
      this.notes.push(this.input.value);

      // reset
      this.input.value = "";
    },
    remove(index) {
      console.log(`note: ${index} has been removed`);
      this.notes.splice(index, 1);
    },
    getEdit(event, index) {
      const content = event.target.textContent;

      this.notes[index].textContent = content;
      this.notes[index] = content;

      localStorage.setItem('notes', JSON.stringify(this.notes));
    },

  },
};

Vue.createApp(App).mount("#app");
