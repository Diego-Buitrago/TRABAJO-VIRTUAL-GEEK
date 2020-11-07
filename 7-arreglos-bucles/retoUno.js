'use strict';

function workWithMovies() {
    const movies = [
        "Rapido y furiosos",
        "Super man",
        "Policias y ladrones"
    ]

    movies[3] = "Capitan america";

    console.log(movies);

    movies[2] = "Busqueda implacable";

    console.log(movies);

    movies[1] = "Fuga de petoria";

    console.log(movies);
}

workWithMovies();