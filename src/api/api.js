import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "606f6328-27be-4532-9d54-3edb7693383b"
    }
});


export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(
            "users",
            {
                params: {
                    page: currentPage,
                    count: pageSize
                }
            }
        ).then(response => response.data);
    },
    followUser: (userId) => {
        return instance.post("follow/" + userId).then(response => response.data);
    },
    unfollowUser: (userId) => {
        return instance.delete("follow/" + userId).then(response => response.data);
    }
}



export const getProfile = (userId) => {
    return instance.get("profile/" + userId).then(response => response.data);
}
