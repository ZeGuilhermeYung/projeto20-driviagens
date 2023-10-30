export function conflictError (message) {
  return { name: "conflict", message }
}

export function notFound (message) {
  return { name: "notFound", message }
}

export function unprocessableEntity (message) {
  return { name: "unprocessableEntity", message }
}