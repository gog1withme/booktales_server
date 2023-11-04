import { schemas } from "../models";
import { Model } from 'sequelize';

export class BaseController {
    schemaName?: string;
    model?: any;

    constructor(schemaName: string){
       this.model = (schemas as any)[schemaName];
    }
}