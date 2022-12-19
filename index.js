"use strict";
// import {default as axios} from 'axios';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluginB = exports.pluginA = void 0;
const a = __importStar(require("axios"));
class pluginA {
    constructor(n) {
        this.name = n;
    }
    scaffold() {
    }
    async hi(b) {
        console.log(this.name + b);
    }
}
exports.pluginA = pluginA;
class pluginB {
    constructor(n) {
        this.name = n;
    }
    scaffold() {
    }
}
exports.pluginB = pluginB;
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
//# sourceMappingURL=index.js.map