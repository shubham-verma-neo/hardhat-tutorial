const { expect } = require('chai');
const { ethers } = require('hardhat');

describe("NeoToken", () => {
    before(async () => {
        [owner, user1, user2] = await ethers.getSigners();
        console.log('owner: ', owner.address);
        const Token = await ethers.getContractFactory("NeoToken");
        instance = await Token.deploy("NeoToken", "NT");
    });

    it("owner should receive total supply", async () => {
        const ownerBalance = await instance.balanceOf(owner.address);
        expect(await instance.totalSupply()).to.equal(ownerBalance);
    });

    it("1000 token should transfer to user1", async () => {
        await instance.transfer(user1.address, 1000);
        const user1Balance = await instance.balanceOf(user1.address);
        expect(user1Balance).to.equal(1000);
        const ownerBalance = await instance.balanceOf(owner.address);
        expect(ownerBalance).to.equal(999000);
        await instance.connect(user1).transfer(user2.address, 500);
        const user2Balance = await instance.balanceOf(user2.address);
        expect(user2Balance).to.equal(500);
    });
});