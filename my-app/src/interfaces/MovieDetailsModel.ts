import GenreModel from "./GenreModel"
import PersonModel from "./PersonModel"

export default interface MovieDetailsModel{
    posterURL : string,
    backdropURL: string,
    id: number,
    averageRating: number,
    title: string
    releaseDate: string,
    shortDescription: string,
    longDescription: string,
    genres: GenreModel[],
    people: PersonModel[]
}