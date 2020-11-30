import http from '../http/http'
// https://mcm.meflourish.com/api/www/getVideo
export const getVideoList=()=>{
    http.post('/api/www/getVideo',{
        page:1,
        pageSize:10,
        caseTag:'影视剧'
    }).then(res => {
        return res
    })
}