import axios from 'axios';
import { BASE_URL } from '../../constants/Baseurls';
export const LoginApi = (loginData: any) => {
    var data = JSON.stringify({
        "email": loginData.Email,
        "password": loginData.Password,
        "device_token": "zasdcvgtghnkiuhgfde345tewasdfghjkm"
    });

    var config = {
        method: 'post',
        url: BASE_URL + '/api/login',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': 'OGubEEXjhqWurXnPmrrADzVe9yqq2ut2D2O8Mr2x=eyJpdiI6Ijl0d3Q3bjZ6R2dyamZ1Ym5QajFkSmc9PSIsInZhbHVlIjoibGprS0V5dnNYMjFGbmI5ejdCTmxWcXNGT1FHSUxKRm1FVUUyR2k0SFpOdmNHZ3hMODhGOTk4Q2hFcWxNK3FCMVEyYVZZQm9zSUZhUWx5ODdwTWthVnNxQUU5cEdXYlpjM1wvVEZ3SGk1VFl5ejNYc3dicWgyQjNENXRqeFZ6U3FPa1MyV0xLNTQzY1pUQWFzZHRCWVAwQzJPQ2R5YmxSS2NFdVwvNXdcLzVLd3g3SGM1TnBWN0lHdllQZkg0bG5IMGVEdlZqdnROdmgxeU1yYzZiU2FkUnZQa0lCckUwU3ZjV1EzRnhEOWc1UjVGaXAwc0VPZkhuSGJramZJelFwS1pGTlptRFBDTXlxQWFSeDNWZ0dsdVRod2cyUmNJOUFjZHd1eEc2MnZXaTJaSW9cLzIySkNaaDY4TWtnc2trcEVEcVhwS21UOFZubmo4bUtoZXBQTnZYWW9hV2RKZVNXUmhwQWNrZzhCMm81VHRGdz0iLCJtYWMiOiJhM2JiOTBiOWQxYmI4ZjdmNTFjZmU2ZGNjYjlhYWEyYmMwODNkOGI0NTgzMzI3YTQ3OGM4NzA3ZGY2OWE0MzFlIn0%3D; laravel_session=eyJpdiI6IllDQXdtd0dnZW9KYlVEQW5XOENuOVE9PSIsInZhbHVlIjoibDhZTVFKUThEQjdudFdqSnR1S2JiXC9MWmh3UElCY0VuYzBhOFRYR0YxKytyYXRxTERWM1gzd1FXVExRZFVaRm5PRWR4enNkeXNrXC9vVEEwMEJFUjh0eDRBUXc4ZWZwY1lJYWF0aGtyd2Y5Z1lOT0dTSjNXSXdscGRTeGNIOWxBRiIsIm1hYyI6Ijk3MDlkYmM2ZjE0NjdhMDFkMDk1N2VhOTc1NTdjYmRjYmMwNjMzMWE5YWY1ZDdkYTIzYWQyYzQ0OTYwNmQ4NTQifQ%3D%3D'
        },
        data: data
    };

    return axios(config);

}