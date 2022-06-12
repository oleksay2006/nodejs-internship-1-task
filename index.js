import fetch from 'node-fetch';

const controller = new AbortController();
setTimeout(() => controller.abort(), 3000);

export default async function getIpInfo() {
  return fetch('https://api.ipify.org/?format=json', { signal: controller.signal })
    .then((response) => response.json())
    .then((ip) => (ip))
    .catch((e) => {
      const noIp = { ip: '0.0.0.0' };
      console.error(`Download error: ${e.message}`);
      return noIp;
    });
}
