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

export const createMarkdown = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;

    //add .md extension to title if not present in title
    const titleWithExtension = title.includes('.md') ? title : `${title}.md`;

    const newMarkdown = await prisma.markdown.create({
      data: {
        title: titleWithExtension,
        content,
      },
    });

    if (!newMarkdown) throw new Error('Markdown not created');

    res.status(201).json(newMarkdown);
  } catch (error) {
    if (error instanceof Error) {
      {
        res.status(400).json({ error: error.message });
      }
    }
  }
};

export const updateMarkdown = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updatedMarkdown = await prisma.markdown.update({
      where: { id: id },
      data: {
        title,
        content,
      },
    });

    if (!updatedMarkdown) throw new Error('Markdown not updated');

    res.status(200).json('Markdown updated successfully');
  } catch (error) {
    if (error instanceof Error) {
      {
        res.status(400).json({ error: error.message });
      }
    }
  }
};

export const deleteMarkdown = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedMarkdown = await prisma.markdown.delete({
      where: { id: id },
    });

    if (!deletedMarkdown) throw new Error('Markdown not found');

    res.status(200).json('Markdown deleted successfully');
  } catch (error) {
    if (error instanceof Error) {
      {
        res.status(400).json({ error: error.message });
      }
    }
  }
};
