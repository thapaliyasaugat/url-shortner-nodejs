import { Router } from "express";
import { Request, Response } from "express";
import { getConnection } from "typeorm";
import Url from "../model/url.model";
import validUrl from "valid-url";
import shortid from "shortid"
class urlController {
    private router: Router;
    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }
    public initializeRoutes() {
        this.router.post('/', this.shortenurl)
        this.router.delete('/:id', this.deleteRecord)
    }
    private async shortenurl(req: Request, res: Response) {
        try {
            if (!validUrl.isUri(req.body.longUrl)) {
                return res.status(400).json('Invalid URL')
            }
            const inputUrl = new URL(req.body.longUrl);
            if (inputUrl.protocol !== "https:" && inputUrl.protocol !== "http:") {
                return res.status(400).json('Invalid URL')
            }
            const baseUrl = inputUrl.protocol + "//" + inputUrl.host;
            console.log("baseurl ", baseUrl)

            const urlCode = shortid.generate()
            const urlRepo = await getConnection('url').getRepository(Url);
            const urlExists = await urlRepo.find({ where: { longurl: req.body.longUrl } })
            if (urlExists.length !== 0) {
                res.status(400).json("url already shortned")
            } else {
                const shortUrl = baseUrl + '/' + urlCode
                console.log(shortUrl)
                const urlitem = new Url();
                urlitem.longurl = req.body.longUrl;
                urlitem.shorturl = shortUrl;
                await getConnection('url').manager.save(urlitem)
                res.json(urlitem)
            }
        }
        catch (error) {
            res.status(500).json("server error")
        }

    }
    private async deleteRecord(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const regex_uuid = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
            if (!regex_uuid.test(id)) {
                res.status(400).json("invalid id")
            }
            await getConnection('url').manager.delete(Url, { id });
            res.status(200).json("record deleted sucessfully")
        } catch (error) {
            res.status(500).json("server error")

        }

    }
    public getRouter(): Router {
        return this.router;
    }
}

export default urlController