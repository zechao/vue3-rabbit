import httpInstance from '@/utils/http';

export function getBannerAPI(){
    return httpInstance({
        method:'get',
        url:'/home/banner'
    })
}

export function getNewAPI(){
    return httpInstance({
        method:'get',
        url:'/home/new'
    })
}


export function getHotAPI(){
    return httpInstance({
        method:'get',
        url:'/home/hot'
    })
}