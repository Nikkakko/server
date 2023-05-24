/*
  Warnings:

  - You are about to drop the column `author` on the `Markdown` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Markdown" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL
);
INSERT INTO "new_Markdown" ("content", "createdAt", "id", "title") SELECT "content", "createdAt", "id", "title" FROM "Markdown";
DROP TABLE "Markdown";
ALTER TABLE "new_Markdown" RENAME TO "Markdown";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
