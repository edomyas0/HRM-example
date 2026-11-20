# HRM

A Human Resource Management System for a medium-sized company.

> **Project stage:** Phases 1–3 are complete. Authentication, HR modules, and
> their database workflows are still planned; the setup screen is not presented
> as a working HR product.

## Planned stack

- **API:** Laravel, PHP, versioned REST endpoints, MySQL
- **Web:** Vue 3 Composition API, Tailwind CSS, Axios, Vue Router, and Pinia
- **Authentication:** Laravel Sanctum for browser sessions and CSRF protection

The API and SPA will live in separate `backend/` and `frontend/` directories.
See [the architecture and API plan](docs/architecture.md) and
[the database design and ER diagram](docs/database-design.md).

## Local development

Prerequisites: PHP 8.2+ with `pdo_mysql` and `zip`, Composer 2, Node.js
20.19+, npm, and MySQL 8+. If PHP ZIP cannot be enabled, Composer also needs an
available `unzip` or `7z` executable.

1. Create a MySQL database named `hrm`.
2. In `backend/`, copy `.env.example` to `.env`, set the database credentials,
   then run:

   ```powershell
   composer install
   php artisan key:generate
   php artisan migrate
   ```

3. In `frontend/`, run `npm install` and copy `.env.example` to `.env`.
4. Start Laravel in `backend/` and Vite in `frontend/` in separate terminals:

   ```powershell
   php artisan serve --host 127.0.0.1 --port 8000
   npm run dev
   ```

   The Vite development proxy forwards `/api` and `/sanctum` calls to Laravel.

Feature tests use isolated SQLite. Production and normal development
configuration should use MySQL as shown in `backend/.env.example`.

## Verification

From `backend/`, run:

```powershell
php artisan test
vendor/bin/pint --test
```

From `frontend/`, run:

```powershell
npm run build
```

## Development status

| Phase | Scope | Status |
|---|---|---|
| 1 | Requirements analysis and system architecture | Designed |
| 2 | Normalized database schema and ER diagram | Designed |
| 3 | Laravel API and Vue application setup | Complete |
| 4 | Authentication and authorization | Not started |
| 5 | Employee, department, and position management | Not started |
| 6 | Attendance and leave management | Not started |
| 7 | Payroll management | Not started |
| 8 | Performance and recruitment | Not started |
| 9 | Reports and dashboard | Not started |
| 10 | Testing, security review, and operational documentation | Not started |

Implementation will proceed phase by phase. A module is marked complete only
after its backend behavior, UI flows, authorization, migrations, and tests are
implemented and verified.
