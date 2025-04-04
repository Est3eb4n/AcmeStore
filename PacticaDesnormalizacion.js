db.shop.insertManyu([
    {
        "invoiceNumber": "0001",
        "date": "2020-02-01",
        "customer": {
            "identificationNumber": "10001",
            "firstName": "Pepe",
            "lastName": "Pardo",
            "place": {
                "address": "cl.25#35-01",
                "city": "Battanquilla",
                "state": "Atlantico"
            }
        },
        "seler": {
            "identificationNumber": "10002",
            "firstName": "Juanita",
            "lastName": "La Del Barrio"
        },
        "details": [
            {
                "itemNumber": 1,
                "ProductID":objectID("0001"),
                "price": 30,
                "quantity": 10,
                "observation": "Aqui va una observacion"
            },
            {
                "itemNumber": 2,
                "ProductID":objectID("0002"),
                "price": 5,
                "quantity": 12,
                "observation": "Aqui va una observacion"
            }
        ]
    }
])

db.createColletion('shop',
{
    validator: {
        $jsonSchema: {
            bsonType:'object',
            required: ['customer'
            ],
            properties: {
                customer: {
                    bsonType:'object',
                    properties: {
                        identificationNumber: {
                            bsonType: "number",
                        },
                        firstName:{
                            bsonType:"string"
                        },
                        lastName:{
                            bsonType:"string"
                        },
                        place: {
                            bsonType:'object',
                            properties: {
                                bsonType: "string",
                                address: {
                                    bsonTipe: "string"
                                },
                                city: {
                                    bsonType: "string"
                                },
                                state: {
                                    bsonType: "string"
                                }
                            }
                        }
                    }
                },
                seler: {
                    bsonType: "object",
                    properties: {
                        bsonType: "string",
                        identificationNumber: {
                            bsonType: "string"
                        },
                        firstName: {
                            bsonType: "string"
                        },
                        lastName: {
                            bsonType: "string"
                        }
                    }
                },
                details: {
                    bsonType: "object",
                    properties: {
                        bsonType: "string",
                        itemNumber{
                            bsonType: "number"
                        },
                        ProductID{
                            bsonType: "string"
                        },
                        price{
                            bsonType: "number"
                        },
                        quantity{
                            bsonType: "number"
                        },
                        observation{
                            bsonType: "string"
                        }
                    }
                }
            }
        }
    })