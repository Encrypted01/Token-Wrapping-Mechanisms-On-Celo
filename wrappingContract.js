// Wrap tokens by depositing them into the wrapping contract
async function wrapTokens(tokenAddress, amount) {
  // Instantiate the wrapping contract
  const wrappingContract = new web3.eth.Contract(WrappingContractABI, contractAddress);

  // Approve the contract to transfer the tokens
  const tokenContract = new web3.eth.Contract(TokenABI, tokenAddress);
  await tokenContract.methods.approve(contractAddress, amount).send({ from: userAddress });

  // Deposit the tokens into the wrapping contract
  await wrappingContract.methods.deposit(tokenAddress, amount).send({ from: userAddress });
}

// Unwrap tokens by withdrawing them from the wrapping contract
async function unwrapTokens(tokenAddress, amount) {
  // Instantiate the wrapping contract
  const wrappingContract = new web3.eth.Contract(WrappingContractABI, contractAddress);

  // Withdraw the tokens from the wrapping contract
  await wrappingContract.methods.withdraw(tokenAddress, amount).send({ from: userAddress });
}
