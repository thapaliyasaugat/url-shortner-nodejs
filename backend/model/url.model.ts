import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('url')
class Url {
    @PrimaryGeneratedColumn("uuid")
    public id?: String;

    @Column()
    // public longurl?: URL | null;
    public longurl?: String;

    @Column()
    // public shorturl?: URL | null;
    public shorturl?: String;
}

export default Url