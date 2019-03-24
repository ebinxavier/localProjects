const express = require('express');
const bodyParser = require('body-parser');
const {buildSchema} = require('graphql');
const graphQlMiddleware = require('express-graphql');
const app = express();
const PORT = 3030 || process.env.PORT;

var users=[];

app.use(bodyParser.json());
app.listen(PORT,()=>{
    console.log(`Listening to port: ${PORT}`);
})
app.use('/graphql',graphQlMiddleware({
    schema:buildSchema(`

        input userInput {
            name: String!
            phone: String
        }

        type userType {
            _id: ID
            name: String!
            phone: String
        }

        type QueryType{
            users: [userType!]!
            test: [String]
        }

        type MutaionType{
            createUser(user: userInput!): userType
        }


        schema {
            query: QueryType
            mutation: MutaionType
        }

    `),
    rootValue: {

        users:()=>{
            return users;
        },

        createUser:(data)=>{
            user={
                _id: Math.floor(Math.random()*1000000),
                name:data.user.name,
                phone:data.user.phone
            }
            users.push(user);
            return user;
        }

    },
    graphiql: true
}))