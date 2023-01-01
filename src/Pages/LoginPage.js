import { useState } from "react";
import Hero from "../components/Hero";
import useStore from "../Store/store";
import Layout from "./Layout";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginPage() {
    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const state = useStore();
    const { loginWithRedirect } = useAuth0();
    
    const connectWallet = async () => {
        try {
            const { ethereum } = window;
            if (!ethereum) {
                alert("Please Install Metamask");
            }
            else {
                const getAccount = await ethereum.request({
                    method: 'eth_requestAccounts'
                });
                state.setCurrentAccount(getAccount[0]);
                setIsWalletConnected(true);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        !isWalletConnected ?
            (<Hero connectWallet={connectWallet} />)
            :
            (<Layout />)

    )
}

export default LoginPage