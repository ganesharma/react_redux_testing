import searchProduct from "../apiCalls/searchProduct"

describe('APi Tests', () => {
    it("Amazon Search Product API", async ()=> {
        const data = await searchProduct('Television');
       
        expect(data.length).toBeGreaterThan(0);
    })
});

