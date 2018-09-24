const db = require('./models')

db.sync({force: true})
    .then (() => {
        console.log('DB Synced. YEAH!')
    })
    .catch (err => {
        console.log('messed up:', err)
    })
    .finally (()=> {
        await db.close()
    })