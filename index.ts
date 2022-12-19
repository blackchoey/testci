
// import {default as axios} from 'axios';

import * as a from 'axios';

import * as config from './config';

import { BasicAuthProvider, createApiClient } from "@microsoft/teamsfx";

export interface pluginInterface{
    name: string
    scaffold(): void
}

export interface anotherInterface {
    hi(b: string): Promise<void>
}

export class pluginA implements pluginInterface {
    name: string

    constructor(n: string) {
        this.name = n;
    }

    scaffold() {

    }

    async hi(b: string): Promise<void> {
        console.log(this.name + b);
    }
}

export class pluginB implements pluginInterface {
    name: string

    constructor(n: string) {
        this.name = n;
    }

    scaffold() {

    }
}

async function main() {

    // const a = createApiClient("",new BasicAuthProvider("",""));
    a.default.get("http");

    // const response  = await axios({
    //     baseURL: "https://baidu.com"
    // });

    // axios.interceptors.request.use((config)=> {
    //     const a = config.url;
    //     console.log(a);
    //     const b = config.baseURL;
    //     console.log(b);
    //     return config;
    // });
    // const response  = await axios({
    //     baseURL: "https://baidu.com"
    // });

    // const a = new pluginA("1");
    // if(a as anotherInterface) {
    //     const converted = a as anotherInterface;
    //     await converted.hi("hi");
    // }

    // const b = new pluginB("2");
    // if (b as anotherInterface) {
        
    // }

    // let a : string = "";
    // let b = undefined;
    // a += undefined ?? "";
    // a += "1" ?? "";
    // a += null ?? "";
    // a += "2" ?? "";
    // console.log(a);

    // const a = "./infra/azure";
    // const b= "templates";
    // const c = path.join(a, b);
    // const d = path.join(__dirname, c);
    // console.log(path.join(a, b));
    // console.log(d);
    // fs.writeFileSync("./test.txt", "a\nb\nc\n");
    // console.log(path.join("./infra/azure/templates", "simpleAuthProvision.bicep"));
}

main();