# Prisma Basics:

1️⃣ [Migration](#prisma-basics): Prisma migration is relatable with database and sql query.
<br/>
2️⃣ [Generation](#prisma-client): Prisma generation is relatable with prisma client.

# Useful Commands:

## migrate and generate commands:

`npx prisma migrate dev`
<br/>
√ Are you sure you want create and apply this migration? ... yes
<br/>
√ Enter a name for the new migration: ... enter_a_name

## migrate so that previous duplicate migrations are deleted:

`npx prisma migrate dev --name migration_name`
<br/>
✔ Do you want to continue? All data will be lost. (y/N) y

## generate prisma client:

`
npx prisma generate`

## run the server:

`npx ts-node file_name.ts`
