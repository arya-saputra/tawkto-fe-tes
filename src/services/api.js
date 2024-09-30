import axios from "axios";

export const getCategories = function() {
    return axios.get("/api/categories");
};

export const getCategory = function(data) {
    return axios.get(`/api/category/${data}`);
};

export const getAuthor = function(data) {
    return axios.get(`/api/author/${data}`);
};