# Platform Admin Guide

The platform admin app lives at **[admin.iqkv.site](https://admin.iqkv.site)**. This is for platform operators to manage users, organizations, subscriptions, and plans across the entire platform.

---

## Getting started

### Sign in

Go to admin.iqkv.site and sign in with your operator credentials. Regular tenant users won't have access here — only accounts with `PLATFORM_ADMIN` authority can log in.

### Session security

Your session expires after 30 minutes of inactivity. The app uses secure token handling with silent refresh in the background.

---

## Dashboard

After signing in you land on the Dashboard. It shows three key metrics at a glance:

- Total users on the platform
- Total organizations
- Active subscriptions

Each card loads independently with its own error state.

---

## Users

Manage all user accounts across the platform.

### User list

- Paginated, sortable, and filterable table
- Search by name or email
- Filter by user status

### User detail view

Click a user to open their detail page with two tabs:

- **Overview**: User profile, account status, and quick actions
- **Organizations**: List of workspaces the user belongs to, with their roles

### User actions

From the detail view you can:

- Edit user profile
- Set a new password for the user
- Ban/unban the user
- Unlock a locked account

---

## Organizations

Manage every workspace on the platform.

### Organization list

- Paginated list with status filter (active, suspended, etc.)
- Search by organization name or key

### Organization detail view

Each organization has five tabs:

- **Overview**: Edit organization display name and metadata
- **Members**: View and manage workspace members and their roles (TENANT_OWNER, ADMIN, MEMBER)
- **Billing**: View and edit tenant billing settings
- **Subscriptions**: See the organization's subscription history and current plan
- **Refunds**: List of any refunds processed for this organization

---

## Invitations

Track and manage invitations across all workspaces.

- View all pending, accepted, and expired invitations
- Propose new invitations
- Edit existing invitations
- Revoke invitations before they're accepted

---

## Subscriptions

See every subscription across the platform.

- Read-only global list with search
- Filter by subscription status
- Sort by date or amount
- Click a subscription to see its full details

---

## Plans

Create and manage the pricing plans offered to tenants.

- Plan catalog list showing all available plans
- Create a new plan
- Edit an existing plan
- Delete a plan (if not in use)

---

## Announcements

Send platform-wide announcements to users.

- Create new announcements with translation support
- Edit existing announcements
- Publish or unpublish announcements
- Delete announcements

---

## Audit Logs

Review a chronological record of important events across the platform for accountability and troubleshooting.

---

## Refunds

View and manage refund history.

- Global refund list
- Filter and search
- Click a refund to see its full details

---

## My Account

Manage your own operator profile.

- View and edit your profile information
- Change your password

---

## Notifications

Stay updated with platform events via in-app notifications. You can mark them as read or delete them.
