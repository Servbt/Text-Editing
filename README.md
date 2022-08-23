# Just another text editor

## service worker fixing

Currently, the database is being created through indexeddb but there's an error when it comes to fulfilling a transaction for the database (object store).
```
Uncaught (in promise) DOMException: Failed to execute 'transaction' on 'IDBDatabase': One of the specified object stores was not found.
```
The editor is also loosing focus whenever a request is being made. 
I also have to get the functionality for the manifest so that the application can be downloaded.
 
 
[here is the heroku deployment](https://immense-reef-22213.herokuapp.com/)
