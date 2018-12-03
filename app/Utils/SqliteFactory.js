import DbContext from './DbContext';

const DB_NAME = 'test.db';
const TABLE_NAME = 'Lichtpunkt';

export default class SqliteFactory {
    static constructor() {
        this.dbContext = null;
    }
    static createNewDbContext() {
        if (!this.dbContext) {
            this.dbContext = new DbContext(DB_NAME, TABLE_NAME);
        }
        return this.dbContext;
    }
}