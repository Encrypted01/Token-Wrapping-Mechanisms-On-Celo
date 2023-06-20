// Wrap tokens
const tokenAddress = '0xabcdef123456789'; // Address of the token to be wrapped
const amountToWrap = '1000000000000000000'; // Amount of tokens to wrap

await wrapTokens(tokenAddress, amountToWrap);
console.log(`Tokens wrapped successfully!`);

// Unwrap tokens
const amountToUnwrap = '500000000000000000'; // Amount of wrapped tokens to unwrap

await unwrapTokens(tokenAddress, amountToUnwrap);
console.log(`Tokens unwrapped successfully!`);
