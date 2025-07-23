
 const {createApp} = Vue;

 createApp({
    data() {
        return {
           users:[],
          user:{
            username: '',
            email: '',
            membership: 'guest',
          },
        };
    },
    computed:{

        isFormValid() {
            return this.username  ==='' || this.email ==='';
        }
    },
    methods: {
        addUser() {
            this.users.push({
                username: this.user.username,
                email: this.user.email,
                membership: this.user.membership,
            });

            this.user.username= '',
            this.user.email= '',
            this.user.membership='guest',

            console.log(this.users);
        },
    },
}).mount('#app');