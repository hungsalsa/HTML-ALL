var app = new Vue({
    el: '#app',
    data: {
        message: 'helloworld!'
    },
    methods: {
    	initialVue : function() {
    		return 'Fuction cua Vue this value: '+ this.message;
    	},
    	changeValue : function(event) {
    		this.message = event.target.value;
    	}
    }
});