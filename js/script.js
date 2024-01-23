console.log('js ok');
console.log('Vue js ok', Vue);


const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      lists: [
        { id: 1, done: false, text: 'Fare la spesa' },
        { id: 2, done: true, text: 'Lavare i capelli' },
        { id: 3, done: false, text: 'Comprare una marca da bollo' },
        { id: 4, done: false, text: 'Aggiornare il PC' }
      ],
      newTask: '',
      searchText: ''
    };
  },
  methods: {
    decorateText(item) {
      return item.done ? `${item.text}` : item.text;
    },
    removeItem(i) {
      this.lists.splice(i, 1);
    },
    addTask() {
      if (this.newTask.trim() !== '') {
        this.lists.push({ id: this.lists.length + 1, done: false, text: this.newTask });
        this.newTask = '';
      }
    },
    markAllAsDone() {
      this.lists.forEach(item => (item.done = true));
    },
    markAllAsNotDone() {
      this.lists.forEach(item => (item.done = false));
    },
    removeAll() {
      this.lists = [];
    }
  },
  computed: {
    filteredLists() {
      return this.lists.filter(item =>
        item.text.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
});

app.mount('#root');