'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a1 = prompt('Один из последних просмотренных фильмов', '');
const a2 = prompt('На сколько оцените его?', '');
const b1 = prompt('Один из последних просмотренных фильмов', '');
const b2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a1] = a2;
personalMovieDB.movies[b1] = b2;

console.log(personalMovieDB);