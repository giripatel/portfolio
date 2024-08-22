-- CreateTable
CREATE TABLE "ResumeDetails" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "resumeNumber" INTEGER NOT NULL,

    CONSTRAINT "ResumeDetails_pkey" PRIMARY KEY ("id")
);
