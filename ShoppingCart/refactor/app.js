Vue.component('VueCart', {
    props: {
        cart: { type: Array, required: true, default: () => { return [] } },
        title: { type: String, required: true },
        type: { type: String, required: true }
    },
    methods: {
        removeFromCart(index) {
            return this.cart.splice(index, 1);
        },
        changeCart(index) {
            const item = this.removeFromCart(index);
            this.$emit('itemchangedoncart', item[0], this.type);
        }
    },
    computed: {
        cartTotal() {
            let total = 0;
            this.cart.forEach((item) => {
                total += parseFloat(item.price,10);
            });
            return total.toFixed(2);
        },
        isShoppingCart() {
            return this.type == 'shoppingCart'
        },
        isSavedCart() {
            return this.type == 'savedCart'
        }
    },
    template: `
        <div class="cart-wrapper">
            <div class="title-container">{{title}}</div>
            <p v-if="!cart.length">No item in cart...</p>
            <div class="product-container" v-for="(item, index) in cart">
                <div class="product-image">
                    <img v-bind:src="item.image" />
                </div>
                <div class="product-info">
                    <a class="product-title" v-bind:href="item.url">{{ item.name }}</a><span class="price-container">\${{ item.price }}</span>
                    <div class="product-owner">by {{ item.seller }}</div>
                    <div class="product-stock" v-if="item.isAvailable">In Stock</div>
                    <div class="product-shipping" v-if="item.isShipping">This item has free ship to Turkey.</div>	
                    <div class="product-situation">
                        <a href="#" class="product-delete" v-on:click="removeFromCart(index)">Delete</a>	
                        |	
                        <a href="#" class="product-later" v-on:click="changeCart(index)" v-if="isShoppingCart">Save for later</a>			
                        <a href="#" class="product-later" v-on:click="changeCart(index)" v-if="isSavedCart">Move to cart</a>
                    </div>				
                </div>
            </div>
            <div class="total-price-container" v-if="cart.length">Subtotal ({{ cart.length }} items): \${{ cartTotal }} </div>
        </div>
    `
});

window.addEventListener('load', () => {
    window.Vue = new Vue({
        el: '#app',
        name: 'Cart',
        data: {
            isLoading: true,
            cart: [],
            saved: []
        },
        methods: {          
            handleItemChange(item, cartType) {
                if (cartType === 'shoppingCart') {
                    this.saved.push(item);
                } else {
                    this.cart.push(item);
                }
            },
        },
        created() {
            fetch('data.json')
            .then((res) => { return res.json() })
            .then((res) => { 
                this.isLoading = false;
                this.cart = res.cart;
                this.saved = res.saved;
            })
        }
    })
});