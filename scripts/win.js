// add the game address here and update the contract name if necessary
const gameAddr = "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0";
const contractName = "Game5";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    //get signer
    const signer= await hre.ethers.getSigner(1);

    // // send the transaction
    // const x = await game.connect(signer).setX(30);
    // const y = await game.connect(signer).setY(20);
    //give me allowance call
    await game.connect(signer).giveMeAllowance(10001)
    await game.connect(signer).mint(10001)

    // do whatever you need to do to win the game here:
    const tx = await game.connect(signer).win();

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
