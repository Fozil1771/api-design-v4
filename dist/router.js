"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var update_1 = require("./handlers/update");
var product_1 = require("./handlers/product");
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var middleware_1 = require("./modules/middleware");
var router = (0, express_1.Router)();
/**
 * Product
 */
var productBody = [(0, express_validator_1.body)("name").isString()];
router.get('/product', product_1.getProducts);
router.get('/product/:id', product_1.getOneProduct);
router.put('/product/:id', productBody, middleware_1.handleInputErrors, product_1.updateProduct);
router.post('/product', productBody, middleware_1.handleInputErrors, product_1.createProduct);
router.delete('/product/:id', product_1.deleteProduct);
/**
 * Update
 */
router.get('/update', update_1.getUpdates);
router.get('/update/:id', update_1.getOneUpdate);
router.put('/update/:id', (0, express_validator_1.body)("title").optional(), (0, express_validator_1.body)("body").optional(), (0, express_validator_1.body)("status").isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(), (0, express_validator_1.body)("version").optional(), update_1.updateUpdate);
router.post('/update', (0, express_validator_1.body)("title").exists().isString(), (0, express_validator_1.body)("body").exists().isString(), (0, express_validator_1.body)("prdouctId").exists().isString(), update_1.createUpdate);
router.delete('/update/:id', update_1.deleteUpdate);
/**
 * Update Point
 */
router.get('/updatepoint', function () { });
router.get('/updatepoint/:id', function () { });
router.put('/updatepoint/:id', (0, express_validator_1.body)("name").optional().isString(), (0, express_validator_1.body)("description").optional().isString(), function () { });
router.post('/updatepoint', (0, express_validator_1.body)("name").exists().isString(), (0, express_validator_1.body)("description").exists().isString(), (0, express_validator_1.body)("updateId").exists().isString(), function () { });
router.delete('/updatepoint/:id', function () { });
exports.default = router;
//# sourceMappingURL=router.js.map