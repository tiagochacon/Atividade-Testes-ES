import { dogs } from "../data";
import { Queue } from "./helpers/queue";

// Define o tipo de informação que será retornada
export type Info = {
    points: number[],
    distances: number[]
    distance: number,
    origin: string,
    destiny: string,
}

// Função para gerar o caminho mais curto entre dois pontos
export function generateShortestPath(origin: number, destiny: number): Info {
    // Inicializa o grafo e outras variáveis necessárias
    const graph = dogs
    const size = graph.length
    const visited = Array(size).fill(false);  
    // rastrear vertices visitados durante a execução do algoritmo com tamanho size e preenchido com false
    const distances = Array(size).fill(Number.MAX_VALUE); 
    // rastrear a menor distância conhecida de cada vértice a partir do vértice de origem
    const predecessor = Array(size).fill(null);
    //  rastrear o vértice anterior para cada vértice no caminho mais curto encontrado até agora
    const queue =  new Queue();
    //usada para determinar a ordem em que os vértices são visitados
    // O vértice com a menor distância conhecida é sempre visitado primeiro  -> FILA DE PRIORIDADE

    // Mensagem de erro a ser retornada se o caminho não for encontrado
    const errorMessage = {
        points: [],
        distances: [],
        distance: Number.MAX_VALUE,
        origin: dogs[origin].data.name,
        destiny: dogs[destiny].data.name,
    }

    // Inicializa a distância do ponto de origem como 0 e adiciona à fila
    distances[origin] = 0; // a distância do ponto de origem para ele mesmo é 0
    queue.add([origin, distances[origin]]);

    try{
    // Enquanto houver elementos na fila
    while(queue.length() > 0){
        const currentVertex = queue.pop(); // remove o vértice de maior prioridade da fila
        if (currentVertex == undefined) return errorMessage  // se não houver vértices na fila, retorna a mensagem de erro

        const v_i =  currentVertex[0]; // índice do vértice atual
        const v_dist =  currentVertex[1]; // distância do vértice atual

        // Se o vértice já foi visitado, pula para o próximo
        if(visited[v_i]) continue;

        visited[v_i] = true;
        
        // Se o vértice atual é o destino, constrói o caminho e retorna
        if(v_i == destiny) {
            const foundPath = buildPath(predecessor, destiny);

            return {
                points: foundPath.points,
                distances: foundPath.weight,
                distance: distances[destiny],
                origin: dogs[origin].data.name,
                destiny: dogs[destiny].data.name
            }
        }

        // Para cada vizinho do vértice atual, atualiza as distâncias se necessário
        graph[v_i].edges.forEach(neighbor => {
            const neighbor_i = neighbor.point
            const neighbor_dist = neighbor.weight
            const distance = v_dist + neighbor_dist

            if(distance < distances[neighbor_i]) {
                distances[neighbor_i] = distance;
                predecessor[neighbor_i] = v_i;
                queue.add([neighbor_i, distance])
            }
            
        })
    }
    // Se o caminho não foi encontrado, retorna a mensagem de erro
    return errorMessage
    } catch (error) {
        console.log(error)
        return errorMessage
    }
}

// Função auxiliar para construir o caminho a partir do vetor de predecessores
function buildPath(predecessor: number[], destiny: number) {
    const points: number[] = []; // rastrear os vértices visitados durante a execução do algoritmo
    const weight: number[] = []; // rastrear o peso de cada aresta no caminho mais curto encontrado até agora
    const path: {
        points: number[],
        weight: number[]
    } = {points: [], weight: []} // rastrear o caminho mais curto encontrado até agora
    let vertice = destiny;  // vértice atual

    // Enquanto não chegar na origem, adiciona o vértice e o peso ao caminho
    while (vertice !== null) {
        const last = vertice // último vértice visitado
        points.unshift(vertice);    // adiciona o vértice ao início do array
        vertice = predecessor[vertice]; // atualiza o vértice atual para o vértice anterior
        if(vertice  === null || last === null) continue // se o vértice atual ou o último vértice visitado for nulo, pula para o próximo

        const currentWeight = dogs[last].edges.filter(point => point.point == vertice)[0].weight 
        // peso da aresta entre o vértice atual e o vértice anterior
        weight.unshift(currentWeight) // adiciona o peso ao início do array
    }

    path.points = points 
    path.weight = weight

    return path
}