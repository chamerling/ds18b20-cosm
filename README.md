# ds18b20 Cosm

Send your temperature to the [cosm](http://cosm.com) platform.
Uses the [ds18b20 library](https://github.com/chamerling/ds18b20) to get temperature from sensor connected to a (RaspberryPi)[http://www.raspberrypi.org].

## Usage

Load system modules if needed:

    ./bin/modules.sh

Check the config.js file and adapt it to your needs. Then launch the runtime:

    node app.js

You can get some sensor information from the REST API at

- http://localhost:3333
- http://localhost:3333/sensors
- http://localhost:3333/sensors/:sensorid

## Samples

Sample on [https://cosm.com/feeds/126934](https://cosm.com/feeds/126934).

![Sensor data sample](http://f.cl.ly/items/2D0k1Z0U1T0p2Y1t0l3J/cosm.png "Sensor date sample")

## License

(The MIT License)

Copyright (c) 2013 Christophe Hamerling &lt;christophe.hamerling@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
