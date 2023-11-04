//import { Service } from "typedi";
import { sequelize } from "../core/db/init";

import * as Sequelize from 'sequelize';

export class Books extends Sequelize.Model { }

Books.init({
    title: {
        type: Sequelize.STRING
    },
    subTitle: {
        type: Sequelize.STRING,
    },
    discription: {
        type: Sequelize.STRING
    },
    imgURL: {
        type: Sequelize.STRING
    },
    bgColor: {
        type: Sequelize.STRING
    },
    audioURL: {
        type: Sequelize.STRING
    },
    mediaMetadata: {
        type: Sequelize.JSON
    }
}, { sequelize });

// @Service()
// export class BookModel {
//     model = Books
// }