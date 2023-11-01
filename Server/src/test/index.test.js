const app = require('../app');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS', () => {
    //Describe 1
    describe(`GET /rickandmorty/character/:id`, () => {
        //Test 1.1
        it(`Responde con status: 200`, async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        });

        //Test 1.2
        it(`Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"`, async () => {
            const response = (await agent.get('/rickandmorty/character/1')).body;
            expect(response).toHaveProperty('id');
            expect(response).toHaveProperty('name');
            expect(response).toHaveProperty('species');
            expect(response).toHaveProperty('gender');
            expect(response).toHaveProperty('status');
            expect(response).toHaveProperty('origin');
            expect(response).toHaveProperty('image');

        })

        //Test 1.3
        it(`Si hay un error responde con status: 500`, async () =>{
            await agent.get('/rickandmorty/character/99999999').expect(500);
        });
    });    

    //Describe 2
    describe('GET /rickandmorty/login', () => {
        //Test 2.1
        it('La informacion del login es correcta', async () =>{
            const response = (await agent.get(`/rickandmorty/login?email=darwing@gmail.com&password=asd1234`)).body;
            expect(response.access).toEqual(true);
        });
        //Test 2.2
        it('La informacion del login es incorrecta', async () =>{
            const response = (await agent.get(
                `/rickandmorty/login?email=asdasd&password=asdfasa`
                )).body;
            expect(response.access).toEqual(false);
        })
    });
    //Describe 3
    describe('POST /rickandmorty/fav', () =>{
        const character1 = {id:'1', name: 'Darwing'};
        const character2 = {id: '2', name: 'Lesma'};

        it('Devuelve un personaje en primer llamado', async () => {
            const response = (await agent.post('/rickandmorty/fav').send(character1))
            .body;
            expect(response).toContainEqual(character1);
        })
        it('Devuelve un personaje en primer llamado', async () => {
            const response = (await agent.post('/rickandmorty/fav').send(character2))
            .body;
            expect(response).toContainEqual(character1);
            expect(response).toContainEqual(character2);
        })
    });

    //Describe 4
    describe('DELETE /rickandmorty/fav/:id', () => {
        const character1 = {id:'1', name: 'Darwing'};
        const character2 = {id: '2', name: 'Lesma'};

        it('Devuelve un arreglo con los elementos previos', async () =>{
            const response = (await agent.delete('/rickandmorty/fav/3')).body;
            expect(response).toContainEqual(character1);
            expect(response).toContainEqual(character2);

        });

        it('Elimina correctamente un personaje pasado por ID', async () =>{
            const response = (await agent.delete("/rickandmorty/fav/1")).body;
            expect(response).not.toContainEqual(character1);
            expect(response).toContainEqual(character2);

        })
    });
});