import { Router } from "express";
import { Request, Response } from "express";
import { getConnection, getRepository } from "typeorm";
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
        this.router.get('/', this.getAllRecord)
        this.router.post('/', this.shortenurl)
        this.router.delete('/:id', this.deleteRecord)
        this.router.get('/:shortcode', this.getRecord)
    }
    private async getRecord(req: Request, res: Response) {
        try {
            const shortCode = req.params.shortcode
            const urlRepo = await getConnection('url').getRepository(Url)
            const record = await urlRepo.find({ where: { shorturlCode: shortCode } })
            //    res.status(200).json(record)
            // console.log(record[0].longurl)
            if (record) {
                return res.redirect(record[0].longurl!)
            } else {
                return res.status(404).json('url nor found')
            }


        } catch (error) {
            res.status(500).json("server error")
        }
    }
    private async getAllRecord(req: Request, res: Response) {
        try {
            const urlRepo = await getConnection('url').getRepository(Url)
            const records = await urlRepo.find()
            res.status(200).json(records)
        } catch (error) {
            res.status(500).json("server error")

        }

    }
    private async shortenurl(req: Request, res: Response) {
        try {
            const baseUrl = 'http://localhost:5000'
            const { longUrl } = req.body

            if (!validUrl.isUri(baseUrl)) {
                return res.status(401).json('Invalid base URL')
            }

            const urlCode = shortid.generate()

            if (validUrl.isUri(longUrl)) {
                const urlRepo = await getConnection('url').getRepository(Url)
                const url = await urlRepo.find({ where: { longurl: longUrl } })

                if (url.length !== 0) {
                    res.status(400).json("url already shortened, check below");
                } else {
                    const shortUrl = baseUrl + '/shorten' + '/' + urlCode
                    const url = new Url();
                    url.longurl = longUrl,
                        url.shorturl = shortUrl
                    url.shorturlCode = urlCode
                    await urlRepo.save(url)
                    res.status(200).json(url)
                }
            } else {
                res.status(400).json('Invalid Url format')
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