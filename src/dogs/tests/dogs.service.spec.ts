import { Test, TestingModule } from '@nestjs/testing';
import { DogsService } from '../dogs.service';
import { generateShortestPath } from '../data-structure/dijkstra';

jest.mock('../data-structure/dijkstra', () => ({
  generateShortestPath: jest.fn(),
}));

describe('DogsService', () => {
  let service: DogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DogsService],
    }).compile();

    service = module.get<DogsService>(DogsService);
  });

  it('should return the shortest path - test 1', async () => {
    const expectedResult = {
      "points": [
        "5",
        78,
        "89"
      ],
      "distances": [
        2.1,
        1.1
      ],
      "distance": 3.2,
      "origin": "Terrier americano sem pelo",
      "destiny": "Cristado chinês"
    };
  
    (generateShortestPath as jest.Mock).mockResolvedValue(expectedResult);
  
    expect(await service.getShortestPath(5, 89)).toEqual(expectedResult);
  });


  it('should return the shortest path - test 2', async () => {
    const expectedResult1 = {
      "points": [
        "20",
        78,
        89,
        60,
        "50"
      ],
      "distances": [
        1,
        1.1,
        1.6,
        2.2
      ],
      "distance": 5.9,
      "origin": "Bull Terrier",
      "destiny": "Retriever da Nova Escócia"
    };

    (generateShortestPath as jest.Mock).mockResolvedValue(expectedResult1);

    expect(await service.getShortestPath(20, 50)).toEqual(expectedResult1);
  });

  it('should return the shortest path - test 3', async () => {
    const expectedResult = {
      "points": [
        "13",
        46,
        25,
        11,
        50,
        60,
        47,
        "76"
      ],
      "distances": [
        2.7,
        2.2,
        1.2,
        2.9,
        2.2,
        1,
        12.2
      ],
      "distance": 22.7,
      "origin": "Bernese mountain",
      "destiny": "Spaniel Tibetano"
    };
  
    (generateShortestPath as jest.Mock).mockResolvedValue(expectedResult);
  
    expect(await service.getShortestPath(13, 76)).toEqual(expectedResult);
  });
});