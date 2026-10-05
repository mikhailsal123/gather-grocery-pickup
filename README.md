# Gather — grocery pickup

Gather is a locally hosted class project for grocery pickup. Customers choose a store, build and share a cart, place a test order, and pick up groceries themselves. Store employees prepare orders and mark them ready. It is not published and requires no paid services or API keys.

## Run locally

Install **Node.js 22.13+** (Node 24 LTS recommended) and npm. From this directory:

```sh
npm install
npm run setup
npm run dev
```

Open the **Local URL** printed by the development server, normally **http://localhost:5173**. Keep the terminal running. Stop with `Ctrl+C`.

`npm run setup` builds the app and applies the committed SQLite migrations to the local database. It is safe to run again; Wrangler records applied migrations. Local data survives server restarts in `.wrangler/state`. No Cloudflare account or login is needed: Wrangler/Miniflare runs the database locally. Initial installation requires internet access; the grocery images are included locally.

If the port is occupied:

```sh
npm run dev -- --port 5174
```

For a preview of the production build, run `npm run setup`, then `npm start` and open its printed URL. `npm run setup` rebuilds after code changes. Use `npm run db:generate` after changing the schema, then `npm run setup` to apply new migrations.

## Demo accounts

All demo passwords are **`Gather123!`**. Use “Sign in → Try a demo account,” or enter:

| Account | Email | Access |
| --- | --- | --- |
| Alex Morgan | `alex@gather.test` | Customer / cart owner |
| Jamie Lee | `jamie@gather.test` | Customer / shared-cart guest |
| Sam at Meijer | `staff@gather.test` | Employee assigned to Meijer |

You can also create a new customer account. Passwords are salted and hashed with PBKDF2; session cookies are HttpOnly and SameSite. Employees are explicitly assigned to a store on the server. New accounts cannot grant themselves employee access.

## Try the main flows

1. Sign in as Alex. Pick Meijer, search or filter inventory, and add items. Prices, quantities, subtotal, the flat $2.99 service fee, and estimated 7% tax appear in the cart.
2. Click **Share cart** and copy the invitation. Open a private/incognito browser at the same localhost URL, sign in as Jamie, and open the invitation or paste it under **Shared carts**. Jamie can add items but cannot check out. Carts refresh every 15 seconds; refresh immediately to see another shopper’s changes.
3. As Alex, click **Secure checkout**, choose a test payment method, a pickup date within seven days, and the pickup person. Pickup must be at least 15 minutes away and during store hours. Times are checked against Indianapolis time. Place the order and note its store-specific order number.
4. Sign in as Sam in another browser. Open **Employee desk**, then advance the Meijer order through preparing, ready, and picked up. Sam can also edit Meijer’s inventory and store details. Store hours use the format `8:00 AM – 10:00 PM`.
5. Alex can see the updated status under **My orders** and leave a rating and comment tied to that order. Only actual customer order holders can review, once per order. Customer reviews appear on that store.
6. Open **My account** to save name, phone, address, and a test-card preference.

Use distinct browser profiles or a regular and private window for simultaneous users; tabs in one profile share the login cookie. A link containing `localhost` works only on that computer. For a classroom LAN demonstration, explicitly run `npm run dev -- --hostname 0.0.0.0`, allow the port through the firewall, and have both browsers use the host computer’s LAN IP. This prototype is intended for trusted local use, not internet exposure.

## Validation

```sh
npm run typecheck
npm run build
# With npm run dev running:
npm run test:flows
# Optional different server origin:
node scripts/test-flows.mjs http://localhost:5174
```

The integration test creates uniquely named test customer accounts, a shared cart, a test order, and a review in your local database. It tests guest checkout denial, verified reviews, employee authorization, unavailable products, totals, and status transitions. These records remain available for inspection.

## Requirements and interview questions

See [QUESTIONS.md](QUESTIONS.md) for questions collected during the vibe-coding process and the assumptions used, and [REQUIREMENTS.md](REQUIREMENTS.md) for the feature mapping.

## Prototype boundaries

- All stores, locations, prices, and inventory are sample data. Brand names illustrate the requested store selection; no retailer integration is present. Location access sorts/filter the sample stores within 25 miles; entering an account address does not geocode it.
- Payments use two clearly labeled test methods. No card numbers or security codes are collected and no funds are charged. Real checkout needs a payment provider and its tokenization flow.
- Confirmation and ready-for-pickup notifications appear in the app. No email or SMS is sent.
- Inventory is an employee-managed availability limit, checked when adding and ordering; checkout does not reserve or decrement stock. Real-time reservation and replacement policies need an interview decision.
- The estimated 7% tax is a classroom assumption applied to subtotal plus service fee. Production tax requires product exemptions and jurisdiction rules.
- Authentication is local app authentication. ChatGPT sign-in is not needed. The bundled framework’s optional platform auth helpers are unused.

## Technology

React, TypeScript, Vinext/Vite, and local SQLite through Cloudflare D1 emulation. The server handles permissions, prices, order totals, and persistence; browser storage is not the source of truth for accounts or orders. Server code lives in `app/api/gather/route.ts`, UI in `app/gather.tsx`, catalog in `app/catalog.ts`, and schema in `db/schema.ts`. SQL migrations are committed under `drizzle/`.

## Image credits

Grocery photography: [Fikri Rasyid on Unsplash](https://unsplash.com/photos/assorted-variety-vegetable-lot-amI09sbNZdE). Product illustrations use the operating system’s emoji font. No photograph implies affiliation with a depicted retailer.
