import fetch from 'node-fetch';

export default async function getIpInfo() {
  return new Promise((resolve) => {
    fetch('https://api.ipify.org/?format=json')
      .then((response) => response.json())
      .then((ip) => resolve(ip));
  });
}
