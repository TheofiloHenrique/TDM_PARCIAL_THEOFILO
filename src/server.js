// Punto de entrada de la aplicacion.

import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import userRoutes from './routes/user.routes.js';

// __dirname no existe por defecto en ES modules, se reconstruye asi.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json()); // permite leer JSON en el body de las peticiones
app.use(express.static(path.join(__dirname, '..', 'public'))); // sirve el front-end

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
