window.addEventListener('load', () => {
    window.Vue = new Vue({
        el: '#vmodel',
        data: {
            message: 'Hello world',
            selectedVal: '',
            isSelected: true
        },
        methods: {          
            log() {
                console.log(`"${this.message}"`);
            },
            setValue() {
                this.selectedVal = 'baz';
            }
        }
    })
});