import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {

    const history = useHistory();

    const [countryName, setCountryName] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountryName(event.target.value);
    }

    const onSubmit = () => {
        history.push("/country",countryName);
    }

    return (
        <div>
            <h2>This is home</h2>
            <div>
                <TextField
                    placeholder="Country Name"
                    value={countryName}
                    onChange={handleInputChange}
                    variant="outlined"
                    sx={{width: "25%", mb: 3}}
                />
            </div>
            <Button variant="contained" onClick={onSubmit} sx={{width: "25%"}} size="large">Submit</Button>
        </div>
    );
};

export default Home;