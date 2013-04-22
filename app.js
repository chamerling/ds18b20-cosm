var sensor = require('ds18b20')
  , express = require('express')
  , request = require('request')
  , app = express();

var config = require('./config');
var temp = {};

console.log('Starting the app with config', config)

var sense = function(callback) {
  sensor.sensors(function(err, ids) {
    if (err) {
      callback(err);
    } else {
      for(var id in ids) {
        sensor.temperature(ids[id], function(err, value) {
          if (!err) {
            console.log('Current temperature', value)
            temp.value = value;
            temp.date = new Date();
            var data =
            {
              'version' : '1.0.0',
              'datastreams' :
                [
                  {
                    'id' : config.config.stream, 'current_value' : value
                  }
                ]
            }

            request({
                url: 'http://api.cosm.com/v2/feeds/' + config.config.feed,
                method: 'put',
                json: true,
                body : data,
                headers : {
                  'X-ApiKey' : config.config.key
                }
              },
              function(error, response, body) {
                console.log('Cosm Push Result', response.statusCode);
                if (error) {
                  callback(error);
                }
              });
          } else {
            callback(err);
          }
        });
      }
    }
  });
}

app.get('/', function(req, res) {
  res.send(200, temp);
});

app.get('/sensors', function(req, res) {
  sensor.sensors(function(err, ids) {
    if (err) {
      res.send(500, err);
    } else {
      res.send(ids);
    }
  });
});

app.get('/sensors/:id', function(req, res) {
  sensor.temperature(req.params.id, function(err, value) {
    if (err) {
      res.send(500, err);
    } else {
      res.send(value);
    }
  })
});

app.listen(config.config.port, function(err) {
  if (err) {
    console.log(err);
    throw err;
  } else {
    console.log('App started on port', config.config.port);
    setInterval(function() {
      sense(function(err) {
        if (err) {
          console.log(err)
        } else {

        }
      })
    }, config.config.period * 1000);
  }
});