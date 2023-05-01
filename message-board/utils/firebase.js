
// var admin = require("firebase-admin");
const { initializeApp } = require('firebase-admin/app');

const app = initializeApp({
    "type": "service_account",
    "project_id": "message-board-project-f7d2c",
    "private_key_id": "5e326e0d542265f42cd54bd9f8b92ac1d69528c0",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC9cnKM4art8bEz\nri2cbgBG0hNNP8eFI9dyYqQI5P+ZtJr7ScYT3A6oGHci3UZdOlbtrCp+Eb4lJPh9\n46ViPZUVkfO6HkMkbZkjMOd/jytYtDA3fORnvfb3IHi37ffr0JTmK/3+HSTdVJ/e\nBMmUhj91p9hcnTIiqTFZ0IpIF0r2QMS2SrjtwZPLn9lW4sgJZLUgvIL+PsduGS1e\nnWHpW9KK78N1Bw+NnZ88mlMsS6sYnT9vZ5d2go9sZrr4ECTEvtLbFBhyUBqYF+C3\nrZsOxUJZzNcGP/41XpGSXluxj3Hrn8LV92RT6QUez5yBl0KJexH1KA/a+WELvrk+\nOB2r4KtFAgMBAAECggEAIzkZNTpsBmuOj9ZNoq0NHh3G+vDlzspYL2tJpmG1aEWd\nHyWbT2v1yakq1W+guoqzSONezyvLV6qlDPr7b+WVR3pof21K/IXoGBPqptveqlJu\nOJLfAK7gMRh3eXMkSlLwrE73nXybsw8d3jCzrgq718tKPgX4IVul0lYkr7ys8lXM\nEccPD6HVkxXqeV+vyXVvulM1jOKHMtMcENXc3pMPazjYlUbwV9frdM6dAq+7IQjE\njZ54On3Xc09heZEBntql8xQ40G/h0FfPftmRtjfbV1H7hPsjP8jObgpbL0vaFb98\ngv65CJvEmq5DuQVndY4E0Be8WnIR8daCU8YSFZYYDQKBgQD2sfTjeU+71Zb3S5v/\nc2fPcRKmbTUqXNj5vWVI1EnAa8qa8oR6O9XYKNiexEKd5j3Z4Picf8+q/1j+KLm5\nwtJmckSaj2WmSwwMubPu5N9nGBmu8dgMQXBX4wdMuoRsAZJi/ut0RA7e8YMUIoJC\nrm+pAYMhkC7A/IvItWRApuRyUwKBgQDEl7a7k+XlOD8DNjzHmGuXjp3zrMoUSd1g\nJmDiLOrzjAgQc4+43zs9PXAbnpTPabazGBY9WrPGoaTSKBejS3NvKtme23wg44YQ\nfEL70J3ojUj1DG39suJZuj+bcQCICLwq3Xh4zi5JluUoZPDlJ0x9TrrK0wzBNtWR\n9w5Fx5zpBwKBgQCizVohbIOUICba2IkAkjamDacTMeruJAwE9FqNL5vkYr54dye6\nSxaa6onabQbRkYqr6O3oyehQnucqA9JdpxaXCT4BCjU5AznWhA8czuon7R21+GBt\n5hmvxmGg305YwMjMkBLuzaNKufOZLBTu0JNb42WYlsBkF8ZgFGUuzXThhQKBgBWc\n7E0A/IRPw7Wxr8rtud5monzYoTrLyBe7AGm9MHNoELbmTYWwnQ2lhH60131aDOjx\nm/hQ0XTj7n/gQoEEWYN+PYCWdrYS7XlAgAi5LbMUXVH7dNgwY2wj6rxHFxzdgPph\ncM4vNK2IdlcTidxXjrQ0BJspyrwvMBmlBJ+tS1XfAoGAP+wEEF3zMMcXL1qQFjNt\nipRYFtxVsgoszwN7J+KMhaModTAtyhDwPKzZsOkiHbSdbMHC13Ycv5RnLQZI9a3O\nohrbMsxFL+j6VZobZouMQjYgxQOM4d9kBVtbUt3lMjFG1qjcffeQf7wKctu6LVNJ\nReltFacnlh09psZTltQ1hDc=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-mvkm1@message-board-project-f7d2c.iam.gserviceaccount.com",
    "client_id": "109767667650634494780",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-mvkm1%40message-board-project-f7d2c.iam.gserviceaccount.com"
});

import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';



var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


export const auth = getAuth(app);
export const db = getFirestore(app);