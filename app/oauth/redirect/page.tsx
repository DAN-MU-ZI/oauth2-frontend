"use client";
import { useEffect } from 'react';

const Page = () => {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        if (token) {
            localStorage.setItem('token', token);

        }
        window.location.href = "/users";
    }, []);
};

export default Page;