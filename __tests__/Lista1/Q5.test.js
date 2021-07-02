import conversor from "../src/Q5";


let c;
beforeEach(() =>{
    c = new conversor();

});

test("convertendo dec-bin",()=>{
    expect(c.converte(10)).toBe("1010")
});