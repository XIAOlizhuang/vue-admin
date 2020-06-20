import service from '@/utils/request'

/**
 * 获取验证码
 */
export function GetSms(data){
    return service.request({
        method: "post",
        url: "/getSms",
        data
        //data: data es6写法,可以只写一个data
    })
}