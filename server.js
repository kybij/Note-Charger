const express =require("express")
const app = express() 
const port = process.env.PORT || 3002
  app.use(express.static("public"))

  app.use(express.urlencoded({ extended:true}))
  app.use(express.json())


  app.use(require("./routes/htmlroute"))
  app.use(require("./routes/apiroutes"))
  app.listen(port, function () {
      console.log("listening on port", port)
  })