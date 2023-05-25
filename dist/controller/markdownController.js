"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMarkdown = exports.updateMarkdown = exports.createMarkdown = exports.getMarkdownById = exports.getAllMarkdown = void 0;
const prisma_1 = require("../services/prisma");
const getAllMarkdown = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const markdowns = yield prisma_1.default.markdown.findMany({});
        if (!markdowns)
            throw new Error('No markdowns found');
        res.status(200).json(markdowns);
    }
    catch (error) {
        if (error instanceof Error) {
            {
                res.status(400).json({ error: error.message });
            }
        }
    }
});
exports.getAllMarkdown = getAllMarkdown;
const getMarkdownById = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.getMarkdownById = getMarkdownById;
const createMarkdown = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content } = req.body;
        //add .md extension to title if not present in title
        const titleWithExtension = title.includes('.md') ? title : `${title}.md`;
        const newMarkdown = yield prisma_1.default.markdown.create({
            data: {
                title: titleWithExtension,
                content,
            },
        });
        if (!newMarkdown)
            throw new Error('Markdown not created');
        res.status(201).json(newMarkdown);
    }
    catch (error) {
        if (error instanceof Error) {
            {
                res.status(400).json({ error: error.message });
            }
        }
    }
});
exports.createMarkdown = createMarkdown;
const updateMarkdown = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const updatedMarkdown = yield prisma_1.default.markdown.update({
            where: { id: id },
            data: {
                title,
                content,
            },
        });
        if (!updatedMarkdown)
            throw new Error('Markdown not updated');
        res.status(200).json('Markdown updated successfully');
    }
    catch (error) {
        if (error instanceof Error) {
            {
                res.status(400).json({ error: error.message });
            }
        }
    }
});
exports.updateMarkdown = updateMarkdown;
const deleteMarkdown = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedMarkdown = yield prisma_1.default.markdown.delete({
            where: { id: id },
        });
        if (!deletedMarkdown)
            throw new Error('Markdown not found');
        res.status(200).json('Markdown deleted successfully');
    }
    catch (error) {
        if (error instanceof Error) {
            {
                res.status(400).json({ error: error.message });
            }
        }
    }
});
exports.deleteMarkdown = deleteMarkdown;
//# sourceMappingURL=markdownController.js.map