import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {decode,sign,verify} from 'hono/jwt'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import {cors} from "hono/cors"

const app = new Hono<
{
  Bindings:
  {
    DATABASE_URL:string,
    JWT_SECRET:string,
  }
}>()
app.use("/*", cors({
  origin: ['https://medium-rho-six.vercel.app'],  // Consider restricting to specific origins in production
  allowMethods: ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
  credentials: true,
  maxAge: 600
}));

app.route("/api/v1/user",userRouter);
app.route("/api/v1/blog",blogRouter);








export default app
