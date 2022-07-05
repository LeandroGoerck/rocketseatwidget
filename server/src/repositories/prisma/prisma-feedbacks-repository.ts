import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../fedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create(data: FeedbackCreateData) {
        const { type, comment, screenshot } = data;
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
            }
        })
    }
}