# Validation record

Verified locally during the build:

- `npm run typecheck` — passed.
- `npm run build` — passed; client and server output generated.
- `npm run setup` — passed; generated migrations applied to local SQLite.
- Repeated `npm run setup` — passed; reported no pending migrations and preserved data.
- Local `/` — HTTP 200 from the running development server.
- `npm run test:flows` — verifies customer signup/login/logout, persisted profiles and orders, owner-only checkout, guest membership, stock availability, cart totals, pickup validation, verified order reviews, employee authorization by store, and order status progression. Also covers removal after stock is lowered and rejects client attempts to assign an employee role.

Browser visual inspection was unavailable: the in-app browser was not enabled, and native Safari automation reported that Computer Use permissions were not granted. Responsive styles and keyboard focus handling are implemented, but visual and interactive browser QA was not completed.

Optional browser WebMCP tools (`get_gather_cart`, `add_gather_product`) use feature detection. Their runtime registration and invocation could not be validated without a supported browser context; ordinary shopping does not depend on them.

The app remains locally hosted. No app code was published or deployed.
