# Sýnilausn á verkefni 2

[Sjá verkefnalýsingu fyrir verkefni 2](https://github.com/Vefforritun/vef2-2018-v2).

Til að keyra þarf að byrja á að útbúa gagnagrunn fyrir verkefni og setja tengistreng fyrir hann í `.env` undir `DATABASE_URL`. Hægt er að afrita `.env_example` sem grunn.

Eftir að búið er að útbúa grunn þarf að búa til töflu, hægt er að gera það með `node createdb.js`, síðan er hægt að keyra upp vefþjón á porti 3000 með:

```bash
> npm install
> npm run eslint
> npm run stylelint
> npm start
```

## Heroku

Ef búið er að búa til app á Heroku er hægt að setja þessa sýnilausn upp þar með:

```bash
> heroku git:remote -a <nafn á appi> # bæta við remote til að geta pushað á heroku
set git remote heroku to https://git.heroku.com/<nafn á appi>.git

> heroku addons:create heroku-postgresql:hobby-dev # setja upp postgres grunn
Creating heroku-postgresql:hobby-dev on ⬢ <nafn á app>... free

> git push heroku master # ýta verkefni á heroku
...
remote:        https://<nafn á appi>.herokuapp.com/ deployed to Heroku

> heroku run node createdb # býr til töflu með því að keyra það sem er í schema.sql
Running node createdb on ⬢ <nafn á appi>... up, run.2259 (Free)
Schema created
```