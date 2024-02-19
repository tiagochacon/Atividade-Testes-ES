import { Injectable } from "@nestjs/common";
import { generateShortestPath } from "./data-structure/dijkstra";


@Injectable()
export class DogsService {

    async getShortestPath(origin: number, destiny: number) {
        const path = generateShortestPath(origin, destiny);
        return path;
    }
}