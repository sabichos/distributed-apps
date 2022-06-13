export interface ICustomerDetails {
    identity: ICustomerIdentity,
    transactions: Array<ITransaction>,
    connections: Array<ICustomerConnection>,
    offers: Array<IOffer>
}

export interface ICustomerIdentity {
    firstName: string,
    lastName: string,
    phoneNumber?: string
}

export interface ICustomerConnection {
    type: string,
    name: string
}

export interface IOffer {
    date: string,
    name: string,
    description: string,
    optin?: boolean
}

export interface ITransaction {
    date: string,
    amount: number,
    description: string
}

