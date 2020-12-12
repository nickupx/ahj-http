const http = require('http')
const server = http.createServer( (req, res) => {
  console.log(req)
  console.log(req.url)
  res.end('server response!')
})

const port = 7070
server.listen(port, (err) => {
  if (err) {
    console.log('Error occured:', error)
    return
  }
  console.log(`server is listening on ${port}`)
})

