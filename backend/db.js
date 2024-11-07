import Sequelize from "sequelize";

const pool = new Sequelize({
    database: 'name',
    host: 'localhost',
    dialect: 'postgres'
});

const sequelizeInstance = pool.sequelize;

//test the database connection
sequelizeInstance
.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});
module.exports = pool;
//Define a module 
const Universities = sequelize.define('Students', {
    name: {
        type: Sequelize.STRING,
    },
});

module.exports = Universities
const Departments = sequelize.define('Departments', {
    name: {
        type: Sequelize.STRING,
    },
});

module.exports = Departments
const Specializations = sequelize.define('Specializations', {
    name: {
        type: Sequelize.STRING,
    },
});


sequelize.sync();
sequelize.then(() => {
    console.log('Database synced');
})
.catch(err => {
    console.log(err);
})


con.connect().then(() =>console.log('connected')).catch((err) => console.log(err));
module.exports = Specializations
app.post('/postData', (req, res) => {
    const{name} = req.body;

    const insert_query = `INSERT INTO students (name,id) VALUES ($1, $2)`

    con.query(insert_query, [name, id],(err,result)=>{
        if(err)
        {
            res.send(err)   
        }else{
            console.log(result)
            res.send("POSTED DATA")
        }
    })
})