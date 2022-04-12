import { MetadataAlreadyExistsError } from "typeorm";
import urlController from "../url.controller";
import axios from 'axios'
describe('url service', () => {
    it("it should pass", async () => {
        expect(true).toBe(true);
    });

    it('get all record', async () => {
        const apiUrl = "http://localhost:5000/shorten";
        await axios.get(apiUrl)
            .then(res => {
                expect(res.status).toBe(200);
                expect(res.data).toBeDefined();
            }).catch(err => {
                throw new Error('should be sucessfull')
            })
    })
})