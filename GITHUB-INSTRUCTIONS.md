# 🚀 Instrucciones para subir a GitHub

Este proyecto ya está completamente optimizado y listo para subir a GitHub. Sigue estos pasos:

## 📋 Pre-requisitos
- Tener Git instalado
- Tener una cuenta de GitHub
- Crear un nuevo repositorio en GitHub (no inicializar con README)

## 🔧 Comandos para subir el proyecto

```powershell
# 1. Navegar al directorio del proyecto
cd "c:\Users\yasse\Desktop\aroma-cafe"

# 2. Inicializar repositorio Git (si no existe)
git init

# 3. Agregar todos los archivos
git add .

# 4. Hacer el primer commit
git commit -m "🎉 Initial commit: Professional Aroma Café landing page

✨ Features:
- 100% responsive design with mobile-first approach
- Framer Motion animations and smooth transitions
- Modern React 18 + Vite setup
- Professional UI/UX with coffee theme
- Contact integration and business info
- Performance optimized build
- ESLint configuration for code quality
- Netlify and Vercel deployment ready

🏗️ Tech Stack: React, Vite, Framer Motion, CSS3, ESLint
📱 Responsive: Mobile, Tablet, Desktop optimized
🎨 Design: Modern, professional, business-ready"

# 5. Conectar con tu repositorio de GitHub
git remote add origin https://github.com/TU_USUARIO/aroma-cafe.git

# 6. Subir al repositorio
git push -u origin main
```

## 🌐 Después de subir a GitHub

### Para deploy automático en Netlify:
1. Ve a [netlify.com](https://netlify.com)
2. Conecta tu repositorio de GitHub
3. Build command: `npm run build`
4. Publish directory: `dist`
5. El archivo `netlify.toml` ya está configurado

### Para deploy automático en Vercel:
1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Vercel detectará automáticamente la configuración
4. El archivo `vercel.json` ya está configurado

## 📝 Personalización del README

Actualiza estos campos en `README.md`:
- Reemplaza `yourusername` con tu usuario de GitHub
- Agrega la URL real del demo cuando esté deployado
- Actualiza la información de contacto
- Agrega una captura de pantalla real del proyecto

## ✅ Estado del proyecto

✓ Código optimizado y limpio
✓ 100% responsive design
✓ README profesional creado
✓ Configuración de deploy lista
✓ Build funcionando correctamente
✓ Archivos innecesarios eliminados
✓ ESLint configurado
✓ Git ignore configurado

**El proyecto está 100% listo para mostrar en portfolios empresariales.**
