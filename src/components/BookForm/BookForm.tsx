import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseAuthorFirst, chooseAuthorLast, chooseTitle, chooseISBN, chooseBookLength, chooseIsFiction } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

interface BookFormProps {
    id?: string;
    data?:{}
};

interface BookState {
    author_first: string;
    author_last: string;
    title: string;
    book_length: number;
    isbn: string;
    is_fiction: boolean;
};
export const BookForm = (props:BookFormProps) => {

    const dispatch = useDispatch(); // This is a Redux-specific hook that updates the store
    const store = useStore();
    const title = useSelector<BookState>(state => state.title);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)
        // The ! is for strictly typed Typescript stuff
        if(props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated:${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            // Dispatch basically updates our state / Redux store
            dispatch(chooseAuthorFirst(data.author_first));
            dispatch(chooseAuthorLast(data.author_last));
            dispatch(chooseTitle(data.title));
            dispatch(chooseBookLength(data.book_length));
            dispatch(chooseISBN(data.isbn));
            dispatch(chooseIsFiction(data.is_fiction));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="title">Title</label>
                    <Input {...register('title')} name="title" placeholder='Title'/>
                </div>
                <div>
                    <label htmlFor="author_first">Author's First Name</label>
                    <Input {...register('author_first')} name="author_first" placeholder='First Name'/>
                </div>
                <div>
                    <label htmlFor="author_last">Author's Last Name</label>
                    <Input {...register('author_last')} name="author_last" placeholder='Last Name'/>
                </div>
                <div>
                    <label htmlFor="book_length">Length/No. of Pages</label>
                    <Input {...register('book_length')} name="book_length" placeholder='Book Length'/>
                </div>
                <div>
                    <label htmlFor="is_fiction">Fiction?</label>
                    <Input {...register('is_fiction')} name="is_fiction" placeholder='true/false'/>
                </div>                
                <div>
                    <label htmlFor="isbn">ISBN</label>
                    <Input {...register('isbn')} name="isbn" placeholder='ISBN'/>
                </div>                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}