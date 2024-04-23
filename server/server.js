const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth'); 
const mongoose = require('mongoose');

async function startServer() {
  const app = express();

  app.use(express.json()); 
  app.use(express.urlencoded({ extended: true })); 

  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mms_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ user: req.user }), 
    cacheControl: {
      defaultMaxAge: 600, // Tiempo máximo de caché en segundos
    },
    persistedQueries: false, // Deshabilitar las consultas persistentes
  });

  app.use(authMiddleware);

  await server.start();

  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 3001;

  app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}${server.graphqlPath}`);
  });
}

startServer().catch(err => {
  console.error('Error starting server:', err);
});
