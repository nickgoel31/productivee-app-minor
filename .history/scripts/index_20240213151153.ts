import { DEFAULT_CARDS } from "@/data/banners";
import { db } from "@/lib/db";
import { Dna } from "lucide-react";

export enum Status {
    ON_HOLD = 'ON_HOLD',
    TODO = 'TODO'
 }


const cards = DEFAULT_CARDS

const main = async () => {
    cards.forEach(async (c) => {
        const {title, status} = c;

        await db.task.createMany({
            data: {
                title,
                status: Status.ON_HOLD
            }
        })
    })
}

main()
