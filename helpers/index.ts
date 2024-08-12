import {IOrder, IProduct} from "@/types";

// const months: string[] = [
//     "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
//     "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
// ];
enum monthsType {
    "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
    "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
}

export const transformDateWithTime = (dateString: string): { timeString: string, dateString: string } =>{
    const date = new Date(dateString);

    // Extract hours and minutes for the time part
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours} : ${minutes}`;

    const day = date.getDate().toString().padStart(2, '0');
    const month = monthsType[date.getMonth()];
    const year = date.getFullYear();
    const dateStringTransformed = `${day} / ${month} / ${year}`;

    return {
        timeString,
        dateString: dateStringTransformed
    };
}

export const transformDate = (dateString: string): {  dateString: string } =>{

    const date = new Date(dateString);

    const day = date.getDate().toString().padStart(2, '0');
    const month = monthsType[date.getMonth()];
    const year = date.getFullYear();
    const dateStringTransformed = `${day} / ${month} / ${year}`;

    return {
        dateString: dateStringTransformed
    };
}

export const transformDateNumber = (dateString: string): { dateString: string } => {
    const date = new Date(dateString);

    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of the year

    const dateStringTransformed = `${month} / ${year}`;

    return {
        dateString: dateStringTransformed
    };
}

export const calculateTotalAmounts = (products: IProduct[]): { totalUSD: number, totalUAH: number } => {
    let totalUSD = 0;
    let totalUAH = 0;

    products.forEach(product => {
        const priceUSD = product.price.find(p => p.symbol === 'USD')?.value ?? 0;
        const priceUAH = product.price.find(p => p.symbol === 'UAH')?.value ?? 0;
        totalUSD += priceUSD;
        totalUAH += priceUAH;
    });

    return { totalUSD, totalUAH };
}

export const getOrderTitle = (orders: IOrder[], id: number): string => {
    return orders.find(order=>order.id === id)?.title ?? ""
}

export const getTypeProduct = (products: IProduct[]): Set<string> =>{
    const set = new Set<string>();
    products.forEach(product=>set.add(product.type))
    return set
}

export const getSpecificationProduct = (products: IProduct[]): Set<string> =>{
    const set = new Set<string>();
    products.forEach(product=>set.add(product.specification))
    return set
}