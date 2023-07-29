export const API = Object.freeze({
    URL: 'https://646d29479c677e232189ca03.mockapi.io/',
    TABLES: { ITEMS: 'productos'},
})

export const Currency = Object.freeze({
    USD: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'}),
})

export const PAGELAYOUT = Object.freeze({
    HOME: 
    {   rows: 4,
        columns: 3,
        components: {
                        header: {position: 1,
                                 length: 3},
                        main_content: {position: 2,
                                    length: 2},
                        sidebar: {position: 2,
                                  length: 1},
                        footer: {position: 3,
                                 length: 3}
                 }
}})