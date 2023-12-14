---
aliases: 
cssclasse: 
date-created: 2023-11-12
date-modified: 2023-11-12
tags:
  - code
---

## Get All User Public Data by This Link:

[instagram.com/web/search/topsearch/?query=olga_bardukov](https://www.instagram.com/web/search/topsearch/?query=olga_bardukov)

---

## Instagram API Way

Summarize from this tut [Get Started - Instagram Platform](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started)

| app       | App ID           | App Secret                       | 
| --------- | ---------------- | -------------------------------- |
| instagram | 1024389335345491 | c9ff946e0b5f17c18fde20773a7f7d27 |
| FB        | 486299868196582  | 1a3a1a8e03b818ff85fe434ebdcc99d6 |

### Setup

#### Pre Approve Users:

- Go to `Roles > Instagram testers` > [Instagram Users and add your Instagram account](https://developers.facebook.com/apps/218570371257826/roles/roles/).

- Then go to [https://www.instagram.com/accounts/manage_access/](https://www.instagram.com/accounts/manage_access/)  and on tester invite tab click `Authorize`

- Then open link again, and then AGAIN click `authorize` to get the code..

basic login

```curl
https://api.instagram.com/oauth/authorize
  ?client_id={app-id}
  &redirect_uri={redirect-uri}
  &scope=user_profile,user_media,instagram_graph_user_profile,media_count,`instagram_graph_user_media`
  &response_type=code
  &force_authentication=1
```

Example for app **firelife**
```bash
curl -X GET  "https://api.instagram.com/oauth/authorize \
  ?client_id=1024389335345491\
  &redirect_uri=https://localhost:8080/\
  &scope=user_profile,user_media\
  &response_type=code"
  
```

[authurizen instagram](https://api.instagram.com/oauth/authorize?client_id=1024389335345491&redirect_uri=https://localhost:8080/&scope=user_profile,user_media&response_type=code)

> [!note] Note that `#_` has been appended to the end of the redirect URI, but it is not part of the code itself.
> https://socialsizzle.herokuapp.com/auth/?code=AQDp3TtBQQ...#_

> [!Warning]  **1 hour** valid time for Authorization codes short-lived

## Step 5: Exchange the Code for a Token

```bash
curl -X POST \
  https://api.instagram.com/oauth/access_token \
  -F client_id={app-id} \
  -F client_secret={app-secret} \
  -F grant_type=authorization_code \
  -F redirect_uri={redirect-uri} \
  -F code={code}
  ```

for example **firelife**:

```bash
curl -X POST \
  https://api.instagram.com/oauth/access_token \
  -F client_id=1024389335345491 \
  -F client_secret=c9ff946e0b5f17c18fde20773a7f7d27 \
  -F grant_type=authorization_code \
  -F redirect_uri=https://localhost:8080/ \
  -F code=AQD_jM8fKqKg04iHyhwdDfuNBtoXCMN-AhmqYqRL7MAXZ7Gqi2NhPyjONwsSGMWN5iXRts8vvNkbxahhM8Rm2idubCUMcFX4TsZxKlBJ4LiCUT0-pS76kBon85_NIDRXqLw4EGqAQr_fHEMHIhmq1_49691JEjCp24qkDNBXTbmMzKJmvJd4TIVWJdVtluXSqQ2Ia-M5eKqhOkHr9QSTvmkf-Or87VDtj1UVv1f1oT5BQg
  ```

>token:
IGQWRQcWxDSVFDcWZAmcUNZAYWVsRWtUZAkV4TEFvX0Q1cVVSNmZA6d2s5UHFwRkh3WHlmWlpsUHoyNDVuUlBWQWoyMjVUaldpSnlLMUFVVFpSRkZAPZAkdGSy1jVHlXQzV4TXZA0a2UyWUU4N2FUcFVCeWQ3LTQ0MExKMGlTbmhyeTNFVGlYY1kZD

#### Long Lives Tokens:

> pery_3d_journry
> token: IGQWROaEkzdGl3c2hyWW9nWkNQRVRxalZAfc2VleVltbkFIM21ieWVyRzdhZA2hVM1dxZAjhDVnRoR2RuTExNNFVKQlp2MHRCb1RPS3hOVERnaG9BNXFtajZA5VFdNNHA2TFJ0TnhIeWtqelF4QnoybEpKTkNLeG14bE0ZD

## Step 6: Query the User Node

Replace `{user-id}` and `{access-token}` or use  [Me](https://developers.facebook.com/docs/instagram-basic-display-api/reference/me)

```bash
curl -X GET \
  'https://graph.instagram.com/{user-id}?fields=id,username&access_token={access-token}'

curl -X GET \
  'https://graph.instagram.com/me?fields=id,username&access_token=IGQVJ...'

#return
{"id":"24218800531099182","username":"pery_3d_journey"}

```

Get my media  
[Media - Instagram Platform](https://developers.facebook.com/docs/instagram-basic-display-api/reference/media#fields)

```url
https://graph.instagram.com/me/media?fields=permalink,id,caption,media_type,media_url&
access_token={acess_token}
```

other users data

```url
GET https://graph.instagram.com/{api-version}/{user-id}
  ?fields={fields}
  &access_token={access-token}
```

[User - Instagram Platform](https://developers.facebook.com/docs/instagram-basic-display-api/reference/user)


| לייזר טאג | סטנדאף | מסיבות | חופים | לא דייטים | ימי הולדת | טירופים | עשייה | מסעדות | משחקי לוח | יקבים | שקיעות | 
|:---------:|:------:|:------:|:-----:|:---------:|:---------:|:-------:|:-----:|:------:|:---------:|:-----:|:------:|
|     4     |   3    |   16   |   7   |     9     |     4     |   18    |   7   |   2    |     3     |   3   |   ?    |
