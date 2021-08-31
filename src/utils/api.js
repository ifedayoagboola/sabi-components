import axios from 'axios';
// import { showToast, callbackToast } from '.';
import { sessionStorage } from 'es-storage';

export const BASE_URL = '';

const token = sessionStorage.getObject('token', null);

const apiResource = () => {
    let hide;
    const api = axios.create({
        baseURL: BASE_URL,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': BASE_URL,
        },
    });
    api.interceptors.request.use(
        config => {
            // console.log('config -> ', config);
            if (!token) return config;

            config.headers['Authorization'] = 'Bearer ' + token.access;
            return config;
        },
        error => Promise.reject(error)

    );

    api.interceptors.response.use(response => {
        hide?.();
        return response
    }, error => {
        hide?.();
        if (error.response) {
            if (+error.response.status === 401) {
                sessionStorage.clear();
                // showToast('Please login again', 'error');
            } else {
                // showToast(error.response.data.error, 'error');
            }
        } else {
            // showToast(error.message || 'An error occured, please try again!', 'error');
        }
        return Promise.reject(error);
    });

    return {
        login: form => {
            // hide = callbackToast('Login you into your account...');
            return api.post('v1/login', form).then(({ data }) => data);
        },
        logout: () => {
            sessionStorage.clear();
            return api.get('v1/logout').then(({ data }) => data);
        },
        register: form => {
            // hide = callbackToast('Creating your account...');
            return api.post('v1/sign-up', form).then(({ data }) => data);
        },
        forgotPassword: form => {
            // hide = callbackToast('Sending password reset mail...');
            return api.post('v1/forgot-password', form).then(({ data }) => data);
        },
        resetPassword: form => {
            // hide = callbackToast('Sending password reset mail...');
            return api.post('v1/reset-password', form).then(({ data }) => data);
        },
        udpateUser: (id, form) => {
            // hide = callbackToast('Updating user profile...');
            return api.post(`v1/users/${id}`, form).then(({ data }) => data);
        },
        addSingleEmployee: form => {
            // hide = callbackToast('Creating employee...');
            return api.post('v1/employee', form).then(({ data }) => data);
        },
        addBulkEmployee: form => {
            // hide = callbackToast('Creating employees...');
            return api.post('v1/employee/bulk', form).then(({ data }) => data);
        },
        getAllEmployee: () => {
            // hide = callbackToast('Fetching all employees...');
            return api.get('v1/employee').then(({ data }) => data);
        },
        getSingleEmployee: id => {
            // hide = callbackToast('Fetching employee...');
            return api.get(`v1/employee/${id}`).then(({ data }) => data);
        },
        deleteEmployee: id => {
            // hide = callbackToast('Deleting employee...');
            return api.delete(`v1/employee/${id}`).then(({ data }) => data);
        },
        allBanks: () => {
            // hide = callbackToast('Getting all banks...');
            return api.get('v1/banks').then(({ data }) => data);
        },
        resolveSingleBank: form => {
            // hide = callbackToast('Resolving bank information...');
            return api.postt('v1/bank/resolve', form).then(({ data }) => data);
        },
        fundWallet: form => {
            // hide = callbackToast('Submitting wallet details...');
            return api.postt('v1/bank/resolve', form).then(({ data }) => data);
        },
    }
}

export const api = apiResource();
