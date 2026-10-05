# Questions collected during the build

These are questions raised during implementation, not interview answers. Current assumptions keep the class prototype usable until the assigned group responds.

| Question to ask the assigned group | Current implementation / assumption |
| --- | --- |
| Is this a web app, mobile app, or both? | Responsive web app, hosted locally. |
| Should sign-in use email/password, a username, or a campus account? | Email/password with customer accounts; no campus dependency. |
| Which city and radius define “local”? Does an address change the store results? | Sample Indianapolis locations, 25-mile radius from browser location; account address is saved but not geocoded. |
| Where should store locations, opening hours, and inventory come from? | Included sample catalog; assigned employees can update their own store details and stock. No live maps or retailer API. |
| Can one cart include products from multiple stores? | Each cart and order belongs to exactly one store. A customer can keep separate carts. |
| Can guests edit quantities and remove someone else’s additions? | Signed-in invited guests may add, decrease, or remove any item. Only the owner shares and checks out. |
| Should owners be able to revoke invitations, remove guests, or transfer ownership? | Invitations work until checkout; revocation and ownership transfer are not implemented. |
| Should shared carts update instantly? | Server-backed data; visible carts refresh every 15 seconds. |
| What is the flat service fee, and which items/fees are taxable? | $2.99 service fee; estimated 7% tax on subtotal plus fee. These are classroom assumptions, not a legal tax calculation. |
| Which payment provider and payment methods are required? | Test Visa/Mastercard preferences only. No money moves or sensitive payment data is stored. |
| Are pickup slots capacity limited? How far in advance can someone order? | During sample store hours, at least 15 minutes ahead, and within seven days. No capacity limit. |
| Does the pickup person need a separate account, ID, or pickup code? | Customer supplies a name; store-specific order number identifies the pickup. No separate account required. |
| When should inventory be reserved? How are substitutions and unavailable items handled? | Quantity limits checked server-side. Stock is not reserved or decremented; an unavailable item blocks checkout. No substitutions. |
| Can an order be canceled, edited, refunded, or left unclaimed? | Orders are immutable after confirmation; cancellation/refunds need a policy and payment integration. |
| How are employees assigned to a store? Can a manager serve multiple stores? | Demo employee is assigned to Meijer; store access is enforced on the server. No employee self-enrollment. |
| How should confirmation and “ready” messages be sent? | In-app order confirmation and status; email/SMS need a provider and consent decisions. |
| Can customers review at confirmation, only after pickup, or more than once? | As requested, possession of an owned order number is sufficient. One review per order; no fabricated reviews. |
| Should a shared-cart guest also be allowed to review? | Only the customer who placed the order can review. |
| Can customers edit/delete reviews? Is moderation required? | Published customer ratings/comments; review editing and moderation are pending policy. |

## Clarifications from the attached reference

The reference adds a pickup time, a designated pickup person, employee store updates, and the restriction that shared-cart guests cannot check out. These were implemented as app requirements. The unrelated “Hudl Variation” section describes a separate sports app and is outside this grocery-pickup request.

No interviews have been conducted or represented as completed. Use this list for the assignment’s interviews and revise the assumptions afterward.
