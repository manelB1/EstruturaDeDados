
let texto;
beforeEach(()=>{
    texto = "[()[)";
});

test("verificacao", ()=>{
    expect(verificacao()).toBe(false);
})