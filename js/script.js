console.log('js ok');
console.log('Vue js ok', Vue);


const {createApp} = Vue;
const app = createApp({
    data() {
      return {
        lists: [
          { id: 1, done: false, text: 'Fare la spesa' },
          { id: 2, done: true, text: 'Lavare i capelli' },
          { id: 3, done: false, text: 'Comprare una marca da bollo' },
          { id: 4, done: false, text: 'Aggiornare il PC' }
        ]
      };
    },
    methods: {
        decorateText(item) {
          return item.done ? `${item.text}` : item.text;
        }
      }
});
  
app.mount('#root');