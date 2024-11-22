# Boletomania

Boletomania es una plataforma en línea para la venta de tickets de eventos culturales y artísticos. Los usuarios pueden adquirir boletos, verificar disponibilidad de eventos y garantizar la autenticidad de sus tickets mediante códigos QR. Además, la plataforma cuenta con distintos roles de usuario con funcionalidades específicas.

---

## Tabla de Contenidos

1. [Descripción del Proyecto](#descripción-del-proyecto)  
2. [Estructura del Proyecto](#estructura-del-proyecto)  
3. [Instalación y Configuración](#instalación-y-configuración)  
---

## Descripción del Proyecto

Boletomania permite a los usuarios:

- Comprar múltiples boletos y gestionarlos fácilmente.
- Generar códigos QR para garantizar la autenticidad.
- Administrar eventos de forma eficiente mediante un sistema robusto.

### Público Objetivo

Personas interesadas en asistir a eventos culturales y artísticos que necesitan comprar boletos de forma segura y confiable.

---

## Estructura del Proyecto

### Frontend
- **Tecnologías**: React, Tailwind, Vite.  
- **IDE**: Visual Studio.  

### Backend
- **Tecnologías**: SpringBoot, Java.  
- **Arquitectura**: NCAPAS (arquitectura por capas).  
- **IDE**: IntelliJ.  

### Base de Datos
- **Motor**: PostgreSQL.  
- **IDE**: DBeaver.  

### Herramientas
- **Diseño**: [Figma](https://www.figma.com/file/nGC1l8Z6ph0ENmHckQF3HF/boletomania?node-id=0%3A1&t=lPc5gVkiFy4nItQU-1)  
- **Gestión del Proyecto**: [Jira - Scrum](https://uca-daniel.atlassian.net/jira/software/projects/BOLE/boards/34)  
- **Repositorio**: [GitHub](https://github.com/DiegoFlamenco123/IngenieriaSoftware/tree/main)

---

## Instalación y Configuración

### Requisitos Previos
- **Docker** instalado para crear el contenedor de la base de datos.  
- **Node.js** (para el frontend).  
- **JDK 17** (para el backend).  
- **PostgreSQL** 

---

### 1. Configuración del Contenedor de Docker para PostgreSQL

1. Abre la terminal (CMD o shell).
2. Ejecuta el siguiente comando para crear y ejecutar un contenedor de PostgreSQL:
   ```bash
   docker run --name ncapas -e POSTGRES_USER=mauri -e POSTGRES_PASSWORD=password -e POSTGRES_DB=myncapasdb -p 5432:5432 -d postgres

## Esquema de la Base de Datos

### Tabla de Usuarios
```sql
CREATE TABLE public."user" (
    code uuid NOT NULL DEFAULT gen_random_uuid(),
    email varchar NOT NULL,
    "name" varchar NOT NULL,
    active bool NOT NULL DEFAULT true,
    "password" varchar NOT NULL,
    CONSTRAINT user_pk PRIMARY KEY (code)
);

CREATE TABLE public."token" (
	code uuid NOT NULL DEFAULT gen_random_uuid(),
	"content" varchar NOT NULL,
	"timestamp" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	active bool NOT NULL DEFAULT true,
	user_code uuid NOT NULL,
	CONSTRAINT token_pk PRIMARY KEY (code),
	CONSTRAINT token_fk FOREIGN KEY (user_code) REFERENCES public."user"(code)
);

CREATE TABLE public.organizer (
	code uuid NOT NULL DEFAULT gen_random_uuid(),
	organizer varchar NOT NULL,
	CONSTRAINT organizer_pk PRIMARY KEY (code)
);

CREATE TABLE public."permission" (
	code uuid NOT NULL DEFAULT gen_random_uuid(),
	user_code uuid NOT NULL,
	"permission" varchar NOT NULL,
	CONSTRAINT permission_pk PRIMARY KEY (code),
	CONSTRAINT permission_fk FOREIGN KEY (user_code) REFERENCES public."user"(code)
);

CREATE TABLE public."role" (
	code uuid NOT NULL DEFAULT gen_random_uuid(),
	"role" varchar NOT NULL,
	CONSTRAINT role_pk PRIMARY KEY (code)
);

CREATE TABLE public.site (
	code uuid NOT NULL DEFAULT gen_random_uuid(),
	"name" varchar NOT NULL,
	address varchar NOT NULL,
	CONSTRAINT site_pk PRIMARY KEY (code)
);

CREATE TABLE public.sponsor (
	code uuid NOT NULL DEFAULT gen_random_uuid(),
	sponsor varchar NOT NULL,
	CONSTRAINT sponsor_pk PRIMARY KEY (code)
);

CREATE TABLE public."event" (
	code uuid NOT NULL DEFAULT gen_random_uuid(),
	organizer_code uuid NOT NULL,
	sponsor_code uuid NOT NULL,
	site_code uuid NOT NULL,
	title varchar NOT NULL,
	"date" timestamp NOT NULL,
	duration varchar NOT NULL,
	CONSTRAINT event_pk PRIMARY KEY (code),
	CONSTRAINT event_fk FOREIGN KEY (organizer_code) REFERENCES public.organizer(code),
	CONSTRAINT event_fk_1 FOREIGN KEY (sponsor_code) REFERENCES public.sponsor(code),
	CONSTRAINT event_fk_2 FOREIGN KEY (site_code) REFERENCES public.site(code)
);

CREATE TABLE public.tier (
	code uuid NOT NULL DEFAULT gen_random_uuid(),
	event_code uuid NOT NULL,
	"name" varchar NOT NULL,
	capacity int NOT NULL,
	price real NOT NULL,
	CONSTRAINT tier_pk PRIMARY KEY (code),
	CONSTRAINT tier_fk FOREIGN KEY (event_code) REFERENCES public."event"(code)
);

CREATE TABLE public.qr (
	qr_id uuid NOT NULL DEFAULT gen_random_uuid(),
	creation_date timestamp NOT NULL,
	expiration_date timestamp NULL,
	exchange_date timestamp NULL,
	CONSTRAINT qr_pk PRIMARY KEY (qr_id)
);

CREATE TABLE public.ticket (
	code uuid NOT NULL DEFAULT gen_random_uuid(),
	user_code uuid NOT NULL,
	tier_code uuid NOT NULL,
	purchase_date timestamp NOT NULL,
	"valid" bool NOT NULL,
	qr_code uuid NOT NULL,
	CONSTRAINT ticket_pk PRIMARY KEY (code),
	CONSTRAINT ticket_fk FOREIGN KEY (user_code) REFERENCES public."user"(code),
	CONSTRAINT ticket_fk_1 FOREIGN KEY (tier_code) REFERENCES public.tier(code),
	CONSTRAINT ticket_fk_2 FOREIGN KEY (qr_code) REFERENCES public.qr(qr_id)
);

CREATE TABLE public.category (
	code uuid NOT NULL DEFAULT gen_random_uuid(),
	event_code uuid NOT NULL,
	category varchar NOT NULL,
	CONSTRAINT category_pk PRIMARY KEY (code),
	CONSTRAINT category_fk FOREIGN KEY (event_code) REFERENCES public."event"(code)
);

CREATE TABLE public.transfer (
	code uuid NOT NULL DEFAULT gen_random_uuid(),
	ticket_code uuid NOT NULL,
	user_code uuid NOT NULL,
	CONSTRAINT transfer_pk PRIMARY KEY (code),
	CONSTRAINT transfer_fk FOREIGN KEY (user_code) REFERENCES public."user"(code),
	CONSTRAINT transfer_fk_1 FOREIGN KEY (ticket_code) REFERENCES public.ticket(code)
);

CREATE TABLE public.userxevent (
	code uuid NOT NULL DEFAULT gen_random_uuid(),
	user_code uuid NOT NULL,
	event_code uuid NOT NULL,
	CONSTRAINT userxevent_pk PRIMARY KEY (code),
	CONSTRAINT userxevent_fk FOREIGN KEY (user_code) REFERENCES public."user"(code),
	CONSTRAINT userxevent_fk_1 FOREIGN KEY (event_code) REFERENCES public."event"(code)
);

CREATE TABLE public.userxrole (
	code uuid NOT NULL DEFAULT gen_random_uuid(),
	user_code uuid NOT NULL,
	role_code uuid NOT NULL,
	CONSTRAINT userxrole_pk PRIMARY KEY (code),
	CONSTRAINT userxrole_fk FOREIGN KEY (user_code) REFERENCES public."user"(code),
	CONSTRAINT userxrole_fk_1 FOREIGN KEY (role_code) REFERENCES public."role"(code)
);

```

---

### 3. Configuración del Entorno del backend

1. Navega al directorio del backend en tu máquina:
 ``` 
spring.datasource.url=jdbc:postgresql://localhost:5432/myncapasdb
spring.datasource.username=mauri
spring.datasource.password=password

```
### 4. Configuración del Frontend

```
npm install
npm run dev

```

