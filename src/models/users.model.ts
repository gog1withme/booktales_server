//import { Service } from "typedi";
import { sequelize } from "../core/db/init";

import * as Sequelize from 'sequelize';

export class Users extends Sequelize.Model { }

Users.init({
    name: {
        type: Sequelize.STRING
    },
    username: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    // socialAccounts: {
    //     type: Sequelize.ARRAY,
    //     references: 'SocialAccounts'
    // },
    permissions: {
        type: Sequelize.STRING
    }
}, { sequelize });

//@Service()