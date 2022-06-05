# Find out your IP with my app
This application will tell you your IP

## Installation

```
npm i your-ip
```

## Usage
Since the getIpInfo function is asynchronous, we get a promise when we call it. Therefore, we need to wrap the function in an asynchronous function and wait for the response using the await operator

```
import getIpInfo from 'your-ip'

(async function () {
  const result = await getIpInfo();
  console.log(result);
}());
```

And then, to see your IP, open the console