import { Request, Response } from 'express';
import prisma from '../services/prisma';

export const getAllMarkdown = async (req: Request, res: Response) => {
  try {
    const markdowns = await prisma.markdown.findMany({});

    if (!markdowns) throw new Error('No markdowns found');

    res.status(200).json(markdowns);
  } catch (error) {
    if (error instanceof Error) {
      {
        res.status(400).json({ error: error.message });
      }
    }
  }
};

export const getMarkdownById = async (req: Request, res: Response) => {};

export const createMarkdown = async (req: Request, res: Response) => {};

export const updateMarkdown = async (req: Request, res: Response) => {};

export const deleteMarkdown = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedMarkdown = await prisma.markdown.delete({
      where: { id: Number(id) },
    });

    if (!deletedMarkdown) throw new Error('Markdown not found');

    res.status(200).json(deletedMarkdown);
  } catch (error) {
    if (error instanceof Error) {
      {
        res.status(400).json({ error: error.message });
      }
    }
  }
};
