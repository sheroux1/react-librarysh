import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        author_first: 'First Name',
        author_last: 'Last Name',
        book_length: 'Book Length',
        title: 'Title',
        isbn: 'ISBN',
        is_fiction: 'Fiction/Non-Fiction',
    },
    reducers: {
        chooseAuthorFirst: (state, action) => { state.author_first = action.payload},
        chooseAuthorLast: (state, action) => { state.author_last = action.payload},
        chooseBookLength: (state, action) => { state.book_length = action.payload},
        chooseTitle: (state, action) => { state.title = action.payload},
        chooseISBN: (state, action) => { state.isbn = action.payload},
        chooseIsFiction: (state, action) => { state.is_fiction = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseAuthorFirst, chooseAuthorLast, chooseBookLength, chooseISBN, chooseTitle, chooseIsFiction} = rootSlice.actions;