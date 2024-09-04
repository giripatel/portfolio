import { PrismaClient } from "@prisma/client";

const prisma =  new PrismaClient();

export const dynamic = "force-dynamic";

 export const GET = async  () => {

    let resumeDetails = await prisma.resumeDetails.findFirst({
        where: {
            resumeNumber: 1
        }
    })

    return Response.json({url: resumeDetails?.url});
}