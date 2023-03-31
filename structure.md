文件结构

```lua
├── src/
│   ├── app.module.ts
│   ├── app.controller.ts
│   ├── roles/
│   │   ├── roles.module.ts
│   │   ├── roles.service.ts
│   │   ├── roles.controller.ts
│   │   ├── dtos/
│   │   │   ├── create-role.dto.ts
│   │   │   ├── update-role.dto.ts
│   │   │   ├── role.dto.ts
│   │   │   └── roles.dto.ts
│   │   ├── entities/
│   │   │   ├── role.entity.ts
│   │   │   ├── permission.entity.ts
│   │   │   └── user-role.entity.ts
│   │   └── repositories/
│   │       ├── role.repository.ts
│   │       ├── permission.repository.ts
│   │       └── user-role.repository.ts
│   ├── users/
│   │   ├── users.module.ts
│   │   ├── users.service.ts
│   │   ├── users.controller.ts
│   │   ├── dtos/
│   │   │   ├── create-role.dto.ts
│   │   │   ├── update-role.dto.ts
│   │   │   ├── role.dto.ts
│   │   │   └── users.dto.ts
│   │   ├── entities/
│   │   │   ├── user.entity.ts
│   │   │   └── department.entity.ts
│   │   └── repositories/
│   │       ├── user.repository.ts
│   │       └── department.repository.ts
│   └── auth/
│       ├── auth.module.ts
│       ├── auth.service.ts
│       ├── auth.controller.ts
│       ├── dtos/
│       │   ├── login.dto.ts
│       │   ├── register.dto.ts
│       │   ├── token.dto.ts
│       │   └── role.dto.ts
│       ├── entities/
│       │   ├── user.entity.ts
│       │   └── role.entity.ts
│       ├── repositories/
│       │   ├── user.repository.ts
│       │   └── role.repository.ts
│       ├── strategies/
│       │   ├── jwt.strategy.ts
│       │   └── local.strategy.ts
│       └── guards/
│           ├── jwt-auth.guard.ts
│           └── roles.guard.ts

```
