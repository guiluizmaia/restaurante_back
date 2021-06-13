interface IOrder {
    idClient: string;
    idUser: string;
    description: string;
    itens: Array<string>;
    price: string;
    adress?: string;
}

export default IOrder;
