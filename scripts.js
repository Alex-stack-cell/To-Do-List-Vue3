var toDos = [
    {
        title: 'Learn HTML, CSS and JavaScript',
        done: true
    },
    {
        title: 'Learn the basics of Vue JS',
        done: true
    },
    {
        title: 'Complete Vue JS Challenge with excellence',
        done: false
    }
]

const ToDoListApp = {
    data() { 
        return {
            toDos: window.toDos,
            newToDo: [{}]
        }
    },
    methods: {
        lineThrough: function (toDo) {
            toDo.done = !toDo.done;
        },
        clear: function () {
            this.toDos = [{}];
        },
        add: function () {
            if (Object.keys(this.newToDo)[1]!=="title") {
                alert('Please provide a to-do');

            } else if (Object.keys(this.toDos)) {
                this.toDos.push(this.newToDo);
                this.newToDo = [{}];
            }
        }
    }
};

Vue.createApp(ToDoListApp).mount('#app');