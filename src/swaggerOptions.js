import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const swaggerOptions = {
  definition: {
      openapi: '3.0.0',
      info: {
          title: 'NodeJs MongoDb API',
          description: 'Simple REST API with MongoDB maded by Saul Medina',
          version: '1.0.0'
      }
  },
  apis: [`${path.join(__dirname, './routes/*.routes.js')}`]
}