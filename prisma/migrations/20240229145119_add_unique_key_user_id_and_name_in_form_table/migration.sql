/*
  Warnings:

  - A unique constraint covering the columns `[user_id,name]` on the table `Form` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Form_user_id_name_key" ON "Form"("user_id", "name");
