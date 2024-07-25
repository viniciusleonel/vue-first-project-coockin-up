// Início da Seleção
// Importa o tipo ICategoria da interface ICategoria
import type ICategoria from "@/interfaces/ICategoria"

// Função assíncrona para obter as categorias
export async function obterCategoria() {
    // Faz uma requisição assíncrona para obter as categorias de um arquivo JSON remoto
    const resposta = await fetch("https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json")

    // Converte a resposta para um array de objetos do tipo ICategoria
    const categorias: ICategoria[] = await resposta.json()

    // Aguarda 3 segundos antes de retornar as categorias (comentado por enquanto)
    // await new Promise((resolver) => {
    //     setTimeout(resolver, 3000)
    // })

    // Retorna as categorias obtidas
    return categorias
}
// Fim da Seleção

// Meu gist
// https://gist.githubusercontent.com/viniciusleonel/b180f5274711e2ac60228472b733afee/raw/21c1303b8923164dbacd9f53d2fe64e06737edd0/categorias.json