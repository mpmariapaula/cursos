/** A área administrativa é acessada por `?area=admin`. */
export function isAdminArea(): boolean {
  return new URLSearchParams(window.location.search).get("area") === "admin"
}
