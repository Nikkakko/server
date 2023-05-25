"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const markdownController_1 = require("../controller/markdownController");
const router = (0, express_1.Router)();
router.get('/markdown', markdownController_1.getAllMarkdown);
router.post('/markdown', markdownController_1.createMarkdown);
router.delete('/markdown/:id', markdownController_1.deleteMarkdown);
router.put('/markdown/:id', markdownController_1.updateMarkdown);
exports.default = router;
//# sourceMappingURL=markdown.js.map