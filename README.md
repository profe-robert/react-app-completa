# 🧩 Proyecto React – Tienda Fullstack (Frontend)

Este proyecto fue generado con **Create React App (CRA)** y utiliza **React 19**, **React Bootstrap**, y **React Router 7** para construir una aplicación web moderna, modular y testeable.  
El objetivo es desarrollar una **interfaz dinámica** con manejo de rutas, formularios y pruebas automatizadas con **Testing Library**.

---

## 🚀 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/profe-robert/react-app-completa
cd react-app-completa
```

Instalar dependencias:
npm install

Ejecutar el entorno de desarrollo:
npm start

Ejecutar los tests:
npm test

Construir el proyecto para producción:
npm run build

🧠 Dependencias del proyecto

📦 dependencies
 ```bash
 {
 "@testing-library/dom": "^10.4.1",
 "@testing-library/jest-dom": "^6.9.1",
 "@testing-library/user-event": "^13.5.0",
 "bootstrap": "^5.3.8",
 "react": "^19.2.0",
 "react-bootstrap": "^2.10.10",
 "react-dom": "^19.2.0",
 "react-hook-form": "^7.64.0",
 "react-router-dom": "^7.9.4",
 "react-scripts": "5.0.1",
 "web-vitals": "^2.1.4"
 }
 ```

🧪 devDependencies
 ```bash
 {
    "@testing-library/react": "^16.3.0"
 }
 ```

🧩 Estructura recomendada del proyecto
 ```bash 
 src/
 ├─ app/
 │  └─ routes.js
 │
 ├─ components/
 │  ├─ NavBar.jsx
 │  └─ products/                # (carpeta para componentes de productos)
 │
 ├─ context/
 │  └─ AppContext.js
 │
 ├─ data/
 │  └─ gaming.mock.js
 │
 ├─ pages/
 │  ├─ Contact.jsx
 │  ├─ Contact.test.jsx
 │  ├─ Home.jsx
 │  ├─ Products.jsx
 │  └─ Products.test.jsx
 │
 ├─ App.css
 ├─ App.js
 ├─ index.css
 ├─ index.js
 ├─ logo.svg
 ├─ reportWebVitals.js
 └─ setupTests.js
 ``` 

🧰 Scripts principales
Comando	        Descripción
npm start	    Ejecuta el servidor de desarrollo en http://localhost:3000/.
npm test	    Ejecuta los tests de Jest + Testing Library.
npm run build	Genera una versión optimizada para producción.
npm run eject	Expone la configuración interna de CRA (no recomendado).

🧪 Pruebas Automatizadas
El proyecto usa Jest + React Testing Library.
Archivos de prueba terminan en .test.jsx.

Ejemplo de test simple:
```bash
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('se monta correctamente y muestra el título', () => {
  render(<Contact />);
  const titulo = screen.getByRole('heading', { name: /contacto/i });
  expect(titulo).toBeInTheDocument();
});
```

🎨 Estilos
El proyecto usa Bootstrap 5 y React Bootstrap para componentes visuales.
```bash
Importa Bootstrap en src/index.js:
import 'bootstrap/dist/css/bootstrap.min.css';
```
🧩 Navegación con React Router
Ejemplo básico de rutas:
```bash
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
```
🧩 Formulario con React Hook Form
Ejemplo de uso en un componente:
```bash
import { useForm } from 'react-hook-form';

function ContactForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('nombre')} placeholder="Nombre" />
      <input {...register('correo')} placeholder="Correo" />
      <textarea {...register('mensaje')} placeholder="Mensaje" />
      <button type="submit">Enviar</button>
    </form>
  );
}
```


test unitarios Jest
```bash
Watch Usage: Press w to show more.
PASS  src/pages/Products.test.jsx (8.132 s)
PASS  src/pages/Contact.test.jsx (8.179 s)

Test Suites: 2 passed, 2 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        20.491 s
Ran all test suites.

Watch Usage: Press w to show more.
```
