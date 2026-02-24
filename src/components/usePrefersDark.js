import { useEffect, useState } from "react"

const getEffectiveDark = () => {
  if (typeof document !== "undefined") {
    const forced = document.documentElement.dataset.theme
    if (forced === "dark") {
      return true
    }
    if (forced === "light") {
      return false
    }
  }

  if (typeof window === "undefined" || !window.matchMedia) {
    return false
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

const usePrefersDark = () => {
  const [prefersDark, setPrefersDark] = useState(getEffectiveDark)

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return undefined
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const update = () => setPrefersDark(getEffectiveDark())

    update()

    let observer
    if (typeof MutationObserver !== "undefined") {
      observer = new MutationObserver(update)
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"],
      })
    }

    if (media.addEventListener) {
      media.addEventListener("change", update)
      return () => {
        media.removeEventListener("change", update)
        if (observer) {
          observer.disconnect()
        }
      }
    }

    media.addListener(update)
    return () => {
      media.removeListener(update)
      if (observer) {
        observer.disconnect()
      }
    }
  }, [])

  return prefersDark
}

export default usePrefersDark
