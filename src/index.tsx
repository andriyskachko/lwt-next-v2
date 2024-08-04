import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { FC } from "hono/jsx";

const app = new Hono();

const Layout: FC = (props) => {
  return (
    <html>
      <body>{props.children}</body>
    </html>
  );
};

app.get("/", (c) => c.html(<Layout>Hello, World!</Layout>));

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
