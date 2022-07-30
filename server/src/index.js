import "./database.js"
import app from "./app.js"

app.listen(app.get('port'), function () {
    console.log('Server listening on port ' + app.get('port'))
  }
)