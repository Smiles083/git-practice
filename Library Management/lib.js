console.log("Welcome to My Library App");
alert("Hello! Welcome to your personal Library Manager.");

function libraryApp() {
   let library = ["Harry Potter", "The Hobbit", "Things Fall Apart"];

  const option = Number(
    prompt(
      "Please choose an operation:\n 1. View Books\n 2. Add a Book\n 3. Delete a Book\n 4. Exit"
    )
  );

  switch (option) {
    case 1:
      console.log("Your current library:");
      if (library.length === 0) {
        console.log("No books in your library yet!");
      } else {
        for (let i = 0; i < library.length; i++) {
          console.log(`${i + 1}. ${library[i]}`);
        }
      }
      break;

    case 2:
      const newBook = prompt("Enter the name of the book to add:");
      if (newBook) {
        library.push(newBook);
        console.log(`"${newBook}" has been added successfully.`);
      } else {
        console.log("No book name entered!");
      }
      console.log("Updated library:", library);
      break;

    case 3:
      const bookToDelete = prompt("Enter the name of the book to delete:");
      const indexBook = library.indexOf(bookToDelete);

      if (indexBook !== -1) {
        library.splice(indexBook, 1);
        console.log(`"${bookToDelete}" has been deleted successfully.`);
      } else {
        console.log("Book not found in your library!");
      }
      console.log("Updated library:", library);
      break;

    case 4:
      console.log("Thank you for using the Library App. Goodbye!");
      break;

    default:
      alert("Invalid option! Please choose 1, 2, 3, or 4.");
  }
}

libraryApp();
