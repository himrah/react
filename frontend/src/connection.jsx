import ApolloClient, { createNetworkInterface } from 'apollo-client'
//import { ApolloProvider } from 'react-apollo'
//import 'tachyons'
import { InMemoryCache } from 'apollo-cache-inmemory';

const networkinterface = createNetworkInterface({
    uri:'http://localhost:8000/graphql/',

})

networkinterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {}
      }

      const token = localStorage.getItem('token')
        ? localStorage.getItem('token')
        : null
      req.options.headers['authorization'] = `JWT ${token}`
      next()
    },
  },
])



const client = new ApolloClient({
    //link:networkinterface
    networkInterface:networkinterface,
    cache : new InMemoryCache(),
})


export default client