import getConfig from 'next/config';
import { useState, useEffect ,useContext} from 'react';
import { userService } from '../services/user.service';
import axios from 'axios';
const { publicRuntimeConfig } = getConfig();
export const fetchWrapper = {
    get,
    post,
    put,
    delete: _delete,
    publish,
    posts
};

function get(url,data) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(url)
    };
    return fetch(url).then(handleResponse);

    

}

function post(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };    
    return fetch(url, requestOptions).then(handleResponse);
}

function posts(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: {  ...authHeader(url) },
        body:body
    };


    return fetch(url, requestOptions).then(handleResponse);
}

function put(url, body) {
    const requestOptions = {
        method: 'PUT',
        headers: {  ...authHeader(url) },
        body:body
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function publish(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: {  ...authHeader(url) },
        body:body
    };
    return fetch(url, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url) {

    const requestOptions = {
        method: 'DELETE',
        headers:{ 'Content-Type': 'application/json', ...authHeader(url) },
    };
    return fetch(url, requestOptions).then(handleResponse);
}

// helper functions

function authHeader(url) {

    // return auth header with jwt if user is logged in and request is to the api url
    const user = userService.userValue;

    const isLoggedIn = user && user.token;
    const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl);
    if (isLoggedIn && isApiUrl) {
        return { "token": `${user.token}` ,"lang":localStorage.getItem('lang') };
    } else {
        return {};
    }
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if ([401, 403].includes(response.status) && userService.userValue) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                userService.logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}