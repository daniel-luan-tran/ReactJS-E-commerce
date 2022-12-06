export const IsExist = (items) => {
    const check = Object.keys(items).length === 0 && items.constructor === Object;
    return (Object.keys(items).length === 0 && items.constructor === Object) ? false : true
}