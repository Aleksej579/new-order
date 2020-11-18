const orders = [
    {
        description: 'Named order - 1',
        date: '2017-06-29',
        time: '12:09:33',
        get products() { return products }
    },
    {
        description: 'Named order - 2',
        date: '2017-05-28',
        time: '12:09:33',
        get products() { return products }
    },
    {
        description: 'Named order - 3',
        date: '2017-04-27',
        time: '12:09:33',
        get products() { return products }
    }
];
const products = [
    {
        id: 1,
        isNew: true,
        photo: './src/assets/monitor1.png',
        title: 'Monitors Samsung',
        specification: 'Gigabyte Technology GF-3',
        serialNumber: 'SN-12.3456789',
        date: '2017-06-29 12:09:33',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2017-06-29 12:09:33'
        },
        price: [
            { value: 100, symbol: 'USD' },
            { value: 2500, symbol: 'UAH' }
        ],
    },
    {
        id: 2,
        isNew: false,
        photo: './src/assets/monitor2.png',
        title: 'Monitors LG',
        specification: 'Gigabyte Technology GF-4',
        serialNumber: 'SN-13.9876543',
        date: '2017-06-29 12:09:33',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2017-06-29 12:09:33'
        },
        price: [
            { value: 110, symbol: 'USD' },
            { value: 2510, symbol: 'UAH' }
        ],
    },
    {
        id: 3,
        isNew: false,
        photo: './src/assets/monitor2.png',
        title: 'Monitors LG',
        specification: 'Gigabyte Technology GF-5',
        serialNumber: 'SN-13.9876543',
        date: '2017-06-29 12:09:33',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2017-06-29 12:09:33'
        },
        price: [
            { value: 120, symbol: 'USD' },
            { value: 2520, symbol: 'UAH' }
        ],
    }
]

export { orders, products };