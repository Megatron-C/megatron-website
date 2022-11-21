import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: '4thgmd2g',
  dataset: 'production',
  apiVersion: 'v1', // use current UTC date - see "specifying API version"!
  token: 'sk6EZwwO1ODh2aRihrc0QjhcZm65oliUxAG76W2R8xe8vvaeq2lXnYnmNY3nyulwER79djZNjcYvVsY27ek9iUagKUTSJL2ACYA7gya2dQIsVrVERwe1mFcIc5rGIgCYEKu6baBfEFdf5Er7kR2yGcZ5b42Ztmci6hqGgfdUEQulsVC7rNXZ', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

export default client