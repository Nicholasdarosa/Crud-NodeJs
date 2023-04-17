
export default async function connectionTest(req, res) {
  try {
    res.status(200).send({ message: "Successful connection" })
  } catch (error) {
    
    res.status(res.statusCode || 500).send("Unexpected error")
  }
}