const NetworkSpeed = require('network-speed');  // ES5
const testNetworkSpeed = new NetworkSpeed();



async function getNetworkDownloadSpeed() {
  const baseUrl = 'https://eu.httpbin.org/stream-bytes/500000';
  const fileSizeInBytes = 500000;
  const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
  console.log(speed);
  console.log("hello");
  return speed;
}

window.getNetworkDownloadSpeed = getNetworkDownloadSpeed;
