import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@material-ui/core';
import { BookForm } from '../BookForm';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'author_first', headerName: 'First Name', flex: 1 },
    { field: 'author_last', headerName: 'Last Name', flex: 1 },
    { field: 'book_length', headerName: 'Book Length', flex: 1 },
    { field: 'is_fiction', headerName: 'Fiction?', flex: 1 },
    { field: 'isbn', headerName: 'ISBN', flex: 1 },
];

interface gridData {
    data: {
        id?:string
    }
}
export const Bookshelf = () => {

    let { bookData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data:{}});
    const [selectionModel, setSelectionModel] = useState<any>([]);
    

    let handleOpen = () => {
        setOpen(true)
    };
    let handleClose = () => {
        setOpen(false)
    };

    let deleteData = () => {
        server_calls.delete(selectionModel);
        getData();
        setTimeout( () => { window.location.reload(); }, 1000)
    }
    return (
        <div style={{ height: 400, width: '100%' }}>
            <h2>My Bookshelf</h2>

        <DataGrid rows={ bookData } columns={ columns } pageSize={ 6 } checkboxSelection={true} 
        onSelectionModelChange={ (item) => {
            setSelectionModel(item)
						// console.log(item)
          }}
/>

        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Book {selectionModel}</DialogTitle>
            <DialogContent>
                <DialogContentText>Update Contact</DialogContentText>
                    <BookForm id={selectionModel!}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">Cancel</Button>
                <Button onClick={handleClose} color="primary">Done</Button>
            </DialogActions>
        </Dialog>
            
        </div>
    )
}
