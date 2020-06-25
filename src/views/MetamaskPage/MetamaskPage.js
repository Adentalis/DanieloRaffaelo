import React, { Component } from "react";
import Web3JS from "./Web3JS";
import image from "../../assets/img/fox.jpg";

export default class MetamaskPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      web3: null,
      network: null,
      accounts: null,
      balance: null,
    };
  }
  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await Web3JS();

      const network = await web3.eth.net.getNetworkType();
      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      const balance = await web3.eth.getBalance(accounts[0]);

      this.setState({ web3, network, accounts, balance });
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "auto",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          height: "576px",
          color: "#aa4422",
          fontSize: "27px",
        }}
      >
        <div>Ich bin ein Fuchs!</div>
        <div>Your Account: {this.state.accounts}</div>
        <div>Your Balance: {this.state.balance} ETH</div>
        <div>Current Network: {this.state.network}</div>
      </div>
    );
  }
}
