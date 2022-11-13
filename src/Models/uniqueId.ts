import * as crypto from "crypto";

export class UniqueIdGenerator {

    public createUniqueId(userId: number, site: number, cycleId: number, trim: number = 12) {

        const uuid = crypto.randomBytes(20).toString('hex');
        const string = `${userId}/${uuid}/${site}/${cycleId}`;
        const sha256Hasher = crypto.createHash("sha256");
        const id = sha256Hasher.update(string).digest("hex");
        return id.slice(0, trim);
    }
}