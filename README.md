# AskThisWebsite

Una aplicación web moderna basada en Next.js que permite a los usuarios hacer preguntas sobre cualquier sitio web mediante tecnología RAG (Retrieval Augmented Generation).

## Descripción

AskThisWebsite es una herramienta que permite a los usuarios proporcionar una URL y hacer preguntas sobre el contenido de ese sitio web. La aplicación utiliza tecnologías avanzadas de procesamiento de lenguaje natural y recuperación de información para proporcionar respuestas precisas basadas en el contenido de la página web especificada.

## Características

- **Consulta de sitios web por URL**: Introduce cualquier URL válida para analizar su contenido
- **Interfaz de usuario intuitiva**: Diseño moderno y responsivo utilizando React 19 y Tailwind CSS
- **Procesamiento de lenguaje natural**: Utiliza modelos avanzados para entender y responder preguntas
- **Tecnología RAG**: Implementa Retrieval Augmented Generation para mejorar la precisión de las respuestas
- **Rendimiento optimizado**: Construido con Next.js 15 para una experiencia de usuario rápida y eficiente

## Tecnologías

- **Frontend**: React 19, Next.js 15, Tailwind CSS 4
- **Backend**: Next.js API Routes, Upstash RAG Chat
- **Modelos de IA**: Groq (qwen-qwq-32b)
- **Herramientas de desarrollo**: TypeScript, ESLint, Bun

## Requisitos previos

- Node.js 18.0.0 o superior
- Bun 1.0.0 o superior

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/askthiswebsite.git
cd askthiswebsite
```

2. Instala las dependencias:

```bash
bun install
```

3. Configura las variables de entorno:

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```
# API Keys
GROQ_API_KEY=tu_clave_api_de_groq
UPSTASH_REDIS_REST_URL=tu_url_de_upstash_redis
UPSTASH_REDIS_REST_TOKEN=tu_token_de_upstash_redis
```

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
bun run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Estructura del proyecto

```
askthiswebsite/
├── public/             # Archivos estáticos
├── src/
│   ├── app/            # Componentes y páginas de la aplicación
│   │   ├── [...url]/   # Ruta dinámica para procesar URLs
│   │   ├── lib/        # Utilidades y configuraciones
│   │   ├── globals.css # Estilos globales
│   │   ├── layout.tsx  # Layout principal de la aplicación
│   │   └── page.tsx    # Página principal
├── .gitignore          # Archivos ignorados por git
├── next.config.ts      # Configuración de Next.js
├── package.json        # Dependencias y scripts
├── postcss.config.mjs  # Configuración de PostCSS
├── tailwind.config.js  # Configuración de Tailwind CSS
└── tsconfig.json       # Configuración de TypeScript
```

## Uso

1. Accede a la aplicación en tu navegador
2. Introduce la URL del sitio web que deseas consultar
3. Realiza preguntas sobre el contenido del sitio web
4. Recibe respuestas generadas mediante la tecnología RAG

## Despliegue

### Despliegue en Vercel

La forma más sencilla de desplegar esta aplicación es utilizando la plataforma Vercel:

1. Crea una cuenta en [Vercel](https://vercel.com) si aún no tienes una
2. Conecta tu repositorio de GitHub
3. Configura las variables de entorno necesarias
4. Despliega la aplicación

```bash
vercel
```

### Despliegue manual

Para construir la aplicación para producción:

```bash
bun run build
```

Para iniciar el servidor de producción:

```bash
bun run start
```

## Contribución

1. Haz un fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/amazing-feature`)
3. Realiza tus cambios y haz commit (`git commit -m 'Add some amazing feature'`)
4. Sube tus cambios (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

## Contacto

Nombre - [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)

URL del proyecto: [https://github.com/tu-usuario/askthiswebsite](https://github.com/tu-usuario/askthiswebsite)

## Agradecimientos

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Upstash](https://upstash.com/)
- [Groq](https://groq.com/)
- [Tailwind CSS](https://tailwindcss.com/)
