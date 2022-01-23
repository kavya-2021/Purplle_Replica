

dbPassword =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vrril.mongodb.net/Purplle_Database`,

module.exports = {
    mongoURI: dbPassword
};   
  