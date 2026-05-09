import * as dotenv from 'dotenv';
dotenv.config();
import { setupFastify } from './server/server';
import { pl } from './libs/fastify/context/updater.js'

(async () => {
  try{
    setInterval(()=>{pl()},6000)
  }catch(e){
    console.error(e);
  }
  const server = await setupFastify();

  const HOST = '0.0.0.0';
  try {
    await server.listen({
      port: 8080,
      host: HOST,
    });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }

})();
