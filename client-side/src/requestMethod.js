import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGNlODc5NDM0YTk0ZWY1MmM3ZDE2NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjM4MDEwMCwiZXhwIjoxNjYyMzgzNzAwfQ._qHFBBqudk0sL6tE_S6mLaXQzEBXjQAJwLMYn-pS4RY'

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})