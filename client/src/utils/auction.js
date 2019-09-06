// import Web3 from 'web3';
// // import ChaingearBuild from '../../../../build/contracts/Chaingear.json';
// // import generateContractCode from './generateContractCode';
// // import DatabaseV1 from '../../../../build/contracts/DatabaseV1.json';

// /*
//  *  WEB3
//  */

// let currentWeb3;

// const loadWeb3 = new Promise((resolve, reject) => {
//   // Wait for loading completion to avoid race conditions with web3 injection timing.
//   window.addEventListener('load', () => {
//     let results;
//     let { web3 } = window;

//     // Checking if Web3 has been injected by the browser (Mist/MetaMask)
//     if (typeof web3 !== 'undefined') {
//       // Use Mist/MetaMask's provider.
//       window.ethereum.enable();

//       if (web3.currentProvider) {
//         web3 = new Web3(web3.currentProvider);
//       } else {
//         const provider = new Web3.providers.HttpProvider();

//         web3 = new Web3(provider);
//       }

//       results = {
//         web3
//       };

//       console.log('Injected web3 detected.');

//       resolve(results);
//     } else {
//       // Fallback to localhost if no web3 injection. We've configured this to
//       // use the development console's port by default.
//       web3 = new Web3(new Web3.providers.HttpProvider());

//       results = {
//         web3
//       };

//       console.log('No web3 instance injected, using Local web3.');

//       resolve(results);
//     }
//   });
// });

// export const getWeb3 = new Promise(resolve => {
//   if (currentWeb3) {
//     resolve({ web3: currentWeb3 });
//   } else {
//     loadWeb3.then(({ web3 }) => {
//       currentWeb3 = web3;
//       resolve({ web3 });
//     });
//   }
// });

// export const getDefaultAccount = () =>
//   new Promise(resolve =>
//     getWeb3.then(({ web3 }) => {
//       const { defaultAccount } = web3.eth;
//       if (defaultAccount) {
//         resolve(defaultAccount);
//       } else {
//         console.log('ETH default account is null');
//         resolve(null);
//       }
//     })
//   );

// export const setDefaultAccount = address =>
//   new Promise(resolve =>
//     getWeb3
//       .then(() => {
//         currentWeb3.eth.defaultAccount = address;
//       })
//       .then(() => resolve())
//   );
