
 const {createApp} = Vue;

 createApp({
    data() {
        return {
           username: "",
           email:"",
           membership:'guest',
        };
    },
    computed:{

        isFormValid() {
            return this.username  ==='' || this.email ==='';
        }
    },
    methods: {
        addUser(){
            console.log("User added:", this.username, this.email, this.membership);
        }
    },
}).mount('#app');