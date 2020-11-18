const orders = [
    {
        description: 'Long long named order - 1',
        date: '2017-06-29',
        time: '12:09:33',
        get products() { return products }
    },
    {
        description: 'Long long named order - 2',
        date: '2017-05-28',
        time: '12:09:33',
        get products() { return products }
    },
    {
        description: 'Long long named order - 3',
        date: '2017-04-27',
        time: '12:09:33',
        get products() { return products }
    }
];
const products = [
    {
        id: 1,
        isNew: true,
        // photo: require('./assets/monitor.png'),
        // photo: require('./monitor.png'),
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
            { value: 2600, symbol: 'UAH' }
        ],
    },
    {
        id: 2,
        isNew: false,
        // photo: require('./assets/monitor.png'),
        // photo: require('./monitor.png'),
        title: 'Monitors LG',
        specification: 'Gigabyte Technology GF-4',
        serialNumber: 'SN-13.9876543',
        date: '2017-06-29 12:09:33',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2017-06-29 12:09:33'
        },
        price: [
            { value: 100, symbol: 'USD' },
            { value: 2600, symbol: 'UAH' }
        ],
    },
    {
        id: 3,
        isNew: false,
        // photo: require('./assets/monitor.png'),
        // photo: require('./monitor.png'),
        title: 'Monitors LG',
        specification: 'Gigabyte Technology GF-5',
        serialNumber: 'SN-13.9876543',
        date: '2017-06-29 12:09:33',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2017-06-29 12:09:33'
        },
        price: [
            { value: 100, symbol: 'USD' },
            { value: 2600, symbol: 'UAH' }
        ],
    }
]

export { orders, products };