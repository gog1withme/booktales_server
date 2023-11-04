import {Sequelize, Dialect} from 'sequelize';
import { DBConfig } from '../../../db.config';

export const sequelize = new Sequelize(
    DBConfig.DB,
    DBConfig.USER,
    DBConfig.PASSWORD, {
    host: DBConfig.HOST,
    dialect: DBConfig.dialect as Dialect,
    pool: {
        max: DBConfig.pool.max,
        min: DBConfig.pool.min,
        acquire: DBConfig.pool.acquire,
        idle: DBConfig.pool.idle
      }
    }
)