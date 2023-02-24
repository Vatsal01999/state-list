const express = require('express');
const app = express();
const dotenv = require("dotenv");

// Define a fixed array of data
const data = [
    { id: 1, name: 'Andhra Pradesh' },
    { id: 2, name: 'Arunachal Pradesh' },
    { id: 3, name: 'Assam' },
    { id: 4, name: 'Bihar' },
    { id: 5, name: 'Chhattisgarh' },
    { id: 6, name: 'Goa' },
    { id: 7, name: 'Gujarat' },
    { id: 8, name: 'Haryana' },
    { id: 9, name: 'Himachal Pradesh' },
    { id: 10, name: 'Jammu and Kashmir' },
    { id: 11, name: 'Jharkhand' },
    { id: 12, name: 'Karnataka' },
    { id: 13, name: 'Kerala' },
    { id: 14, name: 'Madhya Pradesh' },
    { id: 15, name: 'Maharashtra' },
    { id: 16, name: 'Manipur' },
    { id: 17, name: 'Meghalaya' },
    { id: 18, name: 'Mizoram' },
    { id: 19, name: 'Nagaland' },
    { id: 20, name: 'Odisha' },
    { id: 21, name: 'Punjab' },
    { id: 22, name: 'Rajasthan' },
    { id: 23, name: 'Sikkim' },
    { id: 24, name: 'Tamil Nadu' },
    { id: 25, name: 'Telangana' },
    { id: 26, name: 'Tripura' },
    { id: 27, name: 'Uttarakhand' },
    { id: 28, name: 'Uttar Pradesh' },
    { id: 29, name: 'West Bengal' },
    { id: 30, name: 'Andaman and Nicobar Islands' },
    { id: 31, name: 'Chandigarh' },
    { id: 32, name: 'Dadra and Nagar Haveli' },
    { id: 33, name: 'Daman and Diu' },
    { id: 34, name: 'Delhi' },
    { id: 35, name: 'Lakshadweep' },
    { id: 36, name: 'Puducherry' }
]


// Define a search route
app.get('/states', (req, res) => {
    const { name } = req.query; // Get the search query from the request

    // Filter the data array to find matching items
    const results = data.filter(item => {
        return item.name.toLowerCase().startsWith(name.toLowerCase());
    });

    res.json(results); // Return the matching items as JSON
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server started on port 3000');
});
