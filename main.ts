import { TeamsFx } from "@microsoft/teamsfx";
import config from "./config";
import axios from "axios";
const nock = require("nock");

async function main() {
    nock('https://graph.microsoft.com/v1.0').post("/applications").reply(401);
    nock('https://graph.microsoft.com/v1.0').post("/applications").reply(400);
    
    await axios.post('applications', { displayName: 'abc' }, {
        baseURL: "https://graph.microsoft.com/v1.0"
    }).catch((err) => { console.log(err.message) });

    await axios.post('applications', { displayName: 'abc' }, {
        baseURL: "https://graph.microsoft.com/v1.0"
    }).catch((err) => { console.log(err.message) });
}

main().catch((err) => { console.log(err) });