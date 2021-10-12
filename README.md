# Redis client with TLS authentication

I use this client as a simple tool to test connectivity with Redis that has server and client TLS authentication enabled.

1. Copy client certificate into `tls/client.crt`.
2. Copy client private key into `tls/client.key`.
3. Copy the server's CA certificate into `tls/ca.crt` if self-signed CA.
4. Update `password`, `host` and `port` on `index.js`.
5. Run `npm start`.

Hope this helps!
