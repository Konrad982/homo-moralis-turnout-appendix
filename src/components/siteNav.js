import * as React from "react"
import { Link } from "gatsby"
import { MoonIcon, SunIcon } from "@sanity/icons"
import "./layout.css"

const SiteNav = () => {
  const [isHorizontal, setIsHorizontal] = React.useState(
    typeof window === "undefined" ? true : window.innerWidth > window.innerHeight,
  )
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [isAtTop, setIsAtTop] = React.useState(true)
  const [themeOverride, setThemeOverride] = React.useState(() => {
    if (typeof window === "undefined") {
      return null
    }
    const stored = window.localStorage.getItem("theme-override")
    return stored === "light" || stored === "dark" ? stored : null
  })
  const [systemPrefersDark, setSystemPrefersDark] = React.useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return false
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  React.useEffect(() => {
    const handleResize = () => {
      const horizontal = window.innerWidth > window.innerHeight
      setIsHorizontal(horizontal)
      if (horizontal) {
        setMenuOpen(false)
      }
    }

    if (typeof window !== "undefined") {
      handleResize()
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }

    return undefined
  }, [])

  React.useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return undefined
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const update = () => setSystemPrefersDark(media.matches)
    update()

    if (media.addEventListener) {
      media.addEventListener("change", update)
      return () => media.removeEventListener("change", update)
    }

    media.addListener(update)
    return () => media.removeListener(update)
  }, [])

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return undefined
    }

    if (themeOverride) {
      document.documentElement.dataset.theme = themeOverride
      window.localStorage.setItem("theme-override", themeOverride)
    } else {
      document.documentElement.removeAttribute("data-theme")
      window.localStorage.removeItem("theme-override")
    }

    return undefined
  }, [themeOverride])

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return undefined
    }

    const handleScroll = () => {
      const atTop = window.scrollY <= 4
      setIsAtTop(atTop)
      if (!isHorizontal && !atTop) {
        setMenuOpen(false)
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHorizontal])

  const effectiveDark = themeOverride
    ? themeOverride === "dark"
    : systemPrefersDark
  const handleThemeToggle = event => {
    const nextDark = !event.target.checked
    if (nextDark === systemPrefersDark) {
      setThemeOverride(null)
    } else {
      setThemeOverride(nextDark ? "dark" : "light")
    }
  }
  const themeToggle = (
    <div className="theme-toggle" aria-label="Theme toggle">
      <MoonIcon className="theme-toggle__icon" aria-hidden="true" />
      <label className="theme-toggle__switch">
        <input
          type="checkbox"
          checked={!effectiveDark}
          onChange={handleThemeToggle}
          aria-label="Toggle theme"
        />
        <span className="theme-toggle__track" />
        <span className="theme-toggle__thumb" />
      </label>
      <SunIcon className="theme-toggle__icon" aria-hidden="true" />
    </div>
  )

  const navItems = (
    <>
      <li className="nav-item">
        <Link to="/cv/" activeClassName="site-nav-link--active">
          CV
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/research" activeClassName="site-nav-link--active">
          Research
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/turnout-paper/"
          activeClassName="site-nav-link--active"
          partiallyActive={true}
        >
          Turnout Paper Appendix
        </Link>
      </li>
    </>
  )

  const navListHorizontal = (
    <ul className="site-nav-list">
      <li className="nav-item nav-item--brand">
        <Link to="/">Konrad Dierks</Link>
      </li>
      <li className="nav-item nav-item--theme">{themeToggle}</li>
      {navItems}
    </ul>
  )

  const navListVertical = (
    <ul className="site-nav-list site-nav-list--vertical">{navItems}</ul>
  )

  return (
    <div
      className={`site-nav-bar${
        !isHorizontal && !isAtTop ? " site-nav-bar--hidden" : ""
      } ${isHorizontal ? "site-nav-bar--horizontal" : "site-nav-bar--vertical"}`}
    >
      <div className="site-nav-inner">
        <header className="site-header site-header--bar">
          <nav className="site-nav" aria-label="Primary">
            {isHorizontal ? (
              navListHorizontal
            ) : (
              <div className="site-nav-mobile">
                <div className="site-nav-mobile-header">
                  <div className="site-nav-mobile-left">
                    <Link className="site-nav-mobile-brand" to="/">
                      Konrad Dierks
                    </Link>
                    {themeToggle}
                  </div>
                  <button
                    className="site-nav-toggle"
                    type="button"
                    onClick={() => setMenuOpen(open => !open)}
                    aria-expanded={menuOpen}
                  >
                    {menuOpen ? "Close" : "Menu"}
                  </button>
                </div>
                {menuOpen ? navListVertical : null}
              </div>
            )}
          </nav>
        </header>
      </div>
    </div>
  )
}

export default SiteNav
