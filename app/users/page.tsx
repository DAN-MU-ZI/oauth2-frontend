"use client";
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [responseData, setResponseData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch('http://localhost:8080/api/v1/users', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const data = await response.json();
                setResponseData(data); // Set the response data
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div>Page Content</div>
            {responseData && <div>{JSON.stringify(responseData)}</div>}
        </div>
    );
};

export default Page;