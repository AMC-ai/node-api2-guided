## Routing Notes

## Terminology

Separation of Concerns_"who should be doing this?"_

## Routing

- use it to break up an application/api into sub applications 
- picking the code to excute based on URL and HTTP Method
- used for managing sub resources (the comments on a blog post)



ERROR `server.listen is not a function`, check that the server is exported correctly (mind the `s` in `exports`), also check that the import (`require`) for the server is correct. 