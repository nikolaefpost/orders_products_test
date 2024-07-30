const products = [
    {
        "id": 1,
        "serialNumber": 1234,
        "isNew": 1,
        "photo": "https://files.foxtrot.com.ua/PhotoNew/img_0_10_4251_1.jpg",
        "title": "Product 1",
        "type": "Monitors",
        "specification": "Specification 1",
        "guarantee": {
            "start": "2017-06-29 12:09:33",
            "end": "2017-06-29 12:09:33"
        },
        "price": [
            {
                "value": 100,
                "symbol": "USD",
                "isDefault": 0
            },
            {
                "value": 2600,
                "symbol": "UAH",
                "isDefault": 1
            }
        ],
        "order": 1,
        "date": "2017-06-29 12:09:33"
    },
    {
        "id": 2,
        "serialNumber": 1235,
        "isNew": 1,
        "photo": "https://files.foxtrot.com.ua/PhotoNew/img_0_10_4251_1.jpg",
        "title": "Product 2",
        "type": "Monitors",
        "specification": "Specification 2",
        "guarantee": {
            "start": "2017-06-29 12:09:33",
            "end": "2017-06-29 12:09:33"
        },
        "price": [
            {
                "value": 1000,
                "symbol": "USD",
                "isDefault": 0
            },
            {
                "value": 26000,
                "symbol": "UAH",
                "isDefault": 1
            }
        ],
        "order": 1,
        "date": "2017-06-29 12:09:33"
    },
    {
        "id": 3,
        "serialNumber": 1234,
        "isNew": 1,
        "photo": "https://files.foxtrot.com.ua/PhotoNew/img_0_10_4251_1.jpg",
        "title": "Product 3",
        "type": "Monitors",
        "specification": "Specification 1",
        "guarantee": {
            "start": "2017-06-29 12:09:33",
            "end": "2017-06-29 12:09:33"
        },
        "price": [
            {
                "value": 100,
                "symbol": "USD",
                "isDefault": 0
            },
            {
                "value": 2600,
                "symbol": "UAH",
                "isDefault": 1
            }
        ],
        "order": 2,
        "date": "2017-06-29 12:09:33"
    },
    {
        "id": 4,
        "serialNumber": 1234,
        "isNew": 1,
        "photo": "https://files.foxtrot.com.ua/PhotoNew/img_0_10_4251_1.jpg",
        "title": "Product 4",
        "type": "Motherboards",
        "specification": "Specification 2",
        "guarantee": {
            "start": "2017-06-29 12:09:33",
            "end": "2017-06-29 12:09:33"
        },
        "price": [
            {
                "value": 400,
                "symbol": "USD",
                "isDefault": 0
            },
            {
                "value": 8600,
                "symbol": "UAH",
                "isDefault": 1
            }
        ],
        "order": 2,
        "date": "2017-06-29 12:09:33"
    },
    {
        "id": 5,
        "serialNumber": 1234,
        "isNew": 1,
        "photo": "https://files.foxtrot.com.ua/PhotoNew/img_0_10_4251_1.jpg",
        "title": "Product 5",
        "type": "Monitors",
        "specification": "Specification 1",
        "guarantee": {
            "start": "2017-06-29 12:09:33",
            "end": "2017-06-29 12:09:33"
        },
        "price": [
            {
                "value": 100,
                "symbol": "USD",
                "isDefault": 0
            },
            {
                "value": 2600,
                "symbol": "UAH",
                "isDefault": 1
            }
        ],
        "order": 3,
        "date": "2017-06-29 12:09:33"
    },
    {
        "id": 6,
        "serialNumber": 1234,
        "isNew": 1,
        "photo": "https://files.foxtrot.com.ua/PhotoNew/img_0_10_4251_1.jpg",
        "title": "Монітор 28\" Samsung Odyssey G7 LS28BG702 (LS28BG702EIXUA) UHD 4K HDR400 / IPS 8-Bit + FRC / 144Гц / DCI-P3 90% / G-SYNC Compatible / AMD FreeSync Premium Pro",
        "type": "Motherboards",
        "specification": "Specification 2",
        "guarantee": {
            "start": "2017-06-29 12:09:33",
            "end": "2017-06-29 12:09:33"
        },
        "price": [
            {
                "value": 400,
                "symbol": "USD",
                "isDefault": 0
            },
            {
                "value": 8600,
                "symbol": "UAH",
                "isDefault": 1
            }
        ],
        "order": 1,
        "date": "2017-06-29 12:09:33"
    }
];
const orders = [
    {
        "id": 1,
        "title": "default behavior of the Next.js App Router is to scroll to the top of a new route or",
        "date": "2017-06-29 12:09:33",
        "description": "desc",
        "products": [
            {
                "id": 1,
                "serialNumber": 1234,
                "isNew": 1,
                "photo": "https://files.foxtrot.com.ua/PhotoNew/img_0_10_4251_1.jpg",
                "title": "Product 1",
                "type": "Monitors",
                "specification": "Specification 1",
                "guarantee": {
                    "start": "2017-06-29 12:09:33",
                    "end": "2017-06-29 12:09:33"
                },
                "price": [
                    {
                        "value": 100,
                        "symbol": "USD",
                        "isDefault": 0
                    },
                    {
                        "value": 2600,
                        "symbol": "UAH",
                        "isDefault": 1
                    }
                ],
                "order": 1,
                "date": "2017-06-29 12:09:33"
            },
            {
                "id": 2,
                "serialNumber": 1235,
                "isNew": 1,
                "photo": "https://files.foxtrot.com.ua/PhotoNew/img_0_10_4251_1.jpg",
                "title": "Product 2",
                "type": "Monitors",
                "specification": "Specification 2",
                "guarantee": {
                    "start": "2017-06-29 12:09:33",
                    "end": "2017-06-29 12:09:33"
                },
                "price": [
                    {
                        "value": 1000,
                        "symbol": "USD",
                        "isDefault": 0
                    },
                    {
                        "value": 26000,
                        "symbol": "UAH",
                        "isDefault": 1
                    }
                ],
                "order": 1,
                "date": "2017-06-29 12:09:33"
            },
            {
                "id": 6,
                "serialNumber": 1234,
                "isNew": 1,
                "photo": "https://files.foxtrot.com.ua/PhotoNew/img_0_10_4251_1.jpg",
                "title": "Монітор 28\" Samsung Odyssey G7 LS28BG702 (LS28BG702EIXUA) UHD 4K HDR400 / IPS 8-Bit + FRC / 144Гц / DCI-P3 90% / G-SYNC Compatible / AMD FreeSync Premium Pro",
                "type": "Motherboards",
                "specification": "Specification 2",
                "guarantee": {
                    "start": "2017-06-29 12:09:33",
                    "end": "2017-06-29 12:09:33"
                },
                "price": [
                    {
                        "value": 400,
                        "symbol": "USD",
                        "isDefault": 0
                    },
                    {
                        "value": 8600,
                        "symbol": "UAH",
                        "isDefault": 1
                    }
                ],
                "order": 1,
                "date": "2017-06-29 12:09:33"
            }
        ]
    },
    {
        "id": 2,
        "title": "Order 2",
        "date": "2017-06-29 12:09:33",
        "description": "desc",
        "products": [
            {
                "id": 3,
                "serialNumber": 1234,
                "isNew": 1,
                "photo": "https://files.foxtrot.com.ua/PhotoNew/img_0_10_4251_1.jpg",
                "title": "Product 3",
                "type": "Monitors",
                "specification": "Specification 1",
                "guarantee": {
                    "start": "2017-06-29 12:09:33",
                    "end": "2017-06-29 12:09:33"
                },
                "price": [
                    {
                        "value": 100,
                        "symbol": "USD",
                        "isDefault": 0
                    },
                    {
                        "value": 2600,
                        "symbol": "UAH",
                        "isDefault": 1
                    }
                ],
                "order": 2,
                "date": "2017-06-29 12:09:33"
            },
            {
                "id": 4,
                "serialNumber": 1234,
                "isNew": 1,
                "photo": "https://files.foxtrot.com.ua/PhotoNew/img_0_10_4251_1.jpg",
                "title": "Product 4",
                "type": "Motherboards",
                "specification": "Specification 2",
                "guarantee": {
                    "start": "2017-06-29 12:09:33",
                    "end": "2017-06-29 12:09:33"
                },
                "price": [
                    {
                        "value": 400,
                        "symbol": "USD",
                        "isDefault": 0
                    },
                    {
                        "value": 8600,
                        "symbol": "UAH",
                        "isDefault": 1
                    }
                ],
                "order": 2,
                "date": "2017-06-29 12:09:33"
            }
        ]
    }
];

module.exports = { orders, products };