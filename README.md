# Verkefni 2

Útfæra skal Express vefþjón sem birtir skráningar form og hefur „stjórnsíðu“ þar sem hægt er að skoða allar skráningar.

## Skráningar form

Skráningarform tekur við eftirfarandi gögnum:

* Nafni, verður að vera skráð
* Netfangi, verður að vera skráð og líta út fyrir að vera netfang
* Kennitölu, verður að vera skráð og vera gild kennitala (???)
* Fjölda, verður að vera skráð og verður að vera tala sem er stærri en 0

Ef gögn eru ekki rétt skráð skal birta notanda villuskilaboð ásamt þeim gögnum sem áður voru skráð. Passa þarf upp á að gögn séu hrein, sérstaklega af `XSS` strengjum. Gögn skulu skráð örugglega (með _parameterized input_) í Postgresql grunn.

## Stjórnsíða

Gefin er skrá `users.js` með einum notanda sem skal hafa réttindi til að skrá sig inn. Lykilorð er geymt sem `bcrypt` hash af lykilorðinu `123` og þarf að útfæra þær aðferðir sem til staðar eru. Einnig þarf að setja upp stuðning við `session` á express appi þannig að auðkenning haldist milli beiðna.

## Útfærsla

Notast skal við PostgreSQL grunn og skal skila skemu af töflu í `schema.sql`.

Notast skal við [Pug template](https://pugjs.org/) til að útbúa HTML. Sjá gefinn grunn í `views/`.

Öll dependency skulu skráð í `package.json`.

`npm start` skal keyra upp vefþjón á `localhost` porti `3000`.

Verkefnið skal keyra á Heroku og bjóða upp á innskráningu og vistun í gagnagrunn.

## Útlit

CSS skrá ásamt mynd í haus skal sækja gegnum _static_ middleware í Express úr `/public` möppu.

CSS skal vera snyrtilegt, skalanlegt og nota flexbox. Ekki þarf að fylgja nákvæmlega gefnu útliti en það skal vera frekar líkt. Um útlit gildir:

* todo

## Git og GitHub

Verkefni þetta er sett fyrir á GitHub og almennt ætti að skila því úr einka (private) repo nemanda. Nemendur geta fengið gjaldfrjálsan aðgang að einka repos á meðan námi stendur, sjá https://education.github.com/.

Til að byrja er hægt að afrita þetta repo og bæta við á sínu eigin:

```bash
> git clone https://github.com/vefforritun/vef2-2018-v2.git
> cd vef2-2018-v2
> git remote remove origin # fjarlægja remote sem verkefni er í
> git remote add origin <slóð á repo> # bæta við í þínu repo
> git push
```

## Mat

* 10% – Snyrtilegur, eslint-villulaus JavaScript kóði
* 20% – Útlit útfært með merkingarfræðilegu HTML og snyrtilegu CSS
* 20% – Form tekur við gögnum, staðfestir þau (validate) og hreinsar (sanitize) og vistar í grunni
* 20% – Innskráning virkar fyrir `admin` notanda og stjórnunar route eru læst
* 20% – Stjórnunarsíða birtir færslur úr gagnagrunni og möguleiki til að sækja sem `csv` skrá
* 10% – Verkefni uppsett á Heroku

## Sett fyrir

Verkefni sett fyrir í fyrirlestri fimmtudaginn 1. febrúar 2018.

## Skil

Skila skal undir „Verkefni og hlutaprófa“ á Uglu í seinasta lagi fyrir lok dags fimmtudaginn 15. febrúar 2018.

Skilaboð skulu innihalda slóð á GitHub repo fyrir verkefni, og dæmatímakennurum skal hafa verið boðið í repo ([sjá leiðbeiningar](https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/)). Notendanöfn þeirra eru `ernir` og `elvarhelga`.

## Einkunn

Sett verða fyrir sex minni verkefni þar sem fimm bestu gilda 6% hvert, samtals 30% af lokaeinkunn.

Sett verða fyrir tvö hópa verkefni þar sem hvort um sig gildir 15%, samtals 30% af lokaeinkunn.
