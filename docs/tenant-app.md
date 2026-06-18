# Tenant App

The tenant app lives at **[app.iqkv.site](https://app.iqkv.site)**. It's where workspace members spend their time — signing in, managing the team, handling billing, and keeping their account in shape.

---

## Getting started

### Sign up

Go to [app.iqkv.site](https://app.iqkv.site) and click **Sign up**. Fill in your name, email, and a password. The platform will:

1. Create your account
2. Provision a new workspace for you
3. Send a verification email

You'll land in your new workspace as soon as provisioning is done (usually a few seconds).

### Verify your email

Check your inbox for a verification link. Click it to confirm your address. Some features are gated until you verify.

### Sign in

On the sign-in page, enter your email and password. If you belong to more than one workspace, you'll be asked to pick one. You can switch workspaces later without signing out.

### Forgot your password?

Click **Forgot password** on the sign-in page. Enter your email and check your inbox. The reset link is valid for a limited time — request a new one if it expires.

---

## Dashboard

After signing in you land on the **Dashboard**. It shows:

- Your workspace name
- A welcome message
- Team member count (for organization workspaces)

If you're on your **personal workspace**, the dashboard shows a quick-start guide with links to create an organization, update your profile, secure your account, and set up notifications.

---

## Team

The **Team** page is where you manage who's in your workspace.

### Member list

All members are listed with their name, email, role, and join date. Use the search box to find someone by name or email.

### Invite a member (owners only)

Click **Invite member** and enter the email address. The invitee gets an email with a link to join. If they don't have an account yet, they'll be prompted to create one during the acceptance flow.

### Pending invitations (owners only)

Below the member list you'll see all invitations that haven't been accepted yet — with their expiry date and current status. Click the eye icon to see details or revoke an invitation before it's accepted.

### Member actions (owners only)

Next to each member name there's an action menu. As the owner you can:

- **Change role** — toggle between Owner and Member. Transferring the Owner role to someone else makes them the new owner and drops you to Member.
- **Ban member** — immediately removes access. The person can no longer sign in to this workspace.
- **Unban member** — restores access.

### Organization settings (owners only)

At the top of the Team page there's an **Organization settings** section where you can edit the workspace display name.

---

## Billing

The **Billing** page is available to workspace owners. Members can see it but can't make changes.

### Current subscription

Shows your active plan, status, and when the current period ends.

### Available plans

A list of all plans you can subscribe to. Each plan shows its price, billing period, and included features. Click **Select** on a plan to go through the Stripe checkout flow.

### Billing information

Edit your billing contact details — company name, address, tax ID, and billing email. This information appears on invoices.

### Refunds

A history of any refunds processed for your workspace.

### Billing portal

The **Open billing portal** button takes you to the Stripe Customer Portal where you can:

- View and download past invoices
- Update your payment method
- See upcoming charges

Your card details are handled entirely by Stripe — the platform never sees or stores them.

::: tip Personal workspace
Your personal workspace doesn't need a subscription. Billing only applies to organization workspaces.
:::

---

## Account settings

Access your account settings from the user menu in the top-right corner.

### General

- **Profile picture** — upload an avatar image
- **First and last name** — update your display name
- **Email** — read-only; shown for reference
- **Language** — sets your preferred language for notifications and emails
- **Organizations** — a list of all workspaces you belong to

### Security

- **Roles** — shows the roles you hold in the current workspace
- **Change password** — enter your current password, then set a new one

  Password rules:
  - 8 to 128 characters
  - Must include uppercase and lowercase letters, a digit, and a special character

### Notifications

A paginated list of all in-app notifications sent to you. From here you can:

- **Mark as read** — individually or all at once
- **Delete** — remove one notification or clear them all

Notifications cover events like received invitations, membership changes, and account activity.

### Organizations

A table of every workspace you're a member of, showing the workspace name, its unique key, your role, and current status. Owners can click the edit icon to switch into that workspace's context for management.

If you haven't created an organization yet, this page shows an empty state with a **Create Organization** button.

---

## Creating an organization

You can create a new organization workspace from two places:

- The dashboard welcome card (personal workspace)
- Settings → Organizations → **Create Organization**

After creation, you become its owner and can start inviting people right away.

---

## Switching workspaces

Use the workspace switcher in the sidebar to jump between any workspace you belong to. The switch is instant and your session stays active — no need to sign in again.

---

## Accepting an invitation

If someone invites you, you'll get an email with a link. Clicking it opens a preview page that shows who invited you and to which workspace. Hit **Accept** to join.

- If you already have an account, you'll be signed in automatically.
- If you're new, you'll create an account first and then be added to the workspace.

---

## Session and security notes

- Your session expires after **30 minutes of inactivity**. You'll be signed out automatically.
- Tokens are refreshed silently in the background — you usually won't notice unless your session has truly expired.
- Signing out on one device does not sign out other active sessions. Use **Sign out of all devices** (in security settings) if you need to revoke all sessions at once.
