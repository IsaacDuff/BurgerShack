import { spellsService } from "../services/SpellsService.js";
import BaseController from "../utils/BaseController.js";


export class SpellsController extends BaseController {

    constructor() {
        super('api/spells')
        this.router
            .get('', this.getSpells)
    }


    async getSpells(req, res, next) {
        try {

            const spells = await spellsService.getSpells()
        } catch (error) {
            next(error)
        }
    }
} 