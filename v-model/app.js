window.addEventListener('load', () => {
    new Vue({
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
    });

    setTimeout(() => {  
        new Vue({
            el: '#vcloak',
            data: {
                users: [ { name: 'Aslıhan' }, { name: 'Burak' } ]
            }
        })
    }, 3000);

    Vue.component('v-select', {
        template: `
            <select>
                <slot></slot>
            </select>
        `
    });

     Vue.component('v-option', {
        props: [ 'value' ],
        template: `
            <option>{{value}}</option>
        `
    });

    new Vue({ el: '#slots' });

    new Vue({
        el: '#nextTick',
        data: {
            message: 'Hello world'
        },
        methods: {          
            change() {
                this.message = 'Hello!';
                console.log(document.querySelector('#nextTick').innerText);
                this.$nextTick(() => {
                    console.log(document.querySelector('#nextTick').innerText);
                })
            }
        }
    })


    Vue.config.keyCodes.a = 65;
    new Vue({
        el: '#modifiers',
        methods: {          
            log() {
                console.log('Fooooooo');                
            }
        }
    })
});