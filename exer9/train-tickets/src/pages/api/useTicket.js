import deleteTicket from "../../../server/mongodb/actions/deleteTicket.js";

export default async function handler(req,res) {
    if (req.method === "DELETE") {
        try {
            const result = await deleteTicket(req.query);
            if (result === null) {
                res.status(400).send("User either provided no ID or a non-existing ID.")

            }
            res.status(200).send("Success");
        }catch (e) {
            res.status(500).send("Failed");
        }


    }else {
        res.status(400).send("Please only is DELETE method at this API endpoint.");
    }
}