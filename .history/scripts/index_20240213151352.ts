
const {db} = require("@/lib/db")


const DEFAULT_CARDS = [
    // BACKLOG
    { title: "Look into render bug in dashboard", id: "1", status: "ON_HOLD" },
    { title: "SOX compliance checklist", id: "2", status: "ON_HOLD" },
    { title: "[SPIKE] Migrate to Azure", id: "3", status: "ON_HOLD" },
    { title: "Document Notifications service", id: "4", status: "ON_HOLD" },
    // TODO
    
  ];

enum Status {
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
