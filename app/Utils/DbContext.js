import * as Sqlite from 'nativescript-sqlite';

export default class DbContext {
    constructor(dbName, tableName) {
        this.dbName = dbName;
        this.tableName = tableName;
    }

    copyDatabase() {
        Sqlite.copyDatabase(this.dbName);
    }
}