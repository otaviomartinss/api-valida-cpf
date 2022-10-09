-- CreateTable
CREATE TABLE "validations" (
    "id" SERIAL NOT NULL,
    "valid" INTEGER NOT NULL,
    "invalid" INTEGER NOT NULL,

    CONSTRAINT "validations_pkey" PRIMARY KEY ("id")
);
