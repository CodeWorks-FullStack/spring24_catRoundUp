
// PRETEND FOR RIGHT NOW
const fakeDbCats = [
  { name: 'Pickle', color: 'orange', age: 3, isFeisty: true },
  { name: 'Spunky', color: 'calico', age: 5, isFeisty: false },
  { name: 'Brody', color: 'orange', age: 10, isFeisty: false },
  { name: 'Beano', color: 'brown', age: 8, isFeisty: true },
]

// NOTE the services job is to interact with the database, getting items, or posting them, or updating/ deleting all the fun stuff
class CatsService {
  createCat(catData) {
    fakeDbCats.push(catData)
  }
  getCats() {
    // const cats = AppState.cats
    const cats = fakeDbCats //
    return cats
  }

}

export const catsService = new CatsService()
