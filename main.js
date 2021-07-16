const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'a pair of blue crew socks',
            image: './assets/images/socks_blue.jpg',
            inventory: 0,
            onSale: true
        }
    }
})
