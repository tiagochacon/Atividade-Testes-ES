import { Controller, Get, Param } from "@nestjs/common";
import { DogsService } from "./dogs.service";

@Controller('dogs')
export class DogsController {
	constructor(private readonly dogsService: DogsService) {}

    @Get(':origin/:destiny')
    async getShorestPath(@Param('origin') origin: number, @Param('destiny') destiny: number) {
        return this.dogsService.getShortestPath(origin, destiny);
    }

}