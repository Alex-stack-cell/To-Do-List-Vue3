/**
 * Modus Operandi
 * 
 * Chapter 1 Setup
 * 1 Import vuejs in the project - Done
 * 2 Test if it is working - Done
 * 
 * Chapter 2 Todo List
 * 1 Add or remove the css class when hitting a todo : done
 * 2 Add the clear all feature when hitting the button : done
 * 3 Add a todo in the list
 *  3.1 When the list is not empty Done
 *  3.2 When the list is empty
 */

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