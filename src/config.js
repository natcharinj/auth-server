const config = () => ({
  port: process.env.PORT || 3001,
  userServiceEndPoint: process.env.USERSERVICE_ENDPOINT,
})
export default config();
