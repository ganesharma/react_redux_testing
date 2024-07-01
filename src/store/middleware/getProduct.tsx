


const getProductMiddleware = (state: any) => (next: any) => (action: any) => {

console.log(state);
console.log(next);
console.log(action);
}

export default getProductMiddleware;