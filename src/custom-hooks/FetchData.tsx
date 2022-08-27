import React, { useState, useEffect } from 'react';
import { server_calls } from '../api'

export const useGetData = () => {
		// Syntax: const [stateName, saveStateFunction] = importedHook<requiredDataType>(value passed in);
    const [bookData, setData] = useState<[]>([]);

		// This is a function that will get the data
    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    // call the Function
    useEffect( () => {
        handleDataFetch();
    }, [])
				// We return the data 
        return {bookData, getData:handleDataFetch}
}