export default class SwapiService {
    _apiBase = 'https://swapi.co/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw  new Error(`Error ${url}` + `, recived ${res.status}`)
        }
        return await res.json();

    };

    async getAllPeople() {
        const results = await this.getResource(`/people/`)
        return results.results;
    }

    getPerson(id) {

        return this.getResource(`/people/${id}`)


    }

    async getAllPlanets() {
        const results = await this.getResource(`/planets/`)
        return results.results;
    }

   getPlanet(id) {
       return this.getResource(`/planets/${id}/`);


    }

    async getAllStarships() {
        const results = await this.getResource(`/starships/`)
        return results.results;
    }

    getStarship(id) {

        return this.getResource(`/starships/${id}`)


    }
}