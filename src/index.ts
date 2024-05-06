// import express from 'express';
const express = require('express');

const app = express();
const port = 3000;

type  User={
    name:string,
    email:string,
    password:string,
}

const user:User= {
    name:"Disha",
    email:"disha@gmail.com",
    password:"123"
}

console.log(user.email);


app.get('/', (req: any, res: any) => {
    res.send('Hello World!');
});

app.get('/hi', (req: any, res: any) => {
    res.send('Disha teri wajah se trip cancel hua hai!');
});


app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

// const { PrismaClient } = require('@prisma/client')

// const prisma = new PrismaClient()

// async function main() {
//     await prisma.user.create({
//         data: {
//           name: 'Rich',
//           email: 'hello@prisma.com',
//           posts: {
//             create: {
//               title: 'My first post',
//               body: 'Lots of really interesting stuff',
//               slug: 'my-first-post',
//             },
//           },
//         },
//       })
    
//       const allUsers = await prisma.user.findMany({
//         include: {
//           posts: true,
//         },
//       })
//       console.dir(allUsers, { depth: null })
// }

// main()
//   .catch(async (e) => {
//     console.error(e)
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })