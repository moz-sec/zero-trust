package envoy.authz

default allow := false

allow if {
  input.attributes.request.http.headers.authorization
}
