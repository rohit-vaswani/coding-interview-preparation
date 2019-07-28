
let request = {"userId":"3d040931-7b0b-4138-8053-414a705f43dd","config":{"ENABLE_CAPE_CW":true,"PERSONA_API_TIMEOUT":3000,"region":"MH","skipCache":false},"showId":43};
let res = {
    "data": [
      {
        "title": "Kairav, Kartik Fun Time",
        "contentId": 1000238387,
        "uri": "https://api.hotstar.com/o/v1/episode/detail?id=575092&contentId=1000238387&offset=0&size=20&tao=0&tas=5",
        "description": "Kairav enjoys his time with Kartik, while Naira gets a clue regarding his location. Later, Kartik puts Kairav to sleep as Naira reaches home.",
        "duration": 1281,
        "contentType": "EPISODE",
        "contentProvider": "Directors Kut Productions",
        "cpDisplayName": "Directors Kut Productions",
        "cpLogoUrl": "https://secure-media.hotstar.com/static/NewsV2/PartnerLogos/hotstar.png",
        "assetType": "EPISODE",
        "genre": [
          "Drama"
        ],
        "lang": [
          "Hindi"
        ],
        "channelName": "StarPlus",
        "seasonNo": 65,
        "episodeNo": 368,
        "premium": false,
        "live": false,
        "hboContent": false,
        "vip": false,
        "encrypted": false,
        "startDate": 1561595400,
        "endDate": 4102424940,
        "broadCastDate": 1561651200,
        "showName": "Yeh Rishta Kya Kehlata Hai",
        "showId": 43,
        "showShortTitle": "Yeh Rishta",
        "seasonName": "Chapter 65",
        "line1": "Happy Days",
        "line2": "Yeh Rishta Kya Kehlata Hai",
        "line3": "Kairav, Kartik Fun Time",
        "playbackUri": "https://api.hotstar.com/h/v1/play?contentId=1000238387",
        "images": {
          "h": "sources/r1/cms/prod/6134/516134-h",
          "m": "sources/r1/cms/prod/6444/516444-m"
        },
        "contentDownloadable": false,
        "playbackType": "INTERNAL",
        "monetisable": true,
        "langObjs": [
          {
            "id": 9,
            "name": "Hindi",
            "iso3code": "hin",
            "detailUrl": "https://api.hotstar.com/o/v1/language/detail?id=9&offset=0&size=20"
          }
        ],
        "genreObjs": [
          {
            "id": 3,
            "name": "Drama",
            "detailUrl": "https://api.hotstar.com/o/v1/genre/detail?id=3&offset=0&size=20"
          }
        ],
        "languageSelector": 1,
        "drmClass": "BEST_EFFORT",
        "channelObj": {
          "id": 3,
          "name": "StarPlus",
          "detailUrl": "https://api.hotstar.com/o/v1/channel/detail?id=3&offset=0&size=20"
        },
        "contentStartPointSeconds": 0,
        "parentalRating": 1,
        "meta": {
          "contentTitle": "Kairav, Kartik Fun Time",
          "contentId": 1000238387,
          "episodeTitle": "Kairav, Kartik Fun Time",
          "seriesName": "Yeh Rishta Kya Kehlata Hai",
          "contentType": "EPISODE",
          "seasonName": "Chapter 65",
          "seasonNo": 65,
          "episodeNo": 368,
          "broadcastDate": "2019-06-27T16:00:00.000Z",
          "isPremium": false,
          "isLive": false,
          "isReplay": false,
          "isHighlight": false,
          "duration": 1281,
          "percentage": 13.29749375975039
        },
        "image": {
          "h": "sources/r1/cms/prod/6134/516134-h",
          "m": "sources/r1/cms/prod/6444/516444-m"
        },
        "percentage": 13.29749375975039,
        "isCWItem": true,
        "isNextEpisode": false,
        "isNewEpisode": false,
        "timestamp": 1561714251268
      }
    ]
};

console.log(transform(request, res));

function transform(request = {} , res = {}){

    let { data = [] } = res;
    const { showId : reqShowId , contentIds : reqContentIds = [] } = request;

    let isRequestedContent = (showId , contentId) => ( showId === reqShowId  || reqContentIds.includes(contentId));

    let defaultResponseData = {
        items:{},
        updated_at: 0,
        updatedAt: -1,//?
        orderedContentIds:[],
        multiget:{
            results:{
                map:{}
            }
        },
        reqShowId: undefined,
    }

     let responseData = data.reduce( (responseData , dataElem = {}) => {
    
        let { contentId : item_id , percentage : watched, timestamp , showId } = dataElem;

        if(!isRequestedContent(showId,item_id)){return responseData};

        responseData.items[item_id] = {item_id,watched,timestamp,showId};
        responseData.multiget.results.map[item_id] = dataElem;
        responseData.orderedContentIds.push(item_id+'');
        responseData.reqShowId = reqShowId!=undefined && showId === reqShowId ? showId :  undefined;

        return responseData;

    } , defaultResponseData);



    let response = {
        data: responseData,
        status: true,
        httpStatus: 200
    }


    return response;
}