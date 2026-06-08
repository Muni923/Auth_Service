const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
// const UserService = require('./services/user-service');
// const UserRepository=require('././repository/user-repository')
// const {User} = require('./models/index');
// const bcrypt = require('bcrypt');

const app = express();

const prepareAndStartServer = () => {


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
    console.log(`Server Started on Port: ${PORT}`);

        // const repo = new UserRepository();
        // const response = await repo.getById(2);
        // console.log(response); 


        // const incomingpassword = '123456';
        // const user = await User.findByPk(3);
        // const response = bcrypt.compareSync(incomingpassword, user.password);
        // console.log(response);

        // const service = new UserService();
        // const newToken = service.createToken({email: 'abcd@gmail.com', id: 1});
        // console.log("new token is", newToken);
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY2RAZ21haWwuY29tIiwiaWQiOjEsImlhdCI6MTc4MDgzMzE4NywiZXhwIjoxNzgwOTE5NTg3fQ.UhkUqWTM3a0u0wnNhrkkUiNB4ZkeqNHRwtq03PVvjho';
        // const response = service.verifyToken(token);
        // console.log(response);

});
}   
prepareAndStartServer();