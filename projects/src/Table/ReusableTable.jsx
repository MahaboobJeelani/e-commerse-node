// Import necessary dependencies
import React, { useState } from 'react';
// import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, TextField } from '@material-ui/core';

// Sample data (you can replace this with your hard-coded data)
const initialData = [
    { id: 1, name: 'John Doe', age: 25, city: 'New York' },
    // Add more data as needed
];

const ReusableTable = () => {
    const [data, setData] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState(null);

    // Function to handle sorting
    const handleSort = (column) => {
        setSortBy(column);
        setData([...data].sort((a, b) => (a[column] > b[column] ? 1 : -1)));
    };

    // Function to handle filtering
    const handleFilter = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filteredData = initialData.filter((item) =>
            Object.values(item).some((value) => value.toString().toLowerCase().includes(term))
        );
        setData(filteredData);
    };

    return (
        <div>
            <TextField
                label="Search"
                variant="outlined"
                value={searchTerm}
                onChange={handleFilter}
                style={{ marginBottom: '20px' }}
            />
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell onClick={() => handleSort('name')}>Name</TableCell>
                            <TableCell onClick={() => handleSort('age')}>Age</TableCell>
                            <TableCell onClick={() => handleSort('city')}>City</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.age}</TableCell>
                                <TableCell>{item.city}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ReusableTable;
