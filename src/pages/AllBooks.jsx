import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import TableView from "../components/TableView";
import CardView from "../components/CardView";

const AllBooks = () => {
  const loadedBooks = useLoaderData();
  const [books, setBooks] = useState(loadedBooks);
  const [tableView, setTableView] = useState(false);

  const filteredBooks = books.filter((book) => book.quantity > 0);
  // console.log(filteredBooks);
  // console.log(books);

  const handleShowAvailable = () => {
    setBooks(filteredBooks);
  };

  return (
    <div className="my-6 mx-auto w-11/12 font-oswald">
      <Helmet>
        <title>All Books - Study Shelf</title>
      </Helmet>
      <div>
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">
            Explore Our{" "}
            <span className="font-pacifico bg-gradient-to-br from-purple-400 via-purple-700 to-purple-950 bg-clip-text text-transparent">
              Collections
            </span>
          </h2>
        </div>

        <div className="flex gap-2 items-center justify-between lg:justify-center mb-6">
          {/* toggle view */}
          <div>
            <select
              className="bg-purple-800 text-white rounded-md p-2"
              onChange={(e) =>
                setTableView(e.target.value === "Table View" ? !tableView : "")
              }
            >
              <option value="Card View">Card View</option>
              <option value="Table View">Table View</option>
            </select>
          </div>

          <div>
            {/* <select
              className="bg-purple-800 text-white rounded-md p-2"
              onChange={(e) =>
                setBooks(
                  e.target.value === "Show Available Books"
                    ? filteredBooks
                    : loadedBooks
                )
              }
            >
              <option value="All Books">All Books</option>
              <option value="Show Available Books">Show Available Books</option>
            </select> */}

            <button
              onClick={handleShowAvailable}
              className={`px-4 py-1.5 text-lg font-medium text-gray-900 border border-purple-900 rounded-lg`}
            >
              Show Available Books
            </button>
          </div>
        </div>

        {tableView ? (
          <TableView books={books}></TableView>
        ) : (
          <CardView books={books}></CardView>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
