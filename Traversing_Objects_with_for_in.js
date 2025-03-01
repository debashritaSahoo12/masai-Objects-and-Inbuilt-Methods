let book = { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 };
for(let details in book){
    console.log(`${details}:${book[details]}`)
}