export const API = Object.freeze({
    // URL: 'https://646d29479c677e232189ca03.mockapi.io/',
    URL: 'http://localhost:5000/',
    // TABLES: { ITEMS: 'productos'},
    TABLES: {   
                ITEMS: 'products',
                QUERIES: 'queries',
            },

})

export const Currency = Object.freeze({
    USD: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'}),
})