const MyToken = artifacts.require("MyToken");

contract("MyToken", accounts => {
    it("deve atribuir o total de tokens ao criador", async () => {
        let instance = await MyToken.deployed();
        let balance = await instance.balanceOf(accounts[0]);
        assert.equal(balance.valueOf(), 1000000 * 10 ** 18, "Balance errado para o criador");
    });

    it("deve transferir tokens entre contas", async () => {
        let instance = await MyToken.deployed();
        await instance.transfer(accounts[1], 1000, { from: accounts[0] });
        let balance = await instance.balanceOf(accounts[1]);
        assert.equal(balance.valueOf(), 1000, "Transferência incorreta");
    });
});
