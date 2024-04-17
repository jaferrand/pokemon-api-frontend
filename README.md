Pokémon API Frontend
Este proyecto, pokemon-api-frontend, es una aplicación Angular que proporciona una interfaz de usuario para explorar y descubrir información sobre Pokémon. Utiliza una API externa para obtener datos y presenta una lista de Pokémon y detalles individuales para cada uno.

Características
Lista de Pokémon: Visualiza una lista completa de Pokémon con opciones de paginación.
Detalles de Pokémon: Accede a una página detallada para cada Pokémon que muestra estadísticas, habilidades y más.
Interfaz de Usuario: Una interfaz limpia y amigable para una óptima experiencia de usuario.
Estructura del Proyecto
El proyecto incluye los siguientes directorios y archivos clave:

src/app: Contiene todos los componentes de la aplicación.

pokemon-details: Componente para mostrar los detalles de un Pokémon específico.

pokemon-list: Componente para listar los Pokémon y manejar la paginación.

app.component.html: Plantilla principal de la aplicación.

app.component.ts: Componente principal de la aplicación.

captured-pokemon.service.ts: Servicio para manejar los Pokémon capturados.

pokemon.ts: Modelo para definir la estructura de datos de un Pokémon.


angular.json: Configuración del proyecto Angular.
package.json y package-lock.json: Configuración y dependencias del proyecto Node.
Instalación y Ejecución
Requisitos
Node.js y npm instalados.
Instalación
Descarga el repositorio:
https://github.com/jaferrand/pokemon-api-frontend.git
Clona el repositorio:
git clone https://github.com/tu-usuario/pokemon-api-frontend.git
Instala las dependencias del proyecto:
npm install
Inicia el servidor de desarrollo:
ng serve
Visita http://localhost:4200/ en tu navegador para ver la aplicación.

Construcción
Ejecuta ng build --prod para construir la versión de producción de la aplicación. Los artefactos se almacenarán en el directorio dist/.

