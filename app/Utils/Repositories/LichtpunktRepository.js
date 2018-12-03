import DbContext from '../DbContext';
import Lichtpunkt from '../../Models/Lichtpunkt';

export default class LichtpunktRepository {
    /**
     * 
     * @param {DbContext} dbContext 
     */
    constructor(dbContext) {
        this.dbContext = dbContext
    }

    /**
     * 
     * @param {string} id
     * @returns {Lichtpunkt} 
     */
    getById(id) {
        // Implement
    }

    /**
     * @returns {Lichtpunkt[]}
     */
    list() {

    }

    /**
     * 
     * @param {funcction(Lichtpunkt): void} predicate 
     * @returns {Lichtpunkt[]} predicate 
     */
    list(predicate) {

    }

    /**
     * 
     * @param {Lichtpunkt} lichtpunkt 
     */
    Add(lichtpunkt) {

    }

    /**
     * 
     * @param {Lichtpunkt} Lichtpunkt 
     */
    Delete(Lichtpunkt) {

    }

    /**
     * 
     * @param {Lichtpunkt} Lichtpunkt 
     */
    Edit (Lichtpunkt) {

    }
}