import algosdk from "algosdk";
import { ANS } from "@algonameservice/sdk/src";

const client = new algosdk.Algodv2({ 'X-API-KEY': process.env.REACT_APP_PURESTAKE_API_KEY },
            process.env.REACT_APP_PURESTAKE_MAINNET_CLIENT_URL,
            '');

const indexer = new algosdk.Indexer({ 'X-API-KEY': process.env.REACT_APP_PURESTAKE_API_KEY },
            process.env.REACT_APP_PURESTAKE_MAINNET_INDEXER_URL,
            '');

const sdk = new ANS(client, indexer);

export async function getInformation(domain) {
    try{
        return await sdk.name(domain).getAllInformation();
    } catch (err) {
        return false;        
    }
}