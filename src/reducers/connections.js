import { v4 as uuidv4 } from 'uuid';

const initialState = {
    activeConnection: 1,
    allConnections : [
        {   
            name: 'Connection1',
            id:1,
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
        case "ADD_CONNECTION":
            return {
                ...state,
                allConnections:[
                    ...state.allConnections,
                    {
                        id: uuidv4(),
                        name: action.payload.name,
                        details: action.payload.details,
                        slug: "databases",
                        array:[
                            {
                                name: 'database31',
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
                    }


                ]
            }
        case "CHANGE_ACTIVE_CONNECTION_2":
            return {
                ...state,
                activeConnection: action.payload.connectionId
            }

        case "SAVE_QUERY":
            return {
                ...state,
                allConnections: state.allConnections.map((item)=>{
                    if(item.id==state.activeConnection){
                        return {
                            ...item,
                            savedQueries: [...item.savedQueries, action.payload.tabData]
                        }
                    }else {
                        return item
                    }
                })
            }

        default:
        return state;
    }
  };

export default connectionsReducer