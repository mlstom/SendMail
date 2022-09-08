import database from "../../database"

export default async function allUsers(req, res) {
    const db = await database()
    const [users] = await db.execute("SELECT * FROM User")
    res.json(users)
}
  