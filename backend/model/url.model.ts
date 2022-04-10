import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('url')
class Url {
    @PrimaryGeneratedColumn("uuid")
    public id?: string;

    @Column()
    // public longurl?: URL | null;
    public longurl?: string;

    @Column()
    // public shorturl?: URL | null;
    public shorturl?: string;

    @Column()
    public shorturlCode?: string;
}

export default Url