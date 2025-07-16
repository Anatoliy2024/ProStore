export const isSafeDomain = (url: string) => {
  try {
    const parsed = new URL(url)
    return [
      "i.imgur.com",
      // "pravatar.cc",
      // "placeimg.com",
      // "www.google.com"
    ].includes(parsed.hostname)
  } catch {
    return false
  }
}
