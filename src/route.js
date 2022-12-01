import Router from "express";
import controller from "./controller.js";
const ratesRoute = new Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     CurrencyCodes:
 *       type: object
 *       required:
 *         - code
 *       properties:
 *        code:
 *         type: string
 *         description: currency codes
 *       example:
 *        code: usd
 *
 */

/**
 * @swagger
 * tags:
 *   name: Rates
 *   description: The rates managing API
 */

/**
 * @swagger
 * /rates:
 *   get:
 *     summary: Returns the list of rates
 *     tags: [Rates]
 *     responses:
 *       200:
 *         description: The list of the rates
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       500:
 *         description: Some server error
 */

ratesRoute.get('/', controller.get);

/**
 * @swagger
 * /rates:
 *   post:
 *     summary: Get the rate of selected currencies (usd,eur,gbp,kzt,rub etc).
 *     tags: [Rates]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CurrencyCodes'
 *     responses:
 *       200:
 *         description: The list of selected rates
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       500:
 *         description: Some server error
 */

ratesRoute.post('/', controller.post);



export default ratesRoute;
