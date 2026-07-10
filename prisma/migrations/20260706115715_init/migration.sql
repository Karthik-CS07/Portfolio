-- CreateTable
CREATE TABLE "inquiries" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "project_title" TEXT NOT NULL,
    "project_description" TEXT NOT NULL,
    "budget" TEXT NOT NULL,
    "currency" TEXT NOT NULL DEFAULT '₹',
    "deadline" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "inquiries_pkey" PRIMARY KEY ("id")
);
