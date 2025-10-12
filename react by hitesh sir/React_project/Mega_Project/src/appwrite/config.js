import conf from "../conf/conf";
import { Client, Account, ID, Databases, Storage, Query} from 'appwrite';

export class Service{
    client = new Client()
    Databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client) 
    }
}

const service = new Service()

export default service