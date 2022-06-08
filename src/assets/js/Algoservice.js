import algosdk from "algosdk";
import { ANS } from "@algonameservice/sdk/src";

const client = new algosdk.Algodv2('',
            'https://mainnet-api.algonode.cloud',
            '');

const indexer = new algosdk.Indexer('',
            'https://mainnet-idx.algonode.cloud',
            '');

const sdk = new ANS(client, indexer);

export async function getInformation(domain) {
    try{
        return await sdk.name(domain).getAllInformation();
    } catch (err) {
        return false;        
    }
}