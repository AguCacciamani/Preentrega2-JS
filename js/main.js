let saludo = prompt("Hola, bienvenido/a a la E-library!!\nQue desea hacer? Introduzca:\n1-Para buscar un libro\n2-Para agregar un libro a la lista");

if (saludo == 1) {
    //Funcion para filtrar un libro
    let titulo = prompt('Ingrese el titulo del libro');
    let autor = prompt('Ingrese el nombre del autor');
    let genero = prompt('Ingrese el genero del libro (Accion, novela, fantasia, etc)');
    let formato = prompt('Ingrese el formato (Libro, Comic, Manga)');
    let añoPublicacion = prompt('Ingrese el año de publicacion');

    const filtroBusqueda = {
        titulo: titulo,
        autor: autor,
        genero: genero,
        formato: formato,
        publicacion: añoPublicacion
    };

    function mostrarLibros(books) {
        books.forEach(libro => {
            console.log('Titulo: ' + libro.titulo + ' - Autor: ' + libro.autor + ' - Genero: ' + libro.genero + ' - Formato: ' + libro.formato + ' - Año de publicacion: ' + libro.publicacion);
        })
    }

    function filtrarTitulo(libro) {
        if (filtroBusqueda.titulo) {
            return libro.titulo === filtroBusqueda.titulo
        }
        return libro
    }

    function filtrarAutor(libro) {
        if (filtroBusqueda.autor) {
            return libro.autor === filtroBusqueda.autor
        }
        return libro
    }

    function filtrarGenero(libro) {
        if (filtroBusqueda.genero) {
            return libro.genero === filtroBusqueda.genero
        }
        return libro
    }

    function filtrarFormato(libro) {
        if (filtroBusqueda.formato) {
            return libro.formato === filtroBusqueda.formato
        }
        return libro
    }

    function filtrarPublicacion(libro) {
        if (filtroBusqueda.publicacion) {
            return libro.publicacion === filtroBusqueda.publicacion
        }
        return libro
    }

    function filtrarLibros() {
        const resultado = listaLibros.filter(filtrarTitulo).filter(filtrarAutor).filter(filtrarGenero).filter(filtrarFormato).filter(filtrarPublicacion);
        if (resultado.length > 0) {
            mostrarLibros(resultado)

        } else {
            console.log(Error);
        }
    }
    filtrarLibros();

} else if (saludo == 2) {
    //Funcion para agregar un libro
    function agregarLibro() {

        let titulo = prompt('Ingrese el titulo del libro');
        let autor = prompt('Ingrese el nombre del autor');
        let genero = prompt('Ingrese el genero del libro (Accion, novela, fantasia, etc)');
        let formato = prompt('Ingrese el formato (Libro, comic, manga)');
        let añoPublicacion = prompt('Ingrese el año de publicacion');

        let libro = {
            titulo: titulo,
            autor: autor,
            genero: genero,
            formato: formato,
            publicacion: añoPublicacion
        };

        listaLibros.push(libro);
    }

    let agregarOtroLibro = true;

    while (agregarOtroLibro) {
        let pregunta = prompt('¿Desea añadir un libro a la lista? (si/no)');

        if (pregunta.toLowerCase() === "si") {
            agregarLibro();
        } else {
            agregarOtroLibro = false;
        }
    }

    console.log(listaLibros);
} else {
    alert("Elija una opcion valida");
}
