const initialState = {
    activeConnection: 1,
    allConnections : [
        {   
            name: 'Connection1',
            id:1,
            display:true,
            details: {
                hostName:"localhost",
                port: 3000,
                userName: "saswati",
                password: "password",
            },
            slug: "databases",
            array:[
                {
                    name: 'database11',
                    id:11,
                    slug: "tables",
                    array:[
                        {
                            name: "categories",
                            slug: "columns",
                            array:["categoryID","categoryName","description","picture"]
                        },
                        {
                            name: "customers",
                            slug: "columns",
                            array:["customerID","companyName","contactName","contactTitle","address","city","region","postalCode","country","phone","fax"]
                        },
                    ]
                },
                {
                    name: 'database12',
                    id:12,
                    slug:"tables",
                    array:[
                        {
                            name: "employee_territories",
                            slug: "columns",
                            array:["employeeID","territoryID"]
                        },
                        {
                            name: "employees",
                            slug: "columns",
                            array:["employeeID","lastName","firstName","title","titleOfCourtesy","birthDate","hireDate","address","city","region","postalCode","country","homePhone","extension","photo","notes","reportsTo","photoPath"]
                        },
                    ]
                }
            ],
            savedQueries:[]
        },
        {   
            name: 'Connection2',
            id:2,
            display:false,
            details: {
                hostName:"localhost",
                port: 3000,
                userName: "saswati",
                password: "password",
            },
            slug: "databases",
            array:[
                {
                    name: 'database21',
                    id:21,
                    slug:"tables",
                    array:[
                        {
                            name: "order_details",
                            slug: "columns",
                            array:["orderID","productID","unitPrice","quantity","discount"]
                        },
                        {
                            name: "orders",
                            slug: "columns",
                            array:["orderID","customerID","employeeID","orderDate","requiredDate","shippedDate","shipVia","freight","shipName","shipAddress","shipCity","shipRegion","shipPostalCode","shipCountry"]
                        },
                    ]
                },
                {
                    name: 'database22',
                    id:22,
                    slug:"tables",
                    array:[
                        {
                            name: "products",
                            slug: "columns",
                            array:["productID","productName","supplierID","categoryID","quantityPerUnit","unitPrice","unitsInStock","unitsOnOrder","reorderLevel","discontinued"]
                        },
                        {
                            name: "regions",
                            slug: "columns",
                            array:["regionID","regionDescription"]
                        },
                    ]
                }
            ],
            savedQueries:[]
        }
]


}

const connectionsReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
        return state;
    }
  };

export default connectionsReducer