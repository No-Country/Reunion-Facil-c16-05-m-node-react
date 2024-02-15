import app from './app.js'
import { sequalize } from './db/database.js';
const port = process.env.PORT || 3000;


const server = async (port) => {
    try {

        sequalize.sync({ force: false })
        app.listen(port)
        console.log(port)
        console.log(`Server is listening on port ${port} `)

    } catch (error) {

    }

}


server(port)